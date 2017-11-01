const billingCycles = require('./billingCycle');

billingCycles.methods(['get', 'post', 'put', 'delete']);
billingCycles.updateOptions({ new: true, runValidators: true });

module.exports = billingCycles;