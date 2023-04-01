import ActionsType from '../ActionsType';

const initialState = {
  tExamID: '',
  tAttendanceID: '',
  dashStat: {},
  userExamItem: {},
  teacherExams: {},
  userAttendanceItem: {},
  notificationDetail: {},
  teacherExamDetails: {},
  teacherAttSchedule: {},
  teacherAttendanceRes: {},
  teacherAttendanceDetails: {},
  testList: [],
  attTeachers: [],
  presentList: [],
  studentsList: [],
  examStudentsData: [],
  testDetailsList: [],
  notificationsList: [],
  monthlyTimetableList: [],
  weeklyTimetableList: [],
  lectureAttendanceList: [],
  vouchersList: [],
};

const tabsReducer = (state = initialState, action) => {
  var newState = {};
  switch (action.type) {
    case ActionsType.SET_HOME_DASH_STAT:
      newState = {
        ...state,
        dashStat: action.payload,
      };
      return newState;
    case ActionsType.SET_NOTIFICATIONS_LIST:
      newState = {
        ...state,
        notificationsList: action.payload,
      };
      return newState;
    case ActionsType.SET_NOTIFICATION_DETAIL:
      newState = {
        ...state,
        notificationDetail: action.payload,
      };
      return newState;
    case ActionsType.SET_MONTHLY_TIMETABLE_LIST:
      newState = {
        ...state,
        monthlyTimetableList: action.payload,
      };
      return newState;
    case ActionsType.SET_WEEKLY_TIMETABLE_LIST:
      newState = {
        ...state,
        weeklyTimetableList: action.payload,
      };
      return newState;
    case ActionsType.SET_TEST_LIST:
      newState = {
        ...state,
        testList: action.payload,
      };
      return newState;
    case ActionsType.SET_TEST_DETAILS_LIST:
      newState = {
        ...state,
        testDetailsList: action.payload,
      };
      return newState;
    case ActionsType.SET_USER_EXAM_ITEM:
      newState = {
        ...state,
        userExamItem: action.payload,
      };
      return newState;
    case ActionsType.SET_TEACHER_EXAM_ID:
      newState = {
        ...state,
        tExamID: action.payload,
      };
      return newState;
    case ActionsType.SET_TEACHER_EXAMS:
      newState = {
        ...state,
        teacherExams: action.payload,
      };
      return newState;
    case ActionsType.SET_USER_ATTENDANCE_ITEM:
      newState = {
        ...state,
        userAttendanceItem: action.payload,
      };
      return newState;
    case ActionsType.SET_EXAMS_STUDENTS_DATA:
      newState = {
        ...state,
        examStudentsData: action.payload,
      };
      return newState;
    case ActionsType.SET_TEACHER_EXAM_DETAILS:
      newState = {
        ...state,
        teacherExamDetails: action.payload,
      };
      return newState;
    case ActionsType.SET_ATTENDANCE_LIST:
      newState = {
        ...state,
        presentList: action.payload,
      };
      return newState;
    case ActionsType.SET_ATTENDANCE_DETAILS_LIST:
      newState = {
        ...state,
        lectureAttendanceList: action.payload,
      };
      return newState;
    case ActionsType.SET_TEACHER_ATTENDANCE_RES:
      newState = {
        ...state,
        teacherAttendanceRes: action.payload,
      };
      return newState;
    case ActionsType.SET_ATTENDANCE_SCHEDULED:
      newState = {
        ...state,
        teacherAttSchedule: action.payload,
      };
      return newState;
    case ActionsType.SET_ATTENDANCE_TEACHERS:
      newState = {
        ...state,
        attTeachers: action.payload,
      };
      return newState;
    case ActionsType.SET_TEACHER_ATTENDANCE_DETAILS:
      newState = {
        ...state,
        teacherAttendanceDetails: action.payload,
      };
      return newState;
    case ActionsType.SET_TEACHER_ATTENDANCE_ID:
      newState = {
        ...state,
        tAttendanceID: action.payload,
      };
      return newState;
    case ActionsType.SET_STUDENTS_LIST:
      newState = {
        ...state,
        studentsList: action.payload,
      };
      return newState;
    case ActionsType.SET_VOUCHERS_LIST:
      newState = {
        ...state,
        vouchersList: action.payload,
      };
      return newState;
    default:
      return state;
  }
};

export default tabsReducer;
