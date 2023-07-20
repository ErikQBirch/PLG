import { helperFunctions } from "./helperFunctions.js";
import { navigation } from "./nav.js";
import { specialFeatures } from "./specialFeatures.js";
import { expDB } from "../content/db/experienceDB.js";

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
    body.insertBefore(main_tag, footer);
    // specialFeatures.carousel.functionality.setUp();
    // this.theEvents.setSeries();
  },
  infoArea: function(
    section = helperFunctions.generateElement('section',"infoArea"),
    side1 = helperFunctions.generateElement('div',"side1"),
    h1 = helperFunctions.generateElement('h1',"","","Paulo Galamgam"),
    img = helperFunctions.generateElement('img',"","","","../assets/content/imgs/contactImg.webp"),
    side2 = helperFunctions.generateElement('div',"side2"),
    h2a = helperFunctions.generateElement('h2',"","","Description"),
    h2b = helperFunctions.generateElement('h2',"","","Common Locations"),
    descript_a = helperFunctions.generateElement('p',"","","Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, Lots of Text, "),
    descript_b = helperFunctions.generateElement('p',"","","Click links below")
  ){
    side1 = helperFunctions.appendChildren(side1, h1, img);
    side2 = helperFunctions.appendChildren(side2, h2a, descript_a, h2b, descript_b);
    section = helperFunctions.appendChildren(section, side1, side2);
    
    return section;

  },
  linkArea: function(
    section = helperFunctions.generateElement('section',"recoverableMaterials"),
    h1 = helperFunctions.generateElement('h1',"","","Recoverable Materials"),
    div = helperFunctions.generateElement('div',"linkArea"),
    socialArray = [
      {
        "name":"LinkedIn",
        "link":"https//youtube.com",
        "thmb":"../assets/content/imgs/contact1.webp"
      },
      {
        "name":"Art Station",
        "link":"https//youtube.com",
        "thmb":"../assets/content/imgs/contact2.webp"
      },
      {
        "name":"IAMAG",
        "link":"https//youtube.com",
        "thmb":"../assets/content/imgs/contact3.webp"
      },
      {
        "name":"Instagram",
        "link":"https//youtube.com",
        "thmb":"../assets/content/imgs/contact4.webp"
      }
    ]
  ){
    socialArray.forEach(obj=> {
      let link = helperFunctions.generateElement('a',"","","",obj.link);
      let text = helperFunctions.generateElement('span',"","",obj.name);
      let img = helperFunctions.generateElement('img',"","","",obj.thmb);
      link = helperFunctions.appendChildren(link, img, text);
      div.appendChild(link);
    });
    section = helperFunctions.appendChildren(section, h1, div);
    return section;

  },
  main: function(
    main_tag = helperFunctions.generateElement('main'),
    background = this.background(),
    mainContent = helperFunctions.generateElement('div',"mainContent"),
    infoArea = this.infoArea(),
    linkArea= this.linkArea()
  ){
    mainContent = helperFunctions.appendChildren(mainContent, infoArea, linkArea);
    main_tag = helperFunctions.appendChildren(main_tag, background, mainContent);
    return main_tag;
  }, 
}


pageStuff.constructHTML();