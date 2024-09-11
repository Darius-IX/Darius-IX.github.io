import { useHotkeys } from "react-hotkeys-hook";
import { NavigateFunction, useNavigate } from "react-router-dom";

function ChangePage(hotkey: string, navigate: NavigateFunction) {
  console.log("ChangePage", hotkey);
  const hotkeyToLink: { [key: string]: string } = {
    d: "/",
    p: "/profil",
    v: "/verwaltung",
  };
  if (!(hotkey in hotkeyToLink)) {
    return;
  }
  navigate(hotkeyToLink[hotkey], { replace: true });
}

function HotkeyAction(hotkey: string, navigate: NavigateFunction) {
  console.log(hotkey);
  if (["d", "p", "v"].includes(hotkey)) {
    ChangePage(hotkey, navigate);
  }
  switch (hotkey) {
  }
}

const bindHotkeys = () => {
  const navigate = useNavigate();
  const allHotkeys = ["d", "p", "v"];
  allHotkeys.forEach((hotkey) => {
    useHotkeys(hotkey, () => HotkeyAction(hotkey, navigate));
  });
};

export default bindHotkeys;
