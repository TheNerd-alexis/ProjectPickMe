/**
 * 
 */

var isShift = false;
var isCapslock = false;

var onloadCallback = function() {
	grecaptcha.render('html_element', {
		'sitekey' : '6LeYwSQTAAAAAGg1-qAcLlMY-ATV73vLrSdiIHvm',
	});
};

function checkCaptcha(res) {
	var response = document.getElementById("g-recaptcha-response");
	var oMsg = document.getElementById("captchaMsg");
	// console.log(response);

	if (response.value.length < 1) {
		oMsg.style.display = "block";
		oMsg.className = "error";
		oMsg.innerHTML = "실제 사용자임을 확인해주세요.";
		return false;
	}

	oMsg.style.display = "none";
	return true;
}

function setPassword(pwd) {
	var password;

	$.ajax({
		url : "_secret/setPassword/" + pwd,
		type : "POST",
		dataType : "json",
		async : false,
		error : function(error) {
			alert('암호화 실패');
			password = [];
			console.log(error);
		},
		success : function(data) {
			password = data;
		}
	})
	// console.log(password);
	return password;
};

function checkEmail() {
	var email = document.getElementById("email").value;
	var oMsg = document.getElementById("emailMsg");
	var flag = document.getElementById("emailFlag");
	if (email == "") {
		oMsg.style.display = "block";
		oMsg.className = "error";
		oMsg.innerHTML = "필수 정보입니다.";
		flag.value = false;
		return false;
	}

	var isEmail = /^[0-9a-zA-Z]([\-.\w]*[0-9a-zA-Z\-_+])*@([0-9a-zA-Z][\-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9}$/;
	if (!isEmail.test(email)) {
		oMsg.style.display = "block";
		oMsg.className = "error";
		oMsg.innerHTML = "올바른 이메일 양식이 아닙니다.";
		flag.value = false;
		return false;
	}

	oMsg.style.display = "none";

	$
			.ajax({
				url : "https://script.google.com/macros/s/AKfycbx8UbRA4_eAr5t8xk9LuCRzLb1UnI2iWoIZyk6qmzDS-yPsHGw/exec",
				data : {
					"action" : "checkEmail",
					"memberEmail" : email
				},
				type : "POST",
				dataType : "json",
				error : function(error) {
					alert('DB 확인 실패');
					console.log(error);
				},
				success : function(data) {
					if (data.result) {
						oMsg.style.display = "block";
						oMsg.className = "error";
						oMsg.innerHTML = "이미 사용중이거나 탈퇴한 아이디입니다.";
						flag.value = false;
					} else {
						oMsg.style.display = "block";
						oMsg.className = "error gm";
						oMsg.innerHTML = "사용할 수 있는 이메일입니다!";
						flag.value = true;
					}
				}
			});
	return true;
}

function checkPhone() {
	var phone = document.getElementById("phone");
	var oMsg = document.getElementById("phoneMsg");

	if (phone.value == "") {
		oMsg.style.display = "block";
		oMsg.className = "error";
		oMsg.innerHTML = "필수 정보입니다.";
		return false;
	}

	phone.value = phone.value.replace(/[^0-9]/g, '').replace(
			/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");

	var isPhone1 = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})?[0-9]{3,4}?[0-9]{4}$/;
	var isPhone2 = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
	if (!(isPhone1.test(phone.value) || isPhone2.test(phone.value))) {
		oMsg.style.display = "block";
		oMsg.className = "error";
		oMsg.innerHTML = "올바른 연락처 양식이 아닙니다.";
		return false;
	}
	oMsg.style.display = "none";
	return true;
}

function checkName() {
	var nm = document.getElementById("name").value;
	var oMsg = document.getElementById("nameMsg");

	if (nm == "") {
		oMsg.style.display = "block";
		oMsg.innerHTML = "필수 정보입니다.";
		return false;
	}

	var nonchar = /[^가-힣ㄱ-ㅎㅏ]/gi;
	if (nonchar.test(nm)) {
		oMsg.style.display = "block";
		oMsg.innerHTML = "한글 이름을 입력해 주세요.";
		return false;
	}
	oMsg.style.display = "none";
	return true;
}

function checkKeyword(){
	var keyword = document.getElementById("keyword").value;
	var oMsg = document.getElementById("keywordMsg");
	
	if(keyword == ""){
		oMsg.style.display = "block";
		oMsg.innerHTML = "필수 정보입니다.";
		return false;
	}
	return true;
}

function checkCapslock(e) {
	var myKeyCode = 0;
	var myShiftKey = false;
	if (window.event) { // IE
		myKeyCode = e.keyCode;
		myShiftKey = e.shiftKey;
	} else if (e.which) { // netscape ff opera
		myKeyCode = e.which;
		myShiftKey = isShift;
	}

	var oMsg = document.getElementById("pwd1Msg");

	if ((myKeyCode >= 65 && myKeyCode <= 90) && !myShiftKey) {
		oMsg.style.display = "block";
		oMsg.className = "error";
		oMsg.innerHTML = "Caps Lock이 켜져 있습니다.";
	} else if ((myKeyCode >= 97 && myKeyCode <= 122) && myShiftKey) {
		oMsg.style.display = "block";
		oMsg.className = "error";
		oMsg.innerHTML = "Caps Lock이 켜져 있습니다.";
	} else {
		oMsg.style.display = "none";
	}
}

function checkShiftUp(e) {
	if (e.which && e.which == 16) {
		isShift = false;
	}
}

function checkShiftDown(e) {
	if (e.which && e.which == 16) {
		isShift = true;
	}
}

function checkSpace(str) {
	if (str.search(/\s/) != -1) {
		return true;
	} else {
		return false;
	}
}

function checkShiftDownJoin(e) {
	if (e.which && e.which == 16) {
		isShift = true;
	}

	var oMsg = document.getElementById("pwd1Msg");
	if (e.which && e.which == 20) {
		if (!isCapslock) {
			isCapslock = true;
			oMsg.style.display = "block";
			oMsg.className = "error";
			oMsg.innerHTML = "Caps Lock이 켜져 있습니다.";
		} else {
			isCapslock = false;
			oMsg.style.display = "none";
		}
	}
}

function checkCapslock2(e) {
	var myKeyCode = 0;
	var myShiftKey = false;
	if (window.event) { // IE
		myKeyCode = e.keyCode;
		myShiftKey = e.shiftKey;
	} else if (e.which) { // netscape ff opera
		myKeyCode = e.which;
		myShiftKey = isShift;
	}

	var oMsg = document.getElementById("pwd2Msg");

	if ((myKeyCode >= 65 && myKeyCode <= 90) && !myShiftKey) {
		oMsg.style.display = "block";
		oMsg.className = "error";
		oMsg.innerHTML = "Caps Lock이 켜져 있습니다.";
	} else if ((myKeyCode >= 97 && myKeyCode <= 122) && myShiftKey) {
		oMsg.style.display = "block";
		oMsg.className = "error";
		oMsg.innerHTML = "Caps Lock이 켜져 있습니다.";
	} else {
		oMsg.style.display = "none";
	}
}

function checkPwd1() {
	var pwd = document.getElementById("pwd1").value;
	var oMsg = document.getElementById("pwd1Msg");
	// var oImg = document.getElementById("pswd1Img");

	if (pwd == "") {
		oMsg.style.display = "block";
		oMsg.className = "error";
		oMsg.innerHTML = "필수 정보입니다.";
		return false;
	}
	if (isValidPasswd(pwd) != true) {
		oMsg.style.display = "block";
		oMsg.className = "error e_info";
		oMsg.innerHTML = "6~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
		return false;
	}
	return true;
}

function checkPwd2(event) {
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var oMsg = document.getElementById("pwd2Msg");
	// var oImg = document.getElementById("pwd2Img");

	if (pwd2 == "") {
		oMsg.style.display = "block";
		oMsg.innerHTML = "필수 정보입니다.";
		return false;
	}
	if (pwd1 != pwd2) {
		oMsg.style.display = "block";
		oMsg.innerHTML = "비밀번호가 일치하지 않습니다.";
		document.getElementById("pwd2").value = "";
		return false;
	} else {
		oMsg.style.display = "none";
		return true;
	}

	return true;
}

function isValidPasswd(str) {
	var cnt = 0;
	if (str == "") {
		return false;
	}

	var retVal = checkSpace(str);
	if (retVal) {
		return false;
	}
	if (str.length < 6) {
		return false;
	}
	for (var i = 0; i < str.length; ++i) {
		if (str.charAt(0) == str.substring(i, i + 1))
			++cnt;
	}
	if (cnt == str.length) {
		return false;
	}

	var isPW = /^[A-Za-z0-9`\-=\\\[\];',\./~!@#\$%\^&\*\(\)_\+|\{\}:\"<>\?]{6,16}$/;
	if (!isPW.test(str)) {
		return false;
	}

	return true;
}

function joinSubmit() {
	var res = true;
	var count = 0;
	checkAuth();
	gapi.client.load('drive', 'v3');
	
	if (checkEmail() != true || !document.getElementById("emailFlag").value) {
//		alert('email');
		res = false;
	}
	if (checkPhone() != true) {
//		alert('phone');
		res = false;
	}
	if (checkName() != true) {
//		alert('name');
		res = false;
	}
	if (checkPwd1() != true) {
//		alert('pwd');
		res = false;
	}
	if (checkPwd2() != true) {
//		alert('pwd2');
		res = false;
	}
	if (checkKeyword() != true) {
//		alert('key');
		res = false;
	}
	if (checkCaptcha() != true) {
//		alert('captcha');
		res = false;
	}
	
	var oMsg = document.getElementById("joinMsg");
	 if (res == false) {
		oMsg.style.display = "block";
		oMsg.innerHTML = "입력하신 정보를 다시 확인해주세요.";
		return false;
	}

	if (res == true) {
		setClientDB();
		oMsg.style.display = "none";
		// alert('finish');
		return true;
	}
};

function setClientDB() {
	gapi.client.load('drive', 'v3')
	.then(searchDuplicatedBaseFolder(null, searchDuplicatedDB, insertMemberDB)
		, function(reason){
			console.log(reason);
	});
}

function insertMemberDB() {
	var result;
	
	if (resumeDB != undefined && cellDB != undefined){
		var email = document.getElementById("email").value;
		var phone = document.getElementById("phone").value.replace(/[^0-9]/g,'');
		var name = document.getElementById("name").value;
		var keyword = document.getElementById("keyword").value;
		var securedPwd = setPassword(document.getElementById("pwd1").value);
		$.ajax({
			url : "https://script.google.com/macros/s/AKfycbx8UbRA4_eAr5t8xk9LuCRzLb1UnI2iWoIZyk6qmzDS-yPsHGw/exec",
			data : {
				"action" : "create",
				"memberEmail" : email,
				"memberPwd" : securedPwd.memberPwd,
				"memberSalt" : securedPwd.memberSalt,
				"memberKeyword" : keyword,
				"memberPhone" : phone,
				"memberName" : name,
				"memberFolder" : folderId,
				"memberCellDB" : cellDB,
				"memberResumeDB" : resumeDB,
				"memberState" : "TRUE"
			},
			type : "POST",
			async : "false",
			dataType : "json",
			error : function(error) {
				alert('통신실패!!');
				console.log(error.error);
				result = false;
			},
			success : function(data) {
//				alert("result : " + data.result + " value: " + data.row
//						+ " action:" + data.action);
				result = true;
				location.href='loginForm.do';
			}
		});
	}
	return result;
}