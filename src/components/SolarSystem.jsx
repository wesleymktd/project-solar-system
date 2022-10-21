import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((cardPlanet, index) => (
          <PlanetCard
            key={ index }
            planetName={ cardPlanet.name }
            planetImage={ cardPlanet.image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
