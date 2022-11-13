package com.yiliao.backend.pojo;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Record {
    @TableField("CID")
    private Integer CID;
    @TableField("UID")
    private Integer UID;
    private Integer Pass;
    private String Time;
    private String Vedio;
    private String Place;
    private String proposal;
}
