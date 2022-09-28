import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalDiv = styled.div`
  position: relative;
  background-color: var(--white);
  width: 672px;
  padding: 64px 80px 80px;
  padding-bottom: 80px;
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BtnWrapper = styled.div`
  width: 210px;
  display: flex;
  flex-direction: column;

  button:first-child {
    margin-bottom: 40px;
  }
`;

const CloseModalBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ModalTtl = styled.h2`
  font-size: 20px;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 20px;
`;

const Text = styled.p`
  width: 280px;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 40px;
  line-height: 1.2;
`;

export {
  Overlay,
  ModalDiv,
  ModalTtl,
  Text,
  CloseModalBtn,
  ContentWrap,
  BtnWrapper,
};
