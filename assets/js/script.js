// Toggle menu-----------------------------------------

function togglemenu() {
    var menubar = document.getElementById("mobile-menu");
    if (menubar.style.display === "block") {
      menubar.style.display = "none";
    } else {
      menubar.style.display = "block";
    }
  }


// Go to top ---------------------------------------------
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// lightbox--------------------------------------------------

function lightbox_open(url) {
  console.log(url);
    var lightBoxVideo = document.getElementById("covidvideo");
    document.getElementById('covidvideo').childNodes[1].setAttribute('src','https://'+url)
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("covidvideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
  }


// State List Data---------------------------------------------------------------------------------------

fetch(
    'https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json'
)
.then((response) => response.json())
.then((data) => {
  console.log(data);
    let output = '';
    data.forEach(function (states) {
        {
          var op = document.createElement('option');
          op.innerHTML=states.name;
          op.setAttribute('value',states.abbreviation);
          document.getElementById('state-select').appendChild(op);
        }
    });
    // console.log(output);
})
.catch((error) => {
    alert("Failed to Load Data");
});
  
function loaddata(){
   value=document.getElementById('state-select').value;
   
   
  fetch('https://covid.cdc.gov/covid-data-tracker/COVIDData/getAjaxData?id=US_MAP_DATA', {
  mode: 'no-cors',method: "GET", headers: {
    "Accept": "application/json"
  }// 'cors' by default
})
.then(function(response) {
  console.log(response)
});
}