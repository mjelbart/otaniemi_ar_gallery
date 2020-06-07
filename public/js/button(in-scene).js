AFRAME.registerComponent('pause-button', {
  init: function () {
    let sceneEl = document.querySelector('a-scene'); // the scene
    let el = this.el; // the button

    el.addEventListener('click' function () {
      // post a message in the console to say the button was clicked
      console.log("pause button was clicked");

      // caues each object of the class '.orbits' to emit 'pauseOrbit' to trigger their animation pause event for an animation like
      // animation="property: rotation; to: 0 360 0; loop: true; pauseEvents: pauseOrbit;"
      sceneEl.querySelectorAll('.orbits').forEach((function (element) {
        element.emit('pauseOrbit')
      }));

      });

    }
  });
