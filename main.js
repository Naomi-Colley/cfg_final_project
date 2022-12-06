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

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true
});


