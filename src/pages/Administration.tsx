import { NavigateFunction, useNavigate } from "react-router-dom";
import "./Administration.scss";

export interface Person {
  id: number;
  name: string;
  studySubject: string;
  roles: string[];
}

const examplePeople: Person[] = [
  {
    id: 1,
    name: "Max Mustermann",
    studySubject: "Humanmedizin",
    roles: ["Student", "Uploaden", "Freischalten", "Admin", "Rollenverwalten"],
  },
  {
    id: 2,
    name: "Erika Musterfrau",
    studySubject: "Medizinbiologie",
    roles: ["Student", "Uploaden", "Freischalten", "Admin", "Rollenverwalten"],
  },
  {
    id: 3,
    name: "James Dursley",
    studySubject: "Humanmedizin",
    roles: ["Student"],
  },
  {
    id: 4,
    name: "Monica Smith",
    studySubject: "Humanmedizin",
    roles: ["Gast"],
  },
];

function onDoubleClickMember(person: Person, navigate: NavigateFunction) {
  // show details of Member (Profile etc?)
  console.log(person.name);
  navigate(`/person/${person.id}`);
}

const Administration = () => {
  const navigate = useNavigate();
  return (
    <div className="administration-page">
      <div>
        <div className="member-list">
          {examplePeople.map((person) => (
            <div className="member-entry hover:underline">
              <button
                onDoubleClick={() => onDoubleClickMember(person, navigate)}
              >
                {person.name} - {person.studySubject}
              </button>
              {/* symbols for role and study subject */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Administration;
export { examplePeople };
