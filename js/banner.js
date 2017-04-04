/* o 10MP, három képkocka, 3-4-3 MP */
/* o AVI formátumban, 480x720-as méret */


$(document).ready(function(){
  
  var url = $.url(); 
  var source=url.param('source');

  $('#raster_link').attr('href','http://rasterstudio.hu/?utm_source='+source+'&utm_medium=banner&utm_campaign=Banner');

  var nr=1;
  
  if (typeof nr === 'undefined' || isNaN(nr)){
    nr=1;
  }
  
  tl  = new TimelineMax({repeat:-1});

  if (nr==1){   

    tl.add( TweenLite.from('#frame1', 0.25, {autoAlpha: 0, scale: 0}) )
    tl.add( TweenLite.to('#frame1', 0.25, {autoAlpha: 0, x: -260, delay: 2}) )
        
    tl.add( TweenLite.fromTo('.bubble', 0.20, {scale: 0.7, x:'80', y:0},{autoAlpha: 100, scale: 0.7, x:'20', y:0}), 'draw1' )
    tl.add( TweenLite.fromTo('.path', 0.20, {autoAlpha: 0, clip:"rect(0px 129px 134px 80px)"},{autoAlpha: 100, clip:"rect(0px 129px 134px 33px)"}), 'draw1' )
    tl.add( TweenLite.to('.path', 0.20, {clip:"rect(0px 129px 149px 33px)"}), 'draw2' )
    tl.add( TweenLite.to('.bubble', 0.20, {scale: 0.9, x:'70', y:2}),'draw2' )
    tl.add( TweenLite.to('.path', 0.20, {clip:"rect(0px 129px 159px 7px)"}), 'draw3' )
    tl.add( TweenLite.to('.bubble', 0.20, {scale: 1.0, x:'0', y:0}), 'draw3' )
    
    tl.staggerFrom('.line',0.2,{autoAlpha:0, scale:0},0.1);
    
    tl.add( TweenLite.to('.frame2', 0.25, {autoAlpha: 0, x: 260, delay: 0.75}) )
    
    tl.add( TweenLite.from('#frame3', 0.25, {autoAlpha: 0, rotation: -180, x: -260}), 'frame3' )
    tl.add( TweenLite.to('#frame3', 0.25, {autoAlpha: 0, rotation: 180, x: 260, delay: 1.75}), 'frame3' )
    ;
  
  }
  
  var url= (window.location != window.parent.location ? document.referrer: document.location);
  var domain=url.match(/:\/\/(.[^/]+)/)[1];
  
  $.ajax({
      type: 'POST',
      url: 'http://rasterstudio.hu/api/view',
      data: 'banner=rasterstudio&size=160x220&domain='+domain,
      dataType: 'json',
      cache: false,
      crossDomain: true,
      async: true,
      contentType: 'application/x-www-form-urlencoded',
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        if (XMLHttpRequest.responseText){
          alert(errorThrown+"\n"+XMLHttpRequest.responseText);
        }
      },      
      success: function(data, textStatus, XMLHttpRequest){
          //console.log(data);
      }
      
  });
  
  
  $('a').click(function(){
  
    var url= (window.location != window.parent.location ? document.referrer: document.location);
    var domain=url.match(/:\/\/(.[^/]+)/)[1];
  
    $.ajax({
      type: 'POST',
      url: 'http://rasterstudio.hu/api/click',
      data: 'banner=rasterstudio&size=160x220&domain='+domain,
      dataType: 'json',
      cache: false,
      crossDomain: true,
      async: true,
      contentType: 'application/x-www-form-urlencoded',
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        if (XMLHttpRequest.responseText){
          alert(errorThrown+"\n"+XMLHttpRequest.responseText);
        }
      },      
      success: function(data, textStatus, XMLHttpRequest){
          //console.log(data);
      }
      
    });
  });
  

  
  
//  tl.timeScale(0.25);
//  alert(tl.duration());
  tl.play();
  
});