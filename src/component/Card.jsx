import React from 'react';

function Card(props) {
  // 할일의 완료 여부(isdone)에 따라 버튼 이름을 Doing칸에는 완료, Done 칸에는 취소로 바꿈.
  const btnName = props.card.isdone ? '취소' : '완료'

  return (
    <div className="squareStyle">
      <div>
        <h3>{props.card.boxTitle}</h3>
        <h5>{props.card.boxContent}</h5>
        <h6>{props.card.boxDate}</h6>

        <div className="bottomBtn">
          <button className="delBtn" onClick={() => props.handleDelete(props.card.id)}>삭제</button>
          <button className="doneBtn" onClick={() => props.handleCbtn(props.card.id)}>{btnName}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;