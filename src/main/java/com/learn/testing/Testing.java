package com.learn.testing;

public class Testing {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Parent child = new Child();
		child.display();

	}

}
class Parent{
	public void display(){
		System.out.println("this is parent class");
	}
}
class Child extends Parent{
	public void display(){
		System.out.println("this is child class");
	}
	public void notDisplay(){
		System.out.println("this is not display child class");
	}
}
