import AppHeader from "./components/AppHeader";
import AttendanceTracker from "./components/AttendanceTracker";
import CopyrightNotice from "./components/CopyrightNotice";

function App(): JSX.Element {
  return (
    <>
      <AppHeader title={"My App Title Here"} />
      <AttendanceTracker />
      <CopyrightNotice
        author={"Jimminy Cricket"}
        year={new Date().getFullYear()}
      />
    </>
  );
}

export default App;
