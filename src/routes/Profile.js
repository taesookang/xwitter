import React from 'react'
import { authService } from 'fbase'
import { useHistory } from 'react-router-dom';

export default function Profile() {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push('/')
    }
    
    return (
        <>
            <button onClick={onLogOutClick}> Log Out </button>
        </>
    )
}
