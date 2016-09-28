<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Pick Me!</title>
</head>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"
	type="text/javascript"></script>
<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"
	type="text/javascript"></script>
<link rel='stylesheet' type='text/css' href='style/hexagons.min.css'>
<link rel='stylesheet' type='text/css' href='style/insertCellStyle.css'>
<script src="script/insertCellScript.js" type="text/javascript"></script>
<script src="script/upload.js" type="text/javascript"></script>
<script src='https://apis.google.com/js/api.js'></script>
<script src='https://apis.google.com/js/client.js'></script>
<body>
	<center>
		<div id="container">
			<div id="leftDiv">
			<div class="ui-widget-content hb hb-md">10</div>
			<br><br>
				<ul>
					<li class="dropdown">
						<a href="javascript:;" class="dropbtn">추가 정보 입력</a>
						<div class="dropdown-content">
							<a href="javascript:;" onclick="addTextfield()">텍스트(단문)</a>
							<a href="javascript:;" onclick="addTextarea()">텍스트(장문)</a>
							<a href="javascript:;" onclick="addDate()">일정</a>
							<a href="javascript:;" onclick="addFile()">이미지/파일</a>
							<a href="javascript:;" onclick="addTable()">표</a>
						</div>
					</li>
<!-- 					<li class="dropdown"> -->
<!-- 						<a href="javascript:;" class="dropbtn">기본 양식</a> -->
<!-- 						<div class="dropdown-content"> -->
<!-- 							<a href="javascript:;" onclick="add()">기본 인적 사항</a>  -->
<!-- 							<a href="javascript:;" onclick="add()">이력서 사진</a>  -->
<!-- 							<a href="javascript:;" onclick="add()">자격증/어학점수</a> -->
<!-- 							<a href="javascript:;" onclick="add()">학력/경력</a>  -->
<!-- 							<a href="javascript:;" onclick="add()">수강 교과목</a>  -->
<!-- 							<a href="javascript:;" onclick="add()">대외 활동</a> -->
<!-- 							<a href="javascript:;" onclick="add()">희망 근무 지역</a> -->
<!-- 						</div> -->
<!-- 					</li> -->
				</ul>
			</div>
			<form id="cellContents">
			<div id="content">
				<div class="table_content">
					<div class="table_form">
						<div class="row_group">
							<div id="cellNameDiv" class="table_row">
								<input type="text" id="cellName" name="cellName" value=""
									maxlength="100" autocomplete="off" placeholder="셀의 이름을 입력해주세요."
									class="int">
								<div id="cellNameMsg" class="error" style="display: none">필수
									정보입니다.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</form>
		</div>
		<span class="btn_insertCell">
			<input type="button" onclick="insertCellSubmit()" value="등록">
			<input type="button" value="다시 입력" onclick="location.href='insertCellForm.do'">
			<input type="button" onclick="location.href='mainForm.do'" value="뒤로">
		</span>
	</center>
</body>
</html>