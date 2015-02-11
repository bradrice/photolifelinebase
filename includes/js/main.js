// site specific javascript here

$(function () {
    $('#datetimepicker1').datetimepicker(
        {"format": 'MM/d/YYYY'}
        );
});


$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');  
    
    if ($(this).find('.btn-primary').size()>0) {
    	$(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').size()>0) {
    	$(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').size()>0) {
    	$(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').size()>0) {
    	$(this).find('.btn').toggleClass('btn-info');
    }
    
    $(this).find('.btn').toggleClass('btn-default');
       
});

$("#main-selector input[type=checkbox]").on('click', function() {
	if($(this).prop('checked')==true){
		$(this).closest('.checkbox').css('background-color', '#e4eafe');
	}
    else{
        $(this).closest('.checkbox').css('background-color', '#fff');
    }
});

//check for checked at runtime
(function(){
    console.log("running iffy");
    $("#main-selector input[type=checkbox]").each(function(i, obj){
    if($(obj).prop('checked')==true){
        $(obj).closest('.checkbox').css('background-color', '#e4eafe');
    }});
})();