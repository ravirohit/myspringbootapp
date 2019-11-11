package com.learn.db.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class FilesEntity implements Serializable{
	

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;
	
	String category;
	String email;
	@ElementCollection
	@Lob
	@Column(name="IMAGE", nullable=false, columnDefinition="longblob")
	private List<Byte[]> fileList;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
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
