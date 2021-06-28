import React from 'react'

import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'
import {
  Input,
  Container } from 'reactstrap';

function People() {
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
        className="search__input"
        placeholder={'Search Star Wars Characters'}
        onChange={ e => {
          updatePeople(e.target.value)
        }}
      />

      {people.map(person => <Person person={person} />)}
    </div>
  )
}

export default People
