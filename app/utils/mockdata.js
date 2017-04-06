var ENV = "mock";

function getExpressName(order) {
    // 模拟的假数据
    let res = {
        errMsg: "request:ok",
        data: {
            "EBusinessID": "123456789",
            "Success": true,
            "LogisticCode": order,
            "Shippers": [
                {
                    "ShipperCode": "YTO",
                    "ShipperName": "圆通速递"
                },
                {
                    "ShipperCode": "STO",
                    "ShipperName": "申通快递"
                },
                {
                    "ShipperCode": "FAST",
                    "ShipperName": "快捷速递"
                },
                {
                    "ShipperCode": "WXWL",
                    "ShipperName": "万象物流"
                },
                {
                    "ShipperCode": "YZPY",
                    "ShipperName": "邮政快递"
                },
                {
                    "ShipperCode": "EMS",
                    "ShipperName": "EMS"
                },
                {
                    "ShipperCode": "ZTO",
                    "ShipperName": "中通速递"
                },
                {
                    "ShipperCode": "HTKY",
                    "ShipperName": "百世汇通"
                },
                {
                    "ShipperCode": "QFKD",
                    "ShipperName": "全峰快递"
                },
                {
                    "ShipperCode": "LB",
                    "ShipperName": "龙邦快递"
                },
                {
                    "ShipperCode": "ANE",
                    "ShipperName": "安能物流"
                },
                {
                    "ShipperCode": "UC",
                    "ShipperName": "优速快递"
                },
                {
                    "ShipperCode": "SURE",
                    "ShipperName": "速尔快递"
                }
            ]
        },
        statusCode: 200
    }

    return res;
}

function getExpressDetail(order) {
    let d = {
        "EBusinessID": "123456789",
        "ShipperCode": "YTO",
        "Success": true,
        "LogisticCode": order,
        "State": "2",
        "Traces": [
            {
                "AcceptTime": "2017-01-18 10:32:20",
                "AcceptStation": "【安徽省合肥市政务区柏堰工业园公司】 派件人 : 王耐富 派件中 派件员电话18755105463"
            },
            {
                "AcceptTime": "2017-01-18 10:52:16",
                "AcceptStation": "【江西省赣州市赣县区公司】 派件人 : 曾鸣 派件中 派件员电话18720121499"
            },
            {
                "AcceptTime": "2017-01-18 11:23:01",
                "AcceptStation": "【云南省曲靖市宣威市公司】 派件人 : 余凤芹 派件中 派件员电话15687439152"
            },
            {
                "AcceptTime": "2017-01-18 12:55:11",
                "AcceptStation": "【黑龙江省鸡西市虎林市公司】 派件人 : 付厚君 派件中 派件员电话"
            },
            {
                "AcceptTime": "2017-01-18 13:58:23",
                "AcceptStation": "【河南省南阳市新野县施庵镇公司】 派件人 : 张彩平 派件中 派件员电话18338335206"
            }
        ]
    }

    let res = {
        errMsg: "request:ok",
        data: d,
        statusCode: 200
    }

    return res;
}

module.exports = {
    env: ENV,
    getExpressName: getExpressName,
    getExpressDetail: getExpressDetail
}