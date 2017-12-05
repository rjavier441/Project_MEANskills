angular.module('skillshare', []).controller('MyController', MyController)
                                .controller('My2ndController', My2ndController);
                                //.controller('My3rdController', My3rdController);
                            

  //= {{MyController.name}}
    //    {{MyController.username}}
        
function MyController($scope) {
  
    $scope.name = "Pranav"; // Make this equal to whatever you want to display as the name of the person.
    $scope.username = "Username"; // Make this equal to whatever you want to display as the username of the person.
}

function My2ndController($scope) {

}
 
function My3rdController($scope) {

}   

if(typeof jQuery == "undefined"){
    
    alert("Contact Pranav!");
    
}
else{
    
    alert("Welcome to SkillShare!");    
    
}









/*
document.getElementById("skill").onclick = function() {
    alert("Clicked!");
}   

document.getElementById("skill").onclick function(){

    var a = document.getElementsByTagName("li");
    console.log(a);
    //document.getElementById("wow").innerHTML = a;


}


$("ul").innerHTML(function(){
    
});
*/

/*

    KEEP A COPY:
     <li> <a id="skill" href="#">EE97/EE98</a> </li>
                <li> <a id="skill" href="#">CMPE30</a> </li>
                <li> <a id="skill" href="#">CMPE50</a> </li>
                <li> <a id="skill" href="#">CMPE102</a> </li>
                <li> <a id="skill" href="#">CMPE110</a> </li>
                <li> <a id="skill" href="#">CMPE124</a> </li>
                <li> <a id="skill" href="#">CMPE125</a> </li>
                <li> <a id="skill" href="#">CMPE126</a> </li>
                <li> <a id="skill" href="#">CMPE130</a> </li>
                <li> <a id="skill" href="#">CMPE131</a> </li>
                <li> <a id="skill" href="#">CMPE140</a> </li>
                <li> <a id="skill" href="#">CMPE142</a> </li>
                <li> <a id="skill" href="#">CMPE148</a> </li>
                <li> <a id="skill" href="#">CMPE195A</a> </li>
                <li> <a id="skill" href="#">CMPE195B</a> </li>
                <li> <a id="skill" href="#">Javascript</a> </li> 
                <li> <a id="skill" href="#">Java</a> </li> 
                <li> <a id="skill" href="#">C++</a> </li> 
                <li> <a id="skill" href="#">Python</a> </li> 
                <li> <a id="skill" href="#">Git</a> </li> 
                <li> <a id="skill" href="#">Agile Development</a> </li> 
                <li> <a id="skill" href="#">React</a> </li> 
                <li> <a id="skill" href="#">Angular</a> </li> 
                <li> <a id="skill" href="#">Node</a> </li> 
                <li> <a id="skill" href="#">Shell Scripting</a> </li> 
                <li> <a id="skill" href="#">Computer Vision</a> </li> 
                <li> <a id="skill" href="#">Ruby</a> </li> 
                <li> <a id="skill" href="#">Perl</a> </li> 
                <li> <a id="skill" href="#">PHP</a> </li> 
                <li> <a id="skill" href="#">Computer Networking</a> </li> 


*/

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