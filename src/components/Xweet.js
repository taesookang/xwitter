import { dbService, storageService } from 'fbase';
import React, { useState }from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import Moment from 'react-moment';

export default function Xweet({ userObj, xweetObj, isOwner }) {
    const [editing, setEditing] = useState(false)
    const [newXweet, setNewXweet] = useState(xweetObj.text)
    const [newURL, setNewURL] = useState(xweetObj.url)

    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure to delete this xweet?")
        if (ok) {
            await dbService.doc(`xweets/${xweetObj.id}`).delete();
            if(xweetObj.url){
              await storageService.refFromURL(xweetObj.url).delete()
            }
        }
    }
    const toggleEditing = () => setEditing((prev) => !prev);

    const onChange = (event) => {
        const { target: {value} } = event;
        setNewXweet(value)
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`xweets/${xweetObj.id}`).update({
            text: newXweet,
            url: newURL
        })
        setEditing(false)
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
          setNewURL(result)
      }
  }
  
    return (
      <div className="xweet">
        {isOwner && (
          <div className="xweet-label">
            <div className="user-info">
              <img id="profile-photo" src={userObj.photo} alt="" />
              <span>{userObj.displayName}</span>
              <h5>@{userObj.uid}</h5>
            </div>
            <div className="xweet-icons">
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </div>
          </div>
        )}
        {editing ? (
          <>
            <form onSubmit={onSubmit}>
              <div className='xweet-edit'>
                <textarea
                  type="text"
                  placeholder="New content is..."
                  value={newXweet}
                  onChange={onChange}
                  required
                />
              {xweetObj.url && (
                <>
                  <label htmlFor="input-photo-edit">
                    <img className="xweet-photo photo-edit" src={newURL} alt="" />
                    <FontAwesomeIcon className='edit-icon' icon={faEdit} size='2x' />
                  </label>
                  <input
                    id="input-photo-edit"
                    type="file"
                    accept="image/*"
                    onChange={onPhotoChange}
                  />
                </>
              )}
              </div>
              
              <div className="xweet-footer">
                <input type="submit" value="Update Xweet" />
                <button onClick={toggleEditing}>Cancel</button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h4>{xweetObj.text}</h4>
            {xweetObj.url && (
              <img className="xweet-photo" src={xweetObj.url} alt="" />
            )}
            <div className="xweet-footer">
              <Moment date={xweetObj.createdAt} format="MMM DD YYYY, hh:mm A" />
              <span>{moment(xweetObj.createdAt).fromNow()}</span>
            </div>
          </>
        )}
      </div>
    );
}
