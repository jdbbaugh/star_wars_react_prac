import { PersonType } from '../../types';
import { ListGroupItem } from 'reactstrap';

interface PersonProps {
	setPerson: Function;
	person: PersonType;
}

function Person({ person, setPerson }: PersonProps) {
	return (
		<ListGroupItem className="people-list">
			<a onClick={() => setPerson(person)}>{person.name}</a>
		</ListGroupItem>
	);
}

export default Person;
