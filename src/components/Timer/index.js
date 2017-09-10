import React, { Component } from 'react';
import { instanceOf } from 'prop-types';

import DisplayTime from '../DisplayTime';
import splitSeconds from 'utils/splitSeconds';

class Timer extends Component {
  constructor(props) {
    super(props);

    const currentDate = new Date();
    this.totalSec = Math.round((this.props.endDate - currentDate) / 1000);
    this.state = { timeSplit: splitSeconds(this.totalSec) };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.totalSec--;
      this.setState({ timeSplit: splitSeconds(this.totalSec) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return <DisplayTime {...this.state.timeSplit} />;
  }
}

Timer.propTypes = {
  endDate: instanceOf(Date).isRequired,
};

export default Timer;
