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

    const startdate = props.data.date;
    const enddate = new Date(startdate);

    enddate.setMinutes(startdate.getMinutes() + props.data.service.serviceDuration);
    console.log(startdate);
    console.log(enddate);

    //console.log(props.data.service.serviceDuration)

    const appointments = [
        { title: props.data.service.serviceName, startDate: startdate, endDate: enddate }
    ];


    return (
        <div>
            <br></br>
            <br></br>
            <Paper>
                <Scheduler
                    data={appointments}
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