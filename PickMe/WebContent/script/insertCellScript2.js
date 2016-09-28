function editIcon(that) {
	document.getElementById("details").style.display = "none";
	document.getElementById("editIcon").style.display = "block";
}

function showDetails(that) {
	if (that.value == "선택사항") {
		document.getElementById("workExp").style.display = "none";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "경력사항") {
		document.getElementById("workExp").style.display = "block";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "지원이력") {
		document.getElementById("purpose").style.display = "block";
		document.getElementById("workExp").style.display = "none";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "대외활동") {
		document.getElementById("workExp").style.display = "none";
		document.getElementById("externalActivities").style.display = "block";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "학력사항") {
		document.getElementById("workExp").style.display = "none";
		document.getElementById("education").style.display = "block";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "자격증") {
		document.getElementById("workExp").style.display = "none";
		document.getElementById("license").style.display = "block";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "기본정보") {
		document.getElementById("basicInfo").style.display = "block";
		document.getElementById("workExp").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "이력서 사진") {
		document.getElementById("resumePic").style.display = "block";
		document.getElementById("workExp").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "어학점수") {
		document.getElementById("languageStudy").style.display = "block";
		document.getElementById("workExp").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "학력사항") {
		document.getElementById("education").style.display = "block";
		document.getElementById("workExp").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "대외활동") {
		document.getElementById("externalActivities").style.display = "block";
		document.getElementById("education").style.display = "none";
		document.getElementById("workExp").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "희망 근무 지역") {
		document.getElementById("placeWishToWork").style.display = "block";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("workExp").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "봉사활동") {
		document.getElementById("voluntary").style.display = "block";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("workExp").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "주요 수강 교과") {
		document.getElementById("majors").style.display = "block";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("workExp").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "수상 내역") {
		document.getElementById("awards").style.display = "block";
		document.getElementById("majors").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("workExp").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "메모") {
		document.getElementById("memo").style.display = "block";
		document.getElementById("awards").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("workExp").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "가족관계") {
		document.getElementById("relationship").style.display = "block";
		document.getElementById("memo").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("workExp").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("purpose").style.display = "none";
		document.getElementById("languageStudyAbroad").style.display = "none";
	} else if (that.value == "어학연수") {
		document.getElementById("languageStudyAbroad").style.display = "block";
		document.getElementById("relationship").style.display = "none";
		document.getElementById("memo").style.display = "none";
		document.getElementById("awards").style.display = "none";
		document.getElementById("majors").style.display = "none";
		document.getElementById("voluntary").style.display = "none";
		document.getElementById("placeWishToWork").style.display = "none";
		document.getElementById("externalActivities").style.display = "none";
		document.getElementById("education").style.display = "none";
		document.getElementById("workExp").style.display = "none";
		document.getElementById("license").style.display = "none";
		document.getElementById("languageStudy").style.display = "none";
		document.getElementById("basicInfo").style.display = "none";
		document.getElementById("resumePic").style.display = "none";
		document.getElementById("purpose").style.display = "none";
	}
}

$(document).ready(function() {
	$(".tabmenu").each(function() {
		var tab = $(this).children("ul");
		var tabBtn = tab.children("li").children("a");
		var content = tabBtn.nextAll();

		// 탭버튼을 클릭했을때
		tabBtn.click(function() {
			// 이미 on 상태면 pass
			if ($(this).hasClass("on"))
				return;

			// 모든 컨텐츠 부분을 안보이게 한뒤
			content.hide();

			// 클릭한 tab 버튼(a태그) 옆의 모든 태그들은 보이도록
			$(this).nextAll().show();

			// 모든탭 버튼에 있던 on 클래스를 빼고
			// 현재 클릭한 탭메뉴 버튼에 on 클래스 추가
			tabBtn.removeClass("on");
			$(this).addClass("on");

			// 탭버튼를 쭉 돌면서 on 클래스가 있는 버튼만 on 이미지로 바꾸고
			// 나머지 버튼들은 off 이미지로 바꾼다.
			tabBtn.each(function() {
				var src;
				var img = $(this).children("img");
				if ($(this).hasClass("on")) {
					src = img.attr("src").replace("_off.", "_on.");
				} else {
					src = img.attr("src").replace("_on.", "_off.");
				}

				img.attr("src", src);
			});
		});

		// 맨첫번째 탭버튼 클릭처리
		tabBtn.eq(0).click();
	});
});
