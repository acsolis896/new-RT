import React, { useState } from 'react';
import './style.css';

function ProfileInfo() {
  const [displayName, setDisplayName] = useState('');
  const [location, setLocation] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  // Integrate Firebase to save this information later

  return (
    <div class="profile-info">
      <h1>Customize your profile</h1>
      <p>Personalizing your profile will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.</p>
      <div class="input-div">
          <input
            type="file"
            placeholder="K"
            value={photoURL}
            onChange={handlePhotoURLChange}
          />

            <div>
                <input
                    type="text"
                    placeholder="Display Name"
                    value={displayName}
                    onChange={handleDisplayNameChange}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={handleLocationChange}
                />
            </div>
       
      </div>
        <textarea placeholder="Describe yourself here..."></textarea>

    </div>
  );
}

export default ProfileInfo;