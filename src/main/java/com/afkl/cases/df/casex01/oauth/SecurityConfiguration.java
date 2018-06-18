package com.afkl.cases.df.casex01.oauth;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.client.DefaultOAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;
import org.springframework.security.oauth2.client.token.AccessTokenRequest;
import org.springframework.security.oauth2.client.token.DefaultAccessTokenRequest;
import org.springframework.security.oauth2.client.token.grant.client.ClientCredentialsResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;

import com.afkl.cases.df.casex01.config.GeneralConfig;

@Configuration
@EnableWebSecurity
@EnableOAuth2Client
public class SecurityConfiguration {


	private static final Logger LOG = Logger.getLogger(SecurityConfiguration.class.getName());


	@Autowired GeneralConfig cp;

	@Bean
	public OAuth2RestOperations oauth2RestTemplate() {
	    AccessTokenRequest atr = new DefaultAccessTokenRequest();
	    
        if(LOG.isDebugEnabled()){
            LOG.debug(">> oauth2RestTemplate()" );
        }
        
	    return new OAuth2RestTemplate(resource(),
	            new DefaultOAuth2ClientContext(atr));
	}

	@Bean
	protected OAuth2ProtectedResourceDetails resource() {
		
        if(LOG.isDebugEnabled()){
            LOG.debug(">> resource()" );
        }
        
        
		ClientCredentialsResourceDetails  resource = new ClientCredentialsResourceDetails();
	    resource.setId("1");
	    resource.setAccessTokenUri(cp.getOauth("tokenUrl"));
	    resource.setClientId(cp.getOauth("clientId"));
	    resource.setClientSecret(cp.getOauth("clientSecret"));
	    resource.setGrantType(cp.getOauth("grantType"));
	    return resource;
	}


	
	public SecurityConfiguration() {
		super();
		// TODO Auto-generated constructor stub
	}

	public GeneralConfig getCp() {
		return cp;
	}

	public void setCp(GeneralConfig cp) {
		this.cp = cp;
	}



	
	
}
