package com.yiliao.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yiliao.backend.pojo.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;

@Mapper
public interface UserMapper extends BaseMapper<User> {
    @Options(useGeneratedKeys = true, keyProperty = "UID")
    @Insert("insert into user(name) values(#{name})")
    public int userInsert(User user);

}
