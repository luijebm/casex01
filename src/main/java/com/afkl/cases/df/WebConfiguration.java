package com.afkl.cases.df;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.afkl.cases.df.casex01.config.GeneralConfig;



@Configuration
@EnableWebMvc
public class WebConfiguration extends WebMvcConfigurerAdapter {

	
	
	@Autowired 
	GeneralConfig cp;
	
	
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
           registry.addResourceHandler("/**").addResourceLocations("classpath:/static/dist/lbmcasex01/");
    }
    
    
    @Override
    public void addCorsMappings(CorsRegistry registry ) {
    	//TODO lbm@theline.pt /  not aquiring the prop config allowedcors
    	registry.addMapping("/**")
    		.allowedOrigins(cp.getAllowedcors()); 
    }

    
	public WebConfiguration() {
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
