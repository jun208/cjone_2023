// main.js

/*고객센터*/
// toggle()
// title="고객센터 열기" ->  title="고객센터 닫기"
window.addEventListener('load',() => {

const topMenuDD = document.querySelectorAll('dl.topMenu>dd');
topMenuDD[4].addEventListener('click', e =>{
  e.currentTarget.classList.toggle("on");
  if(e.currentTarget.classList.contains("on")){
    e.currentTarget.children[0].setAttribute("title","고객센터 닫기");
  }else {
    e.currentTarget.children[0].setAttribute("title","고객센터 열기");
  }
})

/*주메뉴*/
// .header_wrap.on
//nav.gnb>ul>li>ul.on

const gnbMenu = document.querySelectorAll(".gnb>ul>li");
const headerWrap = document.querySelector(".header_wrap");
const subMenu = document.querySelectorAll("nav.gnb>ul>li>ul");


for(var i =0; i < gnbMenu.length; i++){
  gnbMenu[i].addEventListener('mouseover', ()=>{

    //고객센터에 on 붙어있으면 고객센터의 on을 지운다
    if(topMenuDD[4].classList.contains("on")){
      topMenuDD[4].classList.remove("on");
    }

    //검색박스에 on 붙어있으면 검색박스의 on을 지운다

    if(srchOpen.classList.contains("on")){
      srchOpen.classList.remove("on");
      srchBox.classList.remove("on");
    }

    headerWrap.classList.add("on");
    subMenu.forEach(item=>{
      item.classList.add("on");
    });
  });//mouseover

  gnbMenu[i].addEventListener('mouseout', ()=>{
    headerWrap.classList.remove("on");
    subMenu.forEach(item=>{
      item.classList.remove("on");
    })
  });//mouseout

  gnbMenu[i].children[0].addEventListener('focus',()=>{
    headerWrap.classList.add("on");
    subMenu.forEach(item=>{
      item.classList.add("on");
  })
});//focus

  gnbMenu[i].children[0].addEventListener('blur',()=>{
    headerWrap.classList.remove("on");
    subMenu.forEach(item=>{
      item.classList.remove("on");
    })
  });//blur
}

/* 검색열기닫기 */

const srchOpen = document.querySelector("span.srch_open");
const srchBox = document.querySelector("form.srch");

srchOpen.addEventListener('click',e=>{
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  srchBox.classList.toggle("on");
  
  if(e.currentTarget.classList.contains("on")){
    e.currentTarget.children[0].setAttribute("title","검색입력서식닫기");
  }else{
    e.currentTarget.children[0].setAttribute("title","검색서식열기");
  } 
});

/*로그인 이미지*/
// a.appear 안에 img 00000~00056.png
// a.loop 안에 img 000000~00081.png

let appearImgs ='';
let loopImgs='';

for(let i=0; i<57; i++){
  if(i<10){
    appearImgs += `<img src = "images/appear/appear_0000${i}.png" alt="${i}" />`
  }else{
    appearImgs += `<img src = "images/appear/appear_000${i}.png" alt="${i}" />`
  }
  
}
document.querySelector("a.appear").innerHTML= appearImgs;

for(let i=0; i<82; i++){
  if(i<10){loopImgs +=  `<img src =  "images/loop/loop_0000${i}.png" alt="${i}" />`
}else{
  loopImgs +=  `<img src = "images/loop/loop_000${i}.png" alt="${i}" />`
}
  
}
document.querySelector("a.loop").innerHTML=loopImgs;

/*로그인 애니메이션*/
//appear 0~56 이미지 각각에 animation 속성 적용
// animation: ani 2.85s linear 0s 1;
// animation: ani 2.85s linear 0.05s 1;
// animation: ani 2.85s linear 0.10s 1;
// animation: ani 2.85s linear 2.80s 1;

const appearIm = document.querySelectorAll(".appear>img")
const delay = 0.05;

for(i=0; i<appearIm.length; i++){
  appearIm[i].style.animation = `ani 2.85s linear ${delay*i}s 1`;
}


// loop 0~81이미지 각각에 animation 속성 적용
// animation: ani 4.1s linear 2.85s infinite;
// animation: ani 4.1s linear 2.90s infinite;
// animation: ani 4.1s linear 2.95s infinite;
const loopIm =document.querySelectorAll(".loop>img")

for(j=0; j<loopIm.length; j++){
  loopIm[j].style.animation = `ani 4.1s linear ${2.85+(j*delay)}s  infinite`;
}

/* content1 - 퀵메뉴01~04 이미지 */
//for()문 이용해서 <img>를  quick01_00000.png~quick01_00019.png생성
//<span>안에 넣기



const quickSpan =document.querySelectorAll('.content1>ul>li>a>span');
for(let j=0; j<quickSpan.length; j++){//span 4개 0,1,2,3
  let images=''
  for(let i=0; i<20; i++){//각 span안에 img 20개 생성
    if(i<10){
      images += `<img src = "images/quick0${j+1}/quick0${j+1}_0000${i}.png" alt="${i}" />`
    }else{
      images += `<img src = "images/quick0${j+1}/quick0${j+1}_000${i}.png" alt="${i}" />`
    }
  }
  quickSpan[j].innerHTML = images;
}

//content1
//li에 마우스 올렸을 때 이미지에 애니메이션 적용
//마우스 뗏을때 이미지에 애니메이션 삭제
const content1Li = document.querySelectorAll(".content1 ul li");

for(let i=0; i<content1Li.length; i++){
  content1Li[i].addEventListener("mouseover",e=>{
    for(let k=0; k<20; k++){
      let imgLi = e.currentTarget.children[0].children[0].children;
      imgLi[k].style.animation=`ani 1.05s linear ${delay*k}s 1`;
    }
  })
  content1Li[i].addEventListener("mouseleave",e=>{
    for(let k=0; k<20; k++){
      let imgLi = e.currentTarget.children[0].children[0].children;
      imgLi[k].style.animation=`none`;
    }
  })
}



//css 지정


// 배너
// next버튼을 눌렀을때
// 배너번호 1증가
// 배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
// 배너프레임의 left값 변경해서 배너 움직이게

const body =document.querySelector("body");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let bannerFrame = document.querySelector(".banner_frame"); //bnnFrame
let banner = document.querySelectorAll(".banner_frame section");
const bnnRollA =document.querySelectorAll(".banner_roll a");
console.log(body);

let bnnNum =0;
let lastNum= document.querySelectorAll(".banner_frame section").length - 1;



let bnnW = document.querySelector('body>section').offsetWidth;//let bnnW = window.innerWidth;

window.addEventListener('resize',()=>{
  bnnW = document.querySelector('body>section').offsetWidth;
})


// let bnnW = window.innerWidth;
// window.onresize = function(event){
//   bnnW = window.innerWidth;
// }





next.addEventListener("click",e =>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0;
  bannerFrame.style.left = `${bnnNum * -bnnW}px`;
  secWhite(bnnNum);
})




// prev버튼 눌렀을때

prev.addEventListener("click",e=>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0){bnnNum=lastNum;}
  bannerFrame.style.left = `${bnnNum * -bnnW}px`;
  secWhite(bnnNum);
})


// 오토배너 작동 - setTimeout 사용, 재귀함수 사용, 5초마다
function autoBanner(){
  bnnNum++
  if(bnnNum>lastNum)bnnNum=0;
  bannerFrame.style.left = `${bnnNum * -bnnW}px`;
  secWhite(bnnNum);
  autoBnn = setTimeout(autoBanner,5000);//재귀함수
}
let autoBnn = setTimeout(autoBanner,5000);//최초호출


// 재생/멈춤 버튼

let flag = true;
const btnPlay = document.querySelector(".play");

btnPlay.addEventListener("click", e=>{
  e.preventDefault();
  if(flag){//멈춰라
    clearTimeout(autoBnn);
    btnPlay.classList.add('pause');
    flag = false;
  }else{//재생
    autoBnn = setTimeout(autoBanner,5000);
    btnPlay.classList.remove('pause');
    flag = true;
  }
});


/*롤링 클릭 */

const bnnRollList= document.querySelectorAll(".banner_roll li");



for(let i=0; i<bnnRollList.length; i++){
  bnnRollList[i].addEventListener('click',e=>{
    e.preventDefault();
    clearTimeout(autoBnn);
    bannerFrame.style.left = `${i * -bnnW}px`;
    secWhite(i);
  })
}



// section에 .white가 있으면 각요소에 .white 붙이기
const arrowA = document.querySelectorAll('.arrow>a');
const rollingA = document.querySelectorAll(".rolling a");

let secWhite = bannerNumber =>{

  if(banner[bannerNumber].classList.contains('white')){
    arrowA.forEach(item=>{
      item.classList.add('white');
    })
    rollingA.forEach(item => {
      item.classList.add('white');
    })
  }else{
    arrowA.forEach(item=>{
      item.classList.remove('white');
    })
    rollingA.forEach(item => {
      item.classList.remove('white');
    })


  }

  bnnRollA.forEach(item =>{
    item.classList.remove('on');
  });
  bnnRollA[bannerNumber].classList.add('on');
}



/*스크롤 이벤트*/
  window.addEventListener('scroll',()=>{
  let scroll= document.querySelector('html').scrollTop;
  console.log(scroll);

  // 도넛
  const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
  const doughnut_Left_s = document.querySelector(".doughnut_Left_s");
  const combine_Left = document.querySelector(".combine_Left");

  combine_Left.style.top = `${scroll*0.7}px`;
  doughnut_Left_s.style.top = `${scroll*0.5}px`;
  doughnut_Left_L.style.top = `${1310-scroll*0.8}px`;
  
  const doughnut_Center_M = document.querySelector(".doughnut_Center_M");
  const doughnut_Center_s = document.querySelector(".doughnut_Center_s");

  doughnut_Center_M.style.top =`${1310-scroll*0.8}px`

  const doughnut_Right_L = document.querySelector(".doughnut_Right_L");
  const combine_Right = document.querySelector(".combine_Right");

  combine_Right.style.top = `${scroll*0.7}px`;
  doughnut_Right_L.style.top= `${scroll*0.7}px`;
  
  if(scroll < 1350){
    doughnut_Right_L.style.top= '947px';
   }

})

// content3
// li 하나 하나에 마우스 오버하면 li에 .on이 붙어라 마우스 아웃 하면 .on을 지워라

const all = document.querySelectorAll(".content3_inner>div>ul>li"); //li 26개


// all.forEach(item=>{
//   item.addEventListener('mouseover',e=>{
//     e.currentTarget.classList.add('on');
//   });
//   item.addEventListener('mouseout', e => {
//     e.currentTarget.classList.remove('on');
//   });
// });

for(i=0; i<all.length; i++){
 all[i].addEventListener('mouseover', e=>{
  e.currentTarget.classList.add("on");
 })
 all[i].addEventListener('mouseleave', e =>{
  e.currentTarget.classList.remove("on");
}
)};


// 대분류
//-각 클래스이름에 해당되는 li만 따로 모아서 저장해놓고
//- 모든 li화면에 안보이게 하고
// li a 하나하나를 클릭했을때
// class 속성값을 가져와서 변수에 저장
// 변수값이랑 정확하게 일치하는 케이스 찾아서
// 해당 클래스이름에 해당되는 li만 보이게 설정한다. 

const group= document.querySelectorAll(".content3_inner>ul>li>a");

const ent = document.querySelectorAll("li.ent");
const shop = document.querySelectorAll("li.shop");
const diner = document.querySelectorAll("li.diner");
const box = document.querySelectorAll("li.box");
console.log(box);




for(k=0; k<group.length; k++){
  group[k].addEventListener('click',e=>{ //a
    e.preventDefault();
    group.forEach(item => {
      item.classList.remove('on');
    });
    e.currentTarget.classList.add('on');

    all.forEach(item => {
      item.style.display = 'none';
    });
    let className = e.currentTarget.parentElement.getAttribute("class");
    switch(className){
      case "ent" : 
        ent.forEach(item =>{
          item.style.display = 'block';
        });
        break;
      case "shop" :
        show(shop);
        break;
      case "diner" :
        show(diner);
        break;
      case "box" :
        show(box);
        break;
      case "all" :
        show(all)
        break;        
    }

    function show(className){
       className.forEach( item =>{
        item.style.display = 'block';
      });
    }
            
  })
}

// 패밀리사이트

const familySite = document.querySelector('.footer_inner>dl>dd.family_site');

familySite.addEventListener('click',e=>{
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  if(e.currentTarget.classList.contains("on")){
    e.currentTarget.children[0].setAttribute("title","닫기");
  }else{
    e.currentTarget.children[0].setAttribute("title","열기");
  }
})

// top버튼
const btnTop = document.querySelector(".top");

btnTop.addEventListener('click',e=>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:'smooth'
  });
})

window.addEventListener('scroll',()=>{
  let scroll = document.querySelector('html').scrollTop;

  if(scroll<=0){
    btnTop.classList.remove("on","ab");
  }else if (scroll > 2000){
    btnTop.classList.add("ab");
    btnTop.classList.add("on");
  }else{
    btnTop.classList.remove("ab");
    btnTop.classList.add("on");
  }
})

// 햄버거 버튼 클릭
// 1. div.mob.on
// 2. div.mobBtn_close.on
// 3.body.on, div.bg.on

const mobBtn = document.querySelector("div.mobBtn");
const mobBtnClose = document.querySelector("div.mobBtn_close")
const mob = document.querySelector("div.mob");
const mobBg = document.querySelector("div.bg");

mobBtn.addEventListener('click',e=>{
  e.preventDefault();
  mobBtnClose.classList.add("on");
  mob.classList.add("on");
  mobBg.classList.add("on");
  body.classList.add("on");  
});

// 모바일 닫기 클릭

mobBtnClose.addEventListener('click',e=>{
  e.preventDefault();
  mobBtnClose.classList.remove("on");
  mob.classList.remove("on");
  mobBg.classList.remove("on");
  body.classList.remove("on");  

})

// 모바일 고객센터 클릭

const serv = document.querySelector("dl.mob_topMenu>dd:nth-of-type(5)");

serv.addEventListener('click',e =>{
  e.preventDefault();
  serv.classList.toggle("on");

  if(e.currentTarget.classList.contains("on")){
  e.currentTarget.children[0].setAttribute("title","고객센터 닫기");
}else{
  e.currentTarget.children[0].setAttribute("title","고객센터 열기");
}

});

// 모바일 주메뉴 li클릭

const mobGnbLis = document.querySelectorAll("nav.mob_gnb>ul>li");

for(i=0; i<mobGnbLis.length; i++){
  mobGnbLis[i].addEventListener('click',e=>{
    e.currentTarget.classList.toggle("on");
  })
}
});






