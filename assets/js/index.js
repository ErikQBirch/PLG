import { helperFunctions } from "./helperFunctions.js";
import { navigation } from "./nav.js";

const pageStuff = {
  constructHTML: function(
    body = document.querySelector('body'),
    header = this.header(),
    footer = this.footer()
  ){
    body = helperFunctions.appendChildren(body, header, footer);
    theEvents.activateEffects();
  },
  footer: function(
    footer = helperFunctions.generateElement('footer',"","","<span>Erik Q. Birch | ©2023 | Artisan Web Designs™</span>")
  ){
    return footer;
  },
  header: function(
    header = helperFunctions.generateElement('header', "navSection"),
    // logo = this.logo_element(),
    // nav = navigation.nav_molecule()
    logo = navigation.getNavigationPackage()[0],
    nav = navigation.getNavigationPackage()[1],
    hamburger_atom = navigation.getNavigationPackage()[2],
    sideNav = navigation.getNavigationPackage()[3]
  ){
    header = helperFunctions.appendChildren(header, logo, nav, hamburger_atom, sideNav);
    return header;
  },
}
const theEvents = {
  activateEffects: function(){
    this.hamburger_event()
  },
  hamburger_event: function(
    sideMenu = document.querySelector('#sideMenu'),
    hamburger_tag = document.querySelector('#menu-btn'),
    burgerBtn = hamburger_tag.children[0],
    xBtn = hamburger_tag.children[1],
    
  ){
    hamburger_tag.addEventListener('click',()=>{
      let main = document.querySelector('main')
      burgerBtn.classList.toggle('faded');
      xBtn.classList.toggle('faded');
      sideMenu.classList.toggle('closed');
      main.classList.toggle('blur');
      console.log(main)
    })
  }
}

pageStuff.constructHTML();