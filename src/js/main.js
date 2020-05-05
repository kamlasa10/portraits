import modals from "./modules/modals";
import photoSize from "./modules/photoSize";
import tabs from "./modules/tabs";
import accordions from "./modules/accordions";
import slider from "./modules/slider";
import loadStyles from "./modules/loadStyles";
import form from "./modules/forms";
import mask from "./modules/mask";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";

window.addEventListener('DOMContentLoaded', () => {
  modals();
  photoSize();
  tabs();
  accordions();
  slider();
  loadStyles('.button-styles', '.styles-2');
  form();
  mask('input[name=phone]');
  scrolling();
  drop();
}); 