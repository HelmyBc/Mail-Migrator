var $selectsr=$('#source_server_type');

$.getJSON('source_server_type.JSON',function(source_server_type){
    $selectsr.html('');
    for ( var i = 0 ; i < source_server_type['source_server_type'].length ; i++){
        $selectsr.append('<option id="'+source_server_type['source_server_type'][i]['id']+'">'+source_server_type['source_server_type'][i]['name']+'</option>')
    }
});

var $select=$('#destination_server_type');

$.getJSON('destination_server_type.JSON',function(destination_server_type){
    $select.html('');
    for ( var i = 0 ; i < destination_server_type['destination_server_type'].length ; i++){
        $select.append('<option id="'+destination_server_type['destination_server_type'][i]['id']+'">'+destination_server_type['destination_server_type'][i]['name']+'</option>')
    }
});
