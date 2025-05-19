// external js: flickity.pkgd.js

$(document).ready( function() {
  var $gallery = $('.gallery').flickity();

  function onLoadeddata( event ) {
    var cell = $gallery.flickity( 'getParentCell', event.target );
    $gallery.flickity( 'cellSizeChange', cell && cell.element );
  }
  
  $gallery.find('video').each( function( i, video ) {
    video.play();
    $( video ).on( 'loadeddata', onLoadeddata );
  });

});