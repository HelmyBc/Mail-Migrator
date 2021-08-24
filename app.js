var $selectsr=$('#source_server_type');
var $selectsri=$('#autofill1');
$.getJSON('data.JSON',function(source_server_type){
$selectsr.html('');
for ( var i = 0 ; i < source_server_type['source'].length ; i++){
    $selectsr.append('<option id="'+i+'" value="'+i+'">'+source_server_type['source'][i]['name']+'</option>');}

          $("#source_server_type").change(function(){
            var x=this.options[this.selectedIndex].id;
            document.getElementById('autofill1').value=source_server_type['source'][x]['url'];
           
          })
});



var $select=$('#destination_server_type');
var $selecti=$('#autofill2');
$.getJSON('data.JSON',function(destination_server_type){
$select.html('');
    for ( var i = 0 ; i < destination_server_type['destination'].length ; i++){
        $select.append('<option id="'+ i*10 +'" value="'+ i + '">'+destination_server_type['destination'][i]['name']+'</option>');}
   
        $("#destination_server_type").change(function(){
        var y=this.options[this.selectedIndex].id;
        document.getElementById('autofill2').value=destination_server_type['destination'][y/10]['url'];
   
  })

});

var $selectIcon=$('#social__icons');

      
$.getJSON('data.JSON',function(social__icons){
    $selectIcon.html('');
    for ( var i = 0 ; i < social__icons['iconLinks'].length ; i++){
        $selectIcon.append('<a  class="social__icon--link" target="_blank" arial-label=" '+social__icons['iconLinks'][i]['aria-label'] +'" href= "'+social__icons['iconLinks'][i]['href']+'">'+'<i class= "'+social__icons['iconLinks'][i]['class']+'"></i></a>');
   }
});
0
var server1= document.getElementById("autofill1").value;
var server2= document.getElementById("autofill2").value;
var user1= document.getElementById("user1").value;
var user2= document.getElementById("user2").value;
var pass1= document.getElementById("pass1").value;
var pass2= document.getElementById("pass2").value;

