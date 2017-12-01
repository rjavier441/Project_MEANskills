angular.module('skillshare', []).controller('MyController', MyController);
  //= {{MyController.name}}
    //    {{MyController.username}}
        
function MyController($scope) {
  
    $scope.name = "Pranav";
    $scope.username = "";
}
      
if(typeof jQuery == "undefined"){
    
    alert("Contact Pranav!");
    
}
else{
    
    alert("Welcome to SkillShare!");    
    
}

document.getElementById("skill").onclick = function(){

    var a = "";
    a = document.getElementById("skill").value;
    document.getElementById("wow").innerHTML = a;

}

$("ul").innerHTML(function(){
    
});



/*
function myFunction(){

    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');



}
*/
/*
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = $('#myInput').val();
    filter = input.toUpperCase();
    ul = $("#myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


*/