import { allColorSchmes, ColorScheme } from "../components/Misc/ColorScheme";

function SelectColorScheme(schemeName: ColorScheme) {
  schemeName.getColors().forEach((color) => {
    document.documentElement.style.setProperty(
      `--color-${color.name}`,
      color.value
    );
  });
}

const Settings = () => {
  return (
    <div className="p-4">
      <div className="text-center text-3xl">Settings</div>
      <ul className="">
        {allColorSchmes.map((colorScheme) => (
          <div className="flex justify-between">
            {/* <div className="peer/parent_button px-3 py-2 hover:bg-accent-light rounded-lg cursor-pointer"> */}
            <button
              className="px-3 py-2 rounded-lg cursor-pointer"
              onClick={() => SelectColorScheme(colorScheme)}
            >
              {colorScheme.getSchemeName()}
            </button>
            <ul className="flex">
              {colorScheme.getColors().map((color) => (
                <div
                  className="size-16 text-center"
                  style={{ backgroundColor: color.value }}
                >
                  {color.name}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Settings;
