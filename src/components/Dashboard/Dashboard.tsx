import React from 'react'

import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import People from '../People'
import PersonDetails from '../PersonDetails'
import {
  Row,
  Col,
  Container } from 'reactstrap';
  import './Dashboard.css';

function Dashboard() {

  const [person, setPerson] = React.useState<object>({})

  const setSelectedPerson = (person:object) => {
    setPerson(person)
  }

  console.log(`person`, person)

  return (
    <Container
      fluid
      className='main-container'
    >
      <Row>
        <Col xs='auto' className='mt-5'>
          <People
            setSelectedPerson={setSelectedPerson} />
        </Col>
        <Col>
          <PersonDetails
              person={person} />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
