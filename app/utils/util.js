function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function trim(str) {
  return str.replace(/(^\s+)|(\s+$)/g, "");
}

function mapLogo(str) {
  let s = trim(str); 
  switch (s) {
    case "SF":
      return "https://cdn.kuaidi100.com/images/all/56/shunfeng.png";
      break;
    case "HTKY":
      return "https://cdn.kuaidi100.com/images/all/56/huitongkuaidi.png"
      break;
    case "ZTO":
      return "https://cdn.kuaidi100.com/images/all/56/zhongtong.png"
      break;
    case "STO":
      return "https://cdn.kuaidi100.com/images/all/56/shentong.png"
      break;
    case "YTO":
      return "https://cdn.kuaidi100.com/images/all/56/yuantong.png"
      break;
    case "YD":
      return "https://cdn.kuaidi100.com/images/all/56/yunda.png"
      break;
    case "YZPY":
      return "https://cdn.kuaidi100.com/images/all/56/youzhengguonei.png"
      break;
    case "EMS":
      return "https://cdn.kuaidi100.com/images/all/56/ems.png"
      break;
    case "HHTT":
      return "https://cdn.kuaidi100.com/images/all/56/tiantian.png"
      break;
    case "JD":
      return "https://cdn.kuaidi100.com/images/all/56/jd.png"
      break;
    case "QFKD":
      return "https://cdn.kuaidi100.com/images/all/56/quanfengkuaidi.png"
      break;
    case "GTO":
      return "https://cdn.kuaidi100.com/images/all/56/guotongkuaidi.png"
      break;
    case "UC":
      return "https://cdn.kuaidi100.com/images/all/56/youshuwuliu.png"
      break;
    case "DBL":
      return "https://cdn.kuaidi100.com/images/all/56/debangwuliu.png"
      break;
    case "FAST":
      return "https://cdn.kuaidi100.com/images/all/56/kuaijiesudi.png"
      break;
    case "AMAZON":
      return "https://cdn.kuaidi100.com/images/all/56/yamaxunwuliu.png"
      break;
    case "ZJS":
      return "https://cdn.kuaidi100.com/images/all/56/zhaijisong.png"
      break;
    default:
      return "../../images/express_icon.png"

  }
}

module.exports = {
  formatTime: formatTime,
  trim: trim,
  mapLogo:mapLogo
}
