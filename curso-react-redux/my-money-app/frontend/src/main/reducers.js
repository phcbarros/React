import { combineReducers } from 'redux';

import DashboardReducer from '../dashboard/dashboardReducer';

const rootReducers = combineReducers({
    dashboard: DashboardReducer
});

export default rootReducers;