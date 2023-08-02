import styled from "styled-components";

export const MainFont = styled.div`
  width: 80px;
  height: 35px;
  background-image: linear-gradient(to right, #ffb300, #00fff4);
  color: white;
  border-color: transparent;
  border-radius: 20px;
  text-align: center;
  line-height: 30px;
  font-weight: bold;
  margin-left: 20px;
`;
//전체 레이아웃 설정
export const Layout = styled.div`
  margin: -46px auto;
  width: 100%;
  height: 100%;
  min-width: 800px;
  max-width: 1200px;
  background-image: linear-gradient(to right, #ffb300, #00fff4);
`;

export const MytodoList = styled.h1`
  font-size: 70px;
  text-align: center;
  transform: translateY(15px);
  color: white;
`;
export const Style = styled.div`
  padding: 30px;
  display: flex;
  gap: 12px;
`;
export const Doing = styled.div`
  padding-top: 20px;
  background-color: rgb(248, 240, 230);
`;
export const Done = styled.div`
  background-color: rgb(248, 240, 230);
  padding-bottom: 300px;
`;
