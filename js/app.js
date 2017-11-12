
document.addEventListener('DOMContentLoaded', function () {

    var divGallery = document.getElementById('gallery');
    var gallery = divGallery.querySelectorAll('img');
    var buttonHide = document.getElementById('hideButton');
    var buttonShow = document.getElementById('showButton');
    var input = document.getElementById('tagInput');
    var inputValue = '';

    buttonHide.addEventListener('click', function () {
        inputValue = input.value;

        for(var i = 0; i<gallery.length; i++){
            var galleryTag = gallery[i].dataset.tag;
            var indexOfValue = galleryTag.indexOf(inputValue);
            if(indexOfValue ==0 || indexOfValue > 0){
                gallery[i].className +='invisible';
            }
        }
        input.value = '';
    });

    buttonShow.addEventListener('click', function () {
        inputValue = input.value;

        for(var i = 0; i<gallery.length; i++){
            var galleryTag = gallery[i].dataset.tag;
            var indexOfValue = galleryTag.indexOf(inputValue);
            if(indexOfValue ==0 || indexOfValue < 0){
                gallery[i].classList.remove('invisible');
            }
        }
        input.value = '';
    });
});