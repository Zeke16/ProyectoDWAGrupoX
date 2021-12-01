/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener('DOMContentLoaded', function() {
    let imagenes = [
        {img: 'img/artesanales.jpg'},
        {img: 'img/calzone.jpg'},
        {img: 'img/chicagodeepdish.jpg'},
        {img: 'img/entraditas.jpg'},
        {img: 'img/panini.jpg'},
        {img: 'img/pastas.jpg'},
        {img: 'img/stromboli.jpg'},
        {img: 'img/nuditos.jpg'}
    ]
    
    let contador = 0
    
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')

    contenedor.addEventListener('click', function (event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target

            if (tgt == atras) {
                if (contador > 0) {
                    img.src = imagenes[contador - 1].img
                    contador--
                    console.log(contador)
                } else {
                    img.src= imagenes[imagenes.length - 1].img
                    contador = imagenes.length - 1;
                }
            } else if (tgt == adelante) {
                if (contador < imagenes.length - 1) {
                    img.src = imagenes[contador + 1].img
                    contador++
                } else {
                    img.src = imagenes[0].img
                    contador = 0
                }
            }
    })

    Array.from(galeria_imagenes).forEach(img =>{
        img.addEventListener('click', event =>{
            const imagen_seleccionada = +event.target.dataset.imgMostrar
            img_slideshow.src  = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
        
    })

    document.querySelector('.btn_cerrar').addEventListener('click',() =>{
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })

    $(document).keyup(function(e){
        if(e.which == 27){
            overlay.style.opacity = 0
            overlay.style.visibility = 'hidden'
        } 
    })

})