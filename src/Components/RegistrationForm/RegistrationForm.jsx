import { useState } from 'react';
import Close from '../../icons/Close.svg';
import { clientAPI } from '../../service/axios.config';
import BTN from 'Components/BTN/BTN';
import {
    ModalStyle,
    ModalPosition,
    ModalFeedBack,
    CloseBtnPosition,
    CloseBtn,
    CloseImg,
    NumberTel,
    PositionInput,
} from './RegistrationForm.styled';

const Modal = ({ handleClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fetchAPISend = () => {
        const fetch = clientAPI.register({
            name,
            email,
            password
        });
        return(fetch)
    }
      
    return(
        <ModalStyle>
            <ModalFeedBack>
                <CloseBtnPosition>
                    <CloseBtn onClick={handleClose}>
                        <CloseImg src={Close} alt="Close"/>
                    </CloseBtn>
                </CloseBtnPosition>
                <ModalPosition>
                    <NumberTel htmlfor='name'>Ім'я:</NumberTel>
                    <PositionInput
                        name='name'
                        type='text'
                        maxLength="10"
                        placeholder='Сандра'
                        value={name}
                        onChange={(event) => setName(event.target.value)}></PositionInput>
                    <NumberTel htmlfor='email'>Пошта:</NumberTel>
                    <PositionInput
                        name='email'
                        type='email'
                        placeholder='sandrochkastrong@gmail.com'
                        pattern='([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})'
                        minlength='4'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <NumberTel htmlfor='password'>Пароль:</NumberTel>
                    <PositionInput
                        name='password'
                        type='text'
                        maxLength="15"
                        placeholder='******'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <BTN type="button" handleChange={fetchAPISend} TextBTN={'Відправити'} />
                </ModalPosition>
            </ModalFeedBack>
        </ModalStyle>
    )
};

export default Modal;