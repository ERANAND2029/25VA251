package com.example.studentapi;

import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    // Welcome Message
    @GetMapping("/")
    public String welcome() {
        return "Welcome to Student Management REST API";
    }

    // GET Student Details
    @GetMapping("/student")
    public Student getStudent() {
        return new Student(1, "Anand Rai", "AIML");
    }

    // POST Student Data
    @PostMapping("/student")
    public Student addStudent(@RequestBody Student student) {
        return student;
    }
}