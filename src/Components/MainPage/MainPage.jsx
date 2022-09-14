import Modal from "Components/RegistrationForm/RegistrationForm";
import { useState } from "react";
import {
    MainPagePosition,
    ServiceBtn,
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
                <ServiceBtn onClick={handleOpen}>Записуйся</ServiceBtn>
                <AbonnementLink to='/abonnemets'>Абонементи</AbonnementLink>
            </ServicePosition>
            {open ? <Modal handleClose={handleClose} /> : null}
        </MainPagePosition>
    )
};

export default MainPage;