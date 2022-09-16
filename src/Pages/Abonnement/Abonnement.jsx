import Header from "Components/Header/Header";
import Check from '../../icons/check_circle.svg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {
    AbonementStyle,
    AbonementList,
    AbonementListStyle,
    CheckStyle,
    ChoiceBTN
} from './Abonnement.styled';

const Abonnement = () => {
    const Back = useNavigate();
    const [choice, setChoice] = useState('0');
    const [isActiveSmall, setActiveSmall] = useState(false);
    const [isActiveMedium, setActiveMedium] = useState(false);
    const [isActiveBig, setActiveBig] = useState(false);

    const ChoiceHandleSmall = (e) => {
        setChoice(e.target.value);
        setActiveSmall(!isActiveSmall);
        if (isActiveMedium === true) {
            setActiveMedium(false);
        }
        if (isActiveBig === true) {
            setActiveBig(false);
        }
    }

    const ChoiceHandleMedium = (e) => {
        setChoice(e.target.value);
        setActiveMedium(!isActiveMedium);
        if (isActiveSmall === true) {
            setActiveSmall(false);
        }
        if (isActiveBig === true) {
            setActiveBig(false);
        }
    }

    const ChoiceHandleBig = (e) => {
        setChoice(e.target.value);
        setActiveBig(!isActiveBig);
        if (isActiveSmall === true) {
            setActiveSmall(false);
        }
        if (isActiveMedium === true) {
            setActiveMedium(false);
        }
    }
    return (
        <div>
            <Header />
            <AbonementStyle>
                <button type='button' onClick={() => Back(-1)}>Назад</button>
                <h2>Виберіть кількість занять</h2>
                <AbonementList>
                    <AbonementListStyle
                        className={isActiveSmall ? 'activeChoice' : null}
                        onClick={ChoiceHandleSmall}
                        value={6}
                    >
                        <h3>6 тренувань на місяць</h3>
                        <p>800 грн.</p>
                        <p>
                            <CheckStyle src={Check} alt="Check" />
                            Kangoo jumps
                        </p>
                        <p>
                            <CheckStyle src={Check} alt="Check" />
                            High heels
                        </p>
                        <p>
                            <CheckStyle src={Check} alt="Check" />
                            Tabata
                        </p>
                        <p>
                            <CheckStyle src={Check} alt="Check" />
                            Kangoo Jumps Discovery
                        </p>
                        <ChoiceBTN
                            type="button"
                            value={6}
                            onClick={ChoiceHandleSmall}
                            className={isActiveSmall ? 'activeBTN' : null}
                        >
                            Обрати
                        </ChoiceBTN>
                    </AbonementListStyle>
                   <AbonementListStyle
                        className={isActiveMedium ? 'activeChoice' : null}
                        onClick={ChoiceHandleMedium}
                        value={8}
                    >
                        <h3>8 тренувань на місяць</h3>
                        <p>1100 грн.</p>
                        <p>
                            <CheckStyle src={Check} alt="Check" />
                            Kangoo jumps
                        </p>
                        <p>
                            <CheckStyle src={Check} alt="Check" />
                            High heels
                        </p>
                        <p>
                            <CheckStyle src={Check} alt="Check" />
                            Tabata
                        </p>
                        <p>
                            <CheckStyle src={Check} alt="Check" />
                            Kangoo Jumps Discovery
                        </p>
                        <ChoiceBTN
                            type="button"
                            value={8}
                            onClick={ChoiceHandleMedium}
                            className={isActiveMedium ? 'activeBTN' : null}
                        >
                            Обрати
                        </ChoiceBTN>
                    </AbonementListStyle>
                    <AbonementListStyle
                        className={isActiveBig ? 'activeChoice' : null}
                        onClick={ChoiceHandleBig}
                        value={12}
                    >
                        <h3>12 тренувань на місяць</h3>
                        <p>1300 грн.</p>
                        <p>
                            <CheckStyle src={Check} alt="Check" />
                            Kangoo jumps
                        </p>
                        <p>
                            <CheckStyle src={Check} alt="Check" />
                            High heels
                        </p>
                        <p>
                            <CheckStyle src={Check} alt="Check" />
                            Tabata
                        </p>
                        <p>
                            <CheckStyle src={Check} alt="Check" />
                            Kangoo Jumps Discovery
                        </p>
                        <ChoiceBTN
                            type="button"
                            value={12}
                            onClick={ChoiceHandleBig}
                            className={isActiveBig ? 'activeBTN' : null}
                        >
                            Обрати
                        </ChoiceBTN>
                    </AbonementListStyle>
                </AbonementList>
            {/* <div>
                <button type="button" value={6} onClick={ChoiceHandle}>6 Занять</button>
                <button type="button" value={8} onClick={ChoiceHandle}>8 Занять</button>
                <button type="button" value={12} onClick={ChoiceHandle}>12 Занять</button>
            </div> */}
            </AbonementStyle>
        </div>
    )
};

export default Abonnement;