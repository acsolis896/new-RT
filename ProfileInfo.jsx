import React, { useState } from 'react';
import './style.css';

function ProfileInfo() {
  const [displayName, setDisplayName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  // Integrate Firebase to save this information later

  return (
    <div class="profile-info">
      <h1>Your profile</h1>
      <div class="input-div">
        <p>pencil</p>
        <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={handleDisplayNameChange}
        />
      </div>
      <p>Your display name will be visible to other users.</p>

    <div class="input-div">
        <input
            type="text"
            placeholder="Your birthday"
            value={birthday}
            onChange={handleBirthdayChange}
        />
    </div>
    <p>Your birthday will be used to tailor our content for you. It wont be shared with any third parties. </p>

    <div class="input-div">
        <input
            type="file"
            placeholder="Photo URL"
            value={photoURL}
            onChange={handlePhotoURLChange}
        />
    </div>
    </div>
  );
}

export default ProfileInfo;