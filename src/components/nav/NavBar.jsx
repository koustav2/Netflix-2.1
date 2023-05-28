import React from 'react'
import './NavBar.css'
// import logo from '../../public/pngwing.com.png'

function NavBar() {
    const [show, handleShow] = React.useState(false);

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
                    className='nav__logo'
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" srcSet=""
                />
                <img
                    className='nav__avatar'
                    src="https://i.imgur.com/XSzYJIX.png" alt="avatar" srcSet=""
                />
            </div>
        </div>
    )
}

export default NavBar
