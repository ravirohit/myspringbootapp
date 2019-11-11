package com.learn.repository;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.learn.db.entity.FilesEntity;

@Component
@Transactional
public class FileOperationRepository {
	
	@Autowired
	SessionFactory sessionFactory;
	

	public void filesUpload(FilesEntity filesEntity){
		Session session =  sessionFactory.openSession();
		session.saveOrUpdate(filesEntity);
		session.flush();
		System.out.println("saveUpdate called");
	}
	public List<FilesEntity> getFiles(String email){
		String str = "from FilesEntity where email='"+email+"'";
		Session session =  sessionFactory.openSession();
		Query query = session.createQuery(str);
	//	query.setMaxResults(1);
		List<FilesEntity> list = query.list();
		return list;
	}

}
