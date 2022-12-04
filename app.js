        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector(
                    "body").style.visibility = "hidden";
                document.querySelector(
                    "body").style.background = "rgba(0, 0, 0, 0.856)";
                document.querySelector(
                  "#loader").style.visibility = "visible";
            } else {
                document.querySelector(
                  "#loader").style.display = "none";
                document.querySelector(
                    "body").style.visibility = "visible";
                document.querySelector(
                    "body").style.background = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrij-VVzH0x3A12wU-oc_43Xgnzxi40bWTsw&usqp=CAU)";
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
    

var sold = document.querySelector(".sold");
var card = document.querySelector(".card");
sold.innerHTML = "OUT OF STOCK";




