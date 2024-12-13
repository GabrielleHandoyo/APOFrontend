import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./section/mainpage/Mainpage";
import ContactInfo from "./section/contactinfo/ContactInfo";
import DefaultLayout from './layout/DefaultLayout'; // Generic Layout

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<MainPage />} />

        <Route path="/" element={<DefaultLayout />}>
          <Route path="contact-info" element={<ContactInfo />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;