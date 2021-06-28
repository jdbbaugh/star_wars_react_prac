import { PersonType } from '../../types';
import { ListGroupItem } from 'reactstrap';

interface PersonProps {
  setSelectedPerson: any
  person: PersonType
}

function Person({ person, setSelectedPerson }: PersonProps) {
  return <ListGroupItem tag="a"><a onClick={() => setSelectedPerson(person)}>{person.name}</a></ListGroupItem>
}

export default Person
