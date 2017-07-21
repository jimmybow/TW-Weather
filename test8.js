var gd = document.getElementById('example-graph');
function attach() {
  var xaxis = gd._fullLayout.xaxis;
  var yaxis = gd._fullLayout.yaxis;
  var l = gd._fullLayout.margin.l;
  var t = gd._fullLayout.margin.t;
  
  gd.addEventListener('mousemove', function(evt) {
    var xInDataCoord = xaxis.p2c(evt.x - l);
    var yInDataCoord = yaxis.p2c(evt.y - t);
    Plotly.relayout(gd, 'title', ['x: ' + xInDataCoord, 'y : ' + yInDataCoord].join('<br>'));
  });
}
Plotly.relayout(gd,'title').then(attach)
