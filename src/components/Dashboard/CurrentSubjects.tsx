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
    <div className="bg-accent-light overflow-y-auto border-2 border-primary max-h-60 rounded-xl">
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
