// 시작페이지 CSS 키프레임이 종료되면 홈페이지로 이동 //
$('.first-bottom').on('animationend',function(){
    location.href = 'main.html';
});

//main.html 카드 무한로딩//

let count = 0;
setInterval(function(){
    let silver = $(".main-card-img div:eq(0)")
    let gold = $(".main-card-img div:eq(1)")
    let green = $(".main-card-img div:eq(2)")
    let black = $(".main-card-img div:eq(3)")

    if(count==0){
        silver.fadeOut(); black.fadeIn();
        count = 1
    } else if(count==1){
        gold.fadeOut();
        count = 2
    } else if(count==2){
        green.fadeOut();
        count = 3
    } else if(count==3){
        black.fadeOut(); silver.fadeIn(); gold.fadeIn(); green.fadeIn();
        count = 0
    }
},1000)


//main.html 카드 무한로딩//

// let reset = 0;
// setInterval(function(){

//     if (reset == 0) {
//         $('.main-card-img div:nth-of-type(1)').fadeOut();
//         let attr = $('.main-card-img div:nth-of-type(1)').attr('class');
//         reset += parseInt(attr);
//     } else if (reset == 1) {
//         $('.main-card-img div:nth-of-type(2)').fadeOut();
//         let attr = $('.main-card-img div:nth-of-type(2)').attr('class');
//         reset += parseInt(attr);
//     } else if (reset == 3) {
//         $('.main-card-img div:nth-of-type(3)').fadeOut();
//         $('.main-card-img div:nth-of-type(1)').fadeIn();
//         $('.main-card-img div:nth-of-type(2)').fadeIn();
//         $('.main-card-img div:nth-of-type(3)').fadeIn();
//         reset = 0;
//     }
//     console.log(reset, '리셋')
// },2000)






//main.html 카드 슬라이드//



// 시작페이지 CSS 키프레임이 종료되면 홈페이지로 이동 //

// index , button 클릭시 main으로 이동 //

//해당 코드는 카드를 보여주고 그 카드를 누르게되면 text변경을 을 해줄것인데 그 방법을 주석처리 해두었다/


// console.log("-------------")

// let car = ["소나타" , 50000 , "white"]
// let car2 = {name:"소나타" , price:[50000,3000,4000] , color:"white"}

// $(".card span:eq(0)").text(car2.name)
// $(".card span:eq(1)").text(car2.price[0])



