<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="stylesheet/iconMenu1.css">
<script type="text/javascript" src="script/iconMenu1.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script
	src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
<script src="http://code.jquery.com/jquery-latest.js"></script>
</head>
<body style="background-color: #3399FF;">
	<center>
		<br> <br> <br> <br> <br>
		<form>

			<div id="editIcon" style="display: none;">
				<table>
					<tr>
						<td style="width: 70px;"><a onclick="editIcon(this);"><img
								width="50" height="50"
								src="https://lh3.googleusercontent.com/AG5KFWMBF35ZM6C0GXlo59LqYYWdk-pX08rUZl_uEPZkgTrnA2WpWnLbF9g_12r6afJDvHwk_iE=w614-h531-no">
						</a></td>
						<td>
							<div id="sse1">
								<div id="sses1">
									<ul>
										<li><a href="?menu=1&skin=2&p=Javascript-Menus">경력</a></li>
										<li><a href="?menu=1&skin=2&p=Horizontal-Menus">사람</a></li>
										<li><a href="?menu=1&skin=2&p=Web-Menus">여행</a></li>
										<li><a href="">기타</a></li>
									</ul>
								</div>
							</div>
						</td>
					</tr>
				</table>
			</div>
			<div id="details">
				<table>
					<tr>
						<td>
							<table>
								<tr>
									<td style="width: 70px;"><a onclick="editIcon(this);"><img
											width="50" height="50"
											src="https://lh3.googleusercontent.com/AG5KFWMBF35ZM6C0GXlo59LqYYWdk-pX08rUZl_uEPZkgTrnA2WpWnLbF9g_12r6afJDvHwk_iE=w614-h531-no">
									</a></td>
									<td><input type="text" name="cell_name"
										placeholder="셀의 이름을 입력해주세요" value style="width: 195px;"></td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<table>
					<tr>
						<td style="width: 70px;"><br></td>
						<td>
							<table>
								<tr>
									<td><select name="category"
										onchange="showMoreInputs(this);" style="width: 200px;">
											<option id="">선택사항</option>
											<option id="">경력사항</option>
											<option id="">지원이력</option>
											<option id="">대외활동</option>
											<option id="">학력사항</option>
											<option id="">자격증</option>
											<option id="">희망 근무 지역</option>
											<option id="">이력서 사진</option>
											<option id="">파일</option>
											<option id="">수정</option>
											<option id="">조회</option>
											<option id="">출력</option>
											<option id="">메모</option>
									</select></td>
								</tr>
								<tr>
									<td>
										<div id="workExp" style="display: none;">
											<table>
												<tr>
													<td><input type="text" name="companyName"
														placeholder="회사명" style="width: 195px;"></td>
												</tr>
												<tr>
													<td><input type="text" name="companyType"
														placeholder="직무" style="width: 195px;"></td>
												</tr>
												<tr>
													<td><input type="text" name="" placeholder="직위"
														style="width: 195px;"></td>
												</tr>
												<tr>
													<td><input type="text" name="" placeholder="근무기간"
														style="width: 195px;"></td>
												</tr>
												<tr>
													<td><input type="text" placeholder="직무내용"
														style="width: 195px;"></td>
												</tr>
											</table>
										</div>
										<div id="license" style="display: none;">
											<table>
												<tr>
													<td><input type="text" name="companyName"
														placeholder="자격증 이름" style="width: 195px;"></td>
												</tr>
												<tr>
													<td><input type="text" name="companyType"
														placeholder="취득 날짜" style="width: 195px;"></td>
												</tr>
											</table>
										</div>


									</td>
								</tr>
								<tr>
									<td colspan="2" align="center"><input type="submit"
										value="OK">&nbsp;&nbsp;&nbsp;<input type="button"
										value="취소" onclick="javascript:history.go(-1);"></td>
								</tr>
							</table>
						</td>
					</tr>


				</table>

			</div>



		</form>



		<!-- 		<div align="right" -->
		<!-- 			style="position: absolute; vertical-align: baseline;"> -->
		<!-- 			<img width="300" height="150" -->
		<!-- 				src="https://lh3.googleusercontent.com/07zc8HQzwRuE1hXl_mew2L36w0_bs7m3PsOok5qh_I2xNa4j4IwZOTlAi8mByYdPR0L0AF4YhmeZLfLqDkCR84-NcuZllc57pcBMVJY7zhzn2s3Hv17hh9zxlKWUlaGHZT6chRuXqHNSY594pYypA_9W_mKzMaEpIz-lgkYoZS5Kdwiy9sPDt0IYxNeNnSf0QfVYGVbpqOV_2inhreA25LzKHNoUmajxARCY0GQ2RvaLIQajLq7LzRPJA7mzZYz5QqTmih8zfv0k47Qv92dxRN320qSDc-4vq0vdeVOi0apgfnsJ96VQLqCIM0KXwlE3SJh5xa3HsgtfFa1Ry6SSbxIUqajsATo82ADcTHj4RUtP5Ni7bb9bhWF-vKcimd6ynxFod_Ji346RkYlHKBK_ApEoLrx-xGvMkzwppsdn-gRTygFdwBQt-rrbFNtaH_zGsB8S1lnsxAH7xokaDxoLqJk8KrmSon76kVTT1mAxFNuxDbeoAD8NSxnlk6e8207IUSoMMT_QPjIeFrc7cc1A6jM7IaSz22b0rlKgqMwfROaObN0maTO_Vfc0DVe64nEsqDnFyok7E6FTdrIFShqJw63gX5J-4g=w592-h317-no"> -->

		<!-- 		</div> -->

	</center>




	<!-- 	<script> -->
	<!-- 	// function showMoreInputs(that) { // if (that.value == "경력사항") { // -->
	<!-- 	document.getElementById("workExp").style.display = "block"; // } else { -->
	<!-- 	// document.getElementById("workExp").style.display = "none"; // } // } -->
	<!-- 	</script> -->

	<script>
		function editIcon(that) {
			document.getElementById("details").style.display = "none";
			document.getElementById("editIcon").style.display = "block";
		}
	</script>
	<script>
		function showMoreInputs(that) {
			if (that.value == "경력사항") {
				document.getElementById("workExp").style.display = "block";
			} else if (that.value == "지원이력") {
				document.getElementById("workExp").style.display = "none";
				document.getElementById("purpose").style.display = "block";
			} else if (that.value == "대외활동") {
				document.getElementById("workExp").style.display = "none";
				document.getElementById("externalActivities").style.display = "block";
			} else if (that.value == "학력사항") {
				document.getElementById("workExp").style.display = "none";
				document.getElementById("education").style.display = "block";
			} else if (that.value == "자격증") {
				document.getElementById("workExp").style.display = "none";
				document.getElementById("license").style.display = "block";
			}
		}
	</script>

</body>
</html>