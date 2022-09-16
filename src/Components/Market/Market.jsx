import BTN from 'Components/BTN/BTN';
import {
    MarketStyle,
    MarketName,
    MarketList
} from './Market.styled';

const Market = () => {
    return (
        <MarketStyle>
            <MarketName>Магазин</MarketName>
            <MarketList>
                <BTN type="button" handleChange={''} TextBTN={'Власні Kengoo Jumps'} />
                <BTN type="button" handleChange={''} TextBTN={'Все для танців High heels'} />
                <BTN type="button" handleChange={''} TextBTN={'Одяг для фітнесу'} />
                <BTN type="button" handleChange={''} TextBTN={'Аксесуари'} />
            </MarketList>
        </MarketStyle>
    )
};

export default Market;