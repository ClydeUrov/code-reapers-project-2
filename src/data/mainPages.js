import MainUserPage from "../components/MainUserPage";
import Calendar from "../components/Calendar";
import Messages from "../components/Messages";
import AnalisysOfSuccess from "../components/AnalisysOfSuccess";
import AttendanceAnalysis from "../components/AttendanceAnalysis";
import PassTest from "../components/PassTest";
import CreateTest from "../components/CreateTest";
import Distribution from "../components/Distribution";
import StudentTable from "../components/StudentTable";

export const mainPages = {
  main: <MainUserPage />,
  calendar: <Calendar />,
  messages: <Messages />,
  analisysSuccess: <AnalisysOfSuccess />,
  attendanceAnalysis: <AttendanceAnalysis />,
  passTest: <PassTest />,
  createTest: <CreateTest />,
  distribution: <Distribution />,
  studentsTable: <StudentTable />,
};
