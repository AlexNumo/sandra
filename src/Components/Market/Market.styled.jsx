import styled from 'styled-components';

const MarketStyle = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    padding: 15px 15px 15px 15px;
    background-color: antiquewhite;
`;

const MarketName = styled.h2`
    font-family: 'Times New Roman', Times, serif;
    font-size: 26px;
    font-weight: 700;
    border-radius: 22px; 
`;

const MarketList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100vw;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 25px;
`;

export {
    MarketStyle,
    MarketName,
    MarketList
};