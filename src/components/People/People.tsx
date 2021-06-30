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
    fetchJson<{ results: PersonType[] }>('people')
      .then(peopleResponse => {
        setPeople(peopleResponse.results)
      })
  }, [])

  const updatePeople = async (input:any) => {
    fetchJson<{ results: PersonType[] }>(`people/?search=${input}`)
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
          updatePeople(e.target.value)
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
