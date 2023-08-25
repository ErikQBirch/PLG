import { helperFunctions } from "./helperFunctions.js";
import { navigation } from "./nav.js";
import { specialFeatures } from "./specialFeatures.js";
import { expDB } from "../content/db/experienceDB.js";

const pageStuff = {
  background: function(
    background = helperFunctions.generateElement('section',"background"),
    // figure_tag = helperFunctions.generateElement('figure'),
    // img_tag1 = helperFunctions.generateElement('img',"","mobileImg","","../assets/content/imgs/backgrounds/mobile1.webp"),
    // img_tag2 = helperFunctions.generateElement('img',"","deskImg","","../assets/content/imgs/backgrounds/desk1.webp"),
    filter_tag = helperFunctions.generateElement('div',"filter_tag")
    ){

      
      // figure_tag = helperFunctions.appendChildren(figure_tag, img_tag1, img_tag2);
      // background = helperFunctions.appendChildren(background, filter_tag, figure_tag);
      background = helperFunctions.appendChildren(background, filter_tag)
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
  main: function(
    main_tag = helperFunctions.generateElement('main'),
    background = this.background(),
    section = helperFunctions.generateElement('section',"infoArea"),
    h1=helperFunctions.generateElement('h1',"","",`${expDB.array[0].name}`),
    div = helperFunctions.generateElement('div',"iconHolder"),
    hr = helperFunctions.generateElement('hr'),
    h2 = helperFunctions.generateElement('h2',"","",`${expDB.array[0].position}`),
    p = helperFunctions.generateElement('p',"","",`${expDB.array[0].descript}`)
  ){
  
    expDB.array.forEach(exp=> {
      console.log(exp.name);
      let img = helperFunctions.generateElement('img',"","","",exp.thmb);
      div.appendChild(img);
      img.addEventListener('click', (e)=>{
        h1.innerHTML = exp.name;
        h2.innerHTML = exp.position;
        p.innerHTML = exp.descript;

        document.querySelector('img.selected').classList.toggle("selected");
        img.classList.toggle('selected');
      })

      console.log(exp.name, expDB.array[0])
      if (exp.name == expDB.array[0].name){
        img.classList.add('selected')
      }
    });
    
    section = helperFunctions.appendChildren(section, h1,div,h2,hr,p);
    main_tag = helperFunctions.appendChildren(main_tag, background);
    main_tag.appendChild(section);
    return main_tag;
  }, 
  // theEvents: {
  //   setSeries: function(){

  //     console.log(document.querySelector('.currentBtn'))
  //   },
  // }
}


pageStuff.constructHTML();