import React, { useEffect, useState } from 'react';
import '../styles/TextButton.css';

const TextButton = ({style,val}) => {
  const [showText, setShowText] = useState(false);
  const [textAlign, setTextAlign] = useState({});

  const handleMouseOver = () => {
    setShowText(true);
  };

  const handleMouseOut = () => {
    setShowText(false);
  };
  const handlerText = () =>{
    if(style.text === "right"){
        setTextAlign({
            display: 'flex',
            alignItems: 'center'
        })
    }
} 

  useEffect(() => {
    handlerText();
  },[]) 

  return (
    <div style={textAlign}>
      <button className={style.button}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
    {val.icon}
      </button>
      {showText && <div style={{ marginLeft: '10px' }}>{val.text}</div>}
    </div>
  );
};

export default TextButton;