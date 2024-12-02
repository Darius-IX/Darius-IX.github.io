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
    { name: "slate", value: "#E1E4E9" },
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

const SchemeGreen = new ColorScheme(
  [
    { name: "primary", value: "#2E8B57" }, // Sea green
    { name: "accent-light", value: "#98FB98" }, // Pale green
    { name: "accent-dark", value: "#006400" }, // Dark green
    { name: "light", value: "#C8FACC" }, // Light mint
    { name: "contrast", value: "#FFD700" }, // Golden yellow
    { name: "slate", value: "#DCE6D9" }, // Soft grayish-green
    { name: "white", value: "white" },
    { name: "black", value: "black" },
  ],
  "green"
);

const SchemeEarthyBrown = new ColorScheme(
  [
    { name: "primary", value: "#8B4513" }, // Saddle brown
    { name: "accent-light", value: "#D2B48C" }, // Tan
    { name: "accent-dark", value: "#5C4033" }, // Dark brown
    { name: "light", value: "#F5DEB3" }, // Wheat
    { name: "contrast", value: "#A0522D" }, // Sienna
    { name: "slate", value: "#EDE0D4" }, // Light beige
    { name: "white", value: "white" },
    { name: "black", value: "black" },
  ],
  "earthy-brown"
);

const allColorSchemes = [
  SchemeLightBlue,
  SchemeRedPurple,
  SchemeGreen,
  SchemeEarthyBrown,
];
export { allColorSchemes };
export { ColorScheme };
