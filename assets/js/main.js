function toggle_menu () {
    menu = document.getElementById('sidebar');
    if (menu.style.display == 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        menu.style.padding = 0;
        menu.style.position = 'fixed';
    } else {
        menu.style.display = null;
        menu.style.position = null;
        menu.style.padding = null;
        menu.style.paddingRight = null;
    }
}

function check_navigation () {
    items = document.getElementsByClassName('buster_navigation_item');
    for (var i = 0; i < items.length; i++) {
        if (items[i].id == 'about') {
            items[i].children[0].className += " fa-user";
        } else {
            items[i].children[0].className += " fa-circle-o";
        }
    }
}