import "./App.css";
// import { Login } from "./Componants/Login";
import { Navbar } from "./Componants/Navbar";

import { Chat } from "./Componants/Chat";
// import { TusharChat } from "./Componants/TusharChat";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="sau1">CHAT APP</h1>
      <Chat />
      {/* <TusharChat/> */}
    </div>
  );
}

export default App;
