import logo from './logo.svg';
import './App.css';
import { Route, Routes} from "react-router-dom";
import NavBar from './components/navbar';
import Home from './components/home';
import LoginForm from './components/loginForm';
    function App() {
      return (
        <div className="container-fluid">
        <NavBar />
        <div className="container">
            <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
            </div>
        </div>
      </div>
 
      );
     }

export default App;
