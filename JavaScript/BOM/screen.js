const width = document.getElementById('width');
const height = document.getElementById('height');
const availWidth = document.getElementById('availWidth');
const availHeight = document.getElementById('availHeight');
const colorDepth = document.getElementById('colorDepth');
const pixelDepth = document.getElementById('pixelDepth');

width.innerHTML = screen.width;
height.innerHTML = screen.height;
availWidth.innerHTML = screen.availWidth;
availHeight.innerHTML = screen.availHeight;
colorDepth.innerHTML = screen.colorDepth;
pixelDepth.innerHTML = screen.pixelDepth;
