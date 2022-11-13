package com.yiliao.backend.controller.record;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.yiliao.backend.mapper.RecordMapper;
import com.yiliao.backend.mapper.UserMapper;
import com.yiliao.backend.pojo.Record;
import com.yiliao.backend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/record")
public class RecordController {
    @Autowired
    RecordMapper recordMapper;
    @Autowired
    UserMapper userMapper;

    // 返回所有记录
    @GetMapping("/all")
    public List<Record> getAll() {
        return recordMapper.selectList(null);
    }

    // 根据用户id查询检测记录列表
    @GetMapping("/getDetectListById/{name}")
    public List<Record> getDetectListById(@PathVariable String name) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("Uname", name);
        User res = userMapper.selectOne(queryWrapper);

        QueryWrapper<Record> queryWrapper_records = new QueryWrapper<>();
        queryWrapper_records.eq("UID", res.getUID());
        return recordMapper.selectList(queryWrapper_records);
    }

//    @GetMapping("/getDetectListById2")
//    public List<Record> getDetectListById2(String name) {
//        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
//        queryWrapper.eq("Uname", name);
//        User res = userMapper.selectOne(queryWrapper);
//
//        QueryWrapper<Record> queryWrapper_records = new QueryWrapper<>();
//        queryWrapper_records.eq("UID", res.getUID());
//        return recordMapper.selectList(queryWrapper_records);
//    }

    // 根据检测id查询详细检测信息
    @GetMapping("/getDetectInfoById/{id}")
    public Record getDetectInfoById(@PathVariable Integer id) {
        QueryWrapper<Record> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("CID", id);
        return recordMapper.selectOne(queryWrapper);
    }

    // 某个用户合格或不合格的记录列表
    // isPass = 0, 不合格
    // isPass = 1, 合格
    @GetMapping("/getDetectListPassOrNo/{name}/{isPass}")
    public List<Record> getDetectListPassOrNo(@PathVariable String name, @PathVariable int isPass) {
        QueryWrapper<User> queryWrapper_user_id = new QueryWrapper<>();
        queryWrapper_user_id.eq("Uname", name);
        User res = userMapper.selectOne(queryWrapper_user_id);
        QueryWrapper<Record> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("Pass", isPass);
        queryWrapper.eq("UID", res.getUID());
        return recordMapper.selectList(queryWrapper);
    }

    // ?? pass
    // 排序检测记录
    // flag = 0, 降序
    // flag = 1，升序
//    @GetMapping("/orderDetectList/{flag}")
//    public List<Record> orderDetectList(@PathVariable String flag) {
//        List<Record> records = recordMapper.selectList(null);
//        if(flag == "0"){
//
//        }
//        else{
//
//        }
//        return null;
//    }

}
