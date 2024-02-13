import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';
import PublicRoute from './components/PublicRoute';
import './App.css';
import Checkout from './pages/checkout';
import Search from './pages/search';
import AllEvents from './pages/all';
import Create from './pages/create';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Organizers from './pages/organizers';
import Terms from './pages/terms';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route index path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/events" element={<AllEvents />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/create-event" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/organizers" element={<Organizers />} />
            <Route path="/terms" element={<Terms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
