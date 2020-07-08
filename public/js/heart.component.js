AFRAME.registerComponent('heart-button', {
  schema: {
    bulletTemplate: {default: '#heart-template'},
    radius: {type: 'number', default: 0.1},
    yPosMod: {type: 'number', default: 0.07},
    yRotMod: {type: 'number', default: 0}
  },

  init: function() {
    var that = this;
    let sceneEl = document.querySelector('a-scene');
    let el = this.el;

    el.addEventListener('click', function () {
      console.log("heart button was clicked!");
      that.shoot();
      console.log(el);

    });
    
  },

  shoot: function() {
    this.createHeart();
  },

  createHeart: function() {
    var that = this;
    var heartSpawner = this.el;
    var center = heartSpawner.getAttribute('position');
    var spawnerRotation = heartSpawner.getAttribute('rotation');
    var heartRotation = {x: 0, y: spawnerRotation.y + 90 + this.data.yRotMod, z: 0}; 
    
    //ffffff
    var angleRad = this.getRandomAngleInRadians();
    var circlePoint = this.randomPointOnCircle(this.data.radius, angleRad);
    var worldPoint = {x: circlePoint.x + center.x, y: center.y + this.data.yPosMod, z: circlePoint.y + center.z};
    console.log('world point', worldPoint);
    //fffffff
    
    var el = document.createElement('a-entity');
    el.setAttribute('networked', 'template:' + this.data.bulletTemplate);
    //el.setAttribute('position', center);
    el.setAttribute('position', worldPoint);
    el.setAttribute('rotation', heartRotation);
    
    var scene = document.querySelector('a-scene');
    scene.appendChild(el);
  },
  
  getRandomAngleInRadians: function() {
    return Math.random()*Math.PI*2;
  },

  randomPointOnCircle: function (radius, angleRad) {
    var x = Math.cos(angleRad)*radius;
    var y = Math.sin(angleRad)*radius;
    return {x: x, y: y};
  }

});