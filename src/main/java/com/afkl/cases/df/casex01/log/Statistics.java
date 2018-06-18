package com.afkl.cases.df.casex01.log;

import java.io.Externalizable;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Service
public class Statistics implements Externalizable{

	

	private static final Logger LOG = Logger.getLogger(Statistics.class.getName());
	
	
	private Integer totRequests=0;
	private Integer totRequestsOK=0;
	private Integer totRequests4xx=0;
	private Integer totRequests5xx=0;
	private Long  minResponseTime= 1000000l;
	private Long  maxResponseTime= 0l;
	
	@JsonIgnore
	private Long  totalResponseTime= 0l;



	public Statistics() {
		super();
	}


	private  void addRequest() {
		totRequests++;
	}
	
	public  void addGenericRequest(Integer httpStatusCode, Long responseTime) throws IOException {
		
        if(LOG.isDebugEnabled()){
            LOG.debug(">> addGenericRequest()" );
        }
        
		//doRead();
        
        updateFields(httpStatusCode, responseTime);
       //doWrite();
		
	}

	private void updateFields(Integer httpStatusCode, Long responseTime) {

		addRequest();
		if(httpStatusCode>=500 && httpStatusCode<600) {
			totRequests5xx++;
		}else if(httpStatusCode>=400 && httpStatusCode<500) {
			totRequests4xx++;
		}else if(httpStatusCode==200) {
			totRequestsOK++;
		}
		totalResponseTime+=responseTime;
		minResponseTime= Math.min(minResponseTime, responseTime);
		maxResponseTime= Math.max(maxResponseTime, responseTime);
		
	}
	
	public Long getAvgResponseTime () {
	    return (totRequests>0) ? totalResponseTime/totRequests : 0;
	}

	@Override
	public void writeExternal(ObjectOutput objectOutputStream) throws IOException {	 
		objectOutputStream.writeInt(totRequests);
		objectOutputStream.writeInt(totRequestsOK);
		objectOutputStream.writeInt(totRequests4xx);
		objectOutputStream.writeInt(totRequests5xx);
		objectOutputStream.writeLong(minResponseTime);
		objectOutputStream.writeLong(maxResponseTime);
		objectOutputStream.writeLong(totalResponseTime);
	        
    }
   
	@Override
   	public void readExternal(ObjectInput objectInputStream) throws IOException, ClassNotFoundException {

	    totRequests = objectInputStream.readInt();
        totRequestsOK = objectInputStream.readInt();
        totRequests4xx = objectInputStream.readInt();
        totRequests5xx = objectInputStream.readInt();
        minResponseTime = objectInputStream.readLong();
        maxResponseTime = objectInputStream.readLong();
        totalResponseTime = objectInputStream.readLong();
      
    }

	@Override
	public String toString() {
		return "Statistics [totRequests=" + totRequests + ", totRequestsOK=" + totRequestsOK + ", totRequests4xx="
				+ totRequests4xx + ", totRequests5xx=" + totRequests5xx + ", minResponseTime=" + minResponseTime
				+ ", maxResponseTime=" + maxResponseTime + ", totalResponseTime=" + totalResponseTime +  "]";
	}

	public Integer getTotRequests() {
		return totRequests;
	}

	public void setTotRequests(Integer totRequests) {
		this.totRequests = totRequests;
	}

	public Integer getTotRequestsOK() {
		return totRequestsOK;
	}

	public void setTotRequestsOK(Integer totRequestsOK) {
		this.totRequestsOK = totRequestsOK;
	}

	public Integer getTotRequests4xx() {
		return totRequests4xx;
	}

	public void setTotRequests4xx(Integer totRequests4xx) {
		this.totRequests4xx = totRequests4xx;
	}

	public Integer getTotRequests5xx() {
		return totRequests5xx;
	}

	public void setTotRequests5xx(Integer totRequests5xx) {
		this.totRequests5xx = totRequests5xx;
	}

	public Long getMinResponseTime() {
		return minResponseTime;
	}

	public void setMinResponseTime(Long minResponseTime) {
		this.minResponseTime = minResponseTime;
	}

	public Long getMaxResponseTime() {
		return maxResponseTime;
	}

	public void setMaxResponseTime(Long maxResponseTime) {
		this.maxResponseTime = maxResponseTime;
	}

	public Long getTotalResponseTime() {
		return totalResponseTime;
	}

	public void setTotalResponseTime(Long totalResponseTime) {
		this.totalResponseTime = totalResponseTime;
	}


	
	
	
}
