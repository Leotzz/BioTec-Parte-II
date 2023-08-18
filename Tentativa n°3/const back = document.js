const back = document.querySelector('#back');
const forward = document.querySelector('#forward');
const items = document.querySelector('#items');
const item = document.querySelectorAll('.item');
let count = 0

forward.addEventListener('click', (event) => {
  count+=300;
  items.scrollBy(300, 0);
  if (count > 300 * (item.length -1)) {
    for(var i=0; i<item.length; i++) {
      items.scrollBy(-300, 0)
    }
  count = 0;
  }

  console.log(count);
})

back.addEventListener('click', (event) => {
  count-=300;
  items.scrollBy(-300, 0)
  if (count < 0) {
    count = 300 * (item.length -1);
    for(var i=0; i<item.length; i++) {
      items.scrollBy(300, 0)
    }
  }

  console.log(count);
})

// Scroll com a roda do mouse
items.addEventListener("wheel", (event) => {
  if(event.deltaY < 0){
    count-=300;
    event.target.scrollBy(300, 0)
  }
  else{
    count+=300;
    event.target.scrollBy(-300, 0)
  }
})


// Scroll automático
// let count = 0
// setInterval(function(){
//   count += 400
//   if(count > 8000) count = 0
//   document.querySelector("#items").scrollTo(count, 0)
// }, 1500)