function open_navbar_hamburger() {
    let speed = 200;

    let hamburger_button = document.querySelector(".navbar-hamburger-button > img");
    let hamburger_list = document.querySelector(".navbar-hamburger-list");

    if (hamburger_list.style.display == "none" || !hamburger_list.style.display) {
        hamburger_button.animate([
            {transform: "rotate(0deg)"},
            {transform: "rotate(360deg)"}
        ], {
            duration: speed,
            fill: "forwards"
        });

        hamburger_list.style.display = "flex";
        hamburger_list.animate([
            {maxHeight: "0px"},
            {maxHeight: hamburger_list.scrollHeight + "px"}
        ], {
            duration: speed,
            fill: "forwards"
        });
    } else {
        hamburger_button.animate([
            {transform: "rotate(360deg)"},
            {transform: "rotate(0deg)"}
        ], {
            duration: speed,
            fill: "forwards"
        });

        hamburger_list.animate([
            {maxHeight: hamburger_list.scrollHeight + "px"},
            {maxHeight: "0px"}
        ], {
            duration: speed,
            fill: "forwards"
        });

        setTimeout(function() {
            hamburger_list.style.display = "none";
        }, speed);
    }
}

