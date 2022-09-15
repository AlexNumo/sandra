import {
    ScheduleStyle,
    SchedulePosition,
    ScheduleList
} from './Schedule.styled';

const Schedule = () => {
    return (
        <ScheduleStyle>
            <SchedulePosition>
                <h2>Розклад</h2>
                <ScheduleList>
                    <div>
                        <h3>Kengoo jumps</h3>
                        <button>Записатися</button>
                    </div>
                    <div>
                        <h3>High heels</h3>
                        <button>Записатися</button>
                    </div>
                    <div>
                        <h3>Tabata</h3>
                        <button>Записатися</button>
                    </div>
                </ScheduleList>
            </SchedulePosition>
        </ScheduleStyle>
    )
};

export default Schedule;