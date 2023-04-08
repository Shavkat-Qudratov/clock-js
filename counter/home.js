
let btns = document.querySelectorAll('.btn');
let value = document.querySelector('#value');
let counter = 0


btns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let styles = event.currentTarget.classList;
        if (styles.contains('decrease')) {
            counter--;
            value.style.color='red';
            console.log('decrease', 1);
        }else if (styles.contains('reset')) {
            value.style.color='black';
            counter=0;
            console.log('reset', 2);
        }else if (styles.contains('increase')){
            counter++;
            value.style.color='green';
            console.log('increase', 3);
        }else if(styles.contains('random')){
         counter=Math.floor(Math.random()*100, );
      
            value.style.color='yellow'
            console.log('random', 4);
        }
       
            value.textContent = counter;
           
        
    })
})



    
    


