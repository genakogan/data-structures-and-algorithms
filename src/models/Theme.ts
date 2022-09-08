interface Theme {
  name: string;
  navbar: Color;
  sidebar: Color;
  slider: Color;
  canvas: Color;
  nodeActive: Color;
  nodeInactive: Color;
  edge: Color;
}

interface Color {
  background: string;
  foreground?: string;
}

export default Theme;
