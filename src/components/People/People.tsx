import React from 'react'

import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'
import {
  Input,
  ListGroup,
} from 'reactstrap';

interface PeopleProps {
  setSelectedPerson: any
}

function People({ setSelectedPerson }: PeopleProps) {
  const [people, setPeople] = React.useState<PersonType[]>([])

  React.useEffect(() => {
    updatePeople('people')
  }, [])

  const updatePeople = async (input:any) => {
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
          setSelectedPerson={setSelectedPerson}
          person={person} />)}
      </ListGroup>
    </div>
  )
}

export default People
