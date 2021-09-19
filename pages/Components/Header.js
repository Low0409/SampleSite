import React from 'react'
import Styles from '../../styles/Home.module.css'
const Header = () => {
    return (
        <>
          <div className="Header">
          <span>
                <div className={Styles.hamburgerMenu}>
                    <input type="checkbox" className={Styles.menuBtnCheck} />
                    <label htmlFor="menuBtnCheck" className={Styles.menuBtn}><span /></label>
                    <div className={Styles.MenuContent}>
                        <ul>
                            <li><a href="#">メニューアイテム１</a></li>
                            <li><a href="#">メニューアイテム２</a></li>
                            <li><a href="#">メニューアイテム３</a></li>
                        </ul>
                    </div>
                </div>
            </span>
            <h1 className="HeaderText">Header</h1>
          </div>
        </>
    )
}

export default Header
