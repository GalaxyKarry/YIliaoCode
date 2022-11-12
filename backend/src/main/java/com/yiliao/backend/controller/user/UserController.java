package com.yiliao.backend.controller.user;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.yiliao.backend.mapper.RecordMapper;
import com.yiliao.backend.mapper.UserMapper;
import com.yiliao.backend.pojo.Record;
import com.yiliao.backend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
public class UserController {

    // 调用 user 数据库
    @Autowired
    UserMapper userMapper;

    // 返回所有用户
    @GetMapping("/user/all")
    public List<User> getAll() {
        return userMapper.selectList(null);
    }

    // 根据用户id查询用户信息
    @GetMapping("/getUserInfoById/{id}")
    public User getUserInfoById(@PathVariable Integer id) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("UID", id);
        return userMapper.selectOne(queryWrapper);
    }

    // 修改密码
    @PostMapping("/updatePassWord")
    public String updatePassWord(@RequestBody User user) {
        User res = getUserInfoById(user.getUID());
        Assert.notNull(res, "User does not exit!");
        userMapper.updateById(user);
        return "Update Successfully";
    }

}
