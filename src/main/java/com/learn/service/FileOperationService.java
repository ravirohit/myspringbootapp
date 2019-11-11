package com.learn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.db.entity.FilesEntity;
import com.learn.repository.FileOperationRepository;
import com.learn.reqres.model.FileUploadReq;

@Service
public class FileOperationService {
	
	@Autowired
	FileOperationRepository fileOperationRepository;
	
	public void filesUpload(FileUploadReq fileUploadReq){
		System.out.println("fileOperationRepository:"+fileOperationRepository);
		FilesEntity filesEntity = new FilesEntity();
		filesEntity.setEmail(fileUploadReq.getEmail());
		filesEntity.setFileList(fileUploadReq.getFileList());
		fileOperationRepository.filesUpload(filesEntity);
		
	}
	public List<FilesEntity> getFiles(){
		String email = "ravi@gmail.com";
		List<FilesEntity> list = fileOperationRepository.getFiles(email);
		return list;
	}

}
