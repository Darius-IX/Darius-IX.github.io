import Chat from "../components/Dashboard/Chat";
import ContinueExam from "../components/Dashboard/ContinueExam";
import CurrentSubjects from "../components/Dashboard/CurrentSubjects";
import News from "../components/Dashboard/News";
import RecentExams from "../components/Dashboard/RecentExams";
import Statistics from "../components/Dashboard/Statistics";

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-xl font-semibold">Dashboard</h1>
      <h6>
        (Alle sachen mit Fragezeichen Icon über das man hovern kann für info
        text, endboss feature: Nutzende können Dashboard selber bearbeiten, also
        layout (stelle mir ein gitter vor, wo man ggf auch dinge über mehrere
        Zellen machen kann))
      </h6>
      <div className="gap-4 grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
        <ContinueExam></ContinueExam>
        <RecentExams></RecentExams>
        <CurrentSubjects></CurrentSubjects>
        <Statistics></Statistics>
        <Chat></Chat>
        <News></News>
      </div>
    </div>
  );
};

export default Dashboard;
