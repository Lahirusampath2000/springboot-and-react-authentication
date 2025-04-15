package com.example.Backend;
import org.springframework.data.jpa.repository.JpaRepository;


public interface userRepo extends JpaRepository<User,Long> {
}
