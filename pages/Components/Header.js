import React from 'react'
import Styles from '../../styles/Home.module.css'
const Header = () => {
    return (
        <>
<header className={Styles.header}>
    <h1 className={Styles.title} >
        <a href="/">Sample</a>
    </h1>
    <nav className={Styles.pcnav}>
        <ul className={Styles.ula}>
            <li className={Styles.ali}><a href="#about">ABOUT</a></li>
            <li className={Styles.ali}><a href="#">SERVICE</a></li>
            <li className={Styles.ali}><a href="#">COMPANY</a></li>
            <li className={Styles.ali}><a href="#">CONTACT</a></li>
        </ul>
    </nav>
</header>
        </>
    )
}

export default Header
