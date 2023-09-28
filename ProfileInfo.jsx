import React, { useState } from 'react';
import './style.css';

function ProfileInfo() {
  const [displayName, setDisplayName] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null); // store the selected image URL


  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Integrate Firebase to save this information later

  return (
    <div class="profile-info">
      <h1>Customize your profile</h1>
      <p>Personalizing your profile will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.</p>
      <div class="input-div">
            <div className="profile-picture-container" onClick={() => document.getElementById('fileInput').click()}>
            {image && <img src={image} alt="profile" />}
            <i className="fas fa-plus"></i>
            <input 
                type="file" 
                id="fileInput" 
                hidden 
                onChange={handleImageChange}
            />
            </div>

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
        <textarea class="dark-grey-bg" placeholder="Describe yourself here..."></textarea>

    </div>
  );
}

export default ProfileInfo;