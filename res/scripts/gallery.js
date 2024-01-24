let offset_ranges = {
    tx: 50,
    ty: 50,
    rot: 30
}

function sendImageToBack(imageElement, event) {
    let direction = ["20%", "80%"][event.clientX < window.innerWidth / 2 ? 0 : 1];

    imageElement.style.pointerEvents = "none";

    let animation = imageElement.animate([
        { left: "50%", zIndex: imageElement.style.zIndex },
        { left: direction, zIndex: imageElement.style.zIndex },
        { left: "50%", zIndex: imageElement.style.zIndex - 1 }
    ], {
        duration: 1000,
        fill: "forwards",
        timingFunction: "ease-in-out"
    });

    animation.onfinish = () => {
        imageElement.style.pointerEvents = "auto";

        let copy = imageElement.cloneNode(true);
        let parent = imageElement.parentNode;

        imageElement.remove();
        parent.insertBefore(copy, parent.firstChild);
    };
}

function bringImageToFront(imageElement, event) {
    let direction = ["20%", "80%"][event.clientX < window.innerWidth / 2 ? 0 : 1];

    imageElement.style.pointerEvents = "none";

    let offset = {
        tx: (Math.random() * offset_ranges.tx) - (offset_ranges.tx / 2),
        ty: (Math.random() * offset_ranges.ty) - (offset_ranges.ty / 2),
        rot: (Math.random() * offset_ranges.rot) - (offset_ranges.rot / 2)
    };

    imageElement.style.transform = `translate(calc(-50% + ${offset.tx}px), calc(-50% + ${offset.ty}px)) rotate(${offset.rot}deg)`;

    let animation = imageElement.animate([
        { left: "50%", zIndex: imageElement.style.zIndex },
        { left: direction, zIndex: imageElement.style.zIndex },
        { left: "50%", zIndex: imageElement.style.zIndex + 2 }
    ], {
        duration: 1000,
        fill: "forwards",
        timingFunction: "ease-in-out"
    });

    animation.onfinish = () => {
        imageElement.style.pointerEvents = "auto";

        let copy = imageElement.cloneNode(true);
        let parent = imageElement.parentNode;

        imageElement.remove();
        parent.append(copy);
    };
}

function galleryInit() {
    var images = document.querySelectorAll("#gallery .photos-container > .photo");
    
    images.forEach(img => {
        let offset = {
            tx: (Math.random() * offset_ranges.tx) - (offset_ranges.tx / 2),
            ty: (Math.random() * offset_ranges.ty) - (offset_ranges.ty / 2),
            rot: (Math.random() * offset_ranges.rot) - (offset_ranges.rot / 2)
        };

        img.style.transform = `translate(calc(-50% + ${offset.tx}px), calc(-50% + ${offset.ty}px)) rotate(${offset.rot}deg)`;
    });

    document.querySelector(".photos-container").addEventListener("click", event => {
        if (event.target.classList.contains("photo")) {
            sendImageToBack(event.target, event);
        }
    });
}

