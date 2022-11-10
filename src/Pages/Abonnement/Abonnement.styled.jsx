import styled from "styled-components";

const AbonementStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;

const AbonementList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    background-color: #F2DAD5;
    width: 300px;
    border-radius: 22px;
`;

const AbonementListStyle = styled.button`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 10px 10px 10px 10px;
    border: none;
`;

const CheckStyle = styled.img`
    width: 15px;
`;

const ChoiceBTN = styled.span`
    border-radius: 22px;
    background-color: #231D4F;
    width: 100%;
    color: #ffffff;
`;


export {
    AbonementStyle,
    AbonementList,
    AbonementListStyle,
    CheckStyle,
    ChoiceBTN
};