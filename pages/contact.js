import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
const contact = () => {
    return (
        <>
            <div style={{ backgroundColor: ` rgb(201, 189, 151)` }}>

                <Header />
                <div className="about" style={{ marginTop: ` 130px;` }}>
                    <h2>お問い合わせ</h2>
                    <p>0120-000000</p>
                    <p>Sample</p>
                    <input style={{fontSize:`49px`,marginBottom:`20px`}}></input><br/>
                    <textarea style={{fontSize:`49px`}}></textarea>
                    <p>xxxx@wwww.com</p>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default contact
