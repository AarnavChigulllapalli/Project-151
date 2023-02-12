// Registering component in log-component.js
AFRAME.registerComponent('car', {
    schema: {
      modelRef: {type: 'string', default: './Assets/Car.glb'}
    },
    init: function () {
      this.el.setAttribute("glb-model", this.data.modelRef)
      const position = {x:0, y:50, z:80}
      const rotation = {x:0, y: -100, z:0}
      this.el.setAttribute("position",position)
      this.el.setAttribute("rotation",rotation)
      }
  });

