import React from 'react';
import { number } from 'prop-types';

import Numbers from './Numbers';
import TimeString from './TimeString';
import TabletBr from 'components/TabletBr';

function DisplayTime({ days, hours, minutes, seconds }) {
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    return <TimeString big>This is over for now!</TimeString>;
  }

  return (
    <TimeString>
      <Numbers>{days}</Numbers> days,<TabletBr /> <Numbers>{hours}</Numbers> hours,<TabletBr />{' '}
      <Numbers>{minutes}</Numbers> minutes,<TabletBr /> <Numbers>{seconds}</Numbers> seconds
    </TimeString>
  );
}

DisplayTime.propTypes = {
  days: number.isRequired,
  hours: number.isRequired,
  minutes: number.isRequired,
  seconds: number.isRequired,
};

export default DisplayTime;
