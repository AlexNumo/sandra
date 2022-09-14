import { slide as Menu } from 'react-burger-menu';
import BurgerIcon from '../../icons/menu.svg';

const BurgerMenu = () => {
    return (
        <Menu
            right
            width='100vh'
            customBurgerIcon={ <img src={BurgerIcon} alt="BurgerIcon"/> } 
        >
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
    )
}

export default BurgerMenu;