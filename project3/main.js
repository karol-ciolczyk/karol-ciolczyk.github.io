const aButton = document.querySelectorAll('.files-manage a');

Array.from(aButton).forEach(function(a){
    a.addEventListener('click', function(b){
        
        const alink = b.target.parentElement;
        alink.parentNode.removeChild(alink)

    });

});

const navButton = document.querySelectorAll('.nav-buttons a');

Array.from(navButton).forEach(function(a){

    a.addEventListener('click', function(b){
        const par = b.target.parentElement;
        par.parentNode.removeChild(par);

    });
});

const firstW = document.querySelector('#top-windows');

firstW.addEventListener('click', function(a){
    if(a.target.cloneNode(true)){
        const aag = a.target.cloneNode(true);
        firstW.removeChild(aag)
    }
});



