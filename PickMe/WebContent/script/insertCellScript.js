var count = 0;
var CLIENT_ID = '519081465690-p2aqm81gup8a0kauml80oasr25njg8sh.apps.googleusercontent.com';
var SCOPES = [ 'https://www.googleapis.com/auth/drive',
       		'https://www.googleapis.com/auth/spreadsheets' ];

var filesFlag = [];
var inputs = [];

function checkAuth() {
	gapi.auth.authorize({
		'client_id' : CLIENT_ID,
		'scope' : SCOPES.join(' '),
		'immediate' : true
	}, function(result){
		console.log(result);
	});
	gapi.client.load('drive', 'v3');
}

function fileUpload(file, flag, index, id){
	 var uploader = new MediaUploader({
         file: file,
         token: gapi.auth.getToken()['access_token'],
         onComplete: function(data) {
             console.log(data);
             inputs["input_" + index] = {name:id, fileid:data.id, filename: file.name};
             filesFlag[flag] = true;
         }
     });
     console.log(uploader.upload());
}

function setFileInput() {
	var fileTarget = $('.filebox .upload-hidden');

	fileTarget.on('change', function() {
		if (window.FileReader) {
			// 파일명 추출
			var filename = $(this)[0].files[0].name;
		} else {
			// Old IE 파일명 추출
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}

		$(this).siblings('.upload-name').val(filename);
	});

	// preview image
	var imgTarget = $('.preview-image .upload-hidden');

	imgTarget.on('change',function() {
		var parent = $(this).parent();
		parent.children('.upload-display').remove();

		if (window.FileReader) {
			// image 파일만
			if (!$(this)[0].files[0].type.match(/image\//))
				return;

			var reader = new FileReader();
			reader.onload = function(e) {
				var src = e.target.result;
				parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap">'
						+ '<img src="' + src + '" class="upload-thumb"></div></div>');
			}
			reader.readAsDataURL($(this)[0].files[0]);
		} else {
			$(this)[0].select();
			$(this)[0].blur();
			var imgSrc = document.selection.createRange().text;
			parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap">' 
					+ '<img class="upload-thumb"></div></div>');
			var img = $(this).siblings('.upload-display').find('img');
			img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""
									+ imgSrc + "\")";
			}
		}
	);
}

function h(e) {
	$(e).css({
		'height' : 'auto',
		'overflow-y' : 'hidden'
	}).height(e.scrollHeight);
}

function addTextfield(n) {
	setForm();
	$("#input_content").append(
			'<div class="table_row" div-type="text" id="input_' + count++
					+ '">' + '<input type="text" id="name"'
					+ '" class="lbl" placeholder="항목명">'
					+ '<input type="text" id="content"'
					+ ' class="int2" placeholder="내용을 입력하세요.">' + '</div>');

	// $('.lbl').keyup(function () {
	// // I'm assuming that 1 letter will expand the input by 10 pixels
	// var oneLetterWidth = 10;
	//
	// // I'm also assuming that input will resize when at least five characters
	// // are typed
	// var minCharacters = 5;
	// var len = $(this).val().length;
	// if (len > minCharacters) {
	// // increase width
	// $(this).width(len * oneLetterWidth);
	// } else {
	// // restore minimal width;
	// $(this).width(50);
	// }
	// });
}

function addTextarea(n) {
	setForm();
	$("#input_content").append(
			'<div class="table_row" div-type="textarea" id="input_' + count++ + '">' 
			+ '<input type="text" id="name" class="int" placeholder="항목명">'
			+ '<textarea id="content" placeholder="내용을 입력하세요." class="int"></textarea>'
			+ '</div>');

	$('textarea').each(function() {
		h(this);
	}).on('input', function() {
		h(this);
	});
}

function addDate() {
	setForm();
	$("#input_content").append(
		'<div class="table_row" div-type="date" id="input_' + count++ + '">'
		+ '<input type="text" id="name" class="int" placeholder="항목명">'
		+ '<input type="text" value="기간" disabled="disabled" class="lbl" style="width:7%;">'
		+ '<input type="date" id="startDate" class="date">'
		+ '부터 '
		+ '<input type="date" id="endDate" class="date">'
		+ '까지'
		+ '<textarea id="content" placeholder="내용을 입력하세요." class="int"></textarea>'
		+ '</div>');
}

function addFile() {
	setForm();
	$("#input_content").append(
		'<div class="table_row" div-type="file" id="input_' + count++ + '">'
		+ '<input type="text" id="name" class="int" placeholder="항목명">'
		+ '<div class="filebox preview-image">'
		+ '<input class="upload-name" value="파일 선택" disabled="disabled">'
		+ '<label for="input-file' + count + '">업로드</label>'
		+ '<input type="file" id="input-file' + count + '" class="upload-hidden">'
		+ '</div>');
	setFileInput();
}

function addTable() {
	setForm();
	$("#input_content").append(
		'<div div-type="table" class="table_row" id="input_' + count++ + '">'
		+ '<input type="text" id="name" class="int" style="max-width:265px;" placeholder="항목명">'
		+ '<input type="button" value="행 추가" onclick=addTableColumn("table' + count + '")>'
		+ '<input type="button" value="열 추가" onclick=addTableRow("table' + count + '")>'
		+ '<table id="table' + count + '"><tbody>'
		+ '<tr id="input-table-header"><th></th><th data-name="column0">'
		+ '<input type="text" placeholder="항목">'
		+ '<strong><a href="javascript:;" onclick=\'removeTableColumn("table' + count + '", "column0")\'> '
		+ 'X </a></strong>' + '</th></tr>'
		+ '<tr id="input-table-content" data-name="table' + count + '_row0">'
		+ '<td><strong><a href="javascript:;" onclick=\'removeTableRow("table' + count + '", "row0")\'> '
		+ 'X </a></strong></td>' 
		+ '<td>' + '<input type="text" placeholder="내용">'
		+ '</td></tr>' + '</tbody></table>' + '</div>');
}

function addTableColumn(str) {
	var c_index = document.getElementById(str).rows[0].cells.length;
	var code = Math.random();
	// console.log(c_index);
	if (c_index > 9) {
		alert('항목은 10개까지만 가능합니다.');
		return;
	}

	$('#' + str).find('tr').each(
			function() {
				$(this).find('th').eq(-1).after(
						'<th data-name=' + str + '"_column' + code
								+ '"><input type="text" placeholder="항목">'
								+ '<strong><a href="javascript:;" '
								+ 'onclick=\'removeTableColumn("' + str
								+ '", "column' + code + '")\'>X</a></strong>'
								+ '</th>');
				$(this).find('td').eq(-1).after(
						'<td><input type="text" placeholder="내용"></td>');
			});
}

function removeTableColumn(str, dest) {
	var c_index = document.getElementById(str).rows[0].cells.length;
	// console.log(c_index);
	if (c_index < 3) {
		alert('하나 이상의 항목을 포함해야합니다.');
		return;
	}

	console.log(arguments);
	var target = $('table#' + str).find(
			'th[data-name="' + str + '_' + dest + '"]');
	console.log(target);
	var index = (target).index();
	$('table#' + str + ' tr').find('th:eq(' + index + '),td:eq(' + index + ')')
			.remove();
}

function addTableRow(str) {
	// console.log(str);
	var code = Math.random();
	var clonedRow = $('#' + str + ' tr:last').clone();
	clonedRow.find('input').val('');
	clonedRow[0].cells[0].innerHTML = '<strong><a href="javascript:;" onclick=\'removeTableRow("'
			+ str + '", "row' + code + '")\'>X</a></strong>';
	clonedRow[0].setAttribute("data-name", str + "_row" + code);
	// console.log(clonedRow);
	$('#' + str + ' tbody').append(clonedRow);
}

function removeTableRow(str, dest) {
	var r_index = document.getElementById(str).rows.length;
	if (r_index < 3) {
		alert('하나 이상의 내용을 포함해야합니다.');
		return;
	}

	// console.log(arguments);
	$('table#' + str).find('tr[data-name="' + str + '_' + dest + '"]').remove();
}

function setForm() {
	if (!document.getElementById("input_content")) {
		$(".table_form").append(
				'<div id="input_content" class="row_group"></div>');
	}
}

function insertCellSubmit() {
	for (var index = 0; index < count; index++) {
		var target = document.getElementById("input_" + index);
		var type = target.getAttribute("div-type");

		var input = {};
		for ( var i in target.childNodes) {
			var child = target.childNodes[i];
			if (child.tagName) {
				switch (child.tagName) {
				case 'INPUT':
					// console.log(child.type);
					if(child.type=="button"){
						break;
					}
					input[child.id] = child.value;
					break;
				case 'TEXTAREA':
					input['textarea_content'] = child.value;
					break;
				case 'TABLE':
					input['table_content'] = GetCellValues(child);
					break;
				case 'DIV':
					if(type=="file"){
						for(var j in child.childNodes){
							if(child.childNodes[j].type=="file"){
								filesFlag.push(false);
								fileUpload(child.childNodes[j].files[0], filesFlag.length-1, index, child.id);
							}						
						}
						break;
					}
					break;
				default:
					console.log(child);
					break;
				}
			}
		}
		
		if(input.length !== null)
			inputs["input_" + index] = input;
	}
	console.log(inputs);
}

function GetCellValues(table) {
	var values = [];
    for (var r = 0, n = table.rows.length; r < n; r++) {
    	var value = {};
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        	var cell = table.rows[r].cells[c];
        	for(var i in cell.childNodes){
        		if(cell.childNodes[i].tagName=='INPUT'){
        			value[c] = cell.childNodes[i].value;
        		}        		
        	}
// if(table.rows[r].cells[c].tagName== 'TH')
// console.log(table.rows[r].cells[c].values);
        }
        values[r] = value;
    }
    return values;
}