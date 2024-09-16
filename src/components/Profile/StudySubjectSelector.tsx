import { useState } from "react";

function selectedStudySubject(
  subject: string,
  setStudySubject: React.Dispatch<React.SetStateAction<string>>,
  setShowStudySubjectDropDown: React.Dispatch<React.SetStateAction<boolean>>
) {
  setStudySubject(subject);
  setShowStudySubjectDropDown(false);
}

const StudySubjectSelector = () => {
  const studySubjects = ["Humanmedizin", "Biochemie"];
  const [studySubject, setStudySubject] = useState("Studiengang wählen");
  const [showStudySubjectDropDown, setShowStudySubjectDropDown] =
    useState(false);

  return (
    <div>
      <div className="flex">
        <button
          className="border-2 rounded-lg px-3 py-1 w-40 flex bg-accent-light text-lg"
          onClick={() => setShowStudySubjectDropDown(!showStudySubjectDropDown)}
        >
          <div className="flex w-full justify-between">
            <div>{studySubject}</div>
            <div>
              <i
                className={
                  showStudySubjectDropDown
                    ? "bx bx-chevron-down text-xl"
                    : "bx bx-chevron-up text-xl"
                }
              ></i>
            </div>
          </div>
        </button>
      </div>
      {showStudySubjectDropDown && (
        <div className="absolute">
          <div className="p-0.5"></div>
          <div className="flex-col border-2 rounded-lg border-primary w-min bg-accent-light">
            {studySubjects.map((subject, index) => {
              return (
                <div className="">
                  <button
                    className={`${index === 0 ? "mt-1" : ""} ${
                      index === studySubjects.length - 1 ? "mb-1" : ""
                    }
                  p-1 w-32 hover:bg-accent-dark`}
                    onClick={() =>
                      selectedStudySubject(
                        subject,
                        setStudySubject,
                        setShowStudySubjectDropDown
                      )
                    }
                  >
                    {subject}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudySubjectSelector;
