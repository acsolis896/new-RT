import React, { useState } from 'react';
import './style.css';

function ProfileInfo() {
  const [displayName, setDisplayName] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  function toggleEdit(e) {
    e.target.previousElementSibling.focus();
}


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
    <div class="profile-info page-width-small">
      <div style={{marginTop: '0px'}}>
        <h1>Customize your profile</h1>
        <p>Personalizing your profile will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <div class="input-div" style={{marginTop: '30px', marginBottom: '30px'}}>
        <div className="profile-picture-container" onClick={() => document.getElementById('fileInput').click()}>
            {image ? <img src={image} alt="profile" /> : null}
            <i className="fas fa-plus"></i>
            <input 
                type="file" 
                id="fileInput" 
                hidden 
                onChange={handleImageChange}
            />
        </div>
        
                <div>
                    <div className="input-wrapper">
                        <input
                            class="name-input"
                            type="text"
                            placeholder="Karl.www"
                            value={displayName}
                            onChange={handleDisplayNameChange}
                        />
                        <i class="fas fa-pencil-alt edit-icon" onClick={toggleEdit}></i>
                    </div>
                    <div className="input-wrapper">
                        <span>📍</span>
                        <input
                            type="text"
                            placeholder="Unknown location"
                            value={location}
                            onChange={handleLocationChange}
                        />
                        <i class="fas fa-pencil-alt edit-icon" onClick={toggleEdit}></i>
                    </div>
          </div>


        </div>  
          <textarea 
              class="dark-grey-bg" 
              placeholder="I’m a huge horror movie buff that favors MCU over DC any day. I also love Crime shows and my favorite hero is Spiderman …">
          </textarea>
      </div>

  </div>
  );
}

export default ProfileInfo;