package service;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

//@Component
//@Aspect
//public class ErrorControll{
//
//	@Pointcut("execution(public * *.do(..))")
//	public void targetMethod() {
//		// pointcut annotation 값을 참조하기 위한 dummy method
//	}
//	
//	@AfterThrowing(pointcut="targetMethod()", throwing="th")
//	public String errorNotice(JoinPoint jp, Throwable th) {
//		return th.getMessage();
//	}
//}