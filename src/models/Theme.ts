interface Theme {
  name: string;
  navbar: Color;
  sidebar: Color;
}

interface Color {
  background: string;
  foreground?: string;
}

export default Theme;
