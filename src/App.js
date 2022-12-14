import React from 'react';
// Routing components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Stylesheet
import './App.scss'
import 'normalize.css';

// Components
import Header from './components/Header'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import PageNotFound from './components/PageNotFound'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header Component */}
        <Header />
        {/* Container Component */}
        <div className="container">
          {/* Switch */}
          <Switch>
            {/* Home Component */}
            <Route path="/" exact component={Home} />
            {/* MovieDetail Component */}
            <Route path="/movie/:imdbID" component={MovieDetail} />
            {/* PageNotFound Component */}
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
        {/* Footer Component */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
