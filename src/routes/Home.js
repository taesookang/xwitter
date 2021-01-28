import { dbService } from 'fbase';
import React, { useState, useEffect }from 'react'
import Xweet from '../components/Xweet'
import XweetFactory from '../components/XweetFactory'

export default function Home({ userObj }) {

    console.log(userObj)
    const [xweets, setXweets] = useState([])

    useEffect(() => {
        dbService.collection('xweets').onSnapshot((snapshot)=>{
            const xweetArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setXweets(xweetArray)
        })
    },[]) 

    return ( 
        <div className='container'> 
            <XweetFactory userObj={userObj}/>
            <div className='xweet-container'>
                {xweets.map((xweet) => (
                    <Xweet userObj={userObj} key={xweet.id} xweetObj={xweet} isOwner={xweet.authorId === userObj.uid}/>
                ))}
            </div>
        </div>
    )
}
