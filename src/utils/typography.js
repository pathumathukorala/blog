import Typography from "typography";
import altonTheme from "typography-theme-alton";

import gray from "gray-percentage";
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants";

altonTheme.baseFontSize = "16px";
altonTheme.googleFonts = [
  {
    name: "Domine",
    styles: ["700"]
  },
  {
    name: "Open Sans",
    styles: ["300", "400", "400i", "600", "700", "700i"]
  }
];
altonTheme.headerFontFamily = ["Open Sans", "sans-serif"];
altonTheme.headerWeight = 400;
altonTheme.bodyWeight = 300;
altonTheme.overrideStyles = ({ adjustFontSizeTo, scale, rhythm }, options) => ({
  "h1,h2,h3,h4,h5,h6": {
    lineHeight: 1.1
  },
  a: {
    color: "#e00082",
    textDecoration: "none"
  },
  "a:hover,a:active": {
    color: options.bodyColor
  },
  blockquote: {
    ...scale(1 / 5),
    color: gray(41),
    fontStyle: "italic",
    paddingLeft: rhythm(13 / 16),
    marginLeft: 0,
    borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`
  },
  "blockquote > :last-child": {
    marginBottom: 0
  },
  "blockquote cite": {
    ...adjustFontSizeTo(options.baseFontSize),
    color: options.bodyColor,
    fontWeight: options.bodyWeight
  },
  "blockquote cite:before": {
    content: '"— "'
  },
  [MOBILE_MEDIA_QUERY]: {
    html: {
      fontSize: `${16 / 16 * 100}%`
    },
    blockquote: {
      marginLeft: rhythm(-3 / 4),
      marginRight: 0,
      paddingLeft: rhythm(9 / 16)
    }
  }
});

const typography = new Typography(altonTheme);

export default typography;
