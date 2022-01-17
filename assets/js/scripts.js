/* Funciones JavaScript
   Versión 0.1
   Autor: Nelson Ibarra V
   Curso: Full Stack
*/


//smooth
$(document).ready(function () {

    $("a").click(function () {
        var gato = this.hash

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top -50
            },
            2000

        )
    })

})

//tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})