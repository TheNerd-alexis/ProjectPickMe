/**
 * 
 */

var isShift = false;
var isCapslock = false;

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
	if (email == "") {
		oMsg.style.display = "block";
		oMsg.className = "error";
		oMsg.innerHTML = "필수 정보입니다.";
		return false;
	}

	oMsg.style.display = "none";
	return true;
}

function pwdFindSubmit(){
	var res = true;
	
	if(checkEmail() !=true){
		res = false;
	}
	if(checkKeyword() != true){
		res = false;
	}
	if(res==true){
	var email = document.getElementById("email");
	var keyword = document.getElementById("keyword");
	var btn = document.getElementById("pwdFindBtn");
	var btn2 = document.getElementById("pwdResetBtn");
	var oMsg = document.getElementById("pwdFindMsg");
	var pwdDiv = document.getElementById("pwdDiv");
	
	$.ajax({
		url : "https://script.google.com/macros/s/AKfycbx8UbRA4_eAr5t8xk9LuCRzLb1UnI2iWoIZyk6qmzDS-yPsHGw/exec",
		data : {
			"action" : "selectOne",
			"memberEmail" : email.value,
		},
		type : "POST",
		dataType : "json",
		error : function(error) {
			alert('통신실패!!');
			console.log(error.error);
		},
		success : function(data) {
			if(!data.result){
				oMsg.style.display = "block";
				oMsg.innerHTML = '가입되지 않은 회원입니다.';
				return false;
//				console.log(data.result + "  " + data.email + "  " + data.member);
			}else if(data.member[6] != 'TRUE'){
				oMsg.style.display = "block";
				oMsg.innerHTML = '탈퇴한 회원입니다.';
				return false;
			}else if(data.member[3]!==keyword.value){
				oMsg.style.display = "block";
				oMsg.innerHTML = '키워드가 일치하지 않습니다.';
				return false;
			}else{
//				console.log('success');
				oMsg.style.display = "none";
				email.disabled = true;
				keyword.disabled = true;
				btn.disabled = true;
				btn.style.cursor = "default"; 
				pwdDiv.style.display = "block";
				btn2.style.display = "block";
				btn.value = '비밀번호를 새롭게 지정해주세요.'
			}
		}
	});
	}
}

function checkKeyword(){
	var keyword = document.getElementById("keyword").value;
	var oMsg = document.getElementById("keywordMsg");
	
	if(keyword == ""){
		oMsg.style.display = "block";
		oMsg.innerHTML = "필수 정보입니다.";
		return false;
	}
	oMsg.style.display = "none";
	return true;
}

function checkCapslock(e) {
	var myKeyCode = 0;
	var myShiftKey = false;
	if (window.event) {
		myKeyCode = e.keyCode;
		myShiftKey = e.shiftKey;
	} else if (e.which) {
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

function checkShiftDownPwdFind(e) {
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

function pwdResetSubmit() {
	var res = true;
	
	var oMsg = document.getElementById("pwdResetMsg");
	
	if (checkEmail() != true) {
//		alert('email');
		res = false;
	}
	if(checkKeyword() != true){
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
	
	var oMsg = document.getElementById("pwdResetMsg");
	 if (res == false) {
		oMsg.style.display = "block";
		oMsg.innerHTML = "유효하지 않은 비밀번호입니다.";
		return false;
	}

	if (res == true) {
		updateMemberDB();
		oMsg.style.display = "none";
		// alert('finish');
		return true;
	}
};

function updateMemberDB() {
	var result;
	var email = document.getElementById("email").value;
	var securedPwd = setPassword(document.getElementById("pwd1").value);
	$.ajax({
		url : "https://script.google.com/macros/s/AKfycbx8UbRA4_eAr5t8xk9LuCRzLb1UnI2iWoIZyk6qmzDS-yPsHGw/exec",
		data : {
			"action" : "update",
			"memberEmail" : email,
			"memberPwd" : securedPwd.memberPwd,
			"memberSalt" : securedPwd.memberSalt,
		},
		type : "POST",
		async : "false",
		dataType : "json",
		error : function(error) {
			alert('통신실패!!');
//			console.log(error);
			result = false;
		},
		success : function(data) {
//			alert("result : " + data.result + " value: " + data.row
//					+ " action:" + data.action);
//			console.log(data);
//			console.log(data.values[0][0]);
			if(data.result == 'success'){
				result = true;
				alert('비밀번호 재설정이 완료되었습니다.')
				location.href='loginForm.do';
			}else{
				alert('다시 시도해주세요.');
			}
		}
	});
	return result;
}