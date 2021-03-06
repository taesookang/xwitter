import React, { useState } from 'react'
import { authService, storageService } from 'fbase'
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faUser } from "@fortawesome/free-solid-svg-icons";



export default function Profile({ refreshUser, userObj }) {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName)
    const [profilePhoto, setProfilePhoto] = useState(userObj.photo)

    const onLogOutClick = () => {
        authService.signOut();
        history.push('/')
    }
    
    const onChange = (event) =>{
        const {target: {value}} = event;
        setNewDisplayName(value)
    }    

    const onSubmit = async (event) => {
        event.preventDefault();
        let profilePhotoURL = "";
        if (userObj.displayName !== newDisplayName){
            await userObj.updateProfile({
                displayName: newDisplayName
            })
        }
        if (userObj.photo !== profilePhoto){
            const fileRef = storageService.ref().child(`${userObj.uid}/profilePhoto/${uuidv4()}`);
            const response = await fileRef.putString(profilePhoto, "data_url");
            profilePhotoURL = await response.ref.getDownloadURL();
            await userObj.updateProfile({
                photoURL: profilePhotoURL
            })

        }
            
        refreshUser();
        
    }


    const onPhotoChange = (event) =>{
        const {target: {files}} = event;
        const theFile = files[0]
        const reader = new FileReader();
        
        if(Boolean(theFile)){
            reader.readAsDataURL(theFile);
        }
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setProfilePhoto(result)
        }
    }


    return (
      <div className="container">
        <div className="profile-container">

          <form onSubmit={onSubmit} className="profileForm">
            <label htmlFor="attach-photo">
                <div className='profilePhoto-container'>
                    { profilePhoto ? (
                        <img className='profile-photo' src={profilePhoto} alt='' />
                    ):(
                        <FontAwesomeIcon className='profile-user' icon={faUser} />
                    )}
                    <div className='edit-icon'>
                        <FontAwesomeIcon icon={faPen} color='white'/>     
                    </div>
                </div>
            </label>
            <input
              id="attach-photo"
              type="file"
              accept="image/*"
              value=''
              onChange={onPhotoChange}
            />
            <input
              onChange={onChange}
              type="text"
              placeholder="Display Name"
              value={newDisplayName}
              className="formInput"
            />
            <input type="submit" value="Update Profile" className="formBtn" />
          </form>
          <button className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
            Log Out
          </button>
        </div>
      </div>
    );
}
