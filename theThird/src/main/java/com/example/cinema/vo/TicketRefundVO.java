package com.example.cinema.vo;

/**@author zyc
 * @data 2019/5/25 15:09
 */

public class TicketRefundVO {
    /**
     * 收取的手续费占实付款的比例
     */
    private Double rate;

    /**
     * 规定在电影放映多少小时之前可以退票
     */
    private Integer limitHours;
}
