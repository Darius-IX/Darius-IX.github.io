const TestPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex grid grid-cols-1 xs:grid-cols-2 gap-2 bg-gradient-to-r from-accent-light via-accent-dark via-95% to-primary p-4 rounded-md">
        <div className="bg-light">A AAAAAAAAAAAAAA</div>
        <div className="bg-contrast">B AAAAAAAAAAAAAA</div>
        <div className="bg-accent-light">C AAAAAAAAAAAAAA</div>
        <div className="bg-primary">D AAAAAAAAAAAAAA</div>

        {/* <h3>Benutzername</h3>
        <input className="pl-1" defaultValue={"Admin"}></input>
        <h3>Passwort</h3>
        <input className="pl-1" defaultValue={"PWAdmin"}></input> */}
        {/* <div className="xs:col-span-2 flex flex-col items-center">
          <NavLink
            className="border-primary rounded-md border-2 bg-accent-dark w-32 text-center hover:underline"
            to={"/dashboard"}
          >
            Anmelden
          </NavLink>
        </div>
        <div className="xs:col-span-2 flex flex-col items-center">
          <NavLink
            className="border-primary rounded-md border-2 bg-accent-dark w-32 text-center hover:underline"
            to={"/registration"}
          >
            Registrieren
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default TestPage;
