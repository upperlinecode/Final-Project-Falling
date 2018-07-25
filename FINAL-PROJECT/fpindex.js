console.log("Operating!");
const thegoal = document.querySelector('#greybox');
const theplayer = document.querySelector('#player');
const debody  = document.querySelector('#body');

theplayer.addEventListener('collide', function(e) {
    console.log('Player has collided with body #' + e.detail.body.id);
});
thegoal.addEventListener('collide', function(e) {
    console.log("Player has collided with goal");

});
