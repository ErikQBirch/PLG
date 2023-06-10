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
        let option = helperFunctions.generateElement('article',"","option");
        let figure = helperFunctions.generateElement('figure');
        let img = helperFunctions.generateElement('img',"","","",obj.thumbNail)
        let span = helperFunctions.generateElement('span',"","",obj.seriesName)
      });


      main.insertBefore(popup, firstChild);
  },
  optionListMolecule:function(){},
  popupMolecule: function(
    popup = helperFunctions.generateElement('section',"popupMolecule"),
    span = helperFunctions.generateElement('span',"","","Select gallery option to view."),
    optionHolder = helperFunctions.generateElement('div',"optionHolder"),
    xBtn = helperFunctions.generateElement('button',"xBtn","","X")
  ){
    popup = helperFunctions.appendChildren(popup, span, optionHolder, xBtn);

    xBtn.addEventListener('click', (e,
       )=>{
        this.closePopup();
    });

    return popup;
  },
  

}

