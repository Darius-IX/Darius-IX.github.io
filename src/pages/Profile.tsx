const Profile = () => {
  return (
    <div className="gap-4 grid grid-cols-3">
      <div className="size-16 shrink-0 bg-accent-light text-center content-center">
        A
      </div>
      <div className="size-16 shrink-0 bg-accent-light text-center content-center">
        B
      </div>
      <div className="size-16 shrink-0 bg-accent-light text-center content-center">
        C
      </div>
      <div className="size-16 shrink-0 bg-accent-light text-center content-center">
        D
      </div>
      <div className="size-16 shrink-0 bg-accent-light text-center content-center">
        E
      </div>
      <div className="size-16 shrink-0 bg-accent-light text-center content-center">
        F
      </div>
    </div>
  );
  return (
    <div>
      <div>Daten (Nutzername, Vorname, Nachname)</div>
      <div>Semester wählen</div>
      <div>Studiengang wählen</div>
      <div>Email</div>
      <div>Newsletter abonieren</div>
      <div>Passwort ändern</div>
      <div>Profil Löschen (mit Sicherheitseingabe "Löschen")</div>
    </div>
  );
};

export default Profile;
