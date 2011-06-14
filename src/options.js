$(function(){
	$('#save').click(save_options);

	restore_options();

	function restore_options() {
		console.log("restore_options");
		var test = localStorage['test'] || '';
		$('#test').val(test);
	}

	function save_options() {
		console.log("save_options");
		localStorage['test'] = $('#test').val();
		var $status = $('#status');
		$status.text('保存しました。');
	    setTimeout(function() {
	    	$status.text('');
	    }, 700);
	}
});
