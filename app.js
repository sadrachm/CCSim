
function maybe() {
    console.log('nani')
}
AFRAME.registerComponent('start', {
    init: function() {
        var el = this.el;
        el.addEventListener('click', function() {
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
AFRAME.registerComponent('scene2continue', {
    init: function() {
        var el = this.el;
        el.addEventListener('click', function() {
            console.log("NANI")
            document.querySelector('#scene3').setAttribute('visible', 'false')
            document.querySelector('#scene4').setAttribute('visible', 'true')
            document.querySelector('#env').setAttribute('environment', 'preset:forest')
        })
    }
});
AFRAME.registerComponent('changesetting', {
    init: function() {
        var el = this.el;
        el.addEventListener('click', function() {
            console.log("NANI")
            document.querySelector('#inForest').setAttribute('visible', 'false')
            document.querySelector('#inLake').setAttribute('visible', 'true')
            // document.querySelector('#env').setAttribute('environment', 'preset:forest')
        })
    }
});
AFRAME.registerComponent('powerplant', {
    init: function() {
        var el = this.el;
        el.addEventListener('click', function() {
            console.log("NANI")
            document.querySelector('#scene3').setAttribute('visible', 'false')
            document.querySelector('#scene5').setAttribute('visible', 'true')
            // document.querySelector('#env').setAttribute('environment', 'preset:forest')
        })
    }
});
AFRAME.registerComponent('coal', {
    init: function() {
        var el = this.el;
        el.addEventListener('click', function() {
            console.log("NANI")
            document.querySelector('#inForest').setAttribute('visible', 'false')
            document.querySelector('#coal').setAttribute('visible', 'true')
            // document.querySelector('#env').setAttribute('environment', 'preset:forest')
        })
    }
});
AFRAME.registerComponent('wind', {
    init: function() {
        var el = this.el;
        el.addEventListener('click', function() {
            console.log("NANI")
            document.querySelector('#inForest').setAttribute('visible', 'false')
            document.querySelector('#wind').setAttribute('visible', 'true')
            // document.querySelector('#env').setAttribute('environment', 'preset:forest')
        })
    }
});