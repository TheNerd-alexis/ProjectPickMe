<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body style="background-color: #3399FF;">
	<center>
		<br>
		<h1 align="center" style="color: white;">회원가입</h1>
		<form>
			<div>
				<table>
					<tr>
						<td style="width: 100px;"><br></td>
						<td>
							<table cellspacing="10">
								<tr>
									<td align="center"><input type="text" placeholder="이메일"
										name="email" style="width: 155px;"></td>
									<td style="width: 100px;"><input type="button"
										value="중복확인" onclick=""></td>
								</tr>
								<tr>
									<td align="center"><input type="text" placeholder="연락처"
										name="phone" style="width: 155px;"></td>
								</tr>
								<tr>
									<td align="center"><input type="password"
										placeholder="비밀번호" name="pw" style="width: 155px;"></td>
								</tr>
								<tr>
									<td align="center"><input type="password"
										placeholder="비밀번호 확인" name="pw_Check" style="width: 155px;"></td>
								</tr>
								<tr>
									<td align="center"><input type="text" placeholder="이름(국문)"
										name="name_kor" style="width: 155px;"></td>
								</tr>
								<tr>
									<td align="center"><input type="text" placeholder="키워드"
										name="keyword" style="width: 155px;"></td>
								</tr>
								<tr>
									<td align="center"><div
											style="background-color: grey; width: 160px; height: 60px;"></div></td>
								</tr>
								<tr>
									<td><input type="submit" value="회원가입" style="width: 60px;">&nbsp;&nbsp;
										<input type="reset" value="다시입력" style="width: 60px;">&nbsp;&nbsp;<input
										type="button" value="뒤로" onclick="javascript:history.go(-1)"
										style="width: 60px;"></td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</div>
		</form>
	</center>
</body>
</html>