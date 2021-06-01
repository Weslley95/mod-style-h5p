console.log("Hello, this is custom.js!");
(function ($) {
  $(document).ready(function () {

    setTimeout(function () {
      $('.h5p-control.h5p-playbackRate').css('background', 'green');

    }, 5000)
  })

})(H5P.jQuery);


var el = document.documentElement
    , rfs = // for newer Webkit and Firefox
           el.requestFullscreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
        || el.msRequestFullscreen
;
if(typeof rfs!="undefined" && rfs){
  rfs.call(el);
} else if(typeof window.ActiveXObject!="undefined"){
  // for Internet Explorer
  var wscript = new ActiveXObject("WScript.Shell");
  if (wscript!=null) {
     wscript.SendKeys("{F11}");
  }
}
