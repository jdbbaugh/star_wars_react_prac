import { render, screen } from '@testing-library/react';

import { PersonType } from '../../types';
import PersonDetails from './PersonDetails'

describe('<PersonDetails />', () => {
  test('should render the person\'s traits', () => {

     const species: any = {name: 'Droid'}
     const filmApperances: Array<object> = [
       {title: 'new hope', release_date: 'oct12'},
       {title: 'old hope', release_date: 'oct16'}
      ]
     const person: PersonType = {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      films: [],
      species: [],
  }

    const setPerson = () => {}

    render(<PersonDetails species={species} filmApperances={filmApperances} person={person} />)

    screen.getByText(person.name)
    screen.getByText(`Height: ${person.height}`)
    screen.getByText(`Mass: ${person.mass}`)
    screen.getByText(`Hair_color: ${person.hair_color}`)
    screen.getByText(`Eye_color: ${person.eye_color}`)
    screen.getByText(`Birth_year: ${person.birth_year}`)
    screen.getByText(`Gender: ${person.gender}`)
    screen.getByText(`Species: ${species.name}`)
  })
});
