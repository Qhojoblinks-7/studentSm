import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import dashboardSlice from './dashboardSlice'
import feesAndPaymentsSlice from './feesAndPaymentsSlice'
import feesPaymentsSlice from './feesPaymentsSlice'
import myCoursesSlice from './myCoursesSlice'
import performanceSlice from './performanceSlice'
import resultsSlice from './resultsSlice'
import scheduleSlice from './scheduleSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    dashboard: dashboardSlice,
    feesAndPayments: feesAndPaymentsSlice,
    feesPayments: feesPaymentsSlice,
    myCourses: myCoursesSlice,
    performance: performanceSlice,
    results: resultsSlice,
    schedule: scheduleSlice,
  },
})