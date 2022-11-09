import BurgerMenu from '../BurgerMenu/BurgerMenu';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import AuthForm from '../AuthForm/AuthForm';
import "./style.css";
import { useState } from 'react';
import BTN from 'Components/BTN/BTN';
import { authSelectors } from '../../redux/app/auth/auth-selectors';
import { useSelector, useDispatch } from "react-redux";
import { authOperations } from 'redux/app/auth';
import { useNavigate } from 'react-router-dom';
import ChoiceModal from '../ChoiceModal';
import {
    HeaderPosition,
    HeartPosition,
    Heart
} from './Header.styled';

const Header = () => {
    const [openSignUp, setOpenSignUp] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [isShowChoiceModal, setIsShowChoiceModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsShowChoiceModal(true);
        document.body.style.overflow = 'hidden';
    };
    const closeModalHandle = () => {
        setIsShowChoiceModal(false);
    };

    const choiceHandler = answer => {
    if (answer) {
      dispatch(authOperations.actionLogout()).then(() => {
        navigate('/', { replace: true });
      });
    }
    };
    const userName = useSelector(authSelectors.getUserName);
    console.log("userName: ", userName);
    const NotLog = () => {
        return (
            <>
                <BTN type="button" handleChange={handleOpenSignUp} TextBTN={'Реєстрація'} />
                <BTN type="button" handleChange={handleOpenSignIn} TextBTN={'Авторизація'} />
            </>
        )
    }

        const IsLog = () => {
        return (
            <>
                <BTN type="button" TextBTN={`${userName}`} />
                <BTN type="button" handleChange={handleLogout} TextBTN={'Вихід'} />
                {isShowChoiceModal && (
                        <ChoiceModal
                        text={'що хочете вийти зі свого облікового запису'}
                        choiceHandler={choiceHandler}
                        closeModalHandle={closeModalHandle}
                        />
      )}
            </>
        )
    } ;
    const handleOpenSignUp = () => {
        setOpenSignUp(true);
    }
    const handleCloseSignUp = () => {
        setOpenSignUp(false);
    }
    const handleOpenSignIn = () => {
        setOpenSignIn(true);
    }
    const handleCloseSignIn = () => {
        setOpenSignIn(false);
    }
    return (
        <HeaderPosition>
            <h2>Кайфуй від себе</h2>
            <HeartPosition>
                <Heart></Heart>
            </HeartPosition>   
            
            {userName ? <IsLog /> : <NotLog />}
            <div id="Menu">
                <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"Menu"} />
                <div id="page-wrap">
                </div>
            </div>
            {openSignUp ? <RegistrationForm handleClose={handleCloseSignUp} /> : null}
            {openSignIn ? <AuthForm handleClose={handleCloseSignIn} /> : null}

        </HeaderPosition>
    )
}

export default Header;