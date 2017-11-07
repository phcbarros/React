import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from './../common/tabs/tabReducer';
import BillingCycleReducer from './../billingCycle/billingCycleReducer';

const rootReducers = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer
});

export default rootReducers;