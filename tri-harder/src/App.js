import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Footer from './components/footer';
import RegistrationForm from './pages/registration';
import Course from './pages/course';
import Prize from './pages/prizes';

function App() {
  return (
    <div className="App">
      <div className="page-container">

        <div className="content-wrap">
          <BrowserRouter>
            <Routes>
              <Route
                path='/'
                element={
                  <Landing />
                }
              />
              <Route
                path='/register'
                element={
                  <RegistrationForm />
                }
              />
              <Route
                path='/course'
                element={
                  <Course />
                }
              />
              <Route
                path='/prizes'
                element={
                  <Prize />
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;