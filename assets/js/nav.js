import { helperFunctions } from "./helperFunctions.js";

export const navigation = {
  nav_molecule: function(
    nav_tag = helperFunctions.generateElement('nav'),
    ul_tag = helperFunctions.generateElement('ul'),
    options = ["Gallery","About","Experience","Contact"]
  ){
    options.forEach(opt => {
      let li_tag = helperFunctions.generateElement('li');
      if (opt == "Gallery"){
        let gallery_tag = helperFunctions.generateElement('button',"","",`<span></span>${opt}`);
        gallery_tag.addEventListener('click',()=>{
          
        })
        li_tag.appendChild(gallery_tag);
      }
      // else if (opt = "Paulo Loveranes<br>Galamgam"){
      //   let gallery_tag = helperFunctions.generateElement('button',"blah","",opt);
      //   li_tag.appendChild(gallery_tag);
      // }
      else{
        let a_tag = helperFunctions.generateElement('a',"","",`<span></span>${opt}`,`*`);
        li_tag.appendChild(a_tag);
      }
      ul_tag.appendChild(li_tag);
    });

    nav_tag.appendChild(ul_tag);
    return nav_tag;
  }

}

