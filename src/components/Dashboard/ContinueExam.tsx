const ContinueExam = () => {
  const continueExamExamples = [
    "Klausur A",
    "Klausur B",
    "Klausur C",
    "Klausur D",
    "Klausur E",
    "Klausur F",
    "Klausur G",
    "Klausur H",
    "Klausur I",
    "Klausur J",
    "Klausur K",
    "Klausur L",
  ];

  return (
    <div className="bg-accent-light overflow-y-auto border-2 border-primary max-h-60">
      {/* <div className="w-96 max-h-56 bg-accent-light shrink-0 overflow-y-auto"> */}
      <h2 className="text-center font-semibold">Klausur fortsetzen</h2>
      <h6>
        (Button an Klausuren für "als angefangen markieren", damit Klausuren
        hier auftauchen für später)
      </h6>
      <hr />
      <ul className="pl-4">
        {continueExamExamples.map((exam) => {
          return <li key={exam}>{exam}</li>;
        })}
      </ul>
    </div>
  );
};

export default ContinueExam;
