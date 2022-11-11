package com.yiliao.backend.controller.test;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/test/")
public class test2 {
    @RequestMapping("test2/")
    public Map<String, String> gettest2(){
        Map<String, String> res = new HashMap<>();
        res.put("name", "susu");
        res.put("rating", "1500");
        return res;
    }
}
