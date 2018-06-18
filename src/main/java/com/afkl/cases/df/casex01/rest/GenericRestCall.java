package com.afkl.cases.df.casex01.rest;

import java.util.concurrent.CompletableFuture;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.stereotype.Service;

@Service
public class GenericRestCall {


	private static final Logger LOG = Logger.getLogger(GenericRestCall.class.getName());
	
	@Autowired
	private OAuth2RestOperations oauth2RestTemplate;

	public GenericRestCall() {
		super();
		// TODO Auto-generated constructor stub
	}

	public  String processRequest(String URI) throws InterruptedException {
		
        if(LOG.isDebugEnabled()){
            LOG.debug(">> processRequest()" );
        }
        
		String result="";

		result = oauth2RestTemplate.getForObject(URI, String.class);

		return result;
	}

	public CompletableFuture<String> getJSONAsyncUsingCompletableFuture(String URI) {

		return CompletableFuture
				.supplyAsync(() -> {
					String result="";
					try {
						result= processRequest(URI);
					} catch (InterruptedException e) {
				        if(LOG.isErrorEnabled()){
				            LOG.error("-- getJSONAsyncUsingCompletableFuture() > " + e.getMessage(),e);
				        }
						e.printStackTrace();
					}
					return result;
				});

	}




}
