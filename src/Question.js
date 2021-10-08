import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  //Fairly simple app, just that the button itself changes as a response to it being clicked.
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {/*Excellent use of the terary here*/ }
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
        {/*If showInfo is true, show the info here(toggled with button above)*/ }
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
