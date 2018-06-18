package com.afkl.cases.df.casex01.config;

import java.util.Map;

import org.apache.log4j.Logger;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;


@Configuration
@EnableConfigurationProperties
@ConfigurationProperties(prefix="general")
public  class GeneralConfig {


	private static final Logger LOG = Logger.getLogger(GeneralConfig.class.getName());
	
	
	@NotEmpty
	private Map<String, String> endpoints;
	
	@NotEmpty
	private Map<String, String> oauth;

	@NotEmpty
	private String statsfilepath;
	
	@NotEmpty
	private String allowedcors;

	
	
	public GeneralConfig() {
		super();


	}
	
	
	public GeneralConfig(Map<String, String> endpoints) {
		super();
		this.endpoints = endpoints;
		
        if(LOG.isDebugEnabled()){
            LOG.debug("-- ConfigProperties() endpoints:" + endpoints );
        }
	}


	public  Map<String, String> getEndpoints() {
		return endpoints; 	
	}
	public String  getEndpoint(String key) {
		return endpoints.get(key);
	}

	public void setEndpoints(Map<String, String> tendpoints) {
		endpoints = tendpoints;
	}

	@Override
	public String toString() {
		return "ConfigProperties [endpoints=" + endpoints + "]";
	}


	public Map<String, String> getOauth() {
		return oauth;
	}


	public void setOauth(Map<String, String> oauth) {
		this.oauth = oauth;
	}

	public String  getOauth(String key) {
		return oauth.get(key);
	}

	public String getStatsfilepath() {
		return statsfilepath;
	}


	public void setStatsfilepath(String statsfilepath) {
		this.statsfilepath = statsfilepath;
	}


	public String getAllowedcors() {
		return allowedcors;
	}


	public void setAllowedcors(String allowedcors) {
		this.allowedcors = allowedcors;
	}
	
	
	
	
}
