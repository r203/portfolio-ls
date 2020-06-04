import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/nav";
import "./scripts/mobile-menu";
import "./scripts/skills";
import "./scripts/slider";
import "./scripts/parallax";
import "./scripts/feedback";
import "./scripts/form-feedback";
import "./scripts/vue-scrollto";
import "./scripts/scroll-down";


