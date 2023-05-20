import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './data/index';

// context
import AppContext from './context/index';

// views 
import Home from './pages/Home';

// components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const { menuOpen, toggleMenu } = useContext(AppContext);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Header
          navigation={data.navigation}
          menuOpen={menuOpen}
          onToggle={toggleMenu}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
