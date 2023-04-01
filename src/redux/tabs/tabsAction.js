import ActionsType from '../ActionsType';

//Home
export const setHomeDashStat = data => dispatch => {
  dispatch({
    type: ActionsType.SET_HOME_DASH_STAT,
    payload: data,
  });
};

//Notifications
export const setNotificationsList = data => dispatch => {
  dispatch({
    type: ActionsType.SET_NOTIFICATIONS_LIST,
    payload: data,
  });
};

export const setNDetail = data => dispatch => {
  dispatch({
    type: ActionsType.SET_NOTIFICATION_DETAIL,
    payload: data,
  });
};

//Tests
export const setTestList = data => dispatch => {
  dispatch({
    type: ActionsType.SET_TEST_LIST,
    payload: data,
  });
};

export const setTestDetailsList = data => dispatch => {
  dispatch({
    type: ActionsType.SET_TEST_DETAILS_LIST,
    payload: data,
  });
};

export const setUserExamItem = data => dispatch => {
  dispatch({
    type: ActionsType.SET_USER_EXAM_ITEM,
    payload: data,
  });
};

export const setTeacherExams = data => dispatch => {
  dispatch({
    type: ActionsType.SET_TEACHER_EXAMS,
    payload: data,
  });
};

export const setExamsStudentsData = data => dispatch => {
  dispatch({
    type: ActionsType.SET_EXAMS_STUDENTS_DATA,
    payload: data,
  });
};

export const setTeacherExamID = data => dispatch => {
  dispatch({
    type: ActionsType.SET_TEACHER_EXAM_ID,
    payload: data,
  });
};

export const setTeacherExamDetails = data => dispatch => {
  dispatch({
    type: ActionsType.SET_TEACHER_EXAM_DETAILS,
    payload: data,
  });
};

//Attendance
export const setAttendanceList = data => dispatch => {
  dispatch({
    type: ActionsType.SET_ATTENDANCE_LIST,
    payload: data,
  });
};

export const setUserAttendanceItem = data => dispatch => {
  dispatch({
    type: ActionsType.SET_USER_ATTENDANCE_ITEM,
    payload: data,
  });
};

export const setAttendanceDetailsList = data => dispatch => {
  dispatch({
    type: ActionsType.SET_ATTENDANCE_DETAILS_LIST,
    payload: data,
  });
};

export const setTeacherAttendanceRes = data => dispatch => {
  dispatch({
    type: ActionsType.SET_TEACHER_ATTENDANCE_RES,
    payload: data,
  });
};

export const setTeacherAttendanceSchedule = data => dispatch => {
  dispatch({
    type: ActionsType.SET_ATTENDANCE_SCHEDULED,
    payload: data,
  });
};

export const setAttendanceTeachers = data => dispatch => {
  dispatch({
    type: ActionsType.SET_ATTENDANCE_TEACHERS,
    payload: data,
  });
};

export const setTeacherAttendanceDetails = data => dispatch => {
  dispatch({
    type: ActionsType.SET_TEACHER_ATTENDANCE_DETAILS,
    payload: data,
  });
};

export const setTeacherAttendanceID = data => dispatch => {
  dispatch({
    type: ActionsType.SET_TEACHER_ATTENDANCE_ID,
    payload: data,
  });
};

export const setStudentsList = data => dispatch => {
  dispatch({
    type: ActionsType.SET_STUDENTS_LIST,
    payload: data,
  });
};

//Timetable
export const setWeeklyTimetableList = data => dispatch => {
  dispatch({
    type: ActionsType.SET_WEEKLY_TIMETABLE_LIST,
    payload: data,
  });
};

export const setMonthlyTimetableList = data => dispatch => {
  dispatch({
    type: ActionsType.SET_MONTHLY_TIMETABLE_LIST,
    payload: data,
  });
};

export const setVouchersList = data => dispatch => {
  dispatch({
    type: ActionsType.SET_VOUCHERS_LIST,
    payload: data,
  });
};
