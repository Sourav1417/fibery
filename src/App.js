import './App.css';
import {Routes,Route, useLocation} from "react-router-dom";
import LandingPage from './components/LandingPage';

function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/*' element = {<LandingPage />} />
    </Routes>
  );
}

export default App;
