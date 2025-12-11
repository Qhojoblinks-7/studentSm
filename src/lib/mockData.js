// Fake data to make EduManage AI shine

export const mockStudents = [
  {
    id: 1,
    name: "Alice Johnson",
    grade: "10th",
    class: "10A",
    attendance: 95,
    performance: "Excellent",
    riskLevel: "low"
  },
  {
    id: 2,
    name: "Bob Smith",
    grade: "9th",
    class: "9B",
    attendance: 78,
    performance: "Average",
    riskLevel: "medium"
  },
  {
    id: 3,
    name: "Charlie Brown",
    grade: "11th",
    class: "11C",
    attendance: 62,
    performance: "Poor",
    riskLevel: "high"
  },
  {
    id: 4,
    name: "Diana Prince",
    grade: "12th",
    class: "12A",
    attendance: 98,
    performance: "Excellent",
    riskLevel: "low"
  }
]

export const mockRevenue = [
  { month: "Jan", amount: 45000 },
  { month: "Feb", amount: 52000 },
  { month: "Mar", amount: 48000 },
  { month: "Apr", amount: 61000 },
  { month: "May", amount: 55000 },
  { month: "Jun", amount: 67000 },
  { month: "Jul", amount: 72000 },
  { month: "Aug", amount: 69000 },
  { month: "Sep", amount: 75000 },
  { month: "Oct", amount: 78000 },
  { month: "Nov", amount: 82000 },
  { month: "Dec", amount: 85000 }
]

export const mockAcademicPerformance = [
  { subject: "Mathematics", average: 85, students: 120 },
  { subject: "English", average: 78, students: 118 },
  { subject: "Science", average: 82, students: 122 },
  { subject: "History", average: 75, students: 115 },
  { subject: "Art", average: 88, students: 110 }
]

export const mockStats = {
  totalStudents: 450,
  totalTeachers: 28,
  totalRevenue: 750000,
  efficiency: 94
}

export const studentCourses = [
  {
    id: 1,
    title: "Mathematics",
    code: "MATH303",
    teacher: "Sir Antwi Boasiako",
    progressPercentage: 70,
    totalLessons: 23,
    completedLessons: 7,
  },
  {
    id: 2,
    title: "Integrated Science",
    code: "SCI201",
    teacher: "Ms. Helena Agyeman",
    progressPercentage: 45,
    totalLessons: 23,
    completedLessons: 10,
  },
  {
    id: 3,
    title: "Religious and Moral Education",
    code: "RME101",
    teacher: "Dr. Kwasi Mensah",
    progressPercentage: 90,
    totalLessons: 20,
    completedLessons: 18,
  },
  {
    id: 4,
    title: "Creative and Performing Arts",
    code: "CPA404",
    teacher: "Ms. Adwoa Osei",
    progressPercentage: 30,
    totalLessons: 15,
    completedLessons: 4,
  },
  {
    id: 5,
    title: "Computing",
    code: "COMP110",
    teacher: "Mr. Ebenezer Nketia",
    progressPercentage: 85,
    totalLessons: 25,
    completedLessons: 21,
  },
  {
    id: 6,
    title: "Social Studies",
    code: "SOC205",
    teacher: "Prof. Yaw Boateng",
    progressPercentage: 62,
    totalLessons: 28,
    completedLessons: 17,
  },
  {
    id: 7,
    title: "Our World Our People",
    code: "OWOP123",
    teacher: "Sir Antwi Boasiako",
    progressPercentage: 55,
    totalLessons: 18,
    completedLessons: 9,
  },
  {
    id: 8,
    title: "English Language",
    code: "ENG101",
    teacher: "Ms Paulina K. Barnes",
    progressPercentage: 78,
    totalLessons: 22,
    completedLessons: 17,
  },
  {
    id: 9,
    title: "Ghanaian Language",
    code: "GHA201",
    teacher: "Mr. Godfred Kusi",
    progressPercentage: 65,
    totalLessons: 20,
    completedLessons: 13,
  },
  {
    id: 10,
    title: "French",
    code: "FRE301",
    teacher: "Ms. Comfort Addo",
    progressPercentage: 40,
    totalLessons: 16,
    completedLessons: 6,
  },
  {
    id: 11,
    title: "Physical Education",
    code: "PED202",
    teacher: "Mr. Samuel Ofori",
    progressPercentage: 88,
    totalLessons: 24,
    completedLessons: 21,
  },
  {
    id: 12,
    title: "Career Technology",
    code: "CTE303",
    teacher: "Mr. Emmanuel Asante",
    progressPercentage: 72,
    totalLessons: 19,
    completedLessons: 13,
  },
  {
    id: 13,
    title: "Home Economics",
    code: "HEC404",
    teacher: "Ms. Grace Mensah",
    progressPercentage: 35,
    totalLessons: 14,
    completedLessons: 4,
  },
  {
    id: 14,
    title: "Visual Arts",
    code: "VAR505",
    teacher: "Mr. Kwame Nkrumah",
    progressPercentage: 50,
    totalLessons: 21,
    completedLessons: 10,
  },
  {
    id: 15,
    title: "Music",
    code: "MUS606",
    teacher: "Ms. Akosua Boateng",
    progressPercentage: 68,
    totalLessons: 18,
    completedLessons: 12,
  },
];

// --- Headmaster Dashboard Data ---

export const headmasterKPIData = [
 {
   id: 1,
   title: "Total Enrollment",
   value: "2,450",
   unit: "Students",
   trend: "+4.2%",
   trendDirection: "up",
   icon: "Users",
 },
 {
   id: 2,
   title: "Academic Success Rate",
   value: "89.5%",
   unit: "AI Predicted Passing",
   trend: "+1.1%",
   trendDirection: "up",
   icon: "CheckCircle",
 },
 {
   id: 3,
   title: "Budget Surplus/Deficit",
   value: "$15,200",
   unit: "Surplus (YTD)",
   trend: "-0.5%",
   trendDirection: "down",
   icon: "DollarSign",
 },
 {
   id: 4,
   title: "Staff Teaching Efficiency",
   value: "92%",
   unit: "Performance Metric",
   trend: "+0.8%",
   trendDirection: "up",
   icon: "Target",
 },
];

export const financialForecastData = [
 { month: 'Jan', Actual: 52000, Predicted: 50000, BudgetLimit: 55000 },
 { month: 'Feb', Actual: 55000, Predicted: 53000, BudgetLimit: 55000 },
 { month: 'Mar', Actual: 56000, Predicted: 55500, BudgetLimit: 58000 },
 { month: 'Apr', Actual: 58000, Predicted: 57000, BudgetLimit: 58000 },
 { month: 'May', Actual: 61000, Predicted: 60500, BudgetLimit: 62000 },
 { month: 'Jun', Actual: 65000, Predicted: 64000, BudgetLimit: 65000 },
 { month: 'Jul', Actual: 68000, Predicted: 67500, BudgetLimit: 68000 },
 { month: 'Aug', Actual: 70000, Predicted: 71000, BudgetLimit: 70000 },
 { month: 'Sep', Actual: 75000, Predicted: 74500, BudgetLimit: 75000 },
 { month: 'Oct', Actual: 72000, Predicted: 73500, BudgetLimit: 75000 },
 { month: 'Nov', Actual: 78000, Predicted: 79000, BudgetLimit: 78000 }, // Budget Overrun here
 { month: 'Dec', Actual: 80000, Predicted: 82000, BudgetLimit: 80000 }, // Budget Overrun here
];

export const academicRiskData = [
   { department: 'Math', AtRisk: 40, Success: 85, Goal: 90 },
   { department: 'Science', AtRisk: 30, Success: 92, Goal: 90 },
   { department: 'Arts', AtRisk: 25, Success: 95, Goal: 90 },
   { department: 'Langs', AtRisk: 50, Success: 80, Goal: 90 },
];


// src/lib/mockData.js (Append the following data if not already present)

export const studentAssignments = [
  {
    id: 1,
    courseTitle: "Mathematics",
    courseCode: "MATH303",
    teacher: "Sir Antwi Boasiako",
    assignmentName: "Algebra Problem Set 1",
    status: "Pending",
    daysLeft: 4,
    grade: null,
    timeOver: false,
    score: 3.7
  },
  {
    id: 2,
    courseTitle: "Religious and Moral Education",
    courseCode: "RME221",
    teacher: "Madam Rejoice Asare",
    assignmentName: "Christianity History Essay",
    status: "Awaiting Grade",
    daysLeft: 8,
    grade: null,
    timeOver: false,
    score: null
  },
  {
    id: 3,
    courseTitle: "Computing",
    courseCode: "ICT404",
    teacher: "Dr. Immanuel",
    assignmentName: "Basic Computer Hardware",
    status: "Closed",
    daysLeft: 0,
    grade: null,
    timeOver: true,
    score: null
  },
  {
    id: 4,
    courseTitle: "Religious and Moral Education",
    courseCode: "RME221",
    teacher: "Madam Rejoice Asare",
    assignmentName: "Religious Tolerance Project",
    status: "Graded",
    daysLeft: 1,
    grade: "A",
    timeOver: false,
    score: null
  },
  {
    id: 5,
    courseTitle: "Computing",
    courseCode: "MATH303",
    teacher: "Dr. Selamond",
    assignmentName: "Web Design Mockup",
    status: "Awaiting Grade",
    daysLeft: 1,
    grade: null,
    timeOver: false,
    score: null
  },
];


// src/lib/mockData.js (Revised/Cleaned Schedule Data for Tabular Layout)

// Define the time slots first, as they form the rows of the table
export const timeSlots = [
  '7:00 AM - 7:30 AM',
  '7:30 AM - 8:30 AM',
  '8:20 AM - 9:10 AM',
  '9:10 AM - 9:40 AM',
  '9:40 AM - 10:20 AM',
  '10:20 AM - 11:10 AM',
  '11:10 AM - 12:00 PM',
  '12:00 PM - 12:50 PM',
  '12:50 PM - 1:40 PM',
  '1:40 PM - 2:30 PM',
  '2:30 PM - 3:30 PM',
];

// Define the full weekly timetable, mapped by time slot and day
export const weeklyTimeTable = {
  '7:00 AM - 7:30 AM': { Monday: 'Assembly / Registration', Tuesday: 'Assembly / Registration', Wednesday: 'Assembly / Registration', Thursday: 'Assembly / Registration', Friday: 'Assembly / Registration' },
  '7:30 AM - 8:30 AM': { Monday: 'English Language', Tuesday: 'Science', Wednesday: 'Mathematics', Thursday: 'Social Studies', Friday: 'Physical Education' },
  '8:20 AM - 9:10 AM': { Monday: 'Mathematics', Tuesday: 'Career Technology', Wednesday: 'English Language', Thursday: 'Computing', Friday: 'Creative Arts' },
  '9:10 AM - 9:40 AM': { Monday: 'Social Studies', Tuesday: 'Ghanaian Language', Wednesday: 'Science', Thursday: 'R.M.E', Friday: 'French / Elective' },
  '9:40 AM - 10:20 AM': { Monday: 'BREAK', Tuesday: 'BREAK', Wednesday: 'BREAK', Thursday: 'BREAK', Friday: 'BREAK' },
  '10:20 AM - 11:10 AM': { Monday: 'English Language', Tuesday: 'Science', Wednesday: 'Mathematics', Thursday: 'Social Studies', Friday: 'Physical Education' },
  '11:10 AM - 12:00 PM': { Monday: 'Science', Tuesday: 'Computing', Wednesday: 'Ghanaian Language', Thursday: 'French / Elective', Friday: 'Career Technology' },
  '12:00 PM - 12:50 PM': { Monday: 'Ghanaian Language', Tuesday: 'English Language', Wednesday: 'Physical Education', Thursday: 'R.M.E', Friday: 'Mathematics' },
  '12:50 PM - 1:40 PM': { Monday: 'Social Studies', Tuesday: 'Ghanaian Language', Wednesday: 'Science', Thursday: 'French / Elective', Friday: 'BREAK' },
  '1:40 PM - 2:30 PM': { Monday: 'English Language', Tuesday: 'Science', Wednesday: 'Mathematics', Thursday: 'Physical Education', Friday: 'Physical Education' },
  '2:30 PM - 3:30 PM': { Monday: 'P.L.C / Remedial', Tuesday: 'P.L.C / Remedial', Wednesday: 'P.L.C / Remedial', Thursday: 'P.L.C / Remedial', Friday: 'P.L.C / Remedial' },
};

// Define the days for column headers
export const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// Additional mock data for Schedule views
export const todayScheduleData = {
  '7:00 AM - 7:30 AM': { 'Friday': 'Assembly / Registration' },
  '7:30 AM - 8:30 AM': { 'Friday': 'Physical Education' },
  '8:20 AM - 9:10 AM': { 'Friday': 'Creative Arts' },
  '9:10 AM - 9:40 AM': { 'Friday': 'French / Elective' },
  '9:40 AM - 10:20 AM': { 'Friday': 'BREAK' },
  '10:20 AM - 11:10 AM': { 'Friday': 'Physical Education' },
  '11:10 AM - 12:00 PM': { 'Friday': 'Career Technology' },
  '12:00 PM - 12:50 PM': { 'Friday': 'Mathematics' },
  '12:50 PM - 1:40 PM': { 'Friday': 'BREAK' },
  '1:40 PM - 2:30 PM': { 'Friday': 'Physical Education' },
  '2:30 PM - 3:30 PM': { 'Friday': 'P.L.C / Remedial' },
};

// Mock data for different schedule views
export const scheduleViewsData = {
  timeTable: weeklyTimeTable,
  schedule: todayScheduleData,
  all: { ...weeklyTimeTable, ...todayScheduleData }
};


// src/lib/mockData.js (Append the following data if not already present)

export const dashboardData = {
  studentName: "Antwi Boasiako",
  homeworkCompletion: 85,
  academicPerformance: 78,
  currentGpa: 3.7,
  gpaTrend: '+0.2 from last semester',
};

export const dashboardPosts = [
  { id: 1, date: 'Dec 25', title: '@Accontant', content: '+5% increment in next academic year\'s fees' },
  { id: 2, date: 'Dec 15', title: '@Headmaster', content: 'The end of term examination starts next three month' },
  { id: 3, date: 'Dec 15', title: '@Event Master', content: 'School to engage in the upcoming local schools games' },
];

export const linkedTeachers = [
  { id: 1, name: 'Mr. Godfred Kusi (Subject Teacher)', subject: 'Science' },
  { id: 2, name: 'Ms Paulina K. Barnes (Class Teacher)', subject: 'English Language' },
  { id: 3, name: 'Mr. Ebenezer Nketia (Subject Teacher)', subject: 'Computing' },
  { id: 4, name: 'Dr. Kwasi Mensah (Subject Teacher)', subject: 'Religious and Moral Education' },
  { id: 5, name: 'Ms. Helena Agyeman (Subject Teacher)', subject: 'Integrated Science' },
  { id: 6, name: 'Prof. Yaw Boateng (Subject Teacher)', subject: 'Social Studies' },
  { id: 7, name: 'Ms. Adwoa Osei (Subject Teacher)', subject: 'Creative and Performing Arts' },
  { id: 8, name: 'Sir Antwi Boasiako (Subject Teacher)', subject: 'Mathematics' },
];

export const attendanceData = {
  thisWeek: [
    { day: 'Today', present: true },
    { day: 'Tuesday', present: true },
    { day: 'Wednesday', present: true },
    { day: 'Thursday', present: true },
    { day: 'Friday', present: false }, // Absent on Friday
  ],
  lastWeek: [
    { day: 'Tuesday', present: true },
    { day: 'Wednesday', present: true },
    { day: 'Thursday', present: true },
  ],
};


// src/lib/mockData.js (Append the following data)

export const feeData = {
  summary: {
    totalPaid: 14500,
    pending: 300,
    totalDue: 14800,
  },
  feesBreakdown: [
    { date: '23-02-2024', academicYear: '2023/2024', term: 1, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Tuition', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 1, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Payment of Books', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 2, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Books', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 2, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Tuition', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 3, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Payment of Books', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 3, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Fees', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 2, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Payment of Fees', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 2, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Fees', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
  ],
  paymentHistory: [
    { title: 'Tuition Fee', status: 'Paid on 2025-09-01', match: '95% match' },
    { title: 'Library Fee', status: 'Paid on 2025-09-01', match: '95% match' },
    { title: 'Transport Fee (Term 1)', status: 'Pending since 2025-11-10', match: '95% match' },
  ],
};

// src/lib/mockData.js (Append the following data)

export const academicResults = {
  academicYear: '2023/2024',
  academicTerm: 2,
  data: [
    { code: 'CSM 252', subject: 'English Language', classScore: 40, examScore: 40, total: 80, grade: 'A', position: '1st', remarks: 'Remarks' },
    { code: 'CSM 256', subject: 'Social Studies', classScore: 35, examScore: 45, total: 80, grade: 'A', position: '2nd', remarks: 'Remarks' },
    { code: 'CSM 213', subject: 'Physical Education', classScore: 45, examScore: 45, total: 90, grade: 'A', position: '3rd', remarks: 'Remarks' },
    { code: 'CSM 252', subject: 'Science', classScore: 30, examScore: 29, total: 59, grade: 'D', position: '4th', remarks: 'Remarks' },
    { code: 'CSM 252', subject: 'Mathematics', classScore: 40, examScore: 38, total: 78, grade: 'B', position: '5th', remarks: 'Remarks' },
    { code: 'CSM 256', subject: 'Ghanaian Language', classScore: 48, examScore: 40, total: 88, grade: 'A', position: '6th', remarks: 'Remarks' },
    { code: 'CSM 213', subject: 'R.M.E', classScore: 40, examScore: 48, total: 88, grade: 'A', position: '7th', remarks: 'Remarks' },
    { code: 'CSM 252', subject: 'French / Elective', classScore: 40, examScore: 49, total: 89, grade: 'A', position: '8th', remarks: 'Remarks' },
    { code: 'CSM 252', subject: 'Career Technology', classScore: 50, examScore: 47, total: 97, grade: 'A', position: '9th', remarks: 'Remarks' },
    { code: 'CSM 256', subject: 'Computing', classScore: 50, examScore: 46, total: 96, grade: 'A', position: '10th', remarks: 'Remarks' },
    { code: 'CSM 213', subject: 'Project', classScore: 50, examScore: 42, total: 92, grade: 'A', position: '11th', remarks: 'Remarks' },
  ],
  attendance: { total: 100, outOf: 100 },
  conduct: 'Excellent',
  talentInterest: 'Computing',
  classTeacherRemarks: 'Consistent effort.',
  headTeacherRemarks: 'A strong academic term.',
};

export const historicalAcademicResults = [
  {
    academicYear: '2023/2024',
    academicTerm: 1,
    data: [
      { code: 'CSM 252', subject: 'English Language', classScore: 38, examScore: 42, total: 80, grade: 'A', position: '2nd', remarks: 'Good progress' },
      { code: 'CSM 256', subject: 'Social Studies', classScore: 40, examScore: 40, total: 80, grade: 'A', position: '1st', remarks: 'Excellent' },
      { code: 'CSM 213', subject: 'Physical Education', classScore: 42, examScore: 43, total: 85, grade: 'A', position: '3rd', remarks: 'Active participation' },
      { code: 'CSM 252', subject: 'Science', classScore: 35, examScore: 35, total: 70, grade: 'B', position: '5th', remarks: 'Needs improvement' },
      { code: 'CSM 252', subject: 'Mathematics', classScore: 45, examScore: 40, total: 85, grade: 'A', position: '4th', remarks: 'Strong performance' },
      { code: 'CSM 256', subject: 'Ghanaian Language', classScore: 46, examScore: 42, total: 88, grade: 'A', position: '6th', remarks: 'Consistent' },
      { code: 'CSM 213', subject: 'R.M.E', classScore: 38, examScore: 47, total: 85, grade: 'A', position: '7th', remarks: 'Spiritual growth' },
      { code: 'CSM 252', subject: 'French / Elective', classScore: 41, examScore: 48, total: 89, grade: 'A', position: '8th', remarks: 'Language skills' },
      { code: 'CSM 252', subject: 'Career Technology', classScore: 48, examScore: 45, total: 93, grade: 'A', position: '9th', remarks: 'Innovative' },
      { code: 'CSM 256', subject: 'Computing', className: 49, examScore: 47, total: 96, grade: 'A', position: '10th', remarks: 'Tech savvy' },
      { code: 'CSM 213', subject: 'Project', classScore: 47, examScore: 43, total: 90, grade: 'A', position: '11th', remarks: 'Creative' },
    ],
    attendance: { total: 95, outOf: 100 },
    conduct: 'Very Good',
    talentInterest: 'Science',
    classTeacherRemarks: 'Showing improvement.',
    headTeacherRemarks: 'Good start to the year.',
  },
  {
    academicYear: '2022/2023',
    academicTerm: 3,
    data: [
      { code: 'CSM 252', subject: 'English Language', classScore: 42, examScore: 38, total: 80, grade: 'A', position: '1st', remarks: 'Excellent writing' },
      { code: 'CSM 256', subject: 'Social Studies', classScore: 37, examScore: 43, total: 80, grade: 'A', position: '2nd', remarks: 'Analytical skills' },
      { code: 'CSM 213', subject: 'Physical Education', classScore: 44, examScore: 46, total: 90, grade: 'A', position: '3rd', remarks: 'Team player' },
      { code: 'CSM 252', subject: 'Science', classScore: 32, examScore: 27, total: 59, grade: 'D', position: '4th', remarks: 'Struggling' },
      { code: 'CSM 252', subject: 'Mathematics', classScore: 39, examScore: 39, total: 78, grade: 'B', position: '5th', remarks: 'Calculations' },
      { code: 'CSM 256', subject: 'Ghanaian Language', classScore: 47, examScore: 41, total: 88, grade: 'A', position: '6th', remarks: 'Cultural knowledge' },
      { code: 'CSM 213', subject: 'R.M.E', classScore: 41, examScore: 47, total: 88, grade: 'A', position: '7th', remarks: 'Moral values' },
      { code: 'CSM 252', subject: 'French / Elective', classScore: 39, examScore: 50, total: 89, grade: 'A', position: '8th', remarks: 'Fluency' },
      { code: 'CSM 252', subject: 'Career Technology', classScore: 49, examScore: 48, total: 97, grade: 'A', position: '9th', remarks: 'Practical skills' },
      { code: 'CSM 256', subject: 'Computing', classScore: 48, examScore: 48, total: 96, grade: 'A', position: '10th', remarks: 'Programming' },
      { code: 'CSM 213', subject: 'Project', classScore: 46, examScore: 46, total: 92, grade: 'A', position: '11th', remarks: 'Research' },
    ],
    attendance: { total: 98, outOf: 100 },
    conduct: 'Outstanding',
    talentInterest: 'Mathematics',
    classTeacherRemarks: 'Excellent term.',
    headTeacherRemarks: 'Top performer.',
  },
];

// src/lib/mockData.js (Append the following data)

export const aiLearningPathMetrics = {
  aiPredictions: 3,
  predictedGPA: 3.7,
  successRate: 92,
  careerPath: 'Engineering',
};

export const studentCoursesProgress = [
    { title: 'Mathematics', code: 'MATH303', teacher: 'Sir Antwi Boasiako', lessonsCompleted: 7, totalLessons: 23 },
    { title: 'Integrated Science', code: 'SCS303', teacher: 'Sir Godffred Kusi', lessonsCompleted: 5, totalLessons: 21 },
    { title: 'Religious and Moral Education', code: 'RME303', teacher: 'Sir Antwi Boasiako', lessonsCompleted: 8, totalLessons: 24 },
    { title: 'Creative and Performing Art', code: 'CPA303', teacher: 'Sir Antwi Boasiako', lessonsCompleted: 9, totalLessons: 23 },
];

// src/lib/mockData.js (Append or ensure this data structure exists)

export const aiRecommendations = {
  personalized: [
    {
      type: 'Study Suggestion',
      confidence: 87,
      content: 'Your performance in Religious and Moral Education is trending down. Consider scheduling study sessions for religious concepts.',
      progress: 87, // Percentage for the progress bar
    },
    {
      type: 'Career Path',
      confidence: 92,
      content: 'Based on your strong performance in Mathematics, Science and Computing, consider exploring Software Engineering roles.',
      progress: 92,
    },
    {
      type: 'Learning Resource',
      confidence: 64,
      content: 'AI suggests additional video tutorials for Database Normalization concepts.',
      progress: 64,
    },
  ],
  recommendedResources: [
    { title: 'Advanced religious and Moral Education', code: 'RME301', type: 'Video', match: 95 },
    { title: 'Tree Algorithms Practice Problems', code: 'CS202', type: 'Exercise', match: 95 },
  ],
};

// Performance page data
export const performanceMetrics = {
    gpa: 3.7, //
    gpaMax: 4.00, //
    gpaChange: +0.2, //
    creditsEarned: 120, //
    creditsTotal: 144, //
    creditsChange: +24, // Assumed increase based on context
    classRank: 12, //
    classSize: 44, //
    rankPercentage: 15, //
    academicAchievement: 78, //
};

// Data for the Class Average chart
export const classAverageData = [
    { test: 'Test 1', classAvg: 163, studentMark: 192 },
    { test: 'Test 2', classAvg: 194, studentMark: 145 },
    { test: 'Test 3', classAvg: 181, studentMark: 124 },
    { test: 'Test 4', classAvg: 200, studentMark: 150 },
    { test: 'Test 5', classAvg: 163, studentMark: 125 },
    { test: 'Test 6', classAvg: 167, studentMark: 72 },
    { test: 'Test 7', classAvg: 131, studentMark: 31 },
];

// Data for the Grade Point Assessment Point Trend chart
export const gpaTrendData = [
    { month: 'January', line1: 35, line2: 25 },
    { month: 'February', line1: 55, line2: 35 },
    { month: 'March', line1: 25, line2: 40 },
    { month: 'April', line1: 40, line2: 25 },
    { month: 'May', line1: 58, line2: 15 },
    { month: 'June', line1: 85, line2: 62 },
    { month: 'July', line1: 25, line2: 45 },
];

// Data for the Skills Assessment chart
export const skillsAssessmentData = [
    { skill: 'Mathematics', value: 30, dot: 'bg-purple-600' },
    { skill: 'English', value: 15, dot: 'bg-orange-500' },
    { skill: 'Science', value: 20, dot: 'bg-red-400' },
    { skill: 'Computing', value: 18, dot: 'bg-cyan-500' },
    { skill: 'Creative and Performing Arts', value: 17, dot: 'bg-blue-600' },
];

// Data for the Top 3 Marks card
export const topMarksData = [
    { subject: 'Mathematics', score: 73, max: 100, color: 'bg-blue-600' },
    { subject: 'Science', score: 70, max: 100, color: 'bg-blue-600' },
    { subject: 'Computing', score: 67, max: 100, color: 'bg-blue-600' },
];

// Data for Linked Teachers
export const linkedTeachersData = [
    { name: 'Mr. Godfred Kusi', role: '(Subject Teacher)', subject: 'Science', avatar: 'GK' },
    { name: 'Ms Paulina K. Barnnes', role: '(Class Teacher)', subject: 'English Language', avatar: 'PB' },
];

// Data for Attendance
export const performanceAttendanceData = {
    'This Week / Week 2': [
        { day: 'Today', status: 'present' },
        { day: 'Tuesday', status: 'present' },
        { day: 'Wednesday', status: 'present' },
        { day: 'Thursday', status: 'present' },
        { day: 'Friday', status: 'absent' }, // Marked with red circle in visual
    ],
    'Last Week / Week 1': [
        { day: 'Tuesday', status: 'present' },
        { day: 'Wednesday', status: 'present' },
        { day: 'Thursday', status: 'present' },
    ],
};

// Transportation mock data
export const transportationKPIData = [
    {
        title: "Bus Number",
        value: "T-045",
        subtext: "Assigned Vehicle",
        icon: "Bus",
    },
    {
        title: "Pickup Time",
        value: "7:15 AM",
        subtext: "Scheduled Daily",
        icon: "Clock",
    },
    {
        title: "On-Time Rate",
        value: "94%",
        subtext: "This Month",
        trend: "+2%",
        trendDirection: "up",
        icon: "TrendingUp",
    },
    {
        title: "Safety Score",
        value: "9.2/10",
        subtext: "Driver Rating",
        icon: "Shield",
    },
];

export const transportationWeeklyPickup = [
    { day: 'Mon', status: 'on-time', time: '7:15 AM' },
    { day: 'Tue', status: 'on-time', time: '7:12 AM' },
    { day: 'Wed', status: 'delayed', time: '7:25 AM' },
    { day: 'Thu', status: 'on-time', time: '7:18 AM' },
    { day: 'Fri', status: 'on-time', time: '7:14 AM' },
];

export const transportationRouteEfficiency = [
    { month: "Jan", travelTime: 25, fuelEfficiency: 85 },
    { month: "Feb", travelTime: 24, fuelEfficiency: 87 },
    { month: "Mar", travelTime: 26, fuelEfficiency: 83 },
    { month: "Apr", travelTime: 23, fuelEfficiency: 89 },
    { month: "May", travelTime: 22, fuelEfficiency: 91 },
    { month: "Jun", travelTime: 24, fuelEfficiency: 88 },
];

export const transportationBusUtilization = [
    { category: "Occupied", value: 85, fill: "var(--chart-1)" },
    { category: "Available", value: 15, fill: "var(--chart-2)" },
];

export const transportationDriverInfo = {
    name: "Mr. Kofi Asante",
    experience: "8 years",
    rating: 9.2,
    contact: "+233 24 123 4567",
};

export const transportationRouteDetails = {
    routeName: "Route A - East District",
    stops: ["Home Pickup", "School Junction", "Main Gate", "Classroom Drop-off"],
    distance: "12.5 km",
    estimatedTime: "25 minutes",
};

export const transportationSafetyMetrics = [
    { metric: "Seatbelt Compliance", value: 98 },
    { metric: "Speed Adherence", value: 95 },
    { metric: "Emergency Response", value: 100 },
];