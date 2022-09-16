import Modal from "Components/RegistrationForm/RegistrationForm";
import { useState } from "react";
import BTN from 'Components/BTN/BTN';
import {
    MainPagePosition,
    SevriceText,
    ServicePosition,
    AbonnementLink
} from './MainPage.styled';

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
                <AbonnementLink to='/abonnements'>Абонементи</AbonnementLink>
            </ServicePosition>
            {open ? <Modal handleClose={handleClose} /> : null}
        </MainPagePosition>
    )
};

export default MainPage;