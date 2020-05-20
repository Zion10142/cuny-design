var num = 0;

imgArray=[
    ['images/slide1.jpg'],
    ['images/slide2.jpg'],
    ['images/slide3.jpg'],
    ['images/bcc1.jpg']
    
]

function slideshowUp(){
    num++;
    num = num % imgArray.length;
    document.getElementById('mypic').src=imgArray[num];
}
function slideshowBack(){
    num--;
    if (num < 0) {num=imgArray.length-1;}
    num = num % imgArray.length;
    document.getElementById('mypic').src=imgArray[num];
}