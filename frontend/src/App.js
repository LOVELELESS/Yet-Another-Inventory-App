import React, {useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import Dashboard from './pages/Dashboard';
import SearchPage from './pages/SearchPage';

function App() {
  useEffect(() => {
    document.title = "RAY' AWESOME INVENTORY";
  }, []);

  return (
    <BrowserRouter>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/admin" component={AdminPage} />
    </BrowserRouter>
  );
}

export default App;
