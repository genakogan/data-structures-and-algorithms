import Theme from "../models/Theme";

const dark: Theme = {
  name: "dark",
  navbar: {
    background: "#29323c",
    foreground: "white",
  },
  sidebar: {
    background: "white",
    foreground: "#0D1929",
  },
  slider: {
    background: 'white',
    foreground: 'white',
  },
  canvas: {
    background: '#0D1929',
  },
  nodeActive: {
    background: '#02E095',
    foreground: 'white',
  },
  nodeInactive: {
    background: '#29323c',
    foreground: 'white',
  },
  edge: {
    background: 'white',
  },
};

export default dark;
