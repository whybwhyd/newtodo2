import React from 'react';

function Card(props) {
  const btnName = props.card.isdone ? '취소' : '완료';

  return (
    <div className="squareStyle">
      <div>
        <h3>{props.card.boxTitle}</h3>
        <h5>{props.card.boxContent}</h5>
        <h6>{props.card.boxDate}</h6>
        <div className="bottomBtn">
          <button className="delBtn" onClick={() => props.hadleDelete(props.card.id)}>
            삭제
          </button>
          <button className="doneBtn" onClick={() => props.hadleCbtn(props.card.id)}>
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;