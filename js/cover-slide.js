const imageList = [
  './image/image1.jpeg',
  './image/image2.jpeg',
  './image/image3.jpeg',
  './image/image4.jpeg',
  './image/image5.jpeg',
]

// DON'T CHANGE THE CODE BELOW
$(document).ready(function () {
  $('.cover').dubeytech({
    maxZoom: 1.4,
    animationTime: 4000,
    imagesRatio: (1200 / 720),
    isFixedBG: true,
    zoomIn: true,
    imagesList: imageList
  })
})