import { combineReducers } from 'redux';

import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from './../common/tabs/tabReducer';
import BillingCycleReducer from './../billingCycle/billingCycleReducer';

const rootReducers = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
});

export default rootReducers;