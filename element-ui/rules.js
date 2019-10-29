let rule = {};

//验证elementUi表单输入

//验证是否为空
rule.noEmpty = (rule, value, callback) => 
  value == '' ? callback(new Error('请完整填写该项')) : callback();

//正整数
rule.mustInt = (rule, value, callback) => {
  let exp = /^\+?[1-9][0-9]*$/;
  exp.test(value) ? callback() : callback(new Error('请填写正确格式(正整数)'));
};

//钱正则
rule.money = (rule, value, callback) => {
  let exp = /^[1-9]+\d*(\.\d{0,2})?$|^0?\.\d{0,2}$/;
  exp.test(value) ? callback() : callback(new Error('请填写正确格式(正数,小数点后最多两位)'));
};

//电话正则
rule.telExe = (rule,value,callback) => {
  let txe = /^1[3456789]\d{9}$/;
  txe.test(value) ? callback() : callback(new Error("手机号格式不正确"));
}

export default rule;

//main.js中使用
// import rules from '@/untils/rules.js'

// Vue.prototype.$rules = rules;