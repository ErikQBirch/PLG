import { helperFunctions } from "./helperFunctions.js";

export const specialFeatures = {
  carousel: {
    carousel_organism: function(
      contentType,
      carouselName,
      carouselArray,
      counter = 0,
      // filter = helperFunctions.generateElement('div',"", "filter"),
      carousel_tag = helperFunctions.generateElement('div',"carousel"),
      slideHolder = helperFunctions.generateElement('div',"slideHolder"),
      slideControls = this.carousel_slideControls(),
      carousel_nav = helperFunctions.generateElement('div', "carousel_nav"),
      carousel_note = helperFunctions.generateElement('span',"carousel_note","","Try Scrolling to See More")
      // carousel_note = helperFunctions.generateElement('a',"carousel_note","","See More","../pages/reviews.html")
    ){
      
      carouselArray.forEach(item => {
        // console.log(item);
        let slide = this.carousel_singleSlide(contentType, item, counter);
        slideHolder.appendChild(slide);
        carousel_nav = this.carousel_navBtns(carousel_nav, counter, item.keyLetter);
        counter++;
        
      });
  
      carousel_tag = helperFunctions.appendChildren(carousel_tag, slideHolder)
      let carousel = [carousel_nav, carousel_tag, slideControls, carousel_note];
      return carousel;
  
    },
    carousel_navBtns: function(
      navBtns,
      counter,
      keyLetter,
      slideBtn = helperFunctions.generateElement('button',`${counter}`,"slideBtn",`${keyLetter}`) 
    ){
      navBtns.appendChild(slideBtn);
      return navBtns;
    },
    carousel_slideControls: function(
      slideControls = helperFunctions.generateElement('div',"slideControls"),
      prevBtn = helperFunctions.generateElement('button',"prevBtn","shiftBtn","<i class='fa-solid fa-chevron-left'></i>"),
      nextBtn = helperFunctions.generateElement('button',"nextBtn","shiftBtn","<i class='fa-solid fa-chevron-right'></i>")
    ){
      slideControls = helperFunctions.appendChildren(slideControls, prevBtn, nextBtn);
      return slideControls;
    },
    carousel_singleSlide: function(
      contentType,
      item,
      counter,)
      {
        let returnedSlide;
        switch (contentType) {
          case "img":
            returnedSlide = helperFunctions.generateElement('figure',`slide${counter}`, "slide");
            let img = helperFunctions.generateElement('img',"","","carouselImg",`../${item}`);
            returnedSlide.appendChild(img);
            break;
          case "textObject":
            returnedSlide = helperFunctions.generateElement('div',`slide${counter}`,"slide",);
            for (const key in item){
              let p = helperFunctions.generateElement('p',"","",item[key]);
              returnedSlide.append(p);
            }
            break;
          case "gallery":
            // console.log(item);
            returnedSlide = this.singleGallery(item.seriesName, item.imgs, counter);
            break;
          default:
            break;
        }
        return returnedSlide;
    },
    closePopUp:function(section,main,header){
      section.remove();
      main.classList.remove("blarken");
      header.classList.remove("blarken");

      // console.log(main);
    },
    functionality: {
      index: 1,
      intervalFunction: 0,
      interval: 5000,
      touchstartX : 0, // SWIPE SCREEN
      touchendX : 0,
      assignCurrentSlide: function(
        centerSlide, formerslide, slideArray
      ){
        let target;
        let idLength
        document.querySelector(".currentBtn").classList.remove('currentBtn');
        formerslide.classList.remove('currentSlide');
        
        if (centerSlide.id == "firstClone"){slideArray[1].classList.add('currentSlide')}
        else if (centerSlide.id == "lastClone"){slideArray[slideArray.length - 2].classList.add('currentSlide')}
        else { centerSlide.classList.add('currentSlide')};

        target = document.querySelector('.currentSlide').id;
        idLength = target.length
        // console.log(target, target.substring(idLength-1, idLength));
        document.getElementById(target.substring(idLength-1, idLength)).classList.add('currentBtn');
        
      },
      checkDirection: function(slideHolder, slideWidth, slideArray) {
        clearInterval(this.intervalFunction);
        if (this.touchendX < this.touchstartX) {
          // console.log(this.index);
          if (this.index == slideArray.length-2){return}
          else {
            this.moveToNextSlide(slideHolder,slideWidth);
            this.checkIndexAndButtons(prevBtn,nextBtn, slideArray);
          }
        }
        if (this.touchendX > this.touchstartX) {
          // console.log(this.index);
          if (this.index == 1){return}
          else {
            this.moveToPrevSlide(slideHolder,slideWidth);
            this.checkIndexAndButtons(prevBtn,nextBtn, slideArray);
          }
        }
        // this.startSlides(slideHolder,slideWidth);
      },
      checkIndexAndButtons: function(prevBtn,nextBtn, slideArray){
        // console.log(this.index);
        if (this.index == slideArray.length-2){
          nextBtn.style.pointerEvents = "none";
          nextBtn.style.opacity = "0"; 
          prevBtn.style.pointerEvents = "initial";
          prevBtn.style.opacity = "1"; 
        }
        else if (this.index == 1){
          prevBtn.style.pointerEvents = "none";
          prevBtn.style.opacity = "0"; 
          nextBtn.style.pointerEvents = "initial";
          nextBtn.style.opacity = "1";
        }
        else {
          prevBtn.style.pointerEvents = "initial";
          prevBtn.style.opacity = "1"; 
          nextBtn.style.pointerEvents = "initial";
          nextBtn.style.opacity = "1";
        }
      },
      getSlides: function(){return document.querySelectorAll('.slide')},   
      moveSlides: function(
        slideHolder,
        slideWidth,
        numb
      ){
        slideHolder.style.transform = `translateX(${-slideWidth * numb}px`;
        // slideHolder.style.transition = '0.75s';
      },
      moveToNextSlide: function(slideHolder, slideWidth){
        let slideArray = this.getSlides();
        if (this.index >= (slideArray.length-1)){return};
        this.index++;
        this.assignCurrentSlide(slideArray[this.index], document.querySelector('.currentSlide'),slideArray);
        
        this.moveSlides(slideHolder, slideWidth, this.index);
        slideHolder.style.transition = '0.75s';
      },
      moveToPrevSlide: function(slideHolder, slideWidth){
        let slideArray = this.getSlides();
        if (this.index <= 0){return};
        this.index--;
        
        this.assignCurrentSlide(slideArray[this.index], document.querySelector('.currentSlide'),slideArray);
        this.moveSlides(slideHolder, slideWidth, this.index);
        slideHolder.style.transition = '0.75s';
      },
      startSlides: function(slideHolder, slideWidth){
        this.intervalFunction = setInterval(()=>{
          this.moveToNextSlide(slideHolder,slideWidth);
        }, this.interval);
        return;
      },
      setUp: function(
        carousel = document.getElementById('carousel'),
        slideHolder = document.getElementById('slideHolder'),
        prevBtn = document.getElementById('prevBtn'),
        nextBtn = document.getElementById('nextBtn'),
        slideArray = this.getSlides(),
        firstClone = slideArray[0].cloneNode(true),
        lastClone = slideArray[slideArray.length-1].cloneNode(true),
        slideWidth = slideArray[this.index].clientWidth,
        slideNav_array = document.querySelectorAll('.slideBtn'),
        currentNumb = 2
      ){
        firstClone.id = "firstClone";
        lastClone.id = "lastClone";
        slideHolder.append(firstClone);
        slideHolder.prepend(lastClone);
        slideArray[currentNumb].classList.add('currentSlide');
        slideNav_array[currentNumb].classList.add('currentBtn');
        this.moveSlides(slideHolder, slideWidth, this.index);
        this.theEvents(carousel, slideHolder,nextBtn,prevBtn,slideWidth,slideNav_array)

      },
      startFromUrl(
        slideHolder,
        slideWidth,
        prevBtn,
        nextBtn,
        series = parseFloat(helperFunctions.getSingleUrlParam('id'))+1,
        slideArray = this.getSlides(),
      ){
        // console.log(series);
        if (!Number.isInteger(series)){
          series = 1;
        }
        this.index = series;
        // console.log(this.index);
        // console.log(slideArray[this.index])
        this.assignCurrentSlide(slideArray[this.index], document.querySelector('.currentSlide'),slideArray)
        this.moveSlides(slideHolder, slideWidth, this.index);
        this.checkIndexAndButtons(prevBtn,nextBtn, slideArray);

      },
      theEvents : function(carousel, slideHolder,nextBtn,prevBtn, slideWidth, slideNav_array, slideArray = this.getSlides()){
        // document.addEventListener('touchstart', (e) => { // SWIPE SCREEN
        //   this.touchstartX = e.changedTouches[0].screenX;
        // });
        // document.addEventListener('touchend', (// SWIPE SCREEN
        //   e, 
        //   slideHolder = document.querySelector('#slideHolder'), 
        //   slideWidth = this.getSlides()[this.index].clientWidth,
        //   ) => { 
        //   this.touchendX = e.changedTouches[0].screenX
        //   this.checkDirection(slideHolder, slideWidth, slideArray);
        // });
        nextBtn.addEventListener('click',()=>{
          this.moveToNextSlide(slideHolder, slideWidth);
          this.checkIndexAndButtons(prevBtn,nextBtn, slideArray);
        }
          );
        prevBtn.addEventListener('click',()=>{
          this.moveToPrevSlide(slideHolder, slideWidth);
          this.checkIndexAndButtons(prevBtn,nextBtn, slideArray);
        });
        slideHolder.addEventListener('transitionend',()=>{
          let slideArray = this.getSlides();
          
          if (slideArray[this.index].id == firstClone.id){
            slideHolder.style.transition = "none";
            this.index = 1;
            this.moveSlides(slideHolder, slideWidth, this.index);
            // slideHolder.style.transform = `translateX(${-slideWidth * this.index}px`;
          }
          if (slideArray[this.index].id == lastClone.id){
            slideHolder.style.transition = "none";
            this.index = slideArray.length - 2;
            this.moveSlides(slideHolder, slideWidth, this.index);
            // slideHolder.style.transform = `translateX(${-slideWidth * this.index}px`;
          }
        });
        slideHolder.addEventListener('click',(e)=>{
          if (e.target.id == "slideControls"){
            let currentSlide = document.querySelector('.currentSlide');
            let currentImg = currentSlide.children[0].src;
            // this.previewCurrentSlide(currentImg);
          }
        });


        this.startFromUrl(slideHolder, slideWidth, prevBtn, nextBtn);

        for (let slideBtn of slideNav_array){
          slideBtn.addEventListener('click',()=>{
            let slideArray = this.getSlides();
            this.index = parseFloat(slideBtn.id) + 1;
            this.assignCurrentSlide(slideArray[this.index], document.querySelector('.currentSlide'),slideArray)
            this.moveSlides(slideHolder, slideWidth, this.index);
            // slideHolder.style.transform = `translateX(${-slideWidth * this.index}px`;
            slideHolder.style.transition = '0.75s';
            this.checkIndexAndButtons(prevBtn,nextBtn, slideArray);
          })
        }
      },
    },
    popUp: function(
      imageInfo,
      section = helperFunctions.generateElement('section',"previewPopUp"),
      body = document.querySelector('body'),
      main = document.querySelector('main'),
      header = document.querySelector('header'),
      figure = helperFunctions.generateElement('figure'),
      img = helperFunctions.generateElement('img',"","","",`../${imageInfo.mainImg}`),
      topStuff = helperFunctions.generateElement('div',""),
      h3 = helperFunctions.generateElement('h3',"","",imageInfo.name),
      exitBtn = helperFunctions.generateElement('button',"","","X")
    ){
      topStuff = helperFunctions.appendChildren(topStuff, h3, exitBtn);
      section.appendChild(topStuff);
      section = helperFunctions.nestChildren(section, figure, img);
      body.insertBefore(section, main);
      // main.style.filter = "blur(10px) brightness(30%)";
      // header.style.filter = "blur(10px) brightness(30%)";

      main.classList.add("blarken");
      header.classList.add("blarken");
      
      
      if (imageInfo.layout == "portrait"){
        section.classList.add('portrait')
      }
      else {
        section.classList.add('landscape');
      }

      section.addEventListener('click',()=>{ this.closePopUp(section,main,header)}); 
    },
    singleGallery: function(
      seriesName,
      imgInfo,
      counter,
      div = helperFunctions.generateElement('div','figureHolder'),
      article = helperFunctions.generateElement('article',`gallery${counter}`, 'slide')
    ){
      // console.log(seriesName);
      let h2 = helperFunctions.generateElement('h2',"","",seriesName);
      article = helperFunctions.appendChildren(article, h2, div);

      imgInfo.forEach(item => {
        let figure = helperFunctions.generateElement('figure');
        let img_element = helperFunctions.generateElement('img',"","","",`../${item.thumbNail}`);

        div = helperFunctions.nestChildren(div, figure, img_element);
        figure.addEventListener('click',()=>{
          this.popUp(item);
        })
      });



      return article;
    }
  },
  fadeAndRotateImg: function(){},
  lazyLoading: function(
    imagesToLoad = document.querySelectorAll('img[data-src]'), //images elements with the attribute "data-src"; similar to css #data-src or .data-src
    loadImages = (img) => {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = () => {
        img.removeAttribute('data-src');
      }
    },
    imgOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px" //make bottom positive so images load before entering screen;
    },
  ){
    //imagesToLoad - 
    //loadImages - 
    //imgOptions - 
    //Step1 - 
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
          if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
          }
        });
      }, imgOptions);
      imagesToLoad.forEach((img) => {
        observer.observe(img);
      });
    } else {
      imagesToLoad.forEach((img)=> {
        loadImages(img);
      });
    }
  }
}