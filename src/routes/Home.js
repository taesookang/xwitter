import { dbService } from 'fbase';
import React, { useState, useEffect }from 'react'
import Xweet from '../components/Xweet'
import XweetFactory from '../components/XweetFactory'

export default function Home({ userObj }) {

    const [xweets, setXweets] = useState([])

    const getMyXweets = async () => {
        await dbService
            .collection('xweets')
            .where('authorId', '==', userObj.uid)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshot)=>{
                const xweetArray = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setXweets(xweetArray)
            });
    }

    useEffect(() => {
        getMyXweets()
    },[]) 

    return ( 
        <div className='container'> 
            <XweetFactory userObj={userObj}/>
            <div className='xweet-container'>
                {xweets.map((xweet) => (
                        <Xweet userObj={userObj} key={xweet.id} xweetObj={xweet} isOwner={xweet.authorId === userObj.uid}/>
                        ))
                }
            </div>
        </div>
    )
}
