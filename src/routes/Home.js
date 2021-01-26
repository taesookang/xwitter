import { dbService } from 'fbase';
import React, { useState, useEffect }from 'react'
import Xweet from '../components/Xweet'

export default function Home({ userObj }) {
    const [xweet, setXweet] = useState("")
    const [xweets, setXweets] = useState([])
    const [attatchment, setAttatchment] = useState('')

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
        await dbService.collection("xweets").add({
            text: xweet,
            createdAt: Date.now(),
            authorId: userObj.uid
        })
        setXweet('')
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
            setAttatchment(result)
        }
        reader.readAsDataURL(theFile);
    }

    const onClearAttatchment = () => setAttatchment('')
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
                { attatchment &&
                <div>
                    <img src={attatchment} width='100px' height='100px'/>
                    <button onClick={onClearAttatchment }>Clear</button>
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
