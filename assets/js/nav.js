import { helperFunctions } from "./helperFunctions.js";
import { worksDB } from "../content/db/worksDB.js";

export const navigation = {
  closePopup: function(
    header = document.querySelector('header'),
    footer = document.querySelector('footer'),
    background = document.querySelector('#background'),
    popup = document.querySelector('#popupMolecule')
  ){
    header.style.display = "flex";
        footer.style.display = "flex";
        background.style.filter = "none";
        popup.remove();
  },

  nav_molecule: function(
    nav_tag = helperFunctions.generateElement('nav'),
    ul_tag = helperFunctions.generateElement('ul'),
    options = ["Gallery","About","Experience","Contact"]
  ){
    options.forEach(opt => {
      let li_tag = helperFunctions.generateElement('li');
      if (opt == "Gallery"){
        let gallery_btn = helperFunctions.generateElement('button',"","",`<span></span>${opt}`);
        gallery_btn.addEventListener('click',(
          e,
        )=>{
          this.openPopup();
        })
        li_tag.appendChild(gallery_btn);
      }
      // else if (opt = "Paulo Loveranes<br>Galamgam"){
      //   let gallery_btn = helperFunctions.generateElement('button',"blah","",opt);
      //   li_tag.appendChild(gallery_btn);
      // }
      else{
        let a_tag = helperFunctions.generateElement('a',"","",`<span></span>${opt}`,`*`);
        li_tag.appendChild(a_tag);
      }
      ul_tag.appendChild(li_tag);
    });

    nav_tag.appendChild(ul_tag);
    return nav_tag;
  },
  openPopup: function(
    main = document.querySelector('main'),
    firstChild = main.firstElementChild,
    popup = this.popupMolecule(),
    header = document.querySelector('header'),
    footer = document.querySelector('footer'),
    background = document.querySelector('#background')
  ){
      header.style.display = "none";
      footer.style.display = "none";
      background.style.filter = "blur(10px)";

      worksDB.forEach(obj => {
        console.log(obj.seriesName)
        let option = this.optionListMolecule(obj);
        popup.children[1].appendChild(option);
        // console.log(popup.children[1]);w
      });


      main.insertBefore(popup, firstChild);
  },
  optionListMolecule:function(
    obj,
    option = helperFunctions.generateElement('article',"","option"),
    optionLink = helperFunctions.generateElement('a',"","","",obj.id),
    figure = helperFunctions.generateElement('figure'),
    img = helperFunctions.generateElement('img',"","","thmbNail",obj.thumbNail),
    seriesName = helperFunctions.generateElement('span',"","seriesName",obj.seriesName),
    count = helperFunctions.generateElement('span',"","count",obj.imgs.length)
  ){
    optionLink = helperFunctions.nestChildren(optionLink, figure, img);
    optionLink = helperFunctions.appendChildren(optionLink, seriesName, count);
    option.appendChild(optionLink);
    
    return option;
  },
  popupMolecule: function(
    popup = helperFunctions.generateElement('section',"popupMolecule"),
    span = helperFunctions.generateElement('span',"instructions","","Scroll and select gallery option to view."),
    optionHolder = helperFunctions.generateElement('div',"optionHolder"),
    btnHolder = helperFunctions.generateElement('div',"btnHolder"),
    xBtn = helperFunctions.generateElement('button',"xBtn","","Cancel")
  ){
    btnHolder.appendChild(xBtn);
    popup = helperFunctions.appendChildren(popup, span, optionHolder, btnHolder);

    xBtn.addEventListener('click', (e,
       )=>{
        this.closePopup();
    });

    return popup;
  },
  

}

