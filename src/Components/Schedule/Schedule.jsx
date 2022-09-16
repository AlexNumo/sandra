import Contacts from "Components/Contacts/Contacts";
import BTN from 'Components/BTN/BTN';
import {
    ScheduleStyle,
    SchedulePosition,
    ScheduleList,
    ScheduleListName,
    ScheduleName
} from './Schedule.styled';

const Schedule = () => {
    return (
        <ScheduleStyle>
            <SchedulePosition>
                <ScheduleName>Розклад</ScheduleName>
                <ScheduleList>
                    <div>
                        <ScheduleListName>Kengoo jumps</ScheduleListName>
                        <BTN type="button" handleChange={''} TextBTN={'Записатися'} />
                    </div>
                    <div>
                        <ScheduleListName>High heels</ScheduleListName>
                        <BTN type="button" handleChange={''} TextBTN={'Записатися'} />
                    </div>
                    <div>
                        <ScheduleListName>Tabata</ScheduleListName>
                        <BTN type="button" handleChange={''} TextBTN={'Записатися'} />
                    </div>
                </ScheduleList>
                <Contacts/>
            </SchedulePosition>
        </ScheduleStyle>
    )
};

export default Schedule;