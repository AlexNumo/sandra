// import styled from 'styled-components';

// const ModalStyle = styled.div`
//     position: absolute;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     top: 0;
//     left: 0;
//     background-color: #ec63cf8d;
//     width: 100%;
//     height: 100%;
// `;

// const ModalFeedBack = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 250px;
//     background-color: #53be7c;
// `;

// const CloseBtnPosition = styled.div`
//     display: flex;
//     justify-content: flex-end;
// `;

// const CloseBtn = styled.button`
//     background: none;
//     border: none;
//     width: auto;
//     margin-top: 5px;
//     margin-right: 5px;
// `;

// const CloseImg = styled.img`
//     width: 18px;
// `;

// const ModalPosition = styled.form`
//     margin: 5px;
// `;

// const NumberTel = styled.label`
//     font-family: 'Times New Roman', Times, serif;
//     font-size: 18px;
//     font-weight: 400;
//     margin: 0px;
// `;

// const PositionInput = styled.input`
//     width: 100%;
//     height: 25px;
//     margin-top: 10px;
//     margin-bottom: 10px;
// `;

// export {
//     ModalStyle,
//     ModalPosition,
//     ModalFeedBack,
//     CloseBtnPosition,
//     CloseBtn,
//     CloseImg,
//     NumberTel,
//     PositionInput,
// };

// import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FiEyeOff, FiEye } from 'react-icons/fi';

export const ModalStyle = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    background-color: #ec63cf8d;
    width: 100%;
    height: 100%;
`;

export const ContainerRegistr = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #6b6b81;
  border-radius: 22px;
`;
export const ContainerRegistrStyle = styled.div`
  padding: 0px 20px 20px 20px;
`;
export const CloseBtnPosition = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 15px;
`;
export const CloseBtn = styled.button`
    background: none;
    border: none;
    width: auto;
    margin-top: 5px;
    margin-right: 5px;
`;
export const CloseImg = styled.img`
    width: 18px;
`;
export const TitleRegistr = styled.h2`
  color: rgba(252, 132, 45, 1);
  text-transform: uppercase;
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.21;
  letter-spacing: 0.04em;
  margin-top: 0;
  text-align: center;
`;
export const FormRegistr = styled.form``;

export const FormRegistrList = styled.ul`
  margin: 20px 0;
  list-style: none;
  padding: 0;
`;
export const FormRegistrItem = styled.li`
  position: relative;
  margin-bottom: 0;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;
export const FormRegistrLabel = styled.label`
  display: flex;
  width: auto;
  height: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

export const FormRegistrInput = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  height: 20px;
  width: 100%;
  outline: none;
  background-color: white;
  border-radius: 22px;
  padding-left: 15px;
  padding-bottom: 0px;
  border: none;
`;

export const Message = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: rgba(252, 132, 45, 1);
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 32px;
`;

const plaseholderButtonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 180px;
  border-radius: 30px;
  border-color: rgba(117, 190, 218, 0);
  padding: 13px 25px;
  background-color: #1bcaca;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: none;
    background: transparent;
  }
`;

export const RegistrButton = styled.button`
  ${plaseholderButtonStyles}
`;

export const ShowPassword = styled(FiEye)`
  color: #9b9faa;
  font-size: 15px;
  margin-bottom: auto;
  margin-top: auto;
`;

export const HidePassword = styled(FiEyeOff)`
  color: #9b9faa;
  font-size: 15px;
  margin-bottom: auto;
  margin-top: auto;
`;
export const PasswordButton = styled.button`
  width: 24px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  border: none;
`;
