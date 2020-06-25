AFRAME.registerComponent('rotation-reader', {
  schema:{
    target: {type: 'string'}
  },
  init: function () {
    // Set up the tick throttling.
    this.tick = AFRAME.utils.throttleTick(this.tick, 10, this);
  },

  /**
   * Tick function that will be wrapped to be throttled.
   */
  
  tick: function (t, dt) {
    var el = this.el;
    var rotationTmp = this.rotationTmp = this.rotationTmp || {x: -45, y: 0, z: 0};
    var rotation = el.getAttribute('rotation');
    rotationTmp.y = rotation.y + 0.1;
    if (el){
    document.getElementById(this.data.target).setAttribute('rotation', rotationTmp);
    }    


  }
});