function tabs(sum) {
    let tab = document.querySelectorAll("ul li i")
    tab[0].style.color="white"
    tab[1].style.color="white"
    tab[2].style.color="white"
    tab[3].style.color="white"
    tab[4].style.color="white"
    sum.style.color="#3FB6A8";

    let page = document.querySelectorAll("#pages > .d-flex")
    // console.log(page)
    page[0].style.cssText="opacity:0;visibility:hidden;"
    page[1].style.cssText="opacity:0;visibility:hidden;"
    page[2].style.cssText="opacity:0;visibility:hidden;"
    page[3].style.cssText="opacity:0;visibility:hidden;"
    page[4].style.cssText="opacity:0;visibility:hidden;"
    let connect = sum.classList

    document.getElementById(connect).style.cssText="opacity:1;visibility:visible"
    console.log(i)
}


