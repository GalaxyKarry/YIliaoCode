package com.yiliao.backend.pojo;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @TableField("UID")
    @TableId("UID")
    private Integer UID;
    private String Uname;
    private String Uphone;
    private String Upassword;
    private String Uimage;
}



