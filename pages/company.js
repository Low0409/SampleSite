import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
const company = () => {
    return (
        <>
            <div style={{ backgroundColor: ` rgb(201, 189, 151)` }}>

                <Header />
                <div className="about" style={{ marginTop: ` 130px;` }}>
                    <h2>会社紹介</h2>
                    <p>代表</p>
                    <p>Sample</p>
                    <p>創立</p>
                    <p>Sample</p>
                    <p>Sample</p>
                    <p>Sampleです</p>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default company
