package com.learn.resource;


import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learn.reqres.model.LoginReqest;

//@CrossOrigin(origins = "http://example.com")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {

	Logger logger = Logger.getLogger(UserController.class);
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping("isalive")
	public String heartBeatTest(){
		logger.debug("Backend server is up");
		return "{\"status\":\"ok\"}";
	}
	@PostMapping("login")
	public String login(LoginReqest loginRequest){
	   String response = null;
	   logger.debug("login api get called:"+loginRequest.getUname());
	   return response;
	}
	
}
