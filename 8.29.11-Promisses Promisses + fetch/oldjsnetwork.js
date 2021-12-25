$.getJSON('END_POINT',function(data){

});

$.get('END_POINT',function(data){
 let data = JSON.parse(data);
})

$.post('END_POINT', {'key':'value'}, function(data){
    let data = JSON.parse(data); 
})

$.ajax({
    type: "POST",
    url: 'END_POINT',
    data: {'key':'value'},
    success: function(data){

    }
})
