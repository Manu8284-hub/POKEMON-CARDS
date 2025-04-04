let main = document.getElementById("main");
let arr=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThN3ggq5Uhyo2R-dD7Q4a2rWO3iXLJkL2wAA&s",
    
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWZ5AWNBwejH7qrNaM00Vio-oIhSYjUr8Wg&s",
    
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPxK1BosNr1S4Wjx8l_-oaN_4l112XvM3qA&s",
    
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuPLv9Rab51Fbwqax3QcfEuzHSv9Gb8mrxA&s",
    
    
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIXxz7dylzhpxVXQZm74dmCmoJijKppSCGQ&s",
    
    
    
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBN2FLQuZaa5eb1hg0UTHwFzIVTHtlfkxpgA&s"

    
    ];
    let s="";
for(let i=1; i<66; i++){
    let r= Math.floor(Math.random()*arr.length);
    s += `<div class ="card"><img src=${arr[r]}></div>`;
}
main.innerHTML=s;




