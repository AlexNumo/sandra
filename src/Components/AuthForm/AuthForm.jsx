// import { useState } from 'react';
// import Close from '../../icons/Close.svg';
// import { clientAPI } from '../../service/axios.config';
// import BTN from 'Components/BTN/BTN';
// import {
//     ModalStyle,
//     ModalPosition,
//     ModalFeedBack,
//     CloseBtnPosition,
//     CloseBtn,
//     CloseImg,
//     NumberTel,
//     PositionInput,
// } from './AuthForm.styled';

// const Modal = ({ handleClose }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const fetchAPISend = (e) => {
//         e.preventDefault();
//         const fetch = clientAPI.login({
//             email,
//             password
//         });
//         return (fetch);
//     }
      
//     return(
//         <ModalStyle>
//             <ModalFeedBack>
//                 <CloseBtnPosition>
//                     <CloseBtn onClick={handleClose}>
//                         <CloseImg src={Close} alt="Close"/>
//                     </CloseBtn>
//                 </CloseBtnPosition>
//                 <ModalPosition>
//                     <NumberTel htmlfor='email'>Пошта:</NumberTel>
//                     <PositionInput
//                         name='email'
//                         type='email'
//                         placeholder='sandrochkastrong@gmail.com'
//                         pattern='([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})'
//                         minlength='4'
//                         value={email}
//                         onChange={(event) => setEmail(event.target.value)}
//                     />
//                     <NumberTel htmlfor='password'>Пароль:</NumberTel>
//                     <PositionInput
//                         name='password'
//                         type='text'
//                         maxLength="15"
//                         placeholder='******'
//                         value={password}
//                         onChange={(event) => setPassword(event.target.value)}
//                     />
//                     <BTN type="button" handleChange={fetchAPISend} TextBTN={'Відправити'} />
//                 </ModalPosition>
//             </ModalFeedBack>
//         </ModalStyle>
//     )
// };

// export default Modal;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import CloseBtn from '../CloseBtn/CloseBtn';
import { authOperations } from '../../redux/app/auth';

import {
  ContainerRegistr,
  TitleRegistr,
  CloseBtnPosition,
  FormRegistr,
  FormRegistrList,
  FormRegistrItem,
  FormRegistrLabel,
  FormRegistrInput,
  Message,
  ButtonContainer,
  RegistrButton,
  PasswordButton,
  ShowPassword,
  HidePassword,
  ModalStyle,
  ContainerRegistrStyle,
} from './AuthForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const AuthForm = ({handleClose}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Недійсна електронна пошта')

        .max(254, 'Максимум 254 символів')

        .matches(
          /([a-z0-9_.-]{3,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/,
          'Електронна пошта має містити мінімум 3 символи',
        )
        .required("Обов'язково"),
      password: Yup.string()
        .min(8, 'Мінімум 8 символів')
        .max(100, 'Максимум 100 символів')
        .matches(
          /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{8,}/,
          'Пароль повинен складатися з латинських літер та цифр без спеціальних символів',
        )
        .required("Обов'язково"),
    }),

    onSubmit: values => {
      const { email, password } = values;
      dispatch(authOperations.actionLogin({ email, password })).then(
        ({ payload }) => {
          if (payload !== undefined) {
            navigate('/', { replace: true });
            handleClose();
          }
        },
      )
    },
  });
    return (
    <ModalStyle>
          <ContainerRegistr>
              <ContainerRegistrStyle>
                  <CloseBtnPosition>
                    <CloseBtn onHandleClick={handleClose} />
                  </CloseBtnPosition>
                  <TitleRegistr>Авторизація</TitleRegistr>
                  <FormRegistr onSubmit={formik.handleSubmit}>
                      <FormRegistrList>
                      <FormRegistrItem>
                          <FormRegistrLabel htmlFor="email">
                          Електронна пошта *
                          </FormRegistrLabel>
                          <FormRegistrInput
                          id="email"
                          name="email"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          />
                          {formik.touched.email && formik.errors.email ? (
                          <Message>{formik.errors.email}</Message>
                          ) : null}
                      </FormRegistrItem>
                      <FormRegistrItem>
                          <FormRegistrLabel htmlFor="password">Пароль *</FormRegistrLabel>
                          <FormRegistrInput
                          id="password"
                          name="password"
                          type={show ? 'text' : 'password'}
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          />
                          <PasswordButton type="button" onClick={handleClick}>
                          {show ? <ShowPassword /> : <HidePassword />}
                          </PasswordButton>
                          {formik.touched.password && formik.errors.password ? (
                          <Message>{formik.errors.password}</Message>
                          ) : null}
                      </FormRegistrItem>
                      </FormRegistrList>
                      <ButtonContainer>
                      <RegistrButton type="submit">Авторизуватися</RegistrButton>
                      </ButtonContainer>
                      </FormRegistr>
          </ContainerRegistrStyle>
      </ContainerRegistr>
    </ModalStyle>
  );
};
export default AuthForm;
