import "./App.css";
import Login from "./components/login";
import UserSection from "./components/Header/user";
import ReceiverSection from "./components/Header/receiver";
import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./components/register";

function App() {
  return (
    <div className="chatifySection">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/chatify"
            element={
              <div className="headerSection">
                <UserSection />
                <ReceiverSection />
              </div>
            }
          />
        </Routes>

        {/* <div className="headerSection">
        <UserSection />
        <ReceiverSection />
      </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
