package com.yiliao.backend.pojo;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Feedback {
    @TableField("FID")
    @TableId("FID")
    private Integer FID;
    @TableField("CID")
    private Integer CID;
    @TableField("UID")
    private Integer UID;
    private String contect;
    private String picture;
}
