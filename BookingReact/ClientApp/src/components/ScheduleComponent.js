import React, { useState, useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments,
    AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';

function ScheduleComponent(props) {


    const currentDate = Date.now();
   



    return (
        <div>
            <br></br>
            <br></br>
            <Paper>
                <Scheduler

                    height={660}
                >
                    <ViewState
                        defaultCurrentDate={currentDate}
                    />
                    <WeekView
                        startDayHour={9}
                        endDayHour={19}
                    />
                    <Appointments />
                    <AllDayPanel />
                </Scheduler>
            </Paper>
        </div>
    );

}

export default ScheduleComponent;