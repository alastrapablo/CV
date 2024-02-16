document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('zoomImage');
    let isZoomed = false;

    image.addEventListener('click', function (event) {
        isZoomed = !isZoomed;
        applyZoom(event);
    });

    document.addEventListener('mousemove', function (event) {
        if (isZoomed) {
            moveZoomed(event);
        }
    });

    function applyZoom(event) {
        const scale = isZoomed ? 2 : 1;
        const offsetX = isZoomed ? event.clientX - image.getBoundingClientRect().left : 0;
        const offsetY = isZoomed ? event.clientY - image.getBoundingClientRect().top : 0;

        image.style.transform = `scale(${scale})`;
        image.style.transformOrigin = `${offsetX}px ${offsetY}px`;
    }

    function moveZoomed(event) {
        const offsetX = event.clientX - image.getBoundingClientRect().left;
        const offsetY = event.clientY - image.getBoundingClientRect().top;

        image.style.transformOrigin = `${offsetX}px ${offsetY}px`;
    }
});