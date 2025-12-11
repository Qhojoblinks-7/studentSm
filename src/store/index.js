import { configureStore } from '@reduxjs/toolkit'
// Let's bring in our reducers here
import authReducer from './authSlice'
import dashboardReducer from './dashboardSlice'
import feesPaymentsReducer from './feesPaymentsSlice'
import feesAndPaymentsReducer from './feesAndPaymentsSlice'
import myCoursesReducer from './myCoursesSlice'
import performanceReducer from './performanceSlice'
import resultsReducer from './resultsSlice'
import scheduleReducer from './scheduleSlice'
// Feel free to add more reducers as needed

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    feesPayments: feesPaymentsReducer,
    feesAndPayments: feesAndPaymentsReducer,
    myCourses: myCoursesReducer,
    performance: performanceReducer,
    results: resultsReducer,
    schedule: scheduleReducer,
    // Add other reducers here when ready
  },
})
