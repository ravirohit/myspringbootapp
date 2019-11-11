package com.learn.mainapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages = "com.learn")
@EntityScan( basePackages = {"com.learn"} )
public class MainApp {
	public static void main(String[] args) {
		SpringApplication.run(MainApp.class, args);
		System.out.println("this is main class of spring boot");
	}

}
