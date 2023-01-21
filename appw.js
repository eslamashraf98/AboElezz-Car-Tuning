// loader
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader-wrapper").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader-wrapper").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};

// searchbar for #first mobile
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            // sorry.style.display = "none";
        } else {
            li[i].style.display = "none";
            // sorry.style.display = "block";
        }
    };
};


// searchbar for #second laptop
function myFunctions() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInputs");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    };
    console.log(ul);
};


function vis() {
    let search = document.getElementsByClassName("search")
    let select = document.getElementById("head-title")
    if (onclick = search) {
        select.style.display = "none";
    } else {
        select.style.display = "block";
    }
};

// uppage

window.onscroll = function() {myFunctionUp()};

let UpPage = document.querySelector(".uppage")

function myFunctionUp() {
  if (window.scrollY <= 1000) {
    UpPage.style.opacity = 0;
  } else {
    UpPage.style.opacity = 0.5;
    }
};

var sold = document.querySelector(".sold")
sold.innerHTML = "OUT OF STOCK";
sold.style.background = "#f44";




function order() {
Swal.fire({
  title: 'Oops..',
  icon: 'error',
  text: 'sorry shipping is not available right now',
  html:
    'sorry shipping is not available right now <br>' +
    'you can ' +
    '<a href="#contact">visit or contact us</a>',
  showCloseButton: true,
  showConfirmButton: false,
})
};