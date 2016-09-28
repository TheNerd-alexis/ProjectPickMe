<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Pick Me!</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="script/loginScript.js"></script>
<link rel='stylesheet' type='text/css' href='style/memberStyle.css'>
</head>
<body>
	<center>
	<div id="container">
	<div id="content">
	<div class="table_content">
	<div class="table_form">
	<form id="table_form">
		<fieldset class="table_form">
		<br> <br> <img width="300" height="150"
			src="https://lh3.googleusercontent.com/07zc8HQzwRuE1hXl_mew2L36w0_bs7m3PsOok5qh_I2xNa4j4IwZOTlAi8mByYdPR0L0AF4YhmeZLfLqDkCR84-NcuZllc57pcBMVJY7zhzn2s3Hv17hh9zxlKWUlaGHZT6chRuXqHNSY594pYypA_9W_mKzMaEpIz-lgkYoZS5Kdwiy9sPDt0IYxNeNnSf0QfVYGVbpqOV_2inhreA25LzKHNoUmajxARCY0GQ2RvaLIQajLq7LzRPJA7mzZYz5QqTmih8zfv0k47Qv92dxRN320qSDc-4vq0vdeVOi0apgfnsJ96VQLqCIM0KXwlE3SJh5xa3HsgtfFa1Ry6SSbxIUqajsATo82ADcTHj4RUtP5Ni7bb9bhWF-vKcimd6ynxFod_Ji346RkYlHKBK_ApEoLrx-xGvMkzwppsdn-gRTygFdwBQt-rrbFNtaH_zGsB8S1lnsxAH7xokaDxoLqJk8KrmSon76kVTT1mAxFNuxDbeoAD8NSxnlk6e8207IUSoMMT_QPjIeFrc7cc1A6jM7IaSz22b0rlKgqMwfROaObN0maTO_Vfc0DVe64nEsqDnFyok7E6FTdrIFShqJw63gX5J-4g=w592-h317-no">
		<br> <br> <br>
			<div class="row_group">
				<div id="emailDiv" class="table_row">
					<span class="ps_box int_email"> <input type="text"
						id="email" name="email" value="" maxlength="100" autocomplete="off"
						onBlur="checkEmail()" placeholder="이메일" class="int">
					</span>
					<div id="emailMsg" class="error" style="display: none">이메일 주소를 입력해주세요.</div>
				</div>
				<div id="pwdDiv" class="table_row">
					<span class="ps_box int_pass">
					<input
						type="password" id="pwd" name="pwd" maxlength="16"
						onBlur="checkPwd();" 
						onkeyup="checkShiftUp(event);" 
						onkeypress="checkCapslock(event);"
						onkeydown="checkShiftDownLogin(event);"
						placeholder="비밀번호" class="int">
					</span>
					<div id="pwdMsg" class="error" style="display: none">비밀번호를 입력해주세요.</div>
				</div>
			</div>
			</fieldset>
			<div id="loginMsg" class="error" style="display: none; font-size: 13pt;">이메일 또는 비밀번호를 확인하세요.</div>
			<br>
			<span class="btn_login">
				<input type="button" onclick="loginSubmit()" style="margin-right:1%" value="로그인">
				<input type="button" onclick="location.href='joinForm.do'" style="margin-left:1%" value="회원가입">
		<br><br>
		<a href="pwdFindForm.do" style="color: white; font-size: 12pt;">비밀번호를 까먹으셨나요?ㅠㅠ</a>
			</span>
		</form>
	</div>
	</div>
	</div>
	</div>
	</center>
</body>
</html>