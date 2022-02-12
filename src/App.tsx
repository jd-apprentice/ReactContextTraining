import { BrowserRouter, Route, Routes } from "react-router-dom";
import StaticContext from "./context/StaticContext";
import { UserContextProvider } from "./context/UserContext";
import Home from "./views/home";
import UserView from "./views/users";

const App = () => {
  return (
    <BrowserRouter>
      <StaticContext.Provider value={{}}>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<UserView />} />
          </Routes>
        </UserContextProvider>
      </StaticContext.Provider>
    </BrowserRouter>
  );
}

export default App;