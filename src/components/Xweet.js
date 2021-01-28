import { dbService, storageService } from 'fbase';
import React, { useState }from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default function Xweet({ userObj, xweetObj, isOwner }) {
    const [editing, setEditing] = useState(false)
    const [newXweet, setNewXweet] = useState(xweetObj.text)

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
            text: newXweet
        })
        setEditing(false)
    }
    return (
      <div className='xweet'>
        { editing ? (
            <>
          <form onSubmit={onSubmit} >
            <input 
                type='text'
                placeholder='New content is...'
                value={newXweet} 
                onChange={onChange}
                required 
            />
            <input type='submit' value='Update Xweet' />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
          </>
        ) : (
          <>
            {isOwner && (
              <div className='xweet-label'>
                <h5>{userObj.displayName}</h5>
                <div className='xweet-icons'>
                  <span onClick={toggleEditing}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </span>
                  <span onClick={onDeleteClick}>
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                </div>
              </div>
            )}
            <h4>{xweetObj.text}</h4>
            {xweetObj.url && (
              <img src={xweetObj.url} alt=''/>
            )}
          </>
        )}
      </div>
    );
}
