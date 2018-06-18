package com.afkl.cases.df.casex01.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.afkl.cases.df.casex01.log.Statistics;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@Controller
@RequestMapping(value = "/stats")
public class StatisticsRestController {

	private static final Logger LOG = Logger.getLogger(StatisticsRestController.class.getName());
	
	
	@Autowired
	private Statistics statistics;


	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public String getStats() {
		
        if(LOG.isTraceEnabled()){
            LOG.trace(">> getStats()");
        }
        
        
        
		String jsonString ="";
		ObjectMapper mapper = new ObjectMapper();
		try {


			 jsonString = mapper.writeValueAsString(statistics);


		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jsonString;
	}
}
