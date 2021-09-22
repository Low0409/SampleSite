import React from 'react'
import Styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <>
<header className={Styles.header}>
    <h1 className={Styles.title} >
        <a href="/" className={Styles.Title}>Sample</a>
    </h1>
    <nav className={Styles.pcnav}>
        <ul className={Styles.ula}>
            <li ><Link href="about"><a href="#about" className={Styles.ali}>ABOUT</a></Link></li>
            <li ><Link href="service"><a href="#service" className={Styles.ali}>SERVICE</a></Link></li>
            <li ><Link href="company"><a href="#company" className={Styles.ali}>COMPANY</a></Link></li>
            <li ><Link href="contact"><a href="#contact" className={Styles.ali}>CONTACT</a></Link></li>
        </ul>
    </nav>
</header>
        </>
    )
}

export default Header
