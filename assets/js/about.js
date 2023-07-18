import { helperFunctions } from "./helperFunctions.js";
import { navigation } from "./nav.js";
import { specialFeatures } from "./specialFeatures.js";
import { worksDB } from "../content/db/worksDB.js";

const pageStuff = {
  background: function(
    background = helperFunctions.generateElement('section',"background"),
    figure_tag = helperFunctions.generateElement('figure'),
    img_tag1 = helperFunctions.generateElement('img',"","mobileImg","","../assets/content/imgs/about_mobile.webp"),
    img_tag2 = helperFunctions.generateElement('img',"","deskImg","","../assets/content/imgs/about.webp"),
    content_tag = helperFunctions.generateElement('div',"content_tag"),
    content1=helperFunctions.generateElement('p',"content1","","LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, "),
    content2=helperFunctions.generateElement('p',"content2","","LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, LOTS of Text, "),
    contentPhoto=helperFunctions.generateElement('img',"contentPhoto","","","../assets/content/imgs/PLG_photo.webp"),
    ){
      
      content_tag = helperFunctions.appendChildren(content_tag, contentPhoto,content1,content2)
      figure_tag = helperFunctions.appendChildren(figure_tag, img_tag1, img_tag2);
      background = helperFunctions.appendChildren(background, content_tag, figure_tag);

      return background;
    },
  constructHTML: function(
    body = document.querySelector('body'),
    main_tag = this.main(),
    footer = document.querySelector('footer')
  ){
    body.insertBefore(main_tag, footer);
    this.theEvents.setSeries();
  },
  main: function(
    main_tag = helperFunctions.generateElement('main'),
    background = this.background(),
  ){
    main_tag = helperFunctions.appendChildren(main_tag, background);
    return main_tag;
  }, 
  theEvents: {
    setSeries: function(){

      console.log(document.querySelector('.currentBtn'))
    },
  }
}

pageStuff.constructHTML();