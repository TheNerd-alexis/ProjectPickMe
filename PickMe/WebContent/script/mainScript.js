$(function() {
	$(".connectedSortable").sortable({
		containment : "#containment-wrapper",
		scroll : false,
		connectWith : ".connectedSortable",
		cancel : ".ui-state-disabled"
	}).disableSelection();
	
	$(".connectedSortable").on("click", "li", function() {
	    console.log($(this));
	});

	$("#addCellBtn").on("click", function() {
	    alert('hello');
	});
});

