import { allColorSchemes, ColorScheme } from "../components/Misc/ColorScheme";

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
        {allColorSchemes.map((colorScheme) => (
          <div className="flex justify-between p-2 bg-[#a0a0a0]">
            {/* <div className="peer/parent_button px-3 py-2 hover:bg-accent-light rounded-lg cursor-pointer"> */}
            <button
              className="rounded-lg hover:underline cursor-pointer"
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
