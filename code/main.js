//dandole funcionalidad al boton de seleccion de productos,posiblilidad de aumentar y disminuir la cantidad de productos de un tipo a comprar
const minus = document.querySelector('.input__minus');
const plus = document.querySelector('.input__plus');
let contNumber = 0;
let contTotal = 0;
let index_array = 0;
const array_img = [
    "./assets/images/7.jpeg",
    "./assets/images/3.jpeg",
    "./assets/images/4.jpeg",
    "./assets/images/6.jpeg",
];
minus.addEventListener('click',()=>{
    let input = document.querySelector('.input__number');
    if(contNumber > 0){
        input.value = contNumber-=1; 
    }
})
plus.addEventListener('click',()=>{
    let input = document.querySelector('.input__number');
    input.value = contNumber+=1; 
})
//agregar el total de productos al carrito al presionar el boton de descargar
const downloadbtn = document.querySelector('.details__button');
downloadbtn.addEventListener('click', ()=>{
    const price__discount = 100;
    if(contNumber > 0){
        let notification = document.querySelector('.header__cart--notification');
        contTotal += contNumber;
        notification.innerHTML = contTotal;
        notification.style.display = 'block';
        document.querySelector('.input__number').value = 0;
    }
    if(contTotal != 0){
        let cartContent = document.querySelector('.cart-modal__checkout-container');
        let empty = document.querySelector('.cart-modal__empty');
        cartContent.style.display = 'block';
        empty.style.display = 'none';
    }
    let price = document.querySelector('.cart-modal__price');
    price.innerHTML = `$${price__discount} x${contTotal} <span>$${price__discount*contTotal}</span>`;
    contNumber = 0; 
})
//mostrar el cart modal al hacer click en el icono del carrito
const cart = document.querySelector('.header__cart');
cart.addEventListener('click', ()=>{
    let cartModal = document.querySelector('.cart-modal');
   cartModal.classList.toggle('cart-modal--hide');
})
//al presionar el cart-modal__delete debe borrarse todo lo que este en el carrito y volver al valor de cero
const deletebtn = document.querySelector('.cart-modal__delete');
deletebtn.addEventListener('click', ()=>{
    let notification = document.querySelector('.header__cart--notification');
    notification.style.display = 'none';
    contTotal = 0;
    let cartContent = document.querySelector('.cart-modal__checkout-container');
    let empty = document.querySelector('.cart-modal__empty');
    cartContent.style.display = 'none';
    empty.style.display = 'block';
})
//dandole funcionalidad a los botones del carrucel de imagenes
let imgContainer = document.querySelector('.gallery__image-container');
const next = document.querySelector('.gallery__next');
const previous = document.querySelector('.gallery__previous');
next.addEventListener('click', ()=>{
    if(index_array == 3){
        index_array = 0;
    }
    else{
        index_array ++;
    }
    imgContainer.style.backgroundImage = `url(${array_img[index_array]})`;
    let detailsimg = document.querySelector('.details-container__game');
    detailsimg.src = array_img[index_array];
})
previous.addEventListener('click', ()=>{
    if(index_array == 0){
        index_array = 3;
    }
    else{
        index_array --;
    }
    imgContainer.style.backgroundImage = `url(${array_img[index_array]})`;
    let detailsimg = document.querySelector('.details-container__game');
    detailsimg.src = array_img[index_array];
})
//al presionar en la imagen ampliada de la galleria en la vista desktop se deberia mostrar el modal gallery, es el soguiente paso a implementar
imgContainer.addEventListener('click', ()=>{
    if(window.innerWidth >= 1115){
        let modalgallery = document.querySelector('.modal-gallery__background');
        modalgallery.style.display = 'block';
    }
})
//dando funcionalidad para salir del modal gallery
const closebtn = document.querySelector('.modal-gallery__close');
closebtn.addEventListener('click', ()=>{
    let modalgallery = document.querySelector('.modal-gallery__background');
    modalgallery.style.display = 'none';
})
//cambiar la imagen del contenedor principal a traves de los thumnails
const thumnails = document.querySelectorAll('.gallery__thumnail');
thumnails.forEach(thumnail =>{
    thumnail.addEventListener('click', (event)=>{
        imgContainer.style.backgroundImage = `url(${event.target.src})`;
    })
})
//cambiar las imagenes ahora para el modal
let modalimgcontainer = document.querySelector('.modal-gallery__image-container');
const modalthumnails = document.querySelectorAll('.modal-gallery__thumnail');
modalthumnails.forEach(thumnail =>{
    thumnail.addEventListener('click', (event)=>{
        modalimgcontainer.style.backgroundImage = `url(${event.target.src})`;
    })
})
//dandole funcionalidad a los botones de next y pprevioux del modal gallery
const modalprevious = document.querySelector('.modal-gallery__previous');
const modalnext  = document.querySelector('.modal-gallery__next');
modalprevious.addEventListener('click', ()=>{
    if(index_array == 0){
        index_array = 3;
    }
    else{
        index_array--;
    }
    modalimgcontainer.style.backgroundImage = `url(${array_img[index_array]})`;
})
modalnext.addEventListener('click', ()=>{
    if(index_array == 3){
        index_array = 0;
    }
    else{
        index_array++;
    }
    modalimgcontainer.style.backgroundImage = `url(${array_img[index_array]})`;
})
//agregando funcionalidad al boton de meno de la vista movil
const menubtn = document.querySelector('.header__menu');
menubtn.addEventListener('click', ()=>{
    let slidemedu = document.querySelector('.modal-background');
    slidemedu.style.display = 'block';
})
//funcionalidad para ocultar el menu lateral
const menuclosebtn = document.querySelector('.modal__navbar__icon');
menuclosebtn.addEventListener('click', ()=>{
    let slidemedu = document.querySelector('.modal-background');
    slidemedu.style.display = 'none';
})