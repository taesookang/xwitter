import React, { useState } from 'react'
import { dbService, storageService } from 'fbase';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
 

export default function XweetFactory( {userObj} ) {
    const [xweet, setXweet] = useState("")
    const [attachment, setAttachment] = useState('')
    const reader = new FileReader();

    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentURL = "";
        if (attachment !== ""){
            const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            const response = await fileRef.putString(attachment, "data_url");
            attachmentURL = await response.ref.getDownloadURL();
        }
        const xweetObj = {
            text: xweet,
            createdAt: Date.now(),
            authorId: userObj.uid,
            url: attachmentURL
        }
        await dbService.collection("xweets").add(xweetObj);
        setXweet('');
        setAttachment('');
    }
    const onChange = (event) => {
        const {target:{ value }} = event
        setXweet(value)
    }
    
    const onFileChange = (event) => {
        const {target:{files}} = event;
        const theFile = files[0];
    
        reader.onloadend = (finishedEvent) =>{
            const {currentTarget: {result}} = finishedEvent;
            setAttachment(result)
        }
        if(Boolean(theFile)){
            reader.readAsDataURL(theFile);
        }
 
    };

    const onClearAttachment = () => {
        setAttachment("");
    }

    return (

        <form onSubmit={onSubmit} className="factory-form">
            <div className="factoryInput-container">
                <input
                className="factoryInput-input"
                value={xweet}
                onChange={onChange}
                type="text"
                placeholder="What's on your mind?"
                maxLength={120}
                />
                <input
                className="factoryInput-arrow"
                type="submit"
                value="&rarr;"
                />
            </div>

          <label for="attach-file" className="factoryInput-label">
            <span>Add photos</span>
            <FontAwesomeIcon icon={faPlus} />
          </label>

          <input 
            id="attach-file"
            type="file"
            accept="image/*"
            onChange={onFileChange}
            />
            
          {attachment && (
            <div className="factoryForm-attachment">
                <img
                    alt=''
                    src={attachment}
                    style={{
                        backgroundImage: attachment,
                    }}
                />
                <div className="factoryForm-clear" onClick={onClearAttachment}>
                    <span>Remove</span>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
            )}
        </form>
    )
}
