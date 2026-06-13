const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';
    updateCounter(counter);
});



function updateCounter(counter){
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 200;

    if(c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 1, counter);
    } else {
        counter.innerText = target;
    }

}