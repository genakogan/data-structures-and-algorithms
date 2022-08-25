interface Theme {
  name: string;
  navbar: Color;
  sidebar: Color;
  slider: Color;
}

interface Color {
  background: string;
  foreground?: string;
}

export default Theme;
