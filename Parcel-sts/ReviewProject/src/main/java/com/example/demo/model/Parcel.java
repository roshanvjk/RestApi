package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity

public class Parcel {
	
	@Id
	
	private int parcelId;
	private String productName;
	private String fromAddress;
	private String toaddress;
	private String packedDate;
	private String deliveryDate;
	public int getParcelId() {
		return parcelId;
	}
	public void setParcelId(int parcelId) {
		this.parcelId = parcelId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getFromAddress() {
		return fromAddress;
	}
	public void setFromAddress(String fromAddress) {
		this.fromAddress = fromAddress;
	}
	public String getToaddress() {
		return toaddress;
	}
	public void setToaddress(String toaddress) {
		this.toaddress = toaddress;
	}
	public String getPackedDate() {
		return packedDate;
	}
	public void setPackedDate(String packedDate) {
		this.packedDate = packedDate;
	}
	public String getDeliveryDate() {
		return deliveryDate;
	}
	public void setDeliveryDate(String deliveryDate) {
		this.deliveryDate = deliveryDate;
	}
	@Override
	public String toString() {
		return "Parcel [parcelId=" + parcelId + ", productName=" + productName + ", fromAddress=" + fromAddress
				+ ", toaddress=" + toaddress + ", packedDate=" + packedDate + ", deliveryDate=" + deliveryDate + "]";
	}

}
