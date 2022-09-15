import Contacts from "Components/Contacts/Contacts";
import {
    ScheduleStyle,
    SchedulePosition,
    ScheduleList,
    ScheduleListName,
    ScheduleListBTN,
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
                        <ScheduleListBTN>Записатися</ScheduleListBTN>
                    </div>
                    <div>
                        <ScheduleListName>High heels</ScheduleListName>
                        <ScheduleListBTN>Записатися</ScheduleListBTN>
                    </div>
                    <div>
                        <ScheduleListName>Tabata</ScheduleListName>
                        <ScheduleListBTN>Записатися</ScheduleListBTN>
                    </div>
                </ScheduleList>
                <Contacts/>
            </SchedulePosition>
        </ScheduleStyle>
    )
};

export default Schedule;