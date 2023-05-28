/* eslint-disable no-unused-vars */
import React from 'react'
import './Profile.css'
import NavBar from '../nav/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../app/features/userSlice'
import { firebaseAuth } from '../../firebase'

function Profile() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    return (
        <div className="profile">
            <NavBar />
            <div className="profile__body">
                <h1>Edit Profile</h1>
                <div className="profile__info">
                    <img src="https://i.imgur.com/XSzYJIX.png" alt="avatar" srcSet="" />
                    <div className="profile__details">
                        <h2>{user.email}</h2>
                        <div className="profile__plans">
                            <button
                                onClick={() => firebaseAuth.signOut()}
                                className='profile__signout'
                            >
                                SignOut
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile
