package com.yiliao.backend.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Rsp { //请求
    private Integer ret;
    private String errMsg;
    private User Data;
}
