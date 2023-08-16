document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    fetch('/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Server response:', data);
        if (data.message) {
          alert('Email sent successfully!');
        } else {
          alert('Failed to send email. Please try again later.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
  });
});

// window.onload = function() {
//   var headerElement = document.getElementById("mainpage-image");
//   var headerHeight = headerElement.clientHeight;
//   console.log(headerHeight); 
// };


// window.onscroll = function() {changeNavBarSolid()};

// function changeNavBarSolid() {
//   // var headerElement = document.getElementById("mainpage-image");
//   var headerHeight = headerElement.clientHeight - 100;
//   console.log(headerHeight); 
//   if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
//     document.getElementById("header").className = "header-solid";
//     document.getElementById("header-link-contact").className = "header-link-solid";
//     document.getElementById("header-link-kittens").className = "header-link-solid";
//     document.getElementById("header-link-our-cats").className = "header-link-solid";
//     document.getElementById("header-link-about").className = "header-link-solid";
//     document.getElementById("title").className = "title-link-solid";
//     // alert("yo");
//   } else {
//     document.getElementById("header").className = "";
//     document.getElementById("header-link-contact").className = "";
//     document.getElementById("header-link-kittens").className = "";
//     document.getElementById("header-link-our-cats").className = "";
//     document.getElementById("header-link-about").className = "";
//     document.getElementById("title").className = "";
//     // alert("yuh"); 
//   }
// }

window.onscroll = function() {scrollTop()};

function myFunction() {
  // alert("yuh");
  var x = document.getElementById("header");
  if (x.className === "header-solid") {
    x.className += " responsive";
  } else {
    x.className = "header-solid";
  }
}

function scrollTop() {
  var scrollHeight = document.body.scrollTop;
  
}