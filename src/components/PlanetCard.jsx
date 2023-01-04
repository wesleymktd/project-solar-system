import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/planetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div id="planet-card" data-testid="planet-card">
        <div id="planet-name" data-testid="planet-name">
          <div>{ planetName }</div>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetName: '',
  planetImage: '',
};

export default PlanetCard;
