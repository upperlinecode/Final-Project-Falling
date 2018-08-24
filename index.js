console.log("Operating!");
const thegoal = document.querySelector('#greybox');
const theplayer = document.querySelector('#player');
const debody  = document.querySelector('#body');
const obsbox = document.querySelector('#obstacles');
const thescene = document.querySelector('#thescene');
let timer = document.querySelector('#timer');

theplayer.addEventListener('collide', function(e) {
    console.log('Player has collided with body #' + e.detail.body.id);
});
thegoal.addEventListener('collide', function(e) {
    console.log("Player has collided with goal");
    // scene.innerHTML = `<a-entity data-cloud9-id="52" id="banner" gblock="https://poly.google.com/view/dtfi0MpW8a5" position="11.555 -81.582 -17.984" scale="5.039 11 -12.385">
    //         </a-entity>`; 
});

thegoal.addEventListener('collide', function(e) {
    console.log("Player has collided obstacle");
    window.alert("You Won!,refresh the page to play again")
});

setInterval(count, 100);
let time=0;
function count(){
    time+=1
    timer.innerHTML = `<a-text value="${time}" color= "red" position="0.5 -.7 -1"></a-text>`
}