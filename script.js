var targets = document.getElementsByClassName('targets');
// const hole = document.querySelector('#hole');


// targets.addEventListener('click', e => {
//    console.log('bla');
//   });

//   targets.each.addEventListener('click', () => {
//     console.log('bla');

//   });


  Array.from(targets).forEach(function(element) {
    element.addEventListener('click', (e) => {
        let innerDiv = element.querySelector('.hole');
        innerDiv.style.display = 'none';
        
        var viewportOffset = element.getBoundingClientRect();
        var left = viewportOffset.left;
        var top = viewportOffset.top;
 
        let posX = e.pageX - left - 5;
        let posY = e.pageY - top - 5;

        innerDiv.style.display = 'block';
        innerDiv.style.left = posX + 'px';
        innerDiv.style.top = posY + 'px';
       
        
      });
  });


//   document.body.addEventListener('click',(e)=>{
//     console.log(e.clientX + window.pageXOffset, e.clientY + window.pageYOffset)
//     }
//   )