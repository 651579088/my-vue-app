exports.init = function(app) {
  app.get("/applet/school-order/get-payment-info-by-student", function(req, res) {
    res.send({
      errcode: "0",
      errmsg: "ok",
      data: [{name: 'tangxong', age:'28'}]
    });
  });

  app.post("/applet/user/user-info", function(req, res) {
    res.send({
      errcode: "0",
      errmsg: "ok",
      data: {name: 'zhangshan', age:'29'}
    });
  });
};
