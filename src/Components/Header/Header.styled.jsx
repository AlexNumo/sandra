import styled from 'styled-components';

const HeaderPosition = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px 15px 15px;
    background-color: #d4b1b1;
`;

const BtnForm = styled.button`
    background-color: aqua;
    border-radius: 22px;
`;

const HeartPosition = styled.div`
    position: relative;
    top: -8px;
`;

const Heart = styled.div`
    display: inline-block;
    height: 20px;
    width: 20px;
    position: absolute;
    left: 45%;
    top: 45%;
    background-color: red;
    transform: rotate(-45deg);
    animation: heartbeat 1s infinite;
    ::before{
        top: -12px;
        left: 0;
    }
    ::after{
        left: 12px;
        top: 0;
    }
    ::before, ::after{
        content: "";
        position: absolute;
        height: 20px;
        width: 20px;
        background-color: red;
        border-radius: 50%;
    }
`;

export {
    HeaderPosition,
    BtnForm,
    HeartPosition,
    Heart
};