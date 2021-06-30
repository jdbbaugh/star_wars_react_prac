import React from 'react'
import { fetchJson } from '../../api'
import { SpeciesType } from '../../types'
import People from '../People'
import PersonDetails from '../PersonDetails'
import {
  Row,
  Col,
  Container } from 'reactstrap';
  import './Dashboard.css';

function Dashboard() {

  const [person, setPerson] = React.useState<any>({species: [], films: []})
  const [filmApperances, setFilmApperances] = React.useState<any>([])
  const [films, setFilms] = React.useState<any>([])
  const [species, setSpecies] = React.useState<object>({})

  const setSelectedPerson = (person:object) => {
    setPerson(person)
  }

  const sortFilms = () => {
    const characterFilms = person.films
    const allFilms = films.results
    const filmInfo = characterFilms.map((f: any) => allFilms.find((af: any) => {return af.url === f}))
    setFilmApperances(filmInfo)
  }

  const getSpecies = async () => {
    const speciesUrls = person?.species
    if (speciesUrls.length > 0) {
      const speciesId = speciesUrls[0].split('api/')
      fetchJson<{ results: SpeciesType[] }>(`${speciesId[1]}`)
        .then(speciesResponse => {
          setSpecies(speciesResponse)
        })
    } else {
      setSpecies({name: 'n/a'})
    }
  }

  React.useEffect(() => {
    fetchJson<{ results: any }>('films')
      .then(filmResponse => {
        setFilms(filmResponse)
      })
  }, [])

  React.useEffect(() => {
    getSpecies()
    sortFilms()
  }, [person])


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
        <Col className='person-details'>
          <PersonDetails
            filmApperances={filmApperances}
            species={species}
            person={person} />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
