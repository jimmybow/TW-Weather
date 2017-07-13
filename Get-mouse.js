var gd = document.getElementById('mygraph');
function attach() {
  var xaxis = gd._fullLayout.mapbox._subplot.xaxis;
  var yaxis = gd._fullLayout.mapbox._subplot.yaxis;
  var l = gd._fullLayout.margin.l;
  var t = gd._fullLayout.margin.t;
  
  gd.addEventListener('mousemove', function(evt) {
    var xInDataCoord = xaxis.p2c(evt.x - l);
    var yInDataCoord = yaxis.p2c(evt.y - t);
    var outt = document.getElementById('uuu') ;
    outt.innerHTML = '<div id="uuu2" style="color:white" >' + xInDataCoord +' and '+ yInDataCoord + '</div>';
    Plotly.relayout(gd, 'title', ['x: ' + xInDataCoord, 'y : ' + yInDataCoord].join('<br>'));
  });
}
Plotly.relayout(gd,'title').then(attach);
