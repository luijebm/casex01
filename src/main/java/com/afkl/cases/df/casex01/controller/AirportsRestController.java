package com.afkl.cases.df.casex01.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.afkl.cases.df.casex01.config.GeneralConfig;
import com.afkl.cases.df.casex01.rest.GenericRestCall;

@Controller
@RequestMapping(value = "/airports")
public class AirportsRestController {

	private static final Logger LOG = Logger.getLogger(AirportsRestController.class.getName());
	
	@Autowired GenericRestCall gen;
	@Autowired GeneralConfig cp;


	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public String getJSONAirport() {
		
        if(LOG.isTraceEnabled()){
            LOG.trace(">> getJSONAirport()");
        }
        
		String result="";
		try {
			result= gen.processRequest(cp.getEndpoint("airports"));
		} catch (InterruptedException e) {
	        if(LOG.isErrorEnabled()){
	            LOG.error("-- getJSONAirport() > " + e.getMessage(),e);
	        }
			e.printStackTrace();
		}
		
		
		return result;
	}
}
