// loader
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "body").style.background = "rgba(0, 0, 0, 0.856)";
        document.querySelector(
            "#loader-wrapper").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader-wrapper").style.display = "none";
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
    

var sold = document.querySelector(".sold , .sold3");
var card = document.querySelector(".card");
sold.innerHTML = "OUT OF STOCK";




function submitResult(e) {
    e.preventDefault();
Swal.fire({
  title: 'If You Can Not Find Your Car Model In This Section Go To <b>NAV BAR</b> And Take A look About Our Universal Tuning Collection',
  showClass: {
    popup: 'animate__animated animate__fadeInDown !important'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})
}


//  $.get('https://www.html5rocks.com/en/tutorials/cors/', function(response) {                    
//   var query=(response.search(/Using CORS - HTML5 Rocks/i));
//   if(query>-1){
//     console.log("https://www.html5rocks.com/en/tutorials/cors/")
//   }
//   else{
//     console.log("not found")
//   }
// });

//     var myPages = ["index.html", "interior.html", "accessories.html", "exterior.html", "cleaning-products.html"]; //your pages in here
//     var searchResult = []; //here we have result
//     var searchFor = "screen"; //what we search

//     $.each(myPages, function (index, value) {

//         $.ajax({
//             async: false,
//             type: 'GET',
//             url: value,
//             success: function (data) {

//                 var body = $(data).text().replace(/\s+/gm, ' ');

//                 if (body.indexOf(searchFor) >= 0) {
//                     searchResult.push(value);
//                 }

//             }
//         });

//         if (index + 1 == myPages.length) {
//                 alert(searchResult);
//         }

//     });