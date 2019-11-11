package com.learn.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.learn.db.entity.FilesEntity;
import com.learn.reqres.model.FileUploadReq;
import com.learn.service.FileOperationService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class FunctionalController {
	
	@Autowired
	FileOperationService fileOperationService;
	
	@PostMapping(value = "filesupload", consumes = "application/json")
	public String filesUpload(@RequestBody FileUploadReq fileUploadReq){
		System.out.println("file upload resource method called:"+fileUploadReq+"   "+fileOperationService);
		fileOperationService.filesUpload(fileUploadReq);
		return "{\"status\":\"ok\"}";
	}
	
	@GetMapping(value="getfiles", produces = "application/json")
	@ResponseBody
	public List<FilesEntity> getFiles(){
		//ResponseEntity<List<FilesEntity>> responseEntity = new ResponseEntity<>();
		List<FilesEntity> list = fileOperationService.getFiles();
		
		return list;
	}
	

}
