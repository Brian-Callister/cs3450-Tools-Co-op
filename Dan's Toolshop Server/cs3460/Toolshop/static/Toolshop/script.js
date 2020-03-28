var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 15000); // Change image every 2 seconds
}

getUrlVars();

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars.type;
}


// THESE MODIFY THE DOM, DISPLAYING THE INFO THE USER HAS ASKED FOR

function displayBike() {
    existingDiv = document.getElementById("tool_info_section")
    existingDiv.removeChild(existingDiv.firstChild)
    newDiv = document.createElement('div');


    p = document.createElement('p');
    p.textContent = "In need of top-quality tools for your next ride?  With our bike tools, you will always have the " +
    "equipment you need to ride safely and with confidence.  Check out our current stock below:";
    newDiv.appendChild(p);


    p = document.createElement('p');
    p.textContent = "Full Set Bike Tools";
    newDiv.appendChild(p);

    p = document.createElement('p');
    p.textContent = "Mechanic Stand";
    newDiv.appendChild(p);

    p = document.createElement('p');
    p.textContent = "Truing Stand";
    newDiv.appendChild(p);


    image = document.createElement('img');
    image.setAttribute("src", "");
    image.setAttribute("style", "width:40%");

    existingDiv.appendChild(newDiv);
}
function displayCarpentry() {
    alert("hi")
}
function displayCarpet() {
    alert("hi")
}
function displayCement() {
    alert("hi")
}
function displayDrywall() {
    alert("hi")
}
function displayElectrical() {
    alert("hi")
}
function displayGarden() {
    alert("hi")
}
function displayPower() {
    alert("hi")
}
function displayKitchen() {
    alert("hi")
}
function displayOther() {
    alert("hi")
}


/*
<ul>
          <!-- TODO: Rewrite in javascript -->
          <!--
          <li><a href="#"><img src="images/drill1.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill2.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill1.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill2.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill3.jpg" alt=""></a></li>
          <li class="last"><a href="#"><img src="images/drill3.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill2.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill1.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill3.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill1.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill2.jpg" alt=""></a></li>
          <li class="last"><a href="#"><img src="images/drill2.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill1.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill3.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill2.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill1.jpg" alt=""></a></li>
          <li><a href="#"><img src="images/drill3.jpg" alt=""></a></li>
          <li class="last"><a href="#"><img src="images/drill2.jpg" alt=""></a></li> -->
        </ul>



*/