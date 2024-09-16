const ChangePassword = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 max-w-lg gap-1">
      <h3>Altes Passwort</h3>
      <input className="rounded-md pl-1" type="text" />
      <h3>Neues Passwort</h3>
      <input className="rounded-md pl-1" type="text" />
      <h3>Neues Passwort wiederholen</h3>
      <input className="rounded-md pl-1" type="text" />
    </div>
  );
};

export default ChangePassword;
