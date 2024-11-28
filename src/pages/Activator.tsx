import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

type Application = {
  id: number;
  value: string;
};

const exampleNewPeople: Application[] = [
  { id: 0, value: "Max Mustermann, 1.10.2024 10.52 Uhr, Bescheinigung hier" },
  { id: 1, value: "Erika Mustermann, 2.10.2024 9.34 Uhr, persönlich" },
  { id: 2, value: "Max Mustermann, 3.10.2024 10.52 Uhr, Bescheinigung hier" },
  { id: 3, value: "Erika Mustermann, 4.10.2024 9.34 Uhr, persönlich" },
  { id: 4, value: "Max Mustermann, 5.10.2024 10.52 Uhr, Bescheinigung hier" },
  { id: 5, value: "Erika Mustermann, 6.10.2024 9.34 Uhr, persönlich" },
  { id: 6, value: "Max Mustermann, 7.10.2024 10.52 Uhr, Bescheinigung hier" },
  { id: 7, value: "Erika Mustermann, 8.10.2024 9.34 Uhr, persönlich" },
  { id: 8, value: "Max Mustermann, 9.10.2024 10.52 Uhr, Bescheinigung hier" },
  { id: 9, value: "Erika Mustermann, 10.10.2024 9.34 Uhr, persönlich" },
  { id: 10, value: "Max Mustermann, 1.11.2024 11.52 Uhr, Bescheinigung hier" },
  { id: 11, value: "Erika Mustermann, 2.11.2024 9.34 Uhr, persönlich" },
  { id: 12, value: "Max Mustermann, 3.11.2024 11.52 Uhr, Bescheinigung hier" },
  { id: 13, value: "Erika Mustermann, 4.11.2024 9.34 Uhr, persönlich" },
  { id: 14, value: "Max Mustermann, 5.11.2024 11.52 Uhr, Bescheinigung hier" },
  { id: 15, value: "Erika Mustermann, 6.11.2024 9.34 Uhr, persönlich" },
  { id: 16, value: "Max Mustermann, 7.11.2024 11.52 Uhr, Bescheinigung hier" },
  { id: 17, value: "Erika Mustermann, 8.11.2024 9.34 Uhr, persönlich" },
  { id: 18, value: "..." },
];

const Activator = () => {
  const [pendingApplications, setPendingApplications] =
    useState<Application[]>(exampleNewPeople);
  const [acceptedApplications, setAcceptedApplications] = useState<
    Application[]
  >([]);
  const [declinedApplications, setDeclinedApplications] = useState<
    Application[]
  >([]);

  function AcceptApplication(applicationID: number) {
    const application = pendingApplications.find(
      (appl) => appl.id === applicationID
    );
    if (!application) return;
    setAcceptedApplications((prev) => [...prev, application]);
    setPendingApplications((prev) =>
      prev.filter((app) => app.id !== applicationID)
    );
    // const updatedList = pendingApplications.filter(
    //   (application) => application.id !== applicationID
    // );
    // setPendingApplications(updatedList);
  }

  function DeclineApplication(applicationID: number) {
    const application = pendingApplications.find(
      (appl) => appl.id === applicationID
    );
    if (!application) return;
    setDeclinedApplications((prev) => [...prev, application]);
    const updatedList = pendingApplications.filter(
      (application) => application.id !== applicationID
    );
    setPendingApplications(updatedList);
  }

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center pb-4">Freischalter</h1>
      <div className="w-full justify-center flex">
        <div>
          <div className="bg-accent-light border-2 border-primary rounded-xl max-w-[1440px]">
            {/* <div className="w-96 max-h-56 bg-accent-light shrink-0 overflow-y-auto"> */}
            <h2 className="text-center font-semibold">Offene Anträge</h2>
            <hr />
            <OverlayScrollbarsComponent
              className="overflow-y-auto  max-h-[600px] rounded-xl bg-accent-light px-4"
              options={{
                scrollbars: {
                  autoHide: "move",
                  autoHideDelay: 1000,
                  autoHideSuspend: true,
                },
              }}
              defer
            >
              {exampleNewPeople.map((application) => {
                return (
                  <div key={application.id} className="text-xl">
                    <div className="grid grid-cols-9 gap-6">
                      <div className="col-span-7">{application.value}</div>
                      <button
                        id="accept-button"
                        className="bx bx-check w-fit content-center"
                        onClick={() =>
                          AcceptApplication(
                            application.id
                            // pendingApplications,
                            // () => setPendingApplications
                          )
                        }
                      ></button>
                      <Tooltip anchorSelect="#accept-button">
                        Akzeptieren
                      </Tooltip>
                      <button
                        id="decline-button"
                        className="bx bx-x w-fit content-center"
                        onClick={() => DeclineApplication(application.id)}
                      ></button>
                      <Tooltip anchorSelect="#decline-button">Ablehnen</Tooltip>
                    </div>
                  </div>
                );
              })}
            </OverlayScrollbarsComponent>
          </div>
          <div className="bg-accent-light border-2 border-primary rounded-xl max-w-[1440px]">
            {/* <div className="w-96 max-h-56 bg-accent-light shrink-0 overflow-y-auto"> */}
            <h2 className="text-center font-semibold">Angenommene Anträge</h2>
            <hr />
            <OverlayScrollbarsComponent
              className="overflow-y-auto  max-h-[600px] rounded-xl bg-accent-light px-4"
              options={{
                scrollbars: {
                  autoHide: "move",
                  autoHideDelay: 1000,
                  autoHideSuspend: true,
                },
              }}
              defer
            >
              {acceptedApplications.map((application) => {
                return (
                  <div key={application.id} className="text-xl">
                    <div className="grid grid-cols-9 gap-6">
                      <div className="col-span-7">{application.value}</div>
                    </div>
                  </div>
                );
              })}
            </OverlayScrollbarsComponent>
          </div>
          <div className="bg-accent-light border-2 border-primary rounded-xl max-w-[1440px]">
            {/* <div className="w-96 max-h-56 bg-accent-light shrink-0 overflow-y-auto"> */}
            <h2 className="text-center font-semibold">Abgelehnte Anträge</h2>
            <hr />
            <OverlayScrollbarsComponent
              className="overflow-y-auto  max-h-[600px] rounded-xl bg-accent-light px-4"
              options={{
                scrollbars: {
                  autoHide: "move",
                  autoHideDelay: 1000,
                  autoHideSuspend: true,
                },
              }}
              defer
            >
              {declinedApplications.map((application) => {
                return (
                  <div key={application.id} className="text-xl">
                    <div className="grid grid-cols-9 gap-6">
                      <div className="col-span-7">{application.value}</div>
                    </div>
                  </div>
                );
              })}
            </OverlayScrollbarsComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activator;
