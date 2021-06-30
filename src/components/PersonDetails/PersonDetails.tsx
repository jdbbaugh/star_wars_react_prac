import React from 'react'

import { fetchJson } from '../../api'
import { FilmType } from '../../types'
import Person from '../Person'
import {
  Row,
  Col,
} from 'reactstrap';

const CHARACTER_TRAITS = ['birth_year:','eye_color:','gender:','hair_color:','height:','mass:' ,'skin_color:']

interface PersonDetailProps {
  person: any
}

function PersonDetails({ person }: PersonDetailProps) {
  const [people, setFilms] = React.useState<FilmType[]>([])

  React.useEffect(() => {
    fetchJson<{ results: FilmType[] }>('films')
      .then(peopleResponse => {
        sortFilms(peopleResponse.results)
      })
  }, [])

//   const updat
//  details plus films and species

const sortFilms = (taco:any) => {
  console.log(`taco`, taco)

}



  return (
    <>
      <Row>
        <Col className='person-name'>
          {person.name}
        </Col>
      </Row>
      <Row>
        <Col className='offset-sm-2 mt-5'>birth_year: {person.birth_year}</Col>
        <Col className='offset-sm-2 mt-5'>eye_color: {person.eye_color}</Col>
      </Row>
      <Row>
        <Col className='offset-sm-2 mt-5'>gender: {person.gender}</Col>
        <Col className='offset-sm-2 mt-5'>hair_color: {person.hair_color}</Col>
      </Row>
      <Row>
        <Col className='offset-sm-2 mt-5'>height: {person.height}</Col>
        <Col className='offset-sm-2 mt-5'>mass: {person.mass}</Col>
      </Row>
      <Row>
        <Col className='offset-sm-2 mt-5'>species:</Col>
      </Row>
      <Row>
        <Col className='offset-sm-2 mt-5'>films:</Col>
      </Row>
    </>
  )
}

export default PersonDetails
