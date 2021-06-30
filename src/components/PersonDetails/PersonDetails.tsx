import { FilmType } from '../../types'
import Person from '../Person'
import {
  Row,
  Col,
} from 'reactstrap';

const CHARACTER_TRAITS = ['birth_year:','eye_color:','gender:','hair_color:','height:','mass:' ,'skin_color:']

interface PersonDetailProps {
  filmApperances: any
  species: any
  person: any
}

function PersonDetails({ filmApperances, person, species }: PersonDetailProps) {
  return (
    <>
      <Row>
        <Col className='person-name'>
          {person.name}
        </Col>
      </Row>
      <Row>
        <Col className='offset-sm-2 mt-5'>Birth_year: {person.birth_year}</Col>
        <Col className='offset-sm-2 mt-5'>Eye_color: {person.eye_color}</Col>
      </Row>
      <Row>
        <Col className='offset-sm-2 mt-5'>Gender: {person.gender}</Col>
        <Col className='offset-sm-2 mt-5'>Hair_color: {person.hair_color}</Col>
      </Row>
      <Row>
        <Col className='offset-sm-2 mt-5'>Height: {person.height}</Col>
        <Col className='offset-sm-2 mt-5'>Mass: {person.mass}</Col>
      </Row>
      <Row>
        <Col className='offset-sm-2 mt-5'>Species: {species.name}</Col>
      </Row>
      <Row>
        <Col className='offset-sm-2 mt-5'>Films: {filmApperances.map((f:any) => {return <div className='movie-title'>{f.title}: {f.release_date}</div>})}</Col>
      </Row>
    </>
  )
}

export default PersonDetails
