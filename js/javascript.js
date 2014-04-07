$(document).ready(function() {
  	$( ".banner, .especialies" ).fadeIn( 2500 );
});


$( ".flag" ).click(function() {
  	$( ".logo-flag, .fundo" ).fadeOut( 1000 );
  	$( ".inside-site" ).delay( 1000 ).fadeIn( 1000 );
});



$( ".servicesmenu, .cvmenu, .modelingmenu, .midiamenu, .contactmenu" ).click(function() {
  	$( ".maincontent" ).fadeOut( 0 );
});

$( ".homemenu" ).click(function() {
  	$( ".maincontent" ).fadeIn( 0 );
});




$(window).load(function() {
	$('.loading').fadeOut();
});


