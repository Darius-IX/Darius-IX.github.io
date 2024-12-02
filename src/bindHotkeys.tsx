import { useHotkeys } from "react-hotkeys-hook";
import { NavigateFunction, useNavigate } from "react-router-dom";

const hotkeyToLink: { [key: string]: string } = {
  d: "/dashboard",
  p: "/profil",
  v: "/verwaltung",
  e: "/einstellungen",
};

function ChangePage(hotkey: string, navigate: NavigateFunction) {
  console.log("ChangePage", hotkey);
  if (!(hotkey in hotkeyToLink)) {
    return;
  }
  navigate(hotkeyToLink[hotkey], { replace: true });
}

function HotkeyAction(hotkey: string, navigate: NavigateFunction) {
  console.log(hotkey);
  if (Object.keys(hotkeyToLink).includes(hotkey)) {
    ChangePage(hotkey, navigate);
  }
  switch (hotkey) {
  }
}

const bindHotkeys = () => {
  const navigate = useNavigate();
  const allHotkeys = Object.keys(hotkeyToLink);
  allHotkeys.forEach((hotkey) => {
    useHotkeys(hotkey, () => HotkeyAction(hotkey, navigate));
  });
};

export default bindHotkeys;
