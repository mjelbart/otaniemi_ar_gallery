// WORK IN PROGRESS

AFRAME.registerComponent('spawn-heart', {
  init: function () {
    let sceneEl = document.querySelector('a-scene'); // the scene
    let el = this.el; // the button

    el.addEventListener('click' function () {
      // post a message in the console to say the button was clicked
      console.log("heart button was clicked");

    var heart = document.createElement("a-entity");
    heart.setAttribute("mixin", "heart_mixin");
    heart.setAttribute("position", "1 1.6 -2");
    document.querySelector("a-scene").appendChild(heart);


      });

    }
  });
