import { dbService } from 'fbase';
import React, { useState }from 'react'

export default function Xweet({ xweetObj, isOwner }) {
    const [editing, setEditing] = useState(false)
    const [newXweet, setNewXweet] = useState(xweetObj.text)
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure to delete this xweet?")
        if (ok) {
            await dbService.doc(`xweets/${xweetObj.id}`).delete();
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
      <div>
        { editing ? (
            <>
          <form onSubmit={onSubmit}>
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
            <h4>{xweetObj.text}</h4>
            {isOwner && (
              <>
                <button onClick={onDeleteClick}>Delete Xweet</button>
                <button onClick={toggleEditing}>Edit Xweet</button>
              </>
            )}
          </>
        )}
      </div>
    );
}
