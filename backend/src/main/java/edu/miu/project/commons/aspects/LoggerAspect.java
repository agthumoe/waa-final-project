package edu.miu.project.commons.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggerAspect {
    private static final Logger LOGGER = LoggerFactory.getLogger(LoggerAspect.class);

    @Pointcut("execution( * edu.miu.project.controllers.*.*(..))")
    public void controllerAnyMethodPointcut() {
    }

    @Pointcut("execution(* edu.miu.project.services.*.*(..))")
    public void serviceAnyMethodPointCut() {
    }

    @AfterThrowing(value = "controllerAnyMethodPointcut()", throwing = "ex")
    public void logException(JoinPoint joinPoint, Exception ex) {
        LOGGER.error("Exception in method {}: {}", joinPoint.getSignature(), ex.getMessage());
    }
}
