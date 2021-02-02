import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navigation({ userObj }) {

    return (
      <nav>
        <ul>
          <li>
            <Link to="/" replace>
                <FontAwesomeIcon className='navIcon' icon={faTwitter} size="2x" />
            </Link>
          </li>
          <li>
            <Link to="/profile" replace>
                { userObj.photo ? 
                <div className='user-photo'>
                      <img src={userObj.photo} alt=''/>
                </div>
                : 
                <FontAwesomeIcon className='navIcon' icon={faUser} size="2x" />
                }
                { userObj.displayName ? (
                  <span><strong>{userObj.displayName}</strong>'s Profile</span>
                ):(
                  <span>Profile</span>
                )}
            </Link>
          </li>
        </ul>
      </nav>
    );
} 
