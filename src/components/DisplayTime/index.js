import React from 'react';
import { number } from 'prop-types';

function DisplayTime({ days, hours, minutes, seconds }) {
  return (
    <p>
      {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
    </p>
  );
}

DisplayTime.propTypes = {
  days: number.isRequired,
  hours: number.isRequired,
  minutes: number.isRequired,
  seconds: number.isRequired,
};

export default DisplayTime;
