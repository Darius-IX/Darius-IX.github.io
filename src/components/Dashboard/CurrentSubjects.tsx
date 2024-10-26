import "simplebar-react/dist/simplebar.min.css";
import SimpleBarReact from "simplebar-react";
import "../../simplebars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
// https://github.com/KingSora/OverlayScrollbars/tree/master/packages/overlayscrollbars-react
// might check this as well, more use cases (body, ifram etc)
const CurrentSubjects = () => {
  const currentSubjectsExamples = [
    "Fach A",
    "Fach B",
    "Fach C",
    "Fach D",
    "Fach E",
    "Fach F",
    "Fach G",
    "Fach H",
    "Fach I",
    "Fach J",
  ];
  return (
    //DRAWING ORDER: IN FRONT OF NAVBAR!
    <OverlayScrollbarsComponent
      className="border-2 border-primary overflow-y-auto max-h-60 rounded-xl bg-accent-light"
      defer
    >
      <h2 className="text-center font-semibold">Fächer</h2>
      <h6>
        (Automatisch Fächer des aktuellen Semesters hier rein + Möglichkeit
        weitere Fächer hinzuzufügen)
      </h6>
      <hr />
      <ul className="pl-4">
        {currentSubjectsExamples.map((subject) => {
          return <li key={subject}>{subject}</li>;
        })}
      </ul>
    </OverlayScrollbarsComponent>
  );
  return (
    <SimpleBarReact
      forceVisible="y"
      autoHide={false}
      className="border-2 border-primary max-h-60 rounded-xl bg-accent-light"
    >
      {/* <div className="w-96 max-h-56 bg-accent-light shrink-0 overflow-y-auto"> */}
      <h2 className="text-center font-semibold">Fächer</h2>
      <h6>
        (Automatisch Fächer des aktuellen Semesters hier rein + Möglichkeit
        weitere Fächer hinzuzufügen)
      </h6>
      <hr />
      <ul className="pl-4">
        {currentSubjectsExamples.map((subject) => {
          return <li key={subject}>{subject}</li>;
        })}
      </ul>
    </SimpleBarReact>
  );
  return (
    <div className="overflow-y-auto border-2 border-primary max-h-60 rounded-xl bg-accent-light">
      {/* <div className="w-96 max-h-56 bg-accent-light shrink-0 overflow-y-auto"> */}
      <h2 className="text-center font-semibold">Fächer</h2>
      <h6>
        (Automatisch Fächer des aktuellen Semesters hier rein + Möglichkeit
        weitere Fächer hinzuzufügen)
      </h6>
      <hr />
      <ul className="pl-4">
        {currentSubjectsExamples.map((subject) => {
          return <li key={subject}>{subject}</li>;
        })}
      </ul>
    </div>
  );
};

export default CurrentSubjects;
