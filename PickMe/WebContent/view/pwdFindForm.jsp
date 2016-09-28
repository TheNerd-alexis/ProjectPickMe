<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Pick Me! - Password Find</title>
<script type="text/javascript" src="script/pwdFindScript.js"></script>
<script
	src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://apis.google.com/js/api.js'></script>
<script src='https://apis.google.com/js/client.js'></script>
<link rel='stylesheet' type='text/css' href='style/memberStyle.css'>

</head>
<body>
	<center>
	<div id="container">
	<div id="content">
	<div class="table_content">
	<div class="table_form">
	<h1 align="center" style="color: white;">비밀번호 재설정</h1>
	<br><br>
	<form id="table_form" method="post" action="login.do">
		<fieldset class="table_form">
		<input type="hidden" id="emailFlag" value="">
			<div class="row_group">
				<div id="emailDiv" class="table_row">
					<span class="ps_box int_email"> <input type="text"
						id="email" name="email" value="" maxlength="100" autocomplete="off"
						onBlur="checkEmail()" placeholder="이메일" class="int">
					</span>
					<div id="emailMsg" class="error" style="display: none">필수
						정보입니다.</div>
				</div>
				<div id="keywordDiv" class="table_row table_keyword">
					<span class="ps_box int_keyword">
						 <input type="text" id="keyword" name="keyword" maxlength="100" value=""
						onBlur="checkKeyword()" placeholder="회원가입 시 입력한 키워드" class="int">
					</span>
					<div id="keywordMsg" class="error" style="display: none">필수 정보입니다.</div>
				</div>
			
			</div>
			<div class="error_ch">
				<span id="pwdFindMsg" class="error" style="display:none;color:white;">일치하는 회원을 찾을 수 없습니다.</span><br>
			</div>	
			<span class="btn_pwdFind">
				<input type="button" id="pwdFindBtn" onclick="pwdFindSubmit()" value="회원 정보 확인">
				<br><br><br><br>
			</span>
			
			<div class="row_group" id="pwdDiv" style="display:none">
				<div id="pwd1Div" class="table_row">
					<span id="pwd1Img" class="ps_box int_pass"> <input
						type="password" id="pwd1" name="pwd1" maxlength="16"
						onBlur="checkPwd1();" 
						onkeyup="checkShiftUp(event);" 
						onkeypress="checkCapslock(event);"
						onkeydown="checkShiftDownPwdFind(event);"
						placeholder="새로운 비밀번호" class="int">
					</span>
					<div id="pwd1Msg" class="error" style="display: none">필수 정보입니다.</div>
				</div>
				<div id="pwd2Div" class="table_row">
					<span id="pwd2Img" class="ps_box int_pass_check"> <input
						type="password" id="pwd2" name="pwd2" maxlength="16"
						onBlur="checkPwd2();"
						onkeyup="checkShiftUp(event);"
						onkeypress="checkCapslock2(event);"
						onkeydown="checkShiftDown(event);"
						placeholder="비밀번호 재확인" class="int">
					</span>
					<div id="pwd2Msg" class="error" style="display: none">필수
						정보입니다.</div>
				</div>
			</div>
			</fieldset>
			<div class="error_ch">
				<span id="pwdResetMsg" class="error" style="display:none;color:white;">유효하지 않은 비밀번호입니다.</span><br>
			</div>	
			<span class="btn_pwdFind">
				<input type="button" id="pwdResetBtn" style="display: none" onclick="pwdResetSubmit()" value="비밀번호 재설정">
			</span>
		</form>
	</div>
	</div>
	</div>
	</div>
	</center>
</body>
</html>