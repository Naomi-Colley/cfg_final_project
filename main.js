// Button on home page

const btns = document.querySelectorAll('button');
btns.forEach((items)=>{
    items.addEventListener('click',(evt)=>{
        evt.target.classList.add('activeLoading');

        setTimeout( 
            function  (){  
                evt.target.classList.remove('activeLoading');
                btns.innerHTML = "Sign In";
                
            }, 3000);
    }, false);
    
});

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')

if (alertTrigger) {
    
  alertTrigger.addEventListener('click', () => {setTimeout(() => {
    alert('Everything is now okay &#128522', 'success')
    
        
    },  3000);

  })
}


// Carousel timer

$(function() {

    
    $t = "slide"; 
    
  	//variables
    $s = 1000,  
    $d = 5000;  
    
    $n = $('.slide').length; 
    $w = $('.slide').width(); 
  	$c = $('.container').width(); 
   	$ss = $n * $w; // slideshow width
  
  	
      function timer() {
        $('.timer').animate({"width":$w}, $d);
        $('.timer').animate({"width":0}, 0);
    }

        
        $('.slide').eq($i).show();
        

        setInterval(function() {
          timer();
            $('.slide').eq($i).fadeOut($f);
            if ($i == $n - 1) {
                $i = 0;
            } else {
                $i++;
            }
            $('.slide').eq($i).fadeIn($f, function() {
                $('.timer').css({'width' : '0'});
            });

        }, $d);
        
    }
    
    function slide() {
      timer();
        var setSlideCSS = {
            'float' : 'left',
            'display' : 'inline-block',
          	'width' : $c
        }
        var setSlideShowCSS = {
            'width' : $ss 
        }
        $('.slide').css(setSlideCSS);
        $('.slideshow').css(setSlideShowCSS); 
        
        
        setInterval(function() {
            timer();
            $('.slideshow').animate({"left": -$w}, $s, function(){
                $('.slideshow').css('left',0).append( $('.slide:first'));
            });
        }, $d);
        
    }
    
    if ($t == "fade") {
        fadeInOut();
        
    } if ($t == "slide") {
        slide();
        
    } else {
      
    }
});





