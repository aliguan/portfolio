$(document).ready(() => {

// var circle = new mojs.Shape({
//     shape: 'rect',
//     className: 'pullDown',
//     parent: '#js-square',
//     isShowStart: true,
// });


var circlecopy= document.querySelector('#js-square'),
    squashCurve = mojs.easing.path('M0,100.004963 C0,100.004963 25,147.596355 25,100.004961 C25,70.7741867 32.2461944,85.3230873'
    + '58.484375,94.8579105 C68.9280825,98.6531013 83.2611815,99.9999999 100,100'),
    translateCurve = mojs.easing.path('M0,100 C6.50461245,96.8525391 12.6278439,88.3497543 16.6678547,0 C16.6678547,-1.79459817 31.6478577,115.871587 44.1008572,0 C44.1008572,-0.762447191 54.8688736,57.613472 63.0182497,0 C63.0182497,-0.96434046 70.1500549,29.0348701 76.4643231,0 C76.4643231,0 81.9085007,16.5050125 85.8902733,0 C85.8902733,-0.762447191 89.4362183,8.93311024 92.132216,0 C92.132216,-0.156767385 95.0157166,4.59766248 96.918051,0 C96.918051,-0.156767385 98.7040751,1.93815588 100,0');
new mojs.Tween({
  delay:    1000,
  duration: 3000,
  onUpdate: function (progress) {
    var translateProgress = translateCurve(progress),
        squashProgress = squashCurve(progress),
        scaleY = 1 + 5*squashProgress,
        scaleX = 1 - 8*squashProgress;

    circlecopy.style.transform =
      'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')' +
      'translateY(' + 150*translateProgress + 'vh)';
  }
}).play();

});
