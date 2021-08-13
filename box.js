AFRAME.registerComponent('move-box-on-click',{
    schema:{
        move_y:{type:'number',default:1},
    },
    tick:function(){
        var pos=this.el.getAttribute('position');
        this.data.move_y=this.data.move_y+0.001;
        pos.y=this.data.move_y;
        this.el.setAttribute('position',{x:pos.x,y:pos.y,z:pos.z})
    }
})