// 시작페이지 CSS 키프레임이 종료되면 홈페이지로 이동 //
$('.first-bottom').on('animationend',function(){
    location.href = 'main.html';
});

//main.html 카드 슬라이드//

// setInterval(function(){
//     $(".main-card-img div:eq(0)").stop().fadeOut("normal",function(){})
// },2000)
// setInterval(function(){
//     $(".main-card-img div:eq(1)").stop().fadeOut("normal",function(){})
// },4000)
// setInterval(function(){
//     $(".main-card-img div:eq(2)").stop().fadeOut("normal",function(){
//     })
// },6000)

setInterval(function(){
    $(".main-card-img div:eq(0)").stop().fadeOut("normal",function(){
        $(".main-card-img div:eq(0)").appendTo(".main-card-img").css({display:"block"})
    })
},2000)



//main.html 카드 슬라이드//



// 시작페이지 CSS 키프레임이 종료되면 홈페이지로 이동 //

// index , button 클릭시 main으로 이동 //

//해당 코드는 카드를 보여주고 그 카드를 누르게되면 text변경을 을 해줄것인데 그 방법을 주석처리 해두었다/


// console.log("-------------")

// let car = ["소나타" , 50000 , "white"]
// let car2 = {name:"소나타" , price:[50000,3000,4000] , color:"white"}

// $(".card span:eq(0)").text(car2.name)
// $(".card span:eq(1)").text(car2.price[0])

