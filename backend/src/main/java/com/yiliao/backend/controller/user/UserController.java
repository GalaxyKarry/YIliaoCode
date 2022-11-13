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
@RequestMapping("/user")
public class UserController {

    // 调用 user 数据库
    @Autowired
    UserMapper userMapper;

    // 返回所有用户
    @GetMapping("/all")
    public List<User> getAll() {
        return userMapper.selectList(null);
    }

    @PostMapping("/{name}")
    public String addUser(@PathVariable String name){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("Uname", name);
        User res = userMapper.selectOne(queryWrapper);
        if(res == null){
            User tmp = new User();
            tmp.setUname(name);
//            tmp.setUID(22);
            userMapper.insert(tmp);
            return "Add User Successfully!";
        }
        return "User already exists!";
    }

    // 根据用户id查询用户信息
    @GetMapping("/getUserInfoById/{name}")
    public User getUserInfoById(@PathVariable String name) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("Uname", name);
        User res = userMapper.selectOne(queryWrapper);
        return res;
    }

    // 修改密码
    @PostMapping("/updatePassWord/{name}/{password}")
    public String updatePassWord(@PathVariable String name, @PathVariable String password) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("Uname", name);
        User res = userMapper.selectOne(queryWrapper);
        if(res == null){
            return "User not exit";
        }
        res.setUpassword(password);
        userMapper.updateById(res);
        return "Update Successfully";
    }


//    @PostMapping("/updatePassWord2")
//    public String updatePassWord2(@RequestBody User user) {
//        userMapper.updateById(user);
//        return "Update Successfully";
//    }

}
