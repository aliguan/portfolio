$(document).ready(() => {

    $('#typing').typeIt({
        strings: ['Hello!','I am Alice','A Full Stack Web Developer'],
        speed: 50,
        autoStart: false,
    });

});

function openNav() {
    document.getElementById("mySidenav").style.width = "325px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
