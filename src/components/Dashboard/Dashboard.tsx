import React from 'react'

import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import People from '../People'
import {
  Row,
  Col,
  Container } from 'reactstrap';
  import './Dashboard.css';

function Dashboard() {
  // const [people, setPeople] = React.useState<PersonType[]>([])

  // React.useEffect(() => {
  //   fetchJson<{ results: PersonType[] }>('people')
  //     .then(peopleResponse => setPeople(peopleResponse.results))
  // }, [])

  return (
    <Container
      fluid
      className='main-container'
    >
      <Row>
        <Col className='search-list'>
          <People />
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
