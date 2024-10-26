import "../../scrollbars.css";

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
    <div className="bg-accent-light border-2 border-primary rounded-xl">
      {/* <div className="overflow-y-auto  max-h-60 scrollbar-thin scrollbar-webkit m-1"> */}
      <div className="overflow-y-auto  max-h-60 mr-2 dashboard-grid-scrollbar">
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
    </div>
  );
};

export default ContinueExam;
