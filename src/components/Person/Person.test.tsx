import { render, screen } from '@testing-library/react';

import { PersonType } from '../../types';
import Person from './Person'

describe('<Person />', () => {
  test('should render the person\'s name', () => {
    const person: PersonType = { name: 'Jek Tono Porkins', species: 'human', films: []}
    const setPerson = () => {}

    render(<Person setPerson={setPerson} person={person} />)

    screen.getByText(person.name)
  })
});
