import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from './../dashboard/dashboardReducer'
import TabReducer from './../common/tabs/tabReducer'
import BillingCycleReducer from './../billingCycle/billingCycleReducer'
import AuthReducer from '../auth/authReducer'

const rootReducers = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth: AuthReducer,
})

export default rootReducers
