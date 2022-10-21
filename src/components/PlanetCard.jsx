import React, { Component } from 'react';
import PropType from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          <p>{ planetName }</p>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropType.string,
  planetImage: PropType.string,
};

PlanetCard.defaultProps = {
  planetName: '',
  planetImage: '',
};

export default PlanetCard;
