// http://ahrengot.com/tutorials/greensock-javascript-animation

var $circle = $('.circle'),
    $wrapper = $('#wrapper'); 

  function moveCircle(e) {
    TweenLite.to($circle, 0.8, {
      css: {
        left: e.pageX,
        top: e.pageY
      }
    });
  }

var flag = false;
$($wrapper).mouseover(function(){
  flag = true;
  TweenLite.to($circle,0.4,{scale:1,autoAlpha:1})
  $($wrapper).on('mousemove', moveCircle);
});
$($wrapper).mouseout(function(){
    flag = false;
    TweenLite.to($circle,0.4,{scale:0.1,autoAlpha:0})
});