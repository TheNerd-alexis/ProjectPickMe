package controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MemberController {
//	@Autowired
//	MemberService memberService;

	@RequestMapping("introForm.do")	
	public ModelAndView introForm() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("introForm");
		return mav;
	}

	@RequestMapping("loginForm.do")
	public ModelAndView loginForm() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("loginForm");
		return mav;
	}

	@RequestMapping("logout.do")
	public ModelAndView logout(HttpSession session) {
		ModelAndView mav = new ModelAndView();

		if (session != null) {
			session.invalidate();
		}
		session.setAttribute("login", false);
		mav.setViewName("introForm");
		return mav;
	}
	
	@RequestMapping("pwdFindForm.do")
	public ModelAndView pwdFindForm(){
		ModelAndView mav = new ModelAndView();
		
		mav.setViewName("pwdFindForm");
		return mav;
	}

	@RequestMapping("joinForm.do")
	public ModelAndView joinForm() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("joinForm");
		return mav;
	}

	@RequestMapping("mainForm.do")
	public ModelAndView mainForm() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("mainForm");
		return mav;
	}
	
	@RequestMapping("insertCellForm.do")
	public ModelAndView insertCellForm(){
		ModelAndView mav = new ModelAndView();
		mav.setViewName("insertCellForm");
		return mav;
	}

//	@RequestMapping("login.do")
//	public ModelAndView login(@RequestParam Map<String, Object> param, HttpSession session) {
//		ModelAndView mav = new ModelAndView();
//
//		try {
//			Map<String, Object> result = memberService.login(param);
//			mav.addObject("code", result);
//			session.setAttribute("email", param.get(Member.EMAIL_str));
//			session.setAttribute("login", true);
//			mav.setViewName("mainForm");
//		} catch (Exception e) {
//			mav.addObject("code", e.getMessage());
//			mav.setViewName("loginForm");
//		}
//
//		return mav;
//	}


//	@RequestMapping("join.do")
//	public ModelAndView join(@RequestParam Map<String, Object> param) {
//		ModelAndView mav = new ModelAndView();
//		int result;
//		try {
//			result = memberService.join(param);
//			mav.addObject("code", result);
//			mav.setViewName("loginForm");
//		} catch (Exception e) {
//			// e.printStackTrace();
//			mav.addObject("code", e.getMessage());
//			mav.setViewName("joinForm");
//		}
//
//		return mav;
//	}

}