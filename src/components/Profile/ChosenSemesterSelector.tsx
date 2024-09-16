import { useState } from "react";

function selectedChosenSemester(
  semester: string,
  setChosenSemester: React.Dispatch<React.SetStateAction<string>>,
  setShowChosenSemesterDropDown: React.Dispatch<React.SetStateAction<boolean>>
) {
  setChosenSemester(semester);
  setShowChosenSemesterDropDown(false);
}

const ChosenSemesterSelector = () => {
  const possibleSemesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
    "Semester 9",
    "Semester 10",
  ];

  const [chosenSemester, setChosenSemester] = useState("Semester wählen");
  const [showChosenSemesterDropDown, setShowChosenSemesterDropDown] =
    useState(false);

  return (
    <div className="">
      <div className="flex">
        <button
          className="border-2 rounded-lg px-3 py-1 w-40 flex bg-accent-light text-lg"
          onClick={() =>
            setShowChosenSemesterDropDown(!showChosenSemesterDropDown)
          }
        >
          <div className="flex w-full justify-between">
            <div>{chosenSemester}</div>
            <div>
              <i
                className={
                  showChosenSemesterDropDown
                    ? "bx bx-chevron-down text-xl"
                    : "bx bx-chevron-up text-xl"
                }
              ></i>
            </div>
          </div>
        </button>
      </div>
      {showChosenSemesterDropDown && (
        <div className="absolute">
          <div className="p-0.5"></div>
          <div className="flex-col border-2 rounded-lg border-primary w-min bg-accent-light overflow-y-auto overflow-x-hidden max-h-36">
            {possibleSemesters.map((semester, index) => {
              return (
                <div className="">
                  <button
                    className={`${index === 0 ? "mt-1" : ""} ${
                      index === possibleSemesters.length - 1 ? "mb-1" : ""
                    }
                    p-1 w-32 hover:bg-accent-dark text-sm`}
                    onClick={() =>
                      selectedChosenSemester(
                        semester,
                        setChosenSemester,
                        setShowChosenSemesterDropDown
                      )
                    }
                  >
                    {semester}
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

export default ChosenSemesterSelector;
