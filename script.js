// Index.html --> JS

function showNav()
{
    var hamburger_icon = document.getElementById('ham');
    var cross_icon = document.getElementById('cross');
    document.querySelector('.navigation').style.display = "block";
    setTimeout(() => {
        cross_icon.style.display = "block";
        
    }, 400);
    hamburger_icon.style.display = "none";
    cross_icon.style.marginLeft = '40px';
}

function hideNav()
{
    var hamburger_icon = document.getElementById('ham');
    var cross_icon = document.getElementById('cross');
    document.querySelector('.navigation').style.display = "none";
    cross_icon.style.display = "none";
    hamburger_icon.style.display = "block";

}


