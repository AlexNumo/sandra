import styled from 'styled-components';

const ScheduleStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #72bcbc;
    width: 100vw;
    padding: 15px 15px 15px 15px;
`;

const SchedulePosition = styled.div`
    display: block;
    text-align: center;
`;

const ScheduleList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100vw;
    align-items: center;
    margin-top: 25px;
`;

export {
    ScheduleStyle,
    SchedulePosition,
    ScheduleList
};