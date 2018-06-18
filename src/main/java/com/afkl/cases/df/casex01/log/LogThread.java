package com.afkl.cases.df.casex01.log;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afkl.cases.df.casex01.config.GeneralConfig;


@Service("LogThread")
public class LogThread implements Runnable {


	private static final Logger LOG = Logger.getLogger(Statistics.class.getName());
	
	@Autowired
	private Statistics statistics;
	
	
	@Autowired 
	GeneralConfig cp;


	public LogThread() {
		super();
		
		   
	}
	
	public void init() {
				
		try {
    		doRead();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		Thread th1 = new Thread(this, "th1");
		 th1.start(); 
	
	}
	
	
	private void doRead() throws IOException {
		FileInputStream fileInputStream = null;
		ObjectInputStream  objectInputStream = null;
		
		File f = new File(cp.getStatsfilepath());
		if(!f.exists() || f.isDirectory()) { 
			doWrite();
		}
		
		
		try {
			fileInputStream= new FileInputStream(cp.getStatsfilepath());
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    try {
	    	objectInputStream
			 = new ObjectInputStream(fileInputStream);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	      try {
	    	  statistics.readExternal(objectInputStream);
		} catch (ClassNotFoundException e1) {
			e1.printStackTrace();
		}
	    objectInputStream.close();
        fileInputStream.close();
        
        if(LOG.isDebugEnabled()){
            LOG.debug("<< LogThread doRead()" );
        }
        
        
	}
	private void doWrite() throws IOException {
		
		FileOutputStream fileOutputStream = null;
		ObjectOutputStream objectOutputStream = null;
		try {
			 fileOutputStream= new FileOutputStream(cp.getStatsfilepath());
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    try {
	    	objectOutputStream
			 = new ObjectOutputStream(fileOutputStream);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    statistics.writeExternal(objectOutputStream);
	    
	    objectOutputStream.flush();
	    objectOutputStream.close();
		fileOutputStream.close();
		
        if(LOG.isDebugEnabled()){
            LOG.debug("<< LogThread doWrite()" );
        }
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub

		while(true)
		{
			try {
				doWrite();
			} catch(java.io.IOException ioe) {
				ioe.printStackTrace();
			}
			
	        if(LOG.isDebugEnabled()){
	            LOG.debug("<< LogThread run()" );
	        }
	        try {
				Thread.sleep(1000);
			} catch (InterruptedException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
	        
			try {
				Thread.yield();
			} catch(Exception e) {
				e.printStackTrace();
			}
		}
		
	}

	


	
	
	
}
