import React from 'react';
import { BrowserRouter as Router, Routes,Route, RouteObject } from 'react-router-dom';
import router from './router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {router.routes.map((item: RouteObject) => {
            return (
              <Route path={item.path} key={item.path} element={item.element} />
            )
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
