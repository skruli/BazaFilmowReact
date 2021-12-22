import logo from './logo.svg';
import './App.css';
import { Route, Routes} from "react-router-dom";
import NavBar from './components/navbar';
import Home from './components/home';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';
import Details from './components/movieDetails';
import MovieAdd from './components/movieAdd';
    function App() {
      return (
        <div className="container-fluid">
        <NavBar />
        <div className="container">
            <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/details" element={<Details />} />
                <Route path="/add" element={<MovieAdd />} />
                <Route path="/signup" element={<SignupForm />} />
            </Routes>
            </div>
        </div>
      </div>
 
      );
     }

export default App;
