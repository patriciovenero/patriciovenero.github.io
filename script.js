let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
const boton = document.getElementById("submit");

boton.addEventListener("click", function() {
  document.getElementById("ventanaEmergente").style.display = "block";  
});
// Función para mostrar la ventana emergente
function mostrarVentanaEmergente() {
    document.getElementById("ventanaEmergente").style.display = "block";
}

// Función para ocultar la ventana emergente
function ocultarVentanaEmergente() {
    document.getElementById("ventanaEmergente").style.display = "none";
}

// Agrega un evento click al botón "Enviar Mensaje" para mostrar la ventana emergente
document.getElementById("submit").addEventListener("click", mostrarVentanaEmergente);

// Agrega un evento click al botón "Cerrar" dentro de la ventana emergente para ocultarla
document.getElementById("cerrar").addEventListener("click", ocultarVentanaEmergente);
