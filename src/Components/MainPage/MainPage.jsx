import Modal from "Components/RegistrationForm/RegistrationForm";
import { useState } from "react";
import BTN from 'Components/BTN/BTN';
import {
    MainPagePosition,
    SevriceText,
    ServicePosition,
    AbonnementLink
} from './MainPage.styled';
import { Link } from "react-router-dom";

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
            <SevriceText>ARS FIT studio</SevriceText>
                <BTN type="button" handleChange={handleOpen} TextBTN={'Записуйся'} />
                <Link to='abonnements'>Абонементи</Link>
            </ServicePosition>
            {open ? <Modal handleClose={handleClose} /> : null}
        </MainPagePosition>
    )
};

export default MainPage;