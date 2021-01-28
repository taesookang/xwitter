import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { firebaseInstance, authService } from 'fbase'
import AuthForm from "../components/AuthForm"

export default function Auth() {


    const onSocialClick = async (event) => {
        const {target:{name}} = event;
        let provider;

        if(name === 'google'){
            provider = new firebaseInstance.auth.GoogleAuthProvider(); 
        }
        else if(name === 'github'){
            provider = new firebaseInstance.auth.GithubAuthProvider(); 
        }

        await authService.signInWithPopup(provider);
    }

    return (
      <div>
        <div className="authContainer">
          <FontAwesomeIcon
            className='logo'
            icon={faTwitter}
            size="3x"
          />
          <AuthForm/>
          <div className='authBtns'>
            <button className='authBtn' onClick={onSocialClick} name='google'>Continue with Google <FontAwesomeIcon icon={faGoogle} /></button>
            <button className='authBtn' onClick={onSocialClick} name='github'>Continue with Github <FontAwesomeIcon icon={faGithub} /></button>
          </div>
        </div>
      </div>
    );
}
