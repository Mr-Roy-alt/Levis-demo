const image = document.querySelector('.thumb')
image.addEventListener('click', function () {
  showImage(this);
});

function showImage(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
  document.querySelector(".showImage").style.display = "block";
}

function closeImg() {
  document.querySelector(".showImageContainer").style.display = "none";
  document.querySelector(".showImage").style.display = "none";
}