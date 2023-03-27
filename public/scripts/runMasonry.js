window.addEventListener("DOMSubtreeModified", function () {
    var elem = document.querySelector('.grid');
    if (elem) {
        var msnry = new Masonry(elem, {
            // options
            itemSelector: '.grid-item',
            columnWidth: 300,
            percentPosition: true,
        });
        msnry.layout();
    }
});