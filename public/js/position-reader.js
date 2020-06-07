AFRAME.registerComponent('position-reader', {
  schema:{
    target: {type: 'string'}
  },
  init: function () {
    // Set up the tick throttling.
    this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
  },

  /**
   * Tick function that will be wrapped to be throttled.
   */
  
  tick: function (t, dt) {
    var el = this.el;
    var positionTmp = this.positionTmp || {x: -1, y: 0, z: 0};
    var position = el.getAttribute('position');
    positionTmp = position;
    document.getElementById(this.data.target).setAttribute('position', positionTmp);
    

  }
});