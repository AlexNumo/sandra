import { useEffect } from 'react';
import BTN from '../BTN/BTN';
import CloseBtn from '../CloseBtn/CloseBtn';
import {
  Overlay,
  ModalDiv,
  ModalTtl,
  Text,
  CloseModalBtn,
  ContentWrap,
  BtnWrapper,
} from './ChoiceModal.styled';

function ChoiceModal({ text, choiceHandler, closeModalHandle, subText }) {
  useEffect(() => {
    window.addEventListener('keydown', escKeyHandle);
    return () => {
      window.removeEventListener('keydown', escKeyHandle);
    };
  });

  const escKeyHandle = event => {
    if (event.keyCode === 27) {
      choiceHandler(false);
      closeModalHandle();
      document.body.style.overflow = 'visible';
    }
  };
  const onClickOvrlHandle = event => {
    if (event.target.id === 'modal-overlay') {
      choiceHandler(false);
      closeModalHandle();
      document.body.style.overflow = 'visible';
    }
  };

  const onOkClickHandle = () => {
    choiceHandler(true);
    closeModalHandle();
    document.body.style.overflow = 'visible';
  };

  const onCancelClickHandle = () => {
    choiceHandler(false);
    closeModalHandle();
    document.body.style.overflow = 'visible';
  };

  const closeModal = () => {
    choiceHandler(false);
    closeModalHandle();
    document.body.style.overflow = 'visible';
  };

  return (
    <Overlay id="modal-overlay" onClick={onClickOvrlHandle}>
      <ModalDiv>
        <CloseModalBtn>
          <CloseBtn onHandleClick={closeModal} />
        </CloseModalBtn>
        <ContentWrap>
          <ModalTtl>Ви впевнені, {text}?</ModalTtl>
          <Text>{subText}</Text>
          <BtnWrapper>
            <BTN
              handleChange={onCancelClickHandle}
              TextBTN="Скасувати"
              autofocus={true}
            />
            <BTN
              handleChange={onOkClickHandle}
              TextBTN="Підтвердити"
              autofocus={false}
            />
          </BtnWrapper>
        </ContentWrap>
      </ModalDiv>
    </Overlay>
  );
}

export default ChoiceModal;
