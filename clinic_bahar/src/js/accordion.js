function accordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("show") == -1) {
        x.className += "show";
    } else {
        x.className = x.className.replace("show", "");
    }
}