import styled from 'styled-components';

const ContactsPosition = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
`;

const LinkStyle = styled.a`
    margin-left: 8px;
`;

const ImageIcon = styled.img`
    width: 25px;
`;

export {
    ImageIcon,
    ContactsPosition,
    LinkStyle
};