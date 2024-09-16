const Chat = () => {
  return (
    <div className="bg-accent-light overflow-y-auto border-2 border-primary rounded-xl p-2">
      {/* <div className="w-96 max-h-56 bg-accent-light shrink-0 overflow-y-auto"> */}
      <h2 className="text-center font-semibold">Chat</h2>
      <h6>
        (Hier in klein, mit button zum anheften als Sidebar (über komplette höhe
        rechts))
      </h6>
      <hr />
      <div>Nutzer A: Hi</div>
      <div>Nutzer B: Wo?</div>
      <hr />
      <i>Nachricht schreiben...</i>
    </div>
  );
};

export default Chat;
