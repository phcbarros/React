const BillingCycles = require('./billingCycle');

BillingCycles.methods(['get', 'post', 'put', 'delete']);
BillingCycles.updateOptions({ new: true, runValidators: true });

BillingCycles.route('count', (req, res, next) => {
    BillingCycles.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] });
        }
        else {
            res.json({ value });
        }
    });
});

module.exports = BillingCycles;