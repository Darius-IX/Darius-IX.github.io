const RecentExams = () => {
  const recentExamExamples = [
    "Klausur U",
    "Klausur V",
    "Klausur W",
    "Klausur X",
    "Klausur Y",
    "Klausur Z",
  ];
  return (
    <div className="bg-accent-light overflow-y-auto border-2 border-primary max-h-60">
      {/* <div className="w-96 max-h-56 bg-accent-light shrink-0 overflow-y-auto"> */}
      <h2 className="text-center font-semibold">Zuletzt beantwortet</h2>
      <h6>(letzten 5 (?) Klausuren die vollständig bearbeitet wurden)</h6>
      <hr />
      <ul className="pl-4">
        {recentExamExamples.slice(-5).map((exam) => {
          return <li key={exam}>{exam}</li>;
        })}
      </ul>
    </div>
  );
};

export default RecentExams;
