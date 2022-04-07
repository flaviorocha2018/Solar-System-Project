/* eslint-disable react/jsx-key */
import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCards from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul>
          { missions.map((element) => (<MissionCards
            key={ element.name }
            name={ element.name }
            year={ element.year }
            country={ element.country }
            destination={ element.destination }

          />))}
        </ul>

      </div>

    );
  }
}
export default Missions;
