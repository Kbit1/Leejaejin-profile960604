// index , button 클릭시 main으로 이동 //
document.querySelector('.first-main button').addEventListener('click', function() {
    location.href = 'main.html';
});
// index , button 클릭시 main으로 이동 //

let main_btn = document.querySelector(".first-main")

main_btn.addEventListener("mousemove",function(e){
    let x= e.offsetX
    let y= e.offsetY
    console.log(x,y);

    // 임시대기 어지러움 let rotateY = 1/-5 * x + 20 ; 
    document.querySelector(".first-main").style=`transform:rotateY(${rotateY}deg)`
})




// https://www.youtube.com/watch?v=YDCCauu4lIk 3분58초


