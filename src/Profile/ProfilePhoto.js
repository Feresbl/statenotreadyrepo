import React from 'react';
import photo from './photo.jpg';

function ProfilePhoto() {
  return (
    <div>
      <img src={photo} alt="Profile" />
    </div>
  );
}

export default ProfilePhoto;