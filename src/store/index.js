import { proxy } from "valtio";
const state = proxy({
  intro: true,
  color: "#d3e3fd",
  isLogotexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});
export default state;
