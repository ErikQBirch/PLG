import { helperFunctions } from "./helperFunctions.js";
import { navigation } from "./nav.js";

const pageStuff = {
  background: function(
    background = helperFunctions.generateElement('section',"background"),
    figure_tag = helperFunctions.generateElement('figure'),
    img_tag1 = helperFunctions.generateElement('img',"","mobileImg","","../assets/content/imgs/backgrounds/mobile1.webp"),
    img_tag2 = helperFunctions.generateElement('img',"","deskImg","","../assets/content/imgs/backgrounds/desk1.webp"),
    filter_tag = helperFunctions.generateElement('div',"filter_tag")
    ){

      
      figure_tag = helperFunctions.appendChildren(figure_tag, img_tag1, img_tag2);
      background = helperFunctions.appendChildren(background, filter_tag, figure_tag);

      return background;
    },
  constructHTML: function(
    body = document.querySelector('body'),
    main_tag = this.main(),
    footer = document.querySelector('footer')
  ){
    // body.appendChild(nav_tag); 
    // body.appendChild(main_tag);
    body.insertBefore(main_tag, footer);
    // theEvents.backgroundEffect();
  },
  main: function(
    main_tag = helperFunctions.generateElement('main'),
    background = this.background(),
  ){
    main_tag = helperFunctions.appendChildren(main_tag, background);
    
    return main_tag;
  },

}


pageStuff.constructHTML();