const InputFieldsWithLabel = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 max-w-lg gap-1">
      <h3>Nutzername</h3>
      <input className="rounded-md pl-1" type="text" defaultValue="Maxim" />
      <h3>Vorname</h3>
      <input
        className="rounded-md pl-1"
        type="text"
        defaultValue="Max"
        disabled={true}
      />
      <h3>Nachname</h3>
      <input
        className="rounded-md pl-1"
        type="text"
        defaultValue="Mustermann"
        disabled={true}
      />
      <h3>E-Mail</h3>
      <input
        className="rounded-md pl-1"
        type="text"
        defaultValue="max.mustermann@ude.de"
      />
    </div>
  );
};

export default InputFieldsWithLabel;
