import { useParams } from "react-router-dom";
import { examplePeople, Person } from "./Administration";

function GetErrorGetPerson(error_name: string): Person {
  const defaultPerson = {
    id: -1,
    name: error_name,
    roles: [],
    studySubject: "-",
  };

  return defaultPerson;
}

function GetPersonWithId(id: string | undefined): Person {
  if (id == undefined) {
    return GetErrorGetPerson("id undefined");
  }

  const parseResult = Number(id);
  if (isNaN(parseResult)) {
    return GetErrorGetPerson("id not a number: " + id);
  }

  const idNumber = parseResult;

  const result = examplePeople.filter((person) => person.id === idNumber);
  if (result.length > 1) {
    // TODO proper error handling
    GetErrorGetPerson("id not unique: " + idNumber);
  }
  if (result.length === 0) {
    GetErrorGetPerson("Did not find person with id: " + idNumber);
  }
  return result[0];
}

const ForeignProfile = () => {
  const { id } = useParams();
  const person = GetPersonWithId(id);
  return (
    <div>
      <div>
        {person.name} - {person.roles}
      </div>
    </div>
  );
};

export default ForeignProfile;
