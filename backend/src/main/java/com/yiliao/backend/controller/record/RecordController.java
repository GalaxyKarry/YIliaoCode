package com.yiliao.backend.controller.record;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.yiliao.backend.mapper.RecordMapper;
import com.yiliao.backend.pojo.Record;
import com.yiliao.backend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RecordController {
    @Autowired
    RecordMapper recordMapper;

    // 返回所有记录
    @GetMapping("/record/all")
    public List<Record> getAll() {
        return recordMapper.selectList(null);
    }

    // 根据用户id查询检测记录列表
    @GetMapping("/getDetectListById/{id}")
    public List<Record> getDetectListById(@PathVariable Integer id) {
        QueryWrapper<Record> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("UID", id);
        return recordMapper.selectList(queryWrapper);
    }

    // 根据检测id查询详细检测信息
    @GetMapping("/getDetectInfoById/{id}")
    public Record getDetectInfoById(@PathVariable Integer id) {
        QueryWrapper<Record> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("CID", id);
        return recordMapper.selectOne(queryWrapper);
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

    // 查收合格或不合格记录
    // isPass = 0, 不合格
    // isPass = 1, 合格
    @GetMapping("/getDetectListPassOrNo/{isPass}")
    public List<Record> getDetectListPassOrNo(@PathVariable int isPass) {
        QueryWrapper<Record> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("Pass", isPass);
        return recordMapper.selectList(queryWrapper);
    }
}
