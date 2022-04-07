/* eslint-disable no-shadow */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { element } from 'prop-types';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {planets.map((element) => (<PlanetCard
            key={ element.name }
            planetName={ element.name }
            planetImage={ element.image }
          />))}
        </ul>

      </div>
    );
  }
}

export default SolarSystem;
