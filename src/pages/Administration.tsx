import "./Administration.scss";

const Administration = () => {
  return (
    <div className="administration-page">
      <div className="text-div">Button nur anzeigen wenn rolle</div>
      <div className="text-div">Dropdown je nach rolle?</div>
      <div>
        Hier dann Uploader (kümmert sich um formatieren der docs + upload)
      </div>
      <div>Freischalter (freischalten von beitrittsanfragen)</div>
      <div>Rollenverwalter (verwaltet rollen außer Admin)</div>
      <div>Admin (Chef über ALLE rollen)</div>
    </div>
  );
};

export default Administration;
