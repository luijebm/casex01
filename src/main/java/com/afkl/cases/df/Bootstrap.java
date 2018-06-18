package com.afkl.cases.df;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.request.RequestContextListener;
import org.springframework.web.filter.ShallowEtagHeaderFilter;

@Configuration
@EnableAutoConfiguration
@ComponentScan("com.afkl.cases.df")
public class Bootstrap extends SpringBootServletInitializer {

	private static final Logger LOG = Logger.getLogger(Bootstrap.class.getName());
	
    public static void main(String[] args) throws IOException {
    	
        SpringApplication.run(Bootstrap.class, args);
        if(LOG.isTraceEnabled()){
            LOG.trace("<< main()");
        }
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Bootstrap.class);
    }

    @Override
    public void onStartup(ServletContext sc) throws ServletException {
        sc.addListener(new RequestContextListener());
        
    }
    
    @Bean
    public ShallowEtagHeaderFilter shallowEtagHeaderFilter() {
        return new ShallowEtagHeaderFilter();
    }
}
