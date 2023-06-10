import { helperFunctions } from "./helperFunctions.js";
import { navigation } from "./nav.js";

const pageStuff = {
  background: function(
    background = helperFunctions.generateElement('section',"background"),
    figure_tag = helperFunctions.generateElement('figure'),
    img_tag1 = helperFunctions.generateElement('img',"","mobileImg","","assets/content/imgs/mobile1.webp"),
    img_tag2 = helperFunctions.generateElement('img',"","deskImg","","assets/content/imgs/desk1.webp"),
    img_tag3 = helperFunctions.generateElement('img',"","mobileImg","","assets/content/imgs/mobile2.webp"),
    img_tag4 = helperFunctions.generateElement('img',"","deskImg","","assets/content/imgs/desk2.webp"),
    filter_tag = helperFunctions.generateElement('div',"filter_tag")
    ){
      img_tag1.classList.add('dying');
      img_tag2.classList.add('dying') ;
      img_tag3.classList.add('keep');
      img_tag4.classList.add('keep');
      
      figure_tag = helperFunctions.appendChildren(figure_tag, img_tag1, img_tag2, img_tag3, img_tag4);
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
    theEvents.backgroundEffect();
  },
  main: function(
    main_tag = helperFunctions.generateElement('main'),
    background = this.background(),
  ){
    main_tag = helperFunctions.appendChildren(main_tag, background);
    
    return main_tag;
  },

}

const theEvents = {
  backgroundEffect: function(
    figure_tag = document.querySelector('#background').children[1],
    mobileImgs = [
      "assets/content/imgs/mobile1.webp",
      "assets/content/imgs/mobile2.webp",
      "assets/content/imgs/mobile3.webp",
      "assets/content/imgs/mobile4.webp",
      "assets/content/imgs/mobile5.webp",
    ],
    deskImgs = [
      "assets/content/imgs/desk1.webp",
      "assets/content/imgs/desk2.webp",
      "assets/content/imgs/desk3.webp",
      "assets/content/imgs/desk4.webp",
      "assets/content/imgs/desk5.webp",
    ],
    options = ["mobileImg","deskImg"],
    counter_m = 2,
    counter_d = 2,
    fadeEffect = function(option){
      let dyingImg = document.querySelector(`img.dying.${option}`);
      let subImg = document.querySelector(`img.keep.${option}`);
      let counter;
      let imgArray;
      let newImg;
      

      switch (option){
        case "mobileImg":
          imgArray = mobileImgs;
          counter = counter_m;
          break;
        case "deskImg":
          imgArray = deskImgs;
          counter = counter_d;
          break;
        default:
          imgArray = deskImgs;
          counter = counter_m;
          break;
      }
    
      newImg = helperFunctions.generateElement('img',"",`${option}`,"",`${imgArray[counter]}`);

      counter++;

      if (counter == imgArray.length){
        counter = 0;
      }

      dyingImg.remove();
      subImg.classList.add("dying");
      subImg.classList.remove('keep');
      newImg.classList.add('keep');
      figure_tag.appendChild(newImg);
    
      switch (option){
        case "mobileImg":
          counter_m = counter;
          break;
        case "deskImg":
          counter_d = counter;
          break;
        default:
          counter_m = counter;
          break;
      }

    }
  ){
    let fadingImg = setInterval(()=>{
      options.forEach(str => {
        fadeEffect(str)
      });
    },10000)   
  }
}

pageStuff.constructHTML();