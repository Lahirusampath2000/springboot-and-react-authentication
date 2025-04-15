package com.example.Backend.Model;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserModelService implements UserDetailsService {

    @Autowired
    private UserModelRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<UserModel>user=repository.findByEmail(username);
        if (user.isPresent()) {

            var userObj=user.get();
            return User.builder()
                    .username(userObj.getName())
                    .password(userObj.getPassword())
                    .build();
        }else {
            throw new UsernameNotFoundException(username);
        }
    }
}
