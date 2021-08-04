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
