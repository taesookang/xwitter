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
                <FontAwesomeIcon className='navIcon' icon={faUser} size="2x" />
                <h5>{userObj.displayName}'s Profile</h5>
            </Link>
          </li>
        </ul>
      </nav>
    );
} 
