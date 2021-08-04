var $selectsr=$('#source_server_type');

$.getJSON('data.JSON',function(source_server_type){
    $selectsr.html('');
    for ( var i = 0 ; i < source_server_type['source'].length ; i++){
        $selectsr.append('<option id="'+i+'">'+source_server_type['source'][i]['name']+'</option>')
    }
});

var $select=$('#destination_server_type');

$.getJSON('data.JSON',function(destination_server_type){
    $select.html('');
    for ( var i = 0 ; i < destination_server_type['destination'].length ; i++){
        $select.append('<option id="'+"i"+'">'+destination_server_type['destination'][i]['name']+'</option>')
   }
});

var $selectIcon=$('#social__icons');

$.getJSON('data.JSON',function(social__icons){
    $selectIcon.html('');
    for ( var i = 0 ; i < social__icons['iconLinks'].length ; i++){
        $selectIcon.append('<a  class="social__icon--link" target="_blank" arial-label=" '+social__icons['iconLinks'][i]['aria-label'] +'" href= "'+social__icons['iconLinks'][i]['href']+'">'+'<i class= "'+social__icons['iconLinks'][i]['class']+'"></i></a>')
   }
});
