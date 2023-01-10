import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        <div className="missions-container">
          {missions.map((mission, index) => (
            <MissionCard
              key={ index }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />))}
        </div>
      </div>
    );
  }
}

export default Missions;
