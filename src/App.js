import UserSection from "./components/Header/user";
import ReceiverSection from "./components/Header/receiver";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./AuthComponents/login";
import Register from "./AuthComponents/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/" element={<Login />} />
          <Route
            path="/chatify"
            element={
              <div className="headerSection">
                <UserSection />
                <ReceiverSection />
              </div>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
