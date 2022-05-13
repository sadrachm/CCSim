
    //   document.querySelector('#refresh-button').addEventListener('click', function() {
    //     console.log("hello")
    // });
    
    // document.querySelector('#maybe').addEventListener('click', function() {
    //     console.log('starting')
    //   })
    // function maybe() {
    //     console.log("Maybe")
    // }
    // AFRAME.registerComponent("clock1", {
    //     schema: {},
      
    //     init: function () {
    //       //Create a new element, set\
    //       document.querySelector('#exit').setAttribute('text', "maybe")
      
    //       //TODO: Use helper functions in timezone.js to display the current time and support converting time zones
    //       //For implementing interactivity, you may find .addEventListener() useful
    //       //https://aframe.io/docs/1.2.0/introduction/interactions-and-controllers.html#events
    //     },
      
    //     tick: function () {
    //       this.addEventListener('click', function(evt) {
    //         console.log("NANI");
    //       })
    //     },
    //   });
function maybe() {
    console.log('nani')
}
AFRAME.registerComponent('start', {
    init: function() {
        var el = this.el;
        el.addEventListener('click', function() {
            // var el = document.querySelector('#start')
            // var el1 = document.querySelector('#exit')
            // var el2 = document.querySelector('#load')
            // var el3 = document.querySelector('#title')
            // el.parentNode.removeChild(el)
            // el2.parentNode.removeChild(el1)
            // el2.parentNode.removeChild(el2)
            // el3.parentNode.removeChild(el3)
            document.querySelector('#scene1').setAttribute('visible', 'false')
            document.querySelector('#scene2').setAttribute('visible', 'true')
        })
    }
});
AFRAME.registerComponent('load', {
    init: function() {
        var el = this.el;
        el.addEventListener('click', function() {
            console.log('Really Loading Save')
        })
    }
});
AFRAME.registerComponent('exit', {
    init: function() {
        var el = this.el;
        el.addEventListener('click', function() {
            console.log("Esadxit")
        })
    }
});
AFRAME.registerComponent('scene1continue', {
    init: function() {
        var el = this.el;
        el.addEventListener('click', function() {
            console.log("NANI")
            document.querySelector('#scene2').setAttribute('visible', 'false')
            document.querySelector('#scene3').setAttribute('visible', 'true')
        })
    }
});