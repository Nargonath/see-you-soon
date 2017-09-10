import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.endDate = new Date(2017, 9, 20, 8);
  }

  render() {
    return (
      <div>
        <h1>See you soon</h1>
      </div>
    );
  }
}

export default Home;
