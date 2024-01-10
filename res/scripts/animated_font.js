let speed = 1000;
let data = {
    "A": "&#9398; &#9424; &#5039; &#8704; &#506; &#945; &#5609; @ &#570; &#8371; &ordf; &aring; &acirc; &#478;".split(" "),
    "D": "&#9401; &#9427; &#5611; &#394; &#270; &#271; &#272; &#273; &eth; &#8706; &#8363; &#545; &#5798; &#5799;".split(" "),
    "I": "&#9406; &#9432; &#8464; &#912; &#302; &#300; &iacute; &#943; &#906; &igrave; &#5029; &icirc; &#298; &#304;".split(" "),
    "T": "&#9417; &#9443; &dagger; &#964; &#354; &#24178; &#12490; &#5055; &#5062; &#12486; &#8366; &#357; &#7786;".split(" "),
    "Y": "&#9422; &#9448; &#611; &#5033; &#5053; &#7822; &#7823; &#978; &#612; &#65509; &#1506; &#3062; &#4280;".split(" ")
}

function animate_font() {
    document.querySelectorAll(".animated-font-char").forEach((el) => {
        let el_char = el.getAttribute("char");
        el.innerHTML = data[el_char][Math.floor(Math.random() * data[el_char].length)];
    });
}

setInterval(animate_font, speed);

