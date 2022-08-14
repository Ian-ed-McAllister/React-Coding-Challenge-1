import React from 'react'

const ColorName = ({myColor, setMyColor}) => {
  return (

        <input
            autoFocus
            type="text"
            value = {myColor}
            placeholder = "Type Color"
            onChange = {(e) => setMyColor(e.target.value)}
            className = "nameBox"
        />
    
  )
}

export default ColorName