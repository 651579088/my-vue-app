import fetch from 'src/util/fetch'

// 售后申请
const applyAfterSale = params => fetch('POST', '/after-service/apply-after-sale', params)

// 售后申请信息
const fetchAfterSalesApply = params => fetch('GET', '/after-service/after-sale-info', params)

// 售后编辑
const editAfterSale = params => fetch('POST', '/after-service/edit-after-sale', params)

// 售后取消
const fetchRefundClose = params => fetch('POST', '/after-service/cancel-after-sale', params)

// 售后进度详情
const fetchRefundDetial = params => fetch('GET', '/after-service/after-sale-detail', params)

// 售后物流提交
const fetchLogisticsForm = params => fetch('POST', '/after-service/add-return-logistics', params)

// 售后申请初始化信息
const fetchRefundApplyInfo = params => fetch('GET', '/after-service/after-sale-init', params)

export {
  applyAfterSale,
  fetchAfterSalesApply,
  editAfterSale,
  fetchRefundClose,
  fetchRefundDetial,
  fetchLogisticsForm,
  fetchRefundApplyInfo
}
