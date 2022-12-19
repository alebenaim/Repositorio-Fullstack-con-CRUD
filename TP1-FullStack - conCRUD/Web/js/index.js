//header de las páginas

var cad=`<nav class="header-menubar contenedor">
            <div class="header-logo"><a href="index.html"><img src="./img/musicbox-chico.png" alt="Logo"></a></div>
            <div class="header-titulo"><h1>La Cajita Musical</h1></div>
        </nav> 
        <ul class="menu-option">
            <li><a  href="index.html">Inicio</a></li>
            <li><a  href="productos.html">Catalogo</a></li>
            <li><a  href="servicios.html">Servicios</a></li>
            <li><a  href="reseñas.html">Reseñas</a></li>
            <li><a  href="contacto.html">Contacto</a></li>
            <li><a  href="administracion.html">Administracion</a></li>
        </ul>  
        `
document.getElementById("idheader").innerHTML=cad;



// footer de las páginas
var cad=`<nav class="idatos" >    
            <div class="imDatos">          
            <i class="fa-solid fa-phone"></i>  (11) 5432-3425</div>
            <div class="imDatos">  
            <i class="fa-brands fa-whatsapp"></i>  (11) 2345-3456</div> 
            <div class="imDatos">       
            <i class="fa-solid fa-location-dot"></i>  Talcahuano 234 - CABA</div>
            <div class="imDatos"> 
            <i class="fa-solid fa-envelope"></i>  cajita-musical@gmail.com</div>          
        </nav>
        <nav class="leyenda">
            <h3>La cajita Musical</h3>
            <h5>Derechos reservados 2022</h5>
        </nav>
        <nav class="foot-redes">
            <a class="redes" href="https://www.twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            <a class="redes" href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a class="redes" href="https://www.pinterest.com" target="_blank"><i class="fa-brands fa-pinterest"></i></a>
            <a class="redes" href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a class="redes" href="https://www.linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <nav>
        `
document.getElementById("idfooter").innerHTML=cad;