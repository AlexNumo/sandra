import BurgerMenu from '../BurgerMenu/BurgerMenu';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import AuthForm from '../AuthForm/AuthForm';
import "./style.css";
import { useState } from 'react';
import BTN from 'Components/BTN/BTN';
import {
    HeaderPosition,
    HeartPosition,
    Heart
} from './Header.styled';

const Header = () => {
    const [openSignUp, setOpenSignUp] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);

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
            <BTN type="button" handleChange={handleOpenSignUp} TextBTN={'Реєстрація'} />
            <BTN type="button" handleChange={handleOpenSignIn} TextBTN={'Авторизація'} />
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