import styled from 'styled-components';

const HeaderPosition = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 15px 15px 15px 15px;
    background-color: #d4b1b1;
`;

const Contacts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LinkStyle = styled.a`
    margin-left: 8px;
`;

const BtnForm = styled.button`
    background-color: aqua;
    border-radius: 22px;
`;

const ImageIcon = styled.img`
    width: 15px;
`;

export {
    HeaderPosition,
    ImageIcon,
    Contacts,
    BtnForm,
    LinkStyle
};