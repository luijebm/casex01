package com.afkl.cases.df.casex01.controller;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

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
        
        
        CompletableFuture<String> result;
		result= gen.getJSONAsyncUsingCompletableFuture(String.format(cp.getEndpoint("fares") + "%s/%S", originCode, destinationCode));
		
		
		try {
			return result.get();
		} catch (InterruptedException | ExecutionException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
	}
}
