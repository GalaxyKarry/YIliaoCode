package com.yiliao.backend.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test/")
public class test {
    @RequestMapping("test/")
    public String index(){
        return "test/test.html";
    }
}
