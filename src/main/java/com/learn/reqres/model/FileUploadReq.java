package com.learn.reqres.model;

import java.util.List;

public class FileUploadReq {
	
	private String id;
	private String email;
	
	private List<Byte[]> fileList;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public List<Byte[]> getFileList() {
		return fileList;
	}
	public void setFileList(List<Byte[]> fileList) {
		this.fileList = fileList;
	}
	
	
	
}
