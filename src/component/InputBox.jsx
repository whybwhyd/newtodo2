
function Box (props) {

      return(
      <div className="inputBox">

        <div className="boxTitle">
        제목 {""}
        <input type="text"
          id="titleInput"
          placeholder="제목을 적어주세요"
          value={props.boxTitle}
          onChange={(event) => props.handleTitle(event)}/>
        </div>
        
        <div className="boxContent">
        내용 {""}
        <input type="text"
          id="contentInput"
          placeholder="내용을 적어주세요"
          value={props.boxContent}
          onChange={(event) => props.handleContent(event)}/>
        </div>

        <div className="boxDate">
         날짜 {""}
        <input type="text"
          id="dateInput"
          placeholder="yy/mm/dd"
          value={props.boxDate}
          onChange={(event) => props.handleDate(event)}/>
        </div>
        <button 
        onClick={() => props.handleAdd()}
        id="addBtn"
        >추가하기</button>



      </div>
    );
}
      export default Box;

