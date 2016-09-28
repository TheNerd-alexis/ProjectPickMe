// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = '519081465690-p2aqm81gup8a0kauml80oasr25njg8sh.apps.googleusercontent.com';
var SCOPES = [ 'https://www.googleapis.com/auth/drive',
		'https://www.googleapis.com/auth/spreadsheets' ];

var folderId;
var cellDB;
var resumeDB;
var count = 0;
/**
 * Check if current user has authorized this application.
 */
function checkAuth() {
	gapi.auth.authorize({
		'client_id' : CLIENT_ID,
		'scope' : SCOPES.join(' '),
		'immediate' : true
	}, handleAuthResult);
}

/**
 * Handle response from authorization server.
 * 
 * @param {Object}
 *            authResult Authorization result.
 */
function handleAuthResult(authResult) {
	// var authorizeDiv = document.getElementById('authDiv');
	var oMsg = document.getElementById('googleAuth');
	// console.log(authResult);
	if (authResult && !authResult.error) {
		// Hide auth UI, then load client library.
		// loadDriveApi();
		oMsg.style.display = 'block';
		oMsg.className = 'int error gm';
		oMsg.value = 'Google 인증이 완료되었습니다.';
		return true;
	} else {
		oMsg.style.display = 'block';
		oMsg.className = 'int error';
		oMsg.value = 'Google 인증이 필요합니다.';
		return false;
	}
}

/**
 * Initiate auth flow in response to user clicking authorize button.
 * 
 * @param {Event}
 *            event Button click event.
 */
function handleAuthClick(event) {
	gapi.auth.authorize({
		client_id : CLIENT_ID,
		scope : SCOPES,
		immediate : false,
	}, handleAuthResult);
	return false;
}

function searchDuplicatedBaseFolder(pageToken, nextProcess, finalProcess) {
	// var access_token = gapi.auth.getToken()['access_token'];
	console.info('searchDuplicatedBaseFolder start ' + count++);
	var thisFunction = arguments.callee;
	try {
		gapi.client.load('drive', 'v3')
		.then(
			function() {
				gapi.client.drive.files.list({
					'q' : "mimeType='application/vnd.google-apps.folder' and name='.pickMe' and trashed=false",
					'spaces' : 'drive',
					'fields' : 'nextPageToken, files(id, name)',
					'pageToken' : pageToken,
					'pageSize' : 1000,
				})
		.then(
			function(resp) {
				// console.log("search base folder : " + res.result);
				if (resp.result.files.length > 0) {
					folderId = resp.result.files[0].id;
					console.log('searchDuplicatedFolder ' + folderId)
					nextProcess(folderId, finalProcess);
				} else if (resp.result.nextPageToken) {
					// console.log("Next Page token", res.result.nextPageToken);
					thisFunction(arguments);
				} else {
					// throw new Exception('no base folder');
					createBaseFolder(nextProcess, finalProcess);
				}
			}, function(error) {
				console.log(error);
//				console.log(thisFunction);
				if(count<10)
					setTimeout(thisFunction(arguments),10000);
				else{
					alert('잠시 후 다시 시도해주세요.');
					count = 0;
				}
			});
		});
	} catch (e) {
		console.error(e);
		if (e instanceof TypeError) {
			thisFunction(arguments);
		}
	}
}

function createBaseFolder(nextProcess, finalProcess) {
	var access_token = gapi.auth.getToken()['access_token'];
	// console.log(access_token);

	var request = gapi.client.request({
		'path' : '/drive/v3/files/',
		'method' : 'POST',
		'headers' : {
			'Content-Type' : 'application/json',
			'Authorization' : 'Bearer ' + access_token,
		},
		'body' : {
			'title' : 'Folder',
			'name' : '.pickMe',
			'mimeType' : 'application/vnd.google-apps.folder',
		}
	}).then(function(resp) {
		// console.log("create base folder : ");
		// console.log(resp.result);
		folderId = resp.result.id;
		nextProcess(folderId, finalProcess);
	}, function(reason) {
		console.log(reason);
		// throw new Exception('cannot create base folder', reason);
		createBaseFolder(arguments);
	});
}

function searchDuplicatedDB(folderId, finalProcess) {
	console.log("search db : " + folderId);
	// var _promise = function() {
	// return new Promise(function(resolve, reject) {
	searchResumeDB(null, folderId, createResumeDB, finalProcess);
	searchCellDB(null, folderId, createCellDB, finalProcess);
	// });
	// }
	// _promise().then(finalProcess);
//	nextProcess();
}

function searchCellDB(pageToken, folderId, nextProcess, finalProcess) {
	var flag = false;
	var request = gapi.client.drive.files
			.list(
					{
						'q' : "mimeType='application/vnd.google-apps.spreadsheet' and name='myCellList' and trashed=false",
						'spaces' : 'drive',
						'fields' : 'nextPageToken, files(id, name, parents)',
						'pageToken' : pageToken,
						'pageSize' : 1000,
					}).then(function(res) {
				// console.log("search cell : ");
				// console.log(res.result);
				if (res.result.files.length > 0) {
					for ( var index in res.result.files) {
						if (res.result.files[index].parents[0] == folderId) {
							// setCellDBHeader(res.result.files[index].id);
							flag = true;
							cellDB = res.result.files[index].id;
							finalProcess();
							return;
						}
					}
				}
				if (!flag && res.result.nextPageToken) {
					// console.log("Next Page token", res.result.nextPageToken);
					searchCellDB(arguments);
				} else {
					// throw new Exception('no cell db');
					nextProcess(folderId, finalProcess);
				}
			});
}


function searchResumeDB(pageToken, folderId, nextProcess, finalProcess) {
	var flag = false;
	gapi.client.drive.files
			.list(
					{
						'q' : "mimeType='application/vnd.google-apps.spreadsheet' and name='myResumeList' and trashed=false",
						'spaces' : 'drive',
						'fields' : 'nextPageToken, files(id, name, parents)',
						'pageToken' : pageToken,
						'pageSize' : 1000,
					}).then(function(resp) {
				// console.log(resp.result);
				if (resp.result.files.length > 0) {
					for ( var index in resp.result.files) {
						if (resp.result.files[index].parents[0] == folderId) {
							// setCellDBHeader(res.result.files[index].id);
							flag = true;
							resumeDB = resp.result.files[index].id;
							finalProcess();
//							alert(resumeDB);
							return;
						}
					}
				}
				if (!flag && resp.result.nextPageToken) {
					// console.log("Next Page token",
					// res.result.nextPageToken);
					searchResumeDB(arguments);
				} else {
					// throw new Error('no resume db', folderId);
					nextProcess(folderId, finalProcess);
				}
			});
}

function createCellDB(folderId, finalProcess) {
	var access_token = gapi.auth.getToken()['access_token'];
	// console.log("create cell : " + folderId);

	var request = gapi.client.request({
		'path' : '/drive/v3/files/',
		'method' : 'POST',
		'headers' : {
			'Content-Type' : 'application/json',
			'Authorization' : 'Bearer ' + access_token,
		},
		'body' : {
			'name' : 'myCellList',
			'parents' : [ folderId ],
			'mimeType' : 'application/vnd.google-apps.spreadsheet',
		}
	}).then(function(resp) {
		// console.log(resp);
		cellDB = resp.result.id;
		setCellDBHeader(cellDB);
		finalProcess();
	}, function(reason) {
		// throw new Exception('cannot create cell db', reason);
		console.log(reason);
		createCellDB(folderId, finalProcess);
	});
}

function createResumeDB(folderId, finalProcess) {
	var access_token = gapi.auth.getToken()['access_token'];

	gapi.client.request({
		'path' : '/drive/v3/files/',
		'method' : 'POST',
		'headers' : {
			'Content-Type' : 'application/json',
			'Authorization' : 'Bearer ' + access_token,
		},
		'body' : {
			'name' : 'myResumeList',
			'parents' : [ folderId ],
			'mimeType' : 'application/vnd.google-apps.spreadsheet',
		}
	}).then(function(resp) {
		resumeDB = resp.result.id;
		setResumeDBHeader(resumeDB);
		finalProcess();
	}, function(reason) {
//		throw new Error('cannot create resume db', reason);
		createResumeDB(folderId, finalProcess);
	});
}

function setCellDBHeader(fileId) {
	var spreadsheetId = fileId;
	var requests = [];

	requests.push({
		updateSheetProperties : {
			properties : {
				sheetId : 0,
				title : 'Cell_Info'
			},
			fields : 'title'
		}
	});

	var headers = [ "cellEmail", "cellWriteTime", "cellName", "cellContent",
			"cellType", "cellVisibility" ];
	var values = [];
	for ( var i in headers) {
		values.push({
			userEnteredValue : {
				stringValue : headers[i],
			}
		});
	}
	;

	requests.push({
		updateCells : {
			start : {
				sheetId : 0,
				rowIndex : 0,
				columnIndex : 0
			},
			rows : [ {
				values : values
			} ],
			fields : 'userEnteredValue'
		}
	});

	var batchUpdateRequest = {
		requests : requests
	}

	var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
	gapi.client.load(discoveryUrl).then(function() {
		gapi.client.sheets.spreadsheets.batchUpdate({
			spreadsheetId : fileId,
			resource : batchUpdateRequest
		}).then(function(resp) {
			// console.log(resp);
		}, function(reason) {
			// throw new Exception('cannot set cell db header', reason);
			console.log(reason);
			setCellDBHeader(fileId);
		});
	});
}

function setResumeDBHeader(fileId) {
	var spreadsheetId = fileId;
	var requests = [];

	requests.push({
		updateSheetProperties : {
			properties : {
				sheetId : 0,
				title : 'Resume_Info',
			},
			fields : 'title'
		}
	});

	var headers = [ "resumeEmail", "resumeName", "resumeFile" ];
	var values = [];
	for ( var i in headers) {
		values.push({
			userEnteredValue : {
				stringValue : headers[i],
			}
		});
	}

	requests.push({
		updateCells : {
			start : {
				sheetId : 0,
				rowIndex : 0,
				columnIndex : 0
			},
			rows : [ {
				values : values
			} ],
			fields : 'userEnteredValue'
		}
	});

	var batchUpdateRequest = {
		requests : requests
	}

	var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
	gapi.client.load(discoveryUrl).then(function() {
		// alert('here');
		gapi.client.sheets.spreadsheets.batchUpdate({
			spreadsheetId : fileId,
			resource : batchUpdateRequest
		}).then(function(resp) {
			// console.log(resp);
		}, function(reason) {
			// throw new Exception('cannot set resume db header', reason);
			console.log(reason);
			setResumeDBHeader(fileId);
		});
	});
}