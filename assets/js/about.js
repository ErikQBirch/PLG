import { helperFunctions } from "./helperFunctions.js";
import { navigation } from "./nav.js";
import { specialFeatures } from "./specialFeatures.js";
import { worksDB } from "../content/db/worksDB.js";

const pageStuff = {
  background: function(
    background = helperFunctions.generateElement('section',"background"),
    figure_tag = helperFunctions.generateElement('figure','background_figure'),
    img_tag1 = helperFunctions.generateElement('img',"","mobileImg","","../assets/content/imgs/about_mobile (1).webp"),
    img_tag2 = helperFunctions.generateElement('img',"","deskImg","","../assets/content/imgs/about (1).webp"),
    content_tag = helperFunctions.generateElement('div',"content_tag"),
    content1=helperFunctions.generateElement('p',"content1","",`In 2016, Paulo Loveranes Galamgam decided to professionally develop his skill in and passion for concept art. A few years of project work self-studies later, Paulo studied at FZD School of Design in 2020; majoring in Design, Arts, Entertainment, and Media Management. Afterwards, Paulo has been continuing his growth in the Entertainment Industry through working with various art and entertainment studios.<br><br>In addition to free-lance contract work, Paulo has played the role of "Instructor" and "Mentor; helping others enhance their capabilities in art creation.`),
    content2=helperFunctions.generateElement('p',"content2","",`Pauolo's art style is altogether detailed and eleborate in depth, color, and expression. A lot of his best work involves world building and concept design; establishing moods and reasons for interest in his sceneries. The main concept/theme of his works involve ancient civilizations, differing cultures, nature's beauty, and the occasional fan art. Whether it be concept art, background design, or scene protrayal; Paulo expertly uses various design principles to emphasize the magnificence of detailed work! <br><br>`),
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