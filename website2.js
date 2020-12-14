var i = 0;

var images = [];

var time = 3000;

//image list

images[0] = 'https://lwlies.com/wp-content/uploads/2018/03/my-neighbour-totoro.jpg';
images[1] = 'https://i0.wp.com/thespool.net/wp-content/uploads/2019/04/totoro.0.jpg?fit=1024%2C683&ssl=1';
images[2] = 'https://images-na.ssl-images-amazon.com/images/I/71pOwfgGotL._AC_SL1500_.jpg'

// function change the slides

function changeImg(){
    document.slide.src = images[i]

    if(i < images.length - 1){
        i++;
    } else{
        i = 0;
    }

    setTimeout('changeImg()', time)
}

window.onload = changeImg;


document.querySelector('#botttle').onclick = function(){
    alert('these are some of my works')
}


function openTab(evt, tabName){
    //declare variables
    var i, tablinks, tabcontent;

    //hide all 
    tabcontent = document.getElementsByClassName('tabcontent');
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    //remove active from tab content
    tablinks = document.getElementsByClassName('tablinks')
    for(i = 0; i < tablinks.length - 1; i++){
        tablinks[i].className = tablinks.className.replace(' active', ' ')
    }
    //add active and show tab with event 
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

window.onload = openTab()


