import React from 'react'

const Point = () => {
  return (
    <>
      <div className="map">
      <h1>-所在地-</h1>

 <iframe src="https://www.google.com/maps?
output=embed&z=15&ll=35.6812405,139.7649308&q=東京駅" width={400} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0}>
</iframe>

      </div>
    </>
  )
}

export default Point
