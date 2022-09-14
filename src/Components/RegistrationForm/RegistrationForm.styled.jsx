import styled from 'styled-components';

const ModalStyle = styled.div`
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

const ModalFeedBack = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    background-color: #53be7c;
`;

const CloseBtnPosition = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CloseBtn = styled.button`
    background: none;
    border: none;
    width: auto;
    margin-top: 5px;
    margin-right: 5px;
`;

const CloseImg = styled.img`
    width: 18px;
`;

const ModalPosition = styled.form`
    margin: 5px;
`;

const NumberTel = styled.label`
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    font-weight: 400;
    margin: 0px;
`;

const PositionInput = styled.input`
    width: 100%;
    height: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export {
    ModalStyle,
    ModalPosition,
    ModalFeedBack,
    CloseBtnPosition,
    CloseBtn,
    CloseImg,
    NumberTel,
    PositionInput,
};