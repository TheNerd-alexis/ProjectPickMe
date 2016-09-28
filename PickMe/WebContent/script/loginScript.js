var isShift = false;
var isCapslock = false;

function getPassword(pwd, salt) {
	var password;

	$.ajax({
		url : "_secret/getPassword/" + pwd + "/" + salt,
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

function loginSubmit() {
	var email = document.getElementById("email").value;
	var pwd = document.getElementById("pwd").value;
	var res = true;
	console.log(email);
	
	if(checkEmail()!=true){
		res = false;
	}
	if(checkPwd()!=true){
		res = false;
	}
		
	if(res==true){
	$.ajax({
		url : "https://script.google.com/macros/s/AKfycbx8UbRA4_eAr5t8xk9LuCRzLb1UnI2iWoIZyk6qmzDS-yPsHGw/exec",
		data : {
			"action" : "selectOne",
			"memberEmail" : email
		},
		type : "POST",
		dataType : "json",
		error : function(error) {
			alert('통신실패!!');
			console.log(error.error);
		},
		success : function(data) {
			var oMsg = document.getElementById("loginMsg");
			if(!data.result){
				oMsg.style.display = 'block';
				oMsg.innerHTML = '가입되지 않은 회원입니다.';
//				console.log(data.result + "  " + data.email + "  " + data.member);
			}else if(data.member[1]!==getPassword(pwd,data.member[2]).memberPwd){
				oMsg.style.display = 'block';
				oMsg.innerHTML = '비밀번호가 일지하지 않습니다.';
				console.log(data.member[1]);
				console.log(getPassword(pwd,data.member[2]));
//				console.log("result : " + data.result +"\nemail: \n"+ data.email + "\naction:" + data.action + "\nvalues:" + data.values + "\nindex:" + data.index);
			}else if(data.member[6]!='TRUE'){
				oMsg.style.display = 'block';
				oMsg.innerHTML = '탈퇴한 회원입니다.';
				console.log(data.member[6]);
			}else{
				console.log('success');
				if (window.sessionStorage) {
					sessionStorage.setItem('email', data.member[0]);
					sessionStorage.setItem('folderId', data.member[7]);
					sessionStorage.setItem('cellDB', data.member[8]);
					sessionStorage.setItem('resumeDB', data.member[9]);
					sessionStorage.setItem('login', true);
				}
//				console.log(sessionStorage);
				location.href = 'mainForm.do';
			}
		}
	});
	}
}

function checkEmail() {
	var email = document.getElementById("email").value;
	var oMsg = document.getElementById("emailMsg");
	if (email == "") {
		oMsg.style.display = "block";
		return false;
	}
	oMsg.style.display = "none";
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

	var oMsg = document.getElementById("pwdMsg");

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

function checkShiftDownLogin(e) {
	if (e.which && e.which == 16) {
		isshift = true;
	}

	var oMsg = document.getElementById("pwdMsg");
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

function checkPwd() {
	var pwd = document.getElementById("pwd").value;
	var oMsg = document.getElementById("pwdMsg");

	if (pwd == "") {
		oMsg.style.display = "block";
		oMsg.innerHTML = "비밀번호를 입력해주세요.";
		return false;
	}
	oMsg.style.display = "none";
	return true;
}
