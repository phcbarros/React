const BillingCycles = require('./billingCycle');
const errorHandler = require('../common/errorHandler');

BillingCycles.methods(['get', 'post', 'put', 'delete']);
BillingCycles.updateOptions({ new: true, runValidators: true });

//midleware para tratamento de error
BillingCycles
    .after('post', errorHandler)
    .after('put', errorHandler);

BillingCycles.route('count', (req, res, next) => {
    BillingCycles.count((error, value) => {
        createResponseMessage(res, error, { value });
    });
});

BillingCycles.route('summary', (req, res, next) => {
    //faz uma projeção e soma os créditos e debitos lançados de cada ciclo
    const sumCreditsAndDebts = {
        $project: { credit: { $sum: '$credits.value' }, debt: { $sum: '$debts.value' } }
    };

    //soma todos os créditos e débitos de cada ciclo
    const groupsAndSumsAllCredtsAndDebts = {
        $group: { _id: null, credit: { $sum: '$credit' }, debt: { $sum: '$debt' } }
    };

    //projeta com resultado os dados de credit e debt
    const projectCreditAndDebt = { $project: { _id: 0, credit: 1, debt: 1 } };

    //pipeline
    const summaryPipeline = [sumCreditsAndDebts, groupsAndSumsAllCredtsAndDebts, projectCreditAndDebt];

    BillingCycles.aggregate(summaryPipeline, (error, result) => {
        const data = result[0] || { credit: 0, debt: 0 };
        createResponseMessage(res, error, data);
    });
});

module.exports = BillingCycles;

const createErrorMessage = (res, error) => res.status(500).json({ errors: [error] });
const createSuccessMessage = (res, value) => res.json(value);

const createResponseMessage = (res, error, value) => {
    if (error)
        createErrorMessage(res, error);
    else
        createSuccessMessage(res, value);
};