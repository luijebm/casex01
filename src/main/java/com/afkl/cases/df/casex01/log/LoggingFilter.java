package com.afkl.cases.df.casex01.log;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.ContentCachingRequestWrapper;
import org.springframework.web.util.ContentCachingResponseWrapper;


@Service
public class LoggingFilter extends OncePerRequestFilter {
	
	

	private static final Logger LOG = Logger.getLogger(LoggingFilter.class.getName());
	
	
	private long responseStartTime;
	
	@Autowired
	private Statistics statistics;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        if (isAsyncDispatch(request)) {
            filterChain.doFilter(request, response);
        } else {
            doFilterWrapped(wrapRequest(request), wrapResponse(response), filterChain);
        }
    }
    
    

    protected void doFilterWrapped(ContentCachingRequestWrapper request, ContentCachingResponseWrapper response, FilterChain filterChain) throws ServletException, IOException {
    	responseStartTime = System.currentTimeMillis();
    	try {
        	
            filterChain.doFilter(request, response);
        }
        finally {
            afterRequest(request, response);
        }
    }


    protected void afterRequest(ContentCachingRequestWrapper request, ContentCachingResponseWrapper response) {

            logResponse(response, request.getRemoteAddr() + "|<");

    }
    private void logResponse(ContentCachingResponseWrapper response, String prefix) {
    	

    	
        Integer status = response.getStatus();

        long responseTime= System.currentTimeMillis()- responseStartTime;

        if(LOG.isDebugEnabled()){
            LOG.debug(">> logResponse() status:" + status + " responseTime:" + responseTime);
        }
        
        try {
			statistics.addGenericRequest(status,responseTime);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

       

    }

    private static ContentCachingRequestWrapper wrapRequest(HttpServletRequest request) {
        if (request instanceof ContentCachingRequestWrapper) {
            return (ContentCachingRequestWrapper) request;
        } else {
            return new ContentCachingRequestWrapper(request);
        }
    }

    private static ContentCachingResponseWrapper wrapResponse(HttpServletResponse response) {
        if (response instanceof ContentCachingResponseWrapper) {
            return (ContentCachingResponseWrapper) response;
        } else {
            return new ContentCachingResponseWrapper(response);
        }
    }



}