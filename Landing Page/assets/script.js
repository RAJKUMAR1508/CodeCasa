gsap.from('.logo', {opacity:0, duration:1, delay:2, y:10})
gsap.from('.nav-bar .nav-item', {opacity:0, duration:1, delay:2.1, y:30, stagger:0.2})

gsap.from('.content', {opacity:0, duration:1, delay:1.6, y:30})
gsap.from('.about', {opacity:0, duration:1, delay:1.8, y:30})
gsap.from('.btn', {opacity:0, duration:1, delay:2.1, y:30})
gsap.from('.main-image', {opacity:0, duration:1, delay:2.6, y:30})

// image mover
document.addEventListener('mousemove', image);
function image(e){
    this.querySelectorAll('.image').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerWidth - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`

    })

}

let navbar = document.querySelector('.header .nav-bar')

document.querySelector('.menu').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('.nav-div').onclick = () =>{
    navbar.classList.remove('active');
}