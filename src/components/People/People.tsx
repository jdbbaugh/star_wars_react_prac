import React from 'react'

import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'
import {
  Input,
  ListGroup,
} from 'reactstrap';

interface PeopleProps {
  setPerson: Function
}

function People({ setPerson }: PeopleProps) {
  const [people, setPeople] = React.useState<PersonType[]>([])

  React.useEffect(() => {
    updatePeople('people')
  }, [])

  const updatePeople = async (input:string) => {
    fetchJson<{ results: PersonType[] }>(input)
    .then(peopleResponse => {
      setPeople(peopleResponse.results)
    })
 }



  return (
    <div>
      <Input
        className="mb-3"
        placeholder={'Search Star Wars Characters'}
        onChange={ e => {
          updatePeople(`people/?search=${e.target.value}`)
        }}
      />
      <ListGroup>
        {people.map(person => <Person
          setPerson={setPerson}
          person={person} />)}
      </ListGroup>
    </div>
  )
}

export default People
