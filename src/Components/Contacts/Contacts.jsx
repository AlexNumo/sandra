import Facebook from '../../icons/facebook.svg';
import Insta from '../../icons/instagram.svg';
import Phone from '../../icons/phone.svg';
import Location from '../../icons/location.svg';
import {
    ImageIcon,
    ContactsPosition,
    LinkStyle
} from './Contacts.styled';

const Contacts = () => {
    return (
        <>
            <ContactsPosition>
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
            </ContactsPosition>
        </>
    )
};

export default Contacts;