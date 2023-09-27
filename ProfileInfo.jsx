import React, { useState } from 'react';

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
    <div>
      <h2>Display Name, Location & Photo</h2>
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
      <input
        type="text"
        placeholder="Photo URL"
        value={photoURL}
        onChange={handlePhotoURLChange}
      />
    </div>
  );
}

export default ProfileInfo;