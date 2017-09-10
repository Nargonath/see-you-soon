import React from 'react';

import Timer from 'components/Timer';

function Home() {
  const endDate = new Date('2017-09-20T08:00:00.000Z');

  return (
    <div>
      <h1>See you soon</h1>
      <Timer endDate={endDate} />
    </div>
  );
}

export default Home;
