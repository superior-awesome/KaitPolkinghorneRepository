// console.log('Script Start');

// const title = document.querySelector('.flex-home');

const testHolder = document.querySelector("#mainImageTitle");
const previousImage = document.querySelector("#previousImageButton");
const currentImage = document.querySelector("#mainImage");
const nextImage = document.querySelector("#nextImageButton");



nextImage.addEventListener('mouseover', function () {

    document.querySelector("#previousImage").style.zIndex = -3
    document.querySelector("#nextImage").style.zIndex = -2
    currentImage.style.animation = null
    currentImage.style.animationName = 'hover-left'
})

nextImage.addEventListener('mouseout', function () {
    currentImage.style.animation = null
    currentImage.style.animationName = 'hover-left-reverse'
})





previousImage.addEventListener('mouseover', function () {

    document.querySelector("#nextImage").style.zIndex = -3
    document.querySelector("#previousImage").style.zIndex = -2
    currentImage.style.animation = null
    currentImage.style.animationName = 'hover-right'

})

previousImage.addEventListener('mouseout', function () {

    currentImage.style.animation = null
    currentImage.style.animationName = 'hover-right-reverse'
})


nextImage.addEventListener('click', function () {
    currentImage.style.animation = null//needs a change
    currentImage.style.animationName = 'hover-left-reverse'
    console.log(document.getElementById("mainImage").src);

    // document.getElementById("mainImageLink").src = "Sample_Photographs/Pinata.jpg";

    let imageStrHolder = String(document.getElementById("mainImageLink").src)
    document.getElementById("mainImageLink").src = String(document.getElementById("nextImageLink").src)
    document.getElementById("nextImageLink").src = String(document.getElementById("previousImageLink").src)
    document.getElementById("previousImageLink").src = imageStrHolder
})

previousImage.addEventListener('click', function () {
    currentImage.style.animation = null //needs a change
    currentImage.style.animationName = 'hover-right-reverse'
    let imageStrHolder = String(document.getElementById("mainImageLink").src)
    document.getElementById("mainImageLink").src = String(document.getElementById("previousImageLink").src)
    document.getElementById("previousImageLink").src = String(document.getElementById("nextImageLink").src)
    document.getElementById("nextImageLink").src = imageStrHolder
})


// console.log(testHolder);

