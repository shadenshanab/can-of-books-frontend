import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<BestBooks />}
            >
            </Route>
            <Route
              path="./About.js"
              element={<Profile />}>
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
