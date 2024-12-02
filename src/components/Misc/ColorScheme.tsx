interface Color {
  name: string;
  value: string;
}

class ColorScheme {
  colors: Color[];
  schemeName: string;

  constructor(colors: Color[], schemeName: string) {
    if (colors.length !== 8) {
      throw new Error("A color scheme must have exactly 8 colors.");
    }
    this.colors = colors;
    this.schemeName = schemeName;
  }

  getColors(): Color[] {
    return this.colors;
  }

  getColorByName(name: string): Color {
    const col = this.colors.find((color) => color.name === name);
    if (!col) {
      return { name: "default", value: "white" };
    }
    return col;
  }

  getSchemeName(): string {
    return this.schemeName;
  }

  updateColor(name: string, newValue: string): void {
    const color = this.getColorByName(name);
    if (color) {
      color.value = newValue;
    } else {
      throw new Error(`Color with name "${name}" not found.`);
    }
  }
}

const SchemeLightBlue = new ColorScheme(
  [
    { name: "primary", value: "#031927" },
    { name: "accent-light", value: "#9DD1F1" },
    { name: "accent-dark", value: "#508AA8" },
    { name: "light", value: "#C8E0F4" },
    { name: "contrast", value: "#F2D1C9" },
    { name: "slate", value: "slate-100" },
    { name: "white", value: "white" },
    { name: "black", value: "black" },
  ],
  "light-blue"
);

const SchemeRedPurple = new ColorScheme(
  [
    { name: "primary", value: "#800020" },
    { name: "accent-light", value: "#FF99CC" },
    { name: "accent-dark", value: "#660000" },
    { name: "light", value: "#FADADD" },
    { name: "contrast", value: "#FF6FFF" },
    { name: "slate", value: "#E6E6FA" },
    { name: "white", value: "white" },
    { name: "black", value: "black" },
  ],
  "red-purple"
);

const allColorSchmes = [SchemeLightBlue, SchemeRedPurple];
export { allColorSchmes };
export { ColorScheme };
