/* global AFRAME */

AFRAME.registerComponent('wave-button2', {
  init: function () {
    let sceneEl = document.querySelector('a-scene');
    let el = this.el;

    el.addEventListener('click', function () {
      console.log("wave button was clicked!");
      sceneEl.querySelectorAll('.orbits').forEach((function(element) {
            element.emit('startOrbit')
       }));
    });
  } 
});