import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { Rick } from './components/Rick/Rick';
import { Footer } from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

export const App = () => {
  const location = useLocation(); const isNotFound = location.pathname !== '/' && location.pathname !== '/rick';

  return (
      <>
      {!isNotFound && <Navbar />}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/rick" element={<Rick />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isNotFound && <Footer />}
    </>
    );
};



