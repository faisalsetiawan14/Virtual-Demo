var container = document.querySelector("#container");
var panorama1 = new PANOLENS.ImagePanorama('pict1.jpg');
var panorama2 = new PANOLENS.ImagePanorama('pict2.jpg');
var panorama3 = new PANOLENS.ImagePanorama('pict3.jpg');

var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama1, panorama2, panorama3);

var infospot1 = new PANOLENS.Infospot(400);
infospot1.position.set(0, 0, -2000);
panorama1.add(infospot1);

var infospot2 = new PANOLENS.Infospot(400);
infospot2.position.set(0, 0, -2000);
panorama2.add(infospot2);

var infospot3 = new PANOLENS.Infospot(400);
infospot3.position.set(0, 0, -2000);
panorama3.add(infospot3);

infospot1.addEventListener('click', function () {
  viewer.setPanorama(panorama2);
});

infospot2.addEventListener('click', function () {
  viewer.setPanorama(panorama3);
});

infospot3.addEventListener('click', function () {
    viewer.setPanorama(panorama1);
  });