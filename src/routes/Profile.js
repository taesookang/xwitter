import React, { useState, useEffect } from 'react'
import { authService, dbService, storageService } from 'fbase'
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";



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
        if (profilePhoto !== ''){
            
        } 
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

            console.log(userObj.photo)
        }
            
        refreshUser();
        
    }

    const getMyXweets = async () => {
        await dbService
            .collection('xweets')
            .where('authorId', '==', userObj.uid)
            .orderBy('createdAt')
            .get();
         
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

    useEffect(() => {
        getMyXweets();
    })


    return (
      <div className="container">
        <div className="profile-container">

          <form onSubmit={onSubmit} className="profileForm">
            <label htmlFor="attach-photo">
                <div className='profilePhoto-container'>
                    <img src={profilePhoto} />
                    <div className='edit-icon'>
                        <FontAwesomeIcon icon={faPen} color='white'/>       
                    </div>
                </div>
            </label>
            <input
              id="attach-photo"
              type="file"
              accept="image/*"
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
