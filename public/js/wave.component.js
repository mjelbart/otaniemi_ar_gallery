/*
AFRAME.registerComponent('wave-button2', {
  init: function () {
    let sceneEl = document.querySelector('a-scene');
    let el = this.el;

    el.addEventListener('click', function () {
      console.log("wave button was clicked!");
      
    });
  } 
});
*/

AFRAME.registerComponent('wave-button', {
  schema: {
    bulletTemplate: {default: '#bullet-template'},
    triggerKeyCode: {default: 32} // spacebar
  },

  init: function() {
    var that = this;
    let sceneEl = document.querySelector('a-scene');
    let el = this.el;

    el.addEventListener('click', function () {
      console.log("wave button was clicked!");
      that.shoot();
      
    });
    document.body.onkeyup = function(e){
      if(e.keyCode == that.data.triggerKeyCode){
        that.shoot();
      }
    }
  },

  shoot: function() {
    this.createBullet();
  },

  createBullet: function() {
    var el = document.createElement('a-entity');
    el.setAttribute('networked', 'template:' + this.data.bulletTemplate);
    el.setAttribute('remove-in-seconds', 1.2);
    
    var tip = document.querySelector('#player');
      var debug = document.querySelector('#debugging01'); // added for debugging
    var rotationOfPlayer = this.getInitialBulletRotation(tip);
    var rotationOfHand = {x: 0, y: 0, z: 0};
      // var positionOfHand = {x: 0, y: 0, z: 0}; // added for debugging
      // positionOfHand = this.getInitialBulletPosition(tip); // added for debugging
      // console.log(positionOfHand); // added for debugging
      // console.log(debug.value); // added for debugging
      // var debugValue = debug.value; // added for debugging
      // var x = debugValue.toString(); // added for debugging
      // console.log(x); // added for debugging
      // debug.setAttribute('text','value',rotationOfPlayer.y);
    rotationOfHand.y = tip.getAttribute('rotation').y;
    el.setAttribute('rotation', rotationOfHand);
      var testThing = document.querySelector('#wavebuttonparent'); // added for debugging
      var positionOfPlayer = this.getInitialBulletPosition(testThing); // added for debugging
      debug.setAttribute('text','value', positionOfPlayer.z); // added for debugging
    el.setAttribute('position', this.getInitialBulletPosition(testThing));
    
    var scene = document.querySelector('a-scene');
    scene.appendChild(el);
  },

  getInitialBulletPosition: function(spawnerEl) {
    var worldPos = new THREE.Vector3();
    worldPos.setFromMatrixPosition(spawnerEl.object3D.matrixWorld);
    worldPos.y = worldPos.y - 0.5;
    return worldPos;
  },

  getInitialBulletRotation: function(spawnerEl) {
    var worldDirection = new THREE.Vector3();

    spawnerEl.object3D.getWorldDirection(worldDirection);
    worldDirection.multiplyScalar(-1);
    this.vec3RadToDeg(worldDirection);
    
    return worldDirection;
  },

  vec3RadToDeg: function(rad) {
    rad.set(rad.y * 90, -90 + (-THREE.Math.radToDeg(Math.atan2(rad.z, rad.x))), 0);
  }
});