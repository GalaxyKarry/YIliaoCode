package com.yiliao.backend.controller.feedback;

import com.yiliao.backend.mapper.FeedbackMapper;
import com.yiliao.backend.pojo.Feedback;
import com.yiliao.backend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FeedbackController {

    @Autowired
    FeedbackMapper feedbackMapper;

    // 返回所有用户
    @GetMapping("/feedback/all")
    public List<Feedback> getAll() {
        return feedbackMapper.selectList(null);
    }

    // 添加反馈信息 ?? 重点测试
    @PostMapping("/addFeedback/")
    public String addFeedback(@RequestBody Feedback feedBack) {
        feedbackMapper.insert(feedBack);
        return "Add Feedback Successfully";
    }

}
