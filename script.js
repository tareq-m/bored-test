// $(document).ready(function () {
//   $("span").hover(
//     function () {
//       $(this).addClass("text-effect");
//     },
//     function () {
//       $(this).removeClass("text-effect");
//     }
//   );
// });

var title = document.getElementsByClassName("title");

for (var i = 0; i < title.length; i++) {
  title[i].addEventListener("click", toggleClasses);
}
function toggleClasses() {
  allTabsToHide = document.getElementsByClassName("tab");
  for (var i = 0; i < allTabsToHide.length; i++) {
    allTabsToHide[i].classList.remove("d-block");
    allTabsToHide[i].classList.add("d-none");
  }
  var tabToShow = event.target.innerText.toLowerCase();
  var newTab = document.getElementById(tabToShow);
  newTab.classList.add("d-block");
  showTab = event.target.id;
}

$('#special-text').html(
    $('#special-text').text().split(' ').map( a => `<h1 class="colord-text"> ${a}</h1>`)
    ) 
    
 
 
