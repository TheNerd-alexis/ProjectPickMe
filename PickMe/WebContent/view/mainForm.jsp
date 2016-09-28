<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Pick Me!</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"
	type="text/javascript"></script>
<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"
	type="text/javascript"></script>

<link rel='stylesheet' type='text/css' href='style/mainStyle.css'>
<link rel='stylesheet' type='text/css' href='style/hexagons.min.css'>
<script type="text/javascript" src="script/mainScript.js"></script>
</head>
<body>
	<div id="containment-wrapper" class="center">
		<ul id="sortable1" class="connectedSortable">
			<li class="ui-state-default">
				<div class="ui-widget-content hb hb-md">6</div>
			</li>
			<li class="ui-state-default">
				<div class="ui-widget-content hb hb-md">7</div>
			</li>
		</ul>
		<ul id="sortable2" class="connectedSortable">
			<li class="ui-state-default">
				<div class="ui-widget-content hb hb-md">10</div>
			</li>
			<li class="ui-state-default">
				<div class="ui-widget-content hb hb-md">11</div>
			</li>
		</ul>
		<ul id="sortable3" class="connectedSortable">
			<li class="ui-state-default">
<!-- 			 ui-state-disabled -->
				<div id="addCellBtn" class="ui-widget-content hb hb-md" onclick="location.href='insertCellForm.do'">+</div>
			</li>
		</ul>
		<ul id="sortable4" class="connectedSortable">
		</ul>
		<ul id="sortable5" class="connectedSortable">
		</ul>
		<ul id="sortable6" class="connectedSortable">
		</ul>
	</div>
</body>
</html>
