import HeaderBar from "./HeaderBar";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ChatTry from "./ChatTry";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderBar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path='/RegisterForm' element={<RegisterForm />} />
          <Route path="/ChatTry" element={<ChatTry />} />

        </Routes>
      </BrowserRouter>
    </div >

  );
}

export default App;
