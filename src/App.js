import React from 'react';
import ProfilePhoto from './Profile/ProfilePhoto';
import FullName from './Profile/FullName';
import Address from './Profile/Address';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="profile-photo">
        <ProfilePhoto />
      </div>
      <div className="full-name">
        <FullName />
      </div>
      <div className="address">
        <Address />
      </div>
    </div>
  );
}

export default App;
