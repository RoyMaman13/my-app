import HeaderBar from "./HeaderBar";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderBar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path='/RegisterForm' element={<RegisterForm />} />

        </Routes>
      </BrowserRouter>
    </div >

  );
}

export default App;
