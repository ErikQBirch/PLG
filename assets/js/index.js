import { helperFunctions } from "./helperFunctions.js";
import { navigation } from "./nav.js";

const pageStuff = {
  constructHTML: function(
    body = document.querySelector('body'),
    header = this.header(),
    footer = this.footer()
  ){
    body = helperFunctions.appendChildren(body, header, footer);
    
  },
  footer: function(
    footer = helperFunctions.generateElement('footer',"","","<span>Erik Q. Birch | ©2023 | Artisan Web Designs™</span>")
  ){
    return footer;
  },
  header: function(
    header = helperFunctions.generateElement('header', "navSection"),
    logo = this.logo_element(),
    nav = navigation.nav_molecule()
  ){
    header = helperFunctions.appendChildren(header, logo, nav);
    return header;
  },
  logo_element: function(
    link = helperFunctions.generateElement('a', "logoArea"),
    figure = helperFunctions.generateElement('figure'),
    logo = helperFunctions.generateElement('img',"","","","./assets/content/imgs/PLG_logo.webp")
  ){
    link = helperFunctions.nestChildren(link, figure, logo);
    return link;
  },

}

pageStuff.constructHTML();