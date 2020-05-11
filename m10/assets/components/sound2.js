// from https://glitch.com/~stack-57285828
AFRAME.registerComponent('muter', {
  init:function() {
    var audio = document.querySelectorAll(".sound");
    // lets store volume levels for later use
    var volLevels = {}
    audio.forEach(function(el, index) {
      el.addEventListener('loaded', e=> {
        volLevels[index] = el.getAttribute('sound').volume
      })
    })

    var muted = false
    // when clicked - switch the volume
    this.el.addEventListener('click', function() {
      audio.forEach(function(playAudio, index) {
        let volume = muted ? volLevels[index] : 0
        playAudio.setAttribute('sound', 'volume', volume)
      });
      muted = !muted
  });
 }
});