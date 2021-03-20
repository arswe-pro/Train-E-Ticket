import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Box } from '@material-ui/core';
// import { useParams } from 'react-router-dom';

const RoadMap = () => {
    // let { districts } = useParams();
    // console.log(districts);
    return (
        <div>

            <Box bgcolor="info.main" color="primary.contrastText">
                <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="secondary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Panchagarh</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="secondary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Panchagarh</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        </div>
    );
};

export default RoadMap;