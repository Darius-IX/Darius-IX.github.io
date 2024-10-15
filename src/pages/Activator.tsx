import { Tooltip } from "react-tooltip";

const Activator = () => {
  const exampleNewPeople = [
    "Max Mustermann, 17.10.2024 10.52 Uhr, Bescheinigung hier",
    "Erika Mustermann, 20.10.2024 9.34 Uhr, persönlich",
    "Max Mustermann, 17.10.2024 10.52 Uhr, Bescheinigung hier",
    "Erika Mustermann, 20.10.2024 9.34 Uhr, persönlich",
    "Max Mustermann, 17.10.2024 10.52 Uhr, Bescheinigung hier",
    "Erika Mustermann, 20.10.2024 9.34 Uhr, persönlich",
    "Max Mustermann, 17.10.2024 10.52 Uhr, Bescheinigung hier",
    "Erika Mustermann, 20.10.2024 9.34 Uhr, persönlich",
    "Max Mustermann, 17.10.2024 10.52 Uhr, Bescheinigung hier",
    "Erika Mustermann, 20.10.2024 9.34 Uhr, persönlich",
    "Max Mustermann, 17.10.2024 10.52 Uhr, Bescheinigung hier",
    "Erika Mustermann, 20.10.2024 9.34 Uhr, persönlich",
    "Max Mustermann, 17.10.2024 10.52 Uhr, Bescheinigung hier",
    "Erika Mustermann, 20.10.2024 9.34 Uhr, persönlich",
    "Max Mustermann, 17.10.2024 10.52 Uhr, Bescheinigung hier",
    "Erika Mustermann, 20.10.2024 9.34 Uhr, persönlich",
    "Max Mustermann, 17.10.2024 10.52 Uhr, Bescheinigung hier",
    "Erika Mustermann, 20.10.2024 9.34 Uhr, persönlich",
    "...",
  ];
  return (
    <div className="p-4">
      <h1 className="text-4xl text-center">Freischalter</h1>
      <div className="bg-accent-light overflow-y-auto border-2 border-primary max-h-screen rounded-xl w-fit">
        {/* <div className="w-96 max-h-56 bg-accent-light shrink-0 overflow-y-auto"> */}
        <h2 className="text-center font-semibold">Offene Anträge</h2>
        <hr />
        <ul className="px-4">
          {exampleNewPeople.map((application) => {
            return (
              <li key={application} className="text-xl">
                <div className="grid grid-cols-9 gap-6">
                  <div className="col-span-7">{application}</div>
                  <button
                    id="accept-button"
                    className="bx bx-check w-fit content-center"
                  ></button>
                  <Tooltip anchorSelect="#accept-button">Akzeptieren</Tooltip>
                  <button
                    id="decline-button"
                    className="bx bx-x w-fit content-center"
                  ></button>
                  <Tooltip anchorSelect="#decline-button">Ablehnen</Tooltip>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Activator;
