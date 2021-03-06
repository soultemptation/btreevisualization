
this.continue = false;

$(function() {
	window.root = new Page();
	window.painter = new Painter();
	window.painter.minElementCount = parseInt($('input[name=degree]:checked').val());
	window.painter.maxElementCount = window.painter.minElementCount * 2;

	$('#insertText').keypress(function (e) {
		if (e.which == 13) {
			$("#insertButton").click();
		}
	});

	$('#deleteText').keypress(function (e) {
		if (e.which == 13) {
			$("#deleteButton").click();
		}
	});

	$("#insertButton").click(function() {
		var insertField = $("#insertText");
		window.root.insert(insertField.val());
		window.painter.paintRoot();
		insertField.val("").focus();
	});

	$("#deleteButton").click(function() {
		var deleteField = $("#deleteText");
		window.root.delete(deleteField.val());
		window.painter.paintRoot();
		deleteField.val("").focus();
	});

	$("#clearButton").click(function() {
		window.painter.clear();
	});

	$("#clearButton").click(function() {
		window.painter.clear();
	});

	$("#step").click(function() {
		window.continue = true;
	});

	$('input[name=degree]').change(function () {
		window.painter.minElementCount = parseInt($('input[name=degree]:checked').val());
		window.painter.maxElementCount = window.painter.minElementCount * 2
		window.painter.clear();
	});
});