package com.afkl.cases.df.casex01.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.afkl.cases.df.casex01.config.GeneralConfig;
import com.afkl.cases.df.casex01.rest.GenericRestCall;


@Controller
@RequestMapping(value = "/fares")
public class FaresRestController {

	private static final Logger LOG = Logger.getLogger(FaresRestController.class.getName());
	
	@Autowired GenericRestCall gen;
	@Autowired GeneralConfig cp;


	
	@RequestMapping(value = "/{origin_code}/{destination_code}", method = RequestMethod.GET)
	@ResponseBody
	public String getJSONFares(@PathVariable("origin_code") final String originCode, @PathVariable("destination_code") final String destinationCode) {
		
        if(LOG.isDebugEnabled()){
            LOG.debug("-- getJSONFares() originCode:" + originCode + " destinationCode:" + destinationCode);
        }
        
        
		String result="";
		try {
			result= gen.processRequest(String.format(cp.getEndpoint("fares") + "%s/%S", originCode, destinationCode));
		} catch (InterruptedException e) {
	        if(LOG.isErrorEnabled()){
	            LOG.error("-- getJSONFares() > " + e.getMessage(),e);
	        }
			e.printStackTrace();
		}
		return result;
	}
}
