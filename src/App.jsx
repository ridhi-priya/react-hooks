import Usestatehook from "./hooks/Usestatehook.jsx";
import Userefhook from "./hooks/Userefhook.jsx";
import Useeffecthook from "./hooks/Useeffecthook.jsx";
import UserName from "./hooks/customHook/UserName";

export default function App() {
  return (
    <div className="App">
      
      <Usestatehook />
      <Userefhook/>
      <Useeffecthook/>
      <UserName />
    </div>
  );
}
