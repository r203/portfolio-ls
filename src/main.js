import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/Flickity";
import "./scripts/mobile-menu";
import "./scripts/skills";
import "./scripts/slider";
import "./scripts/parallax";
import "./scripts/feedback";
