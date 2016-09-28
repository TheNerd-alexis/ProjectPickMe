<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Pick Me! - join</title>
<script type="text/javascript" src="script/joinScript.js"></script>
<script type="text/javascript" src="script/google_authorize.js"></script>
<script
	src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://www.google.com/recaptcha/api.js?onload=onloadCallback'></script>
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
	<h1 align="center" style="color: white;">회원가입</h1>
	<br><br>
	<form id="table_form">
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
				<div id="phoneDiv" class="table_row">
					<span class="ps_box int_phone"> 
						<input type="text" id="phone" name="phone" value="" maxlength="20" autocomplete="off"
						onBlur="checkPhone()" placeholder="연락처" class="int">
					</span>
					<div id="phoneMsg" class="error" style="display: none">필수
						정보입니다.</div>
				</div>
				<div id="nameDiv" class="table_row">
					<span class="ps_box"> <input type="text" id="name"
						name="name" maxlength="40" value="" onBlur="checkName()"
						placeholder="이름" class="int">
					</span>
					<div id="nameMsg" class="error" style="display: none">필수 정보입니다.</div>
				</div>
				<div id="authDiv" class="table_row">
					<span class="ps_box">
					<input type="text" id="googleAuth" name="googleAuth" value="" placeholder="Google 인증" class="int" style="width:80%;float:left" disabled="disabled">
					<input type="button" id="authBtn" class="btn_c" value="인증" onclick="handleAuthClick(event)">
					</span>		
					<div id="authMsg" class="error" style="display: none">인증을 완료해주세요.</div>
				</div>
			</div>
			
			<div class="row_group">
				<div id="pwd1Div" class="table_row">
					<span id="pwd1Img" class="ps_box int_pass"> <input
						type="password" id="pwd1" name="pwd1" maxlength="16"
						onBlur="checkPwd1();" 
						onkeyup="checkShiftUp(event);" 
						onkeypress="checkCapslock(event);"
						onkeydown="checkShiftDownJoin(event);"
						placeholder="비밀번호" class="int">
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
				
				<div id="keywordDiv" class="table_row table_keyword">
					<span class="ps_box int_keyword">
						 <input type="text" id="keyword" name="keyword" maxlength="100" value=""
						onBlur="checkKeyword()" placeholder="비밀번호 분실시 사용할 키워드" class="int">
					</span>
					<div id="keywordMsg" class="error" style="display: none">필수 정보입니다.</div>
				</div>
				<div id="captcha" class="table_row g-recaptcha" data-callback="checkCaptcha" data-sitekey="6LeYwSQTAAAAAGg1-qAcLlMY-ATV73vLrSdiIHvm" style="padding:10px;">
				</div>
				<div id="captchaMsg" class="error" style="display: none">실제 사용자임을 확인해주세요.</div>
			</div>
			<br>
			</fieldset>
			<div class="error_ch">
				<span id="joinMsg" class="error" style="display:none;color:white;">가입정보를 확인해주세요.</span><br>
			</div>	
			<span class="btn_join">
				<input type="button" onclick="joinSubmit()" value="회원가입">
				<input type="button" value="다시 입력" onclick="location.href='joinForm.do'">
				<input type="button" onclick="location.href='loginForm.do'" value="뒤로">
			</span>
		</form>
	</div>
	</div>
	</div>
	</div>
	</center>
</body>
</html>