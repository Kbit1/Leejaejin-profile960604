
let main_btn = document.querySelector(".first-main")

main_btn.addEventListener("mousemove",function(e){
    let x= e.offsetX
    let y= e.offsetY
    console.log(x,y);
    document.querySelector(".first-main").style="transform:rotateY(-20deg)"
})

https://www.youtube.com/watch?v=YDCCauu4lIk 3분58초
