import styled from "styled-components";

const TestPosition = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #778a9b;
    height: 200px;
`;

const TestBTN = styled.button`
    width: 50px;
    height: 20px;
    margin: 10px;
    background-color: #bd203a;
`;

const TestModalPosition = styled.div`
    position: relative;
    top: 0px;
    right: 0px;
    width: 150px;
    height: 120px;
    margin: 10px;
    background-color: #20bd3a;
`;

const TestModalPosition2 = styled.div`
    position: absolute;
    background-color: #16176e;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    align-items: center;
`;

export {
    TestPosition,
    TestBTN,
    TestModalPosition,
    TestModalPosition2
};