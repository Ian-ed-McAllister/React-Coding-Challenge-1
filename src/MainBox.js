import React from 'react'

const MainBox = ({myColor}) => {
  return (
    <div style={{backgroundColor: myColor}} className="mainBox">
        <p>{myColor === "" ? "Empty Box" : myColor}</p>
    </div>
  )
}

export default MainBox