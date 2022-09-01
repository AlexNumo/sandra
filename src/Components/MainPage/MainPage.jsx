import Modal from "Components/Modal/Modal";
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
            <SevriceText>Хочеш мати класну та сочну ЖОПУ?</SevriceText>
            <ServiceBtn onClick={handleOpen}>Записуйся</ServiceBtn>
            {open ? <Modal handleClose={handleClose} /> : null}
        </MainPagePosition>
    )
};

export default MainPage;