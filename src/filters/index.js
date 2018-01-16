/**
 * 时间格式化
 */
export let timestampFormat = (timestamp, format) => {
  let result = ''
  let zeroFill = val => val < 10 ? '0' + val : val

  timestamp = parseInt(timestamp) * 1000
  format = format || 'YYYY-MM-DD hh:mm:ss'

  if (!timestamp) {
    result = '-'
  } else {
    let sFormat = format
    format = format.split(' ')
    let dateFormat = format[0]
    let timeFormat = format[format.length - 1]
    let dateSymbol = dateFormat.match(/[^Y,^M,^D]/)[0]
    let timeSymbol = timeFormat.match(/[^h,^m,^s]/)[0]
    let clearance = sFormat.replace(dateFormat, '').replace(timeFormat, '')
    let datetime = new Date(timestamp)
    let year = datetime.getFullYear()
    let month = zeroFill(datetime.getMonth() + 1)
    let day = zeroFill(datetime.getDate())
    let hours = zeroFill(datetime.getHours())
    let minute = zeroFill(datetime.getMinutes())
    let second = zeroFill(datetime.getSeconds())
    if (dateFormat.match(/Y/)) {
      result += year
    }
    if (dateFormat.match(/M/)) {
      result += dateSymbol + month
    }
    if (dateFormat.match(/D/)) {
      result += dateSymbol + day
    }
    if (timeFormat.match(/h/)) {
      result += clearance + hours
    }
    if (timeFormat.match(/m/)) {
      result += timeSymbol + minute
    }
    if (timeFormat.match(/s/)) {
      result += timeSymbol + second
    }
  }

  return result.replace(/^[^\d]+/, '')
}

/**
 * 完整地址名
 */
export let fullAddress = (province, city, county, address) => {
  return province + ' ' + city + ' ' + county + ' ' + address
}

/**
 * 价格过滤器，/100 && 保留两位小数
 */
export let priceFilter = (price) => {
  return (price / 100).toFixed(2)
}

export let currency = (value, prefix = '$') => {
  return prefix + (value / 100).toFixed(2)
}

export let priceFloat = (value, prefix = '$') => {
  return prefix + parseFloat((value / 100))
}

/*
 *格式化手机号码
 */
export let codeFilter = (val) => {
  if (val) {
    let str = ''
    for (let i = 0, len = val.length; i < len; i++) {
      str += val[i]
      if ((i + 1) % 4 === 0) {
        str += ' '
      }
    }
    return str
  }
}

/**
 *格式化时间
 */
export let timeFilter = (val) => {
  let now = new Date(new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate())
  let time = new Date(new Date(val * 1000).getFullYear() + '/' + (new Date(val * 1000).getMonth() + 1) + '/' + new Date(val * 1000).getDate())
  let less = (now - time) / 86400000
  let hour = new Date(val * 1000).getHours()
  let minu = new Date(val * 1000).getMinutes()
  hour = hour < 10 ? '0' + hour : hour
  minu = minu < 10 ? '0' + minu : minu
  switch (less) {
    case 0:
      return '今天' + hour + ':' + minu
    case 1:
      return '昨天' + hour + ':' + minu
    default:
      return parseInt(less) + '天前'
  }
}
/**
 * fmt 格式 'yyyy-MM-dd' 'yyyy-MM-dd HH:mm:ss'
 *时间格式化
 */
export let timeFormat = (val, fmt) => {
  let data = new Date(val * 1000)
  let o = {
    'M+': data.getMonth() + 1, // 月份
    'd+': data.getDate(), // 日
    'h+': data.getHours(), // 小时
    'm+': data.getMinutes(), // 分
    's+': data.getSeconds(), // 秒
    'q+': Math.floor((data.getMonth() + 3) / 3), // 季度
    'S': data.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (data.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

/**
 *  地址名称转换 vux 单独拿出filter来， 兼容后台自定义直辖市数据
 */
export let name2value = (name, list) => {
  const specialMap = {
    '北京市': '2',
    '天津市': '138',
    '上海市': '1935',
    '重庆市': '5663'
  }
  let rs = name.map((one, index) => {
    let parent = ''
    if (index === 2) {
      // 可能存在区名一样的情况，比如南山区
      parent = list.find(item => {
        return item.name === name[1]
      }) || { value: '__' }

      if (specialMap[name[0]] && name[1] !== '县') {
        parent = {
          value: specialMap[name[0]]
        }
      }
      return list.find(item => {
        return item.name === one && item.parent === parent.value
      })
    } else {
      if (index === 1 && specialMap[name[0]] && name[1] !== '县') {
        return {
          value: specialMap[name[0]]
        }
      }
      return list.find(item => {
        return item.name === one
      })
    }
  })

  return rs.map(one => {
    return one ? one.value : '__'
  }).join(' ')
}
