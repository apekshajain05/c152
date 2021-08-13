AFRAME.registerComponent('camera-zoom-out',{
    schema:{
        move_z:{type:'number',default:1},
    },
    tick:function(){
        var pos=this.el.getAttribute('position');
        this.data.move_z=this.data.move_z+0.008;
        pos.z=this.data.move_z;
        this.el.setAttribute('position',{x:pos.x,y:pos.y,z:pos.z})
    }
})

AFRAME.registerComponent('fall-down',{
    schema:{
        move_y:{type:'number',default:1},
    },
    tick:function(){
        window.addEventListener('click',()=>{
        this.data.move_y=this.data.move_y-0.008;
        })
        var pos=this.el.getAttribute('position');
        
        pos.y=pos.y+this.data.move_y;
        this.el.setAttribute('position',{x:pos.x,y:pos.y,z:pos.z})
    }
})