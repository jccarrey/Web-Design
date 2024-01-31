document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var rectanguloHome = document.getElementById('rectanguloHome');
    var h3Element = rectanguloHome.querySelector('h3');
    var rectanguloContact = document.getElementById('rectangulo-contact');
    var primerH3 = document.getElementById('primer-h3');
    var segundoH3 = document.getElementById('segundo-h3');

    // Calcula la opacidad en función de la posición de desplazamiento
    var opacity1 = Math.min(1, scrollPosition / 400); // 400 es la posición en la que quieres que aparezca completamente

    // Aplica la opacidad al h3
    h3Element.style.opacity = opacity1.toString();

    var opacity2 = Math.min(1, scrollPosition / 6600); // 400 es la posición en la que quieres que aparezca completamente

    // Aplica la opacidad a los elementos en rectangulo-contact
    primerH3.style.opacity = opacity2.toString();
    segundoH3.style.opacity = opacity2.toString();
});