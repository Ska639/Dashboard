import { NavBar } from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import { useState } from "react";
import Page2 from "./components/Page2";
import Messages from "./components/Messages";
import Documents from "./components/Documents";
import Graphics from "./components/Graphics";
import Transactions from "./components/Transactions";
import Notifications from "./components/Notifications";

function App() {
  const [page, setPage] = useState(1);
  const handleChangePages = (p) => {
    setPage(p);
  };

  return (
    <main className="flex">
      <Sidebar usefulFunction={handleChangePages} />
      <div className="flex flex-col flex-1 relative">
        <NavBar />

        {page === 1 && <HomePage />}
        {page === 2 && <Graphics />}
        {page === 3 && <Documents />}
        {page === 4 && <Messages />}
        {page === 5 && <Transactions />}
        {page === 6 && <Notifications />}
      </div>
    </main>
  );
}

export default App;
