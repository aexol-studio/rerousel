import React from "../../../_snowpack/pkg/react.js";
import {media, style} from "../../../_snowpack/pkg/typestyle.js";
import rerousel_logo from "../assets/images/rerousel-logo.svg.proxy.js";
const Container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "400px",
  backgroundColor: "#282C34"
}, media({maxWidth: 800}, {height: "350px"}));
const HeroItems = style({
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center"
});
const Logo = style({
  height: "200px"
}, media({maxWidth: 800}, {width: "300px"}));
const Button = style({
  height: "60px",
  width: "200px",
  backgroundColor: "transparent",
  border: "4px solid #61DAFB",
  color: "#FFF",
  fontFamily: "Signika, sans-serif",
  fontSize: "18px",
  fontWeight: "lighter",
  transition: "0.5s",
  marginTop: "20px",
  cursor: "pointer",
  $nest: {
    "&:hover": {
      backgroundColor: "#61DAFB",
      color: "#000",
      fontWeight: "bold"
    }
  }
}, media({maxWidth: 800}, {
  marginTop: "10px",
  height: "50px",
  width: "200px",
  fontSize: "15px"
}));
export const Hero = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: Container
  }, /* @__PURE__ */ React.createElement("div", {
    className: HeroItems
  }, /* @__PURE__ */ React.createElement("img", {
    className: Logo,
    src: rerousel_logo
  }), /* @__PURE__ */ React.createElement("button", {
    className: Button
  }, "Show me the way >")));
};
