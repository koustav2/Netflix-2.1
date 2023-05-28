/* eslint-disable no-unused-vars */
import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom';
// import logo from '../../public/pngwing.com.png'

function NavBar() {
    const [show, handleShow] = React.useState(false);
    const navigateTo = useNavigate()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        }
        else {
            handleShow(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [show])


    return (
        <div className={`nav ${ show && 'nav__black'}`}>
            <div className="nav__content">
                <img
                    onClick={() => navigateTo('/')}
                    className='nav__logo'
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" srcSet=""
                />
                <img
                    onClick={() => navigateTo('/profile')}
                    className='nav__avatar'
                    src="https://i.imgur.com/XSzYJIX.png" alt="avatar" srcSet=""
                />
            </div>
        </div>
    )
}

export default NavBar
