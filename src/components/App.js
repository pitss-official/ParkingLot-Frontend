import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './static/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCardAlt,faUser } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App" style={{height:'100vh',backgroundColor: '#1fc8db',
        backgroundImage: 'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)'}}>
        <div className="text-center p-2">
            <img src={logo} width={'50px'} />
        </div>
        <div className="text-center">
            <h2>MEGA PARKING LOT</h2>
        </div>
        <div className="container">
            <div className="d-flex align-items-center justify-content-center" style={{height:"350px"}}>
                <div className="p-2 bd-highlight">
                    <div className="card p-3">
                        <div className="text-center display-3">
                            <FontAwesomeIcon icon={faIdCardAlt}/>
                        </div>
                        <br/>
                        I am Employee
                    </div>
                </div>
                <div className="p-2 bd-highlight">
                    <div className="card p-3">
                        <div className="text-center display-3">
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <br/>
                        I am Customer
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default App;
