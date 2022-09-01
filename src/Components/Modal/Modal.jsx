import { useState } from 'react';
import Close from '../../icons/Close.svg';
import API from '../API/API';
import {
    ModalStyle,
    ModalPosition,
    ModalFeedBack,
    CloseBtnPosition,
    CloseBtn,
    CloseImg,
    NumberTel,
    PositionInput,
} from './Modal.styled';

const Modal = ({ handleClose }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [kind, setKind] = useState('');
    const [sizeLag, setSizeLag] = useState('');

    const fetchAPISend = () => {
        const fetch = API({
        name,
        surname,
        tel,
        email,
        age,
        kind,
        sizeLag});
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
                    <NumberTel htmlfor='surname'>Прізвище:</NumberTel>
                    <PositionInput
                        name='surname'
                        type='text'
                        maxLength="15"
                        placeholder='Белова'
                        value={surname}
                        onChange={(event) => setSurname(event.target.value)}></PositionInput>
                    <NumberTel htmlfor='tel'>Номер телефону:</NumberTel>
                    <PositionInput
                        name='tel'
                        type='text'
                        maxLength="13"
                        placeholder='+380981058240'
                        value={tel}
                        onChange={(event) => setTel(event.target.value)}
                    />
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
                    <NumberTel htmlfor='age'>Вік:</NumberTel>
                    <PositionInput
                        name='age'
                        type='text'
                        maxLength="2"
                        placeholder='25'
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                    <NumberTel htmlfor='kind'>Вид:</NumberTel>
                    <PositionInput
                        name='kind'
                        type='text'
                        maxLength="15"
                        placeholder='Kengoo или High Heels'
                        value={kind}
                        onChange={(event) => setKind(event.target.value)}
                    />
                    <NumberTel htmlfor='sizeLag'>Розмір ноги (лише для Kangoo):</NumberTel>
                    <PositionInput
                        name='sizeLag'
                        type='text'
                        maxLength="2"
                        placeholder='41 или M'
                        value={sizeLag}
                        onChange={(event) => setSizeLag(event.target.value)}
                    />
                    <button type="button" onClick={fetchAPISend}>Відправити</button>
                </ModalPosition>
            </ModalFeedBack>
        </ModalStyle>
    )
};

export default Modal;