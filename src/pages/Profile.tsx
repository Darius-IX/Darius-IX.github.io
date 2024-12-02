import InputFieldsWithLabel from "../components/Profile/InputFieldsWithLabel";
import StudySubjectSelector from "../components/Profile/StudySubjectSelector";
import ChosenSemesterSelector from "../components/Profile/ChosenSemesterSelector";
import ChangePassword from "../components/Profile/ChangePassword";
import DeleteProfile from "../components/Profile/DeleteProfile";
import NavbarButton from "../components/Navbar/NavbarButton";

const Profile = () => {
  return (
    <div className="p-4">
      <InputFieldsWithLabel></InputFieldsWithLabel>
      <div>
        "Eine Änderung des Vor- oder Nachnamen ist nur durch einen Admin
        möglich. Wende dich damit bitte an FSR@UDE.de (kann man den Rest
        ändern?)"
      </div>
      <hr className="my-1" />
      <div className="xs:flex">
        <div>
          <h3 className="text-center">Studiengang</h3>
          <StudySubjectSelector></StudySubjectSelector>
        </div>
        <div className="p-1"></div>
        <div>
          <h3 className="text-center">Semester</h3>
          <ChosenSemesterSelector></ChosenSemesterSelector>
        </div>
      </div>
      <div>
        Wollen wir mehrere Semester gleichzeitig supporten? wenn man reihenfolge
        ändert...
      </div>
      <hr className="my-1" />
      <ChangePassword></ChangePassword>
      <hr className="my-1" />
      <DeleteProfile></DeleteProfile>
      <hr className="my-1" />
      <div className="flex my-1">
        <h3>Newsletter abonnieren</h3>
        <input className="mx-2 size-4 self-center" type="checkbox" />
      </div>
      <hr className="my-1" />
      <div className="flex justify-between">
        <button className="bg-accent-light p-2 rounded-md border-2">
          Änderung Speichern
        </button>
        <div className="bg-accent-light p-2 rounded-md border-2">
          <NavbarButton
            label="Einstellungen"
            route="/einstellungen"
          ></NavbarButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
