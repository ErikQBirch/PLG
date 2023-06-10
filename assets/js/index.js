import { helperFunctions } from "./helperFunctions.js";
import { navigation } from "./nav.js";

const pageStuff = {
  constructHTML: function(
    body = document.querySelector('body'),
    nav_section = helperFunctions.generateElement('section', "navSection"),
    logo = this.logo_element(),
    nav = navigation.nav_molecule()
  ){
    body.appendChild(nav_section);
    nav_section = helperFunctions.appendChildren(nav_section, logo, nav);
  },
  logo_element: function(
    link = helperFunctions.generateElement('a', "logoArea"),
    figure = helperFunctions.generateElement('figure'),
    logo = helperFunctions.generateElement('img',"","","","./assets/content/imgs/PLG_logo.webp")
  ){
    link = helperFunctions.nestChildren(link, figure, logo);
    return link;
  }
}

pageStuff.constructHTML();