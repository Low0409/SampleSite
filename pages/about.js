import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
const about = () => {
    return (
        <>
            <div style={{ backgroundColor: ` rgb(201, 189, 151)` }}>

                <Header />
                <div className="about" style={{ marginTop: ` 130px;` }}>
                    <h2>私たちは</h2>
                    <p>Sample</p>
                    <p>Sample</p>
                    <p>Sample</p>
                    <p>Sample</p>
                    <p>Sample</p>
                    <p>Sampleです</p>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default about
