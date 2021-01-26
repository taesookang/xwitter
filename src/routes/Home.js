import { dbService, storageService } from 'fbase';
import React, { useState, useEffect }from 'react'
import Xweet from '../components/Xweet'
import { v4 as uuidv4 } from 'uuid';

export default function Home({ userObj }) {
    const [xweet, setXweet] = useState("")
    const [xweets, setXweets] = useState([])
    const [attachment, setAttachment] = useState('')

    useEffect(() => {
        dbService.collection('xweets').onSnapshot((snapshot)=>{
            const xweetArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setXweets(xweetArray)
        })
    }, []) 

    
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
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) =>{
            const {currentTarget: {result}} = finishedEvent;
            setAttachment(result)
        }
        reader.readAsDataURL(theFile);
    }

    const onClearAttachment = () => setAttachment('')
    return ( 
        <div> 
            <form onSubmit={onSubmit}>
                <input 
                    value={xweet}  
                    onChange={onChange}
                    type='text' 
                    placeholder="What's on your mind?" 
                    maxLength={120}
                />
                <input type='file' onChange={onFileChange} accept='image/*' />
                { attachment &&
                <div>
                    <img src={attachment} alt='' width='100px' height='100px'/>
                    <button onClick={onClearAttachment }>Clear</button>
                </div> 
                }
                <input type='submit' value='Xweet'/>
            </form>

            <div>
                {xweets.map((xweet) => (
                    <Xweet key={xweet.id} xweetObj={xweet} isOwner={xweet.authorId === userObj.uid}/>
                ))}
            </div>
        </div>
    )
}
