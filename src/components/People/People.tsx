import React from 'react'

import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'
import {
  Input,
  ListGroup,
  Spinner
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
      {people.length > 0 ?
        <ListGroup>
          {people.map(person => <Person
            setPerson={setPerson}
            person={person} />)}
        </ListGroup>
        :
        <div className='spinner'>
          <Spinner children="" type="grow" color="warning"/>
        </div>
      }
    </div>
  )
}

export default People
