import Facebook from '../../icons/facebook.svg';
import Insta from '../../icons/instagram.svg';
import Phone from '../../icons/phone.svg';
import Location from '../../icons/location.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import AuthForm from '../AuthForm/AuthForm';
import "./style.css";
import { useState } from 'react';
import {
    HeaderPosition,
    ImageIcon,
    Contacts,
    BtnForm,
    LinkStyle
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
            <Contacts>
                <h3>Контакти:</h3>
                <LinkStyle href="https://www.facebook.com/sandra.pashko.1">
                    <ImageIcon src={Facebook} alt="Facebook" />
                </LinkStyle>
                <LinkStyle href="https://www.instagram.com/sandrochka_strong/">
                    <ImageIcon src={Insta} alt="Instagram" />
                </LinkStyle>
                <LinkStyle href="tel:0981058240">
                    <ImageIcon src={Phone} alt="Phone" />
                </LinkStyle>
                <LinkStyle href="https://www.google.com/maps/place/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%B0+%D0%93%D1%80%D1%83%D1%88%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+6/@48.4605719,35.041488,17z/data=!3m1!4b1!4m5!3m4!1s0x40dbe330d429cc65:0x80ac584e699f57be!8m2!3d48.4605913!4d35.0436336">
                    <ImageIcon src={Location} alt="Location" />
                </LinkStyle>
            </Contacts>
            <BtnForm onClick={handleOpenSignUp}>Реєстрація</BtnForm>
            <BtnForm onClick={handleOpenSignIn}>Авторизація</BtnForm>
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