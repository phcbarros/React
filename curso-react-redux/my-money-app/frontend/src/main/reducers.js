import { combineReducers } from 'redux';

import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from './../common/tabs/tabReducer';

const rootReducers = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
});

export default rootReducers;