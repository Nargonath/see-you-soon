import React from 'react';

import Timer from 'components/Timer';
import Container from './Container';
import Title from './Title';
import MusicLink from './MusicLink';
import TabletBr from 'components/TabletBr';

function Home() {
  const endDate = new Date('2017-09-20T08:00:00.000Z');

  return (
    <Container>
      <Title>
        See <TabletBr />you soon{' '}
        <MusicLink href="https://www.youtube.com/watch?v=TazHNpt6OTo" target="_blank">
          &hearts;
        </MusicLink>
      </Title>
      <Timer endDate={endDate} />
    </Container>
  );
}

export default Home;
