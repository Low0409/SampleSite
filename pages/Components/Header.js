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
            <li className={Styles.ali}><Link href="about"><a href="#about">ABOUT</a></Link></li>
            <li className={Styles.ali}><Link href="service"><a href="#service">SERVICE</a></Link></li>
            <li className={Styles.ali}><Link href="company"><a href="#company">COMPANY</a></Link></li>
            <li className={Styles.ali}><Link href="contact"><a href="#contact">CONTACT</a></Link></li>
        </ul>
    </nav>
</header>
        </>
    )
}

export default Header
