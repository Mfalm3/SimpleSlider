
  $(document).ready(function(){
    var slides = $('input:radio[name=slider]'); 
    var currentSlide = slides.index(slides.filter(':checked'));
    setInterval(nextArticle, 2000);

  $('.previous').on("click",function(){
      prevArticle();
  });
  $('.next').on("click",function(){
    nextArticle();
  });

  function nextArticle(){
    var slides = $('input:radio[name=slider]'); 
    var currentSlide = slides.index(slides.filter(':checked'));
    $('input:radio:checked').each(function() {
  
        if(currentSlide != slides.length-1){
        
          $(this).next(':radio').prop('checked', true);
        
        }else if(currentSlide == slides.length-1){

          $(':radio:first').prop('checked', true);
      }
    });
  }
  
  function prevArticle(){
    var slides = $('input:radio[name=slider]'); 
    var currentSlide = slides.index(slides.filter(':checked'));
    $('input:radio:checked').each(function() {
  
        if(currentSlide == 0){
        
          $(':radio:last').prop('checked', true);
        
        }else{
          $(this).prev(':radio').prop('checked', true);
      }
    });
  }

});
