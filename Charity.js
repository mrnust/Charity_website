
let header = document.getElementById('header');
setInterval(() => {
    
    if (scrollY > 300) {
        
        header.style.backgroundColor = "#212529";
    }
    else {
        header.style.backgroundColor = "transparent"
    }
}, 0);
