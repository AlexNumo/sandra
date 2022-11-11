import Modal from "Components/RegistrationForm/RegistrationForm";
import { useState } from "react";
import BTN from 'Components/BTN/BTN';
import {
    MainPagePosition,
    WrapperText,
    SevriceText,
    SevriceTextBy,
    ServicePosition,
    AbonnementLink,
    FlashDiv
} from './MainPage.styled';
// import { Link } from "react-router-dom";

const MainPage = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
            setOpen(false);
        }

    return (
        <MainPagePosition>
            <ServicePosition>
            <WrapperText>
                <SevriceText>ARS FIT studio</SevriceText>
            </WrapperText>
                <SevriceTextBy>by sandrochka_strong</SevriceTextBy>
                <BTN type="button" handleChange={handleOpen} TextBTN={'Записуйся'} />
                <FlashDiv><AbonnementLink to='abonnements'>Абонементи</AbonnementLink></FlashDiv>
            </ServicePosition>
            {open ? <Modal handleClose={handleClose} /> : null}
        </MainPagePosition>
    )
};

export default MainPage;