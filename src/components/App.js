import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from "../Router.js";

function App() {
  return (
    <div className="App max-height app-background">
        <div className="d-flex align-items-center justify-content-center pt-4">
            <div className="text-white">
                <h2 className="logo-back p-2 pl-3 pr-3 rounded-pill">MEGA PARKING LOT</h2>
            </div>
        </div>
        <React.StrictMode>
            <Router/>
        </React.StrictMode>
    </div>
  );
}

export default App;
