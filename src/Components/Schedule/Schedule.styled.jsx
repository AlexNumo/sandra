import styled from 'styled-components';

const ScheduleStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #72bcbc; */
    width: 100vw;
    padding: 15px 15px 15px 15px;
`;

const SchedulePosition = styled.div`
    display: block;
    text-align: center;
`;

const ScheduleName = styled.h2`
    font-family: 'Times New Roman', Times, serif;
    font-size: 46px;
    font-weight: 700;
`;

const ScheduleList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100vw;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 25px;
`;

const ScheduleListName = styled.h3`
    font-family: 'Times New Roman', Times, serif;
    font-size: 26px;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const ScheduleListBTN = styled.button`
    font-family: 'Times New Roman', Times, serif;
    font-size: 23px;
    font-weight: 400;
    background-color: aqua;
    border-radius: 22px;
`;

export {
    ScheduleStyle,
    SchedulePosition,
    ScheduleList,
    ScheduleListName,
    ScheduleListBTN,
    ScheduleName
};