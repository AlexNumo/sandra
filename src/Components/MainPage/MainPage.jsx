import Modal from "Components/RegistrationForm/RegistrationForm";
import { useState } from "react";
import { MainPagePosition, ServiceBtn, SevriceText } from './MainPage.styled';

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
            <SevriceText>Хочеш мати класну ДУПЦЮ?</SevriceText>
            <ServiceBtn onClick={handleOpen}>Записуйся</ServiceBtn>
            {open ? <Modal handleClose={handleClose} /> : null}
        </MainPagePosition>
    )
};

export default MainPage;