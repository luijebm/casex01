package com.afkl.cases.df.listeners;

import org.apache.log4j.Logger;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import com.afkl.cases.df.casex01.log.LogThread;
import com.afkl.cases.df.casex01.log.LoggingFilter;

@Component
public class GenericListener implements ApplicationListener<ContextRefreshedEvent> {

	

	private static final Logger LOG = Logger.getLogger(LoggingFilter.class.getName());
	
	
	@Override
	public void onApplicationEvent(ContextRefreshedEvent cse) {

		if(LOG.isDebugEnabled()){
            LOG.debug("--GenericListener onApplicationEvent Handling context re-freshed event." + cse.toString() );
        }
		
		LogThread logthread = (LogThread) cse.getApplicationContext().getBean("LogThread");
		logthread.init();
        
	}
}
