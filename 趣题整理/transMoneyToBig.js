<script>
      //编程题
      // 1.编写函数,接受一个参数
      // 2.实现如下效果 801.22 ==> 八佰零壹圆贰角贰分

      let numArr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '扒', '玖', '拾'];

      let pArr = ['圆', '拾', '佰', '仟', '萬', '拾', '佰', '仟', '亿'];

      function convert(number) {
        //输入正确性排查
        if (isNaN(Number(number))) {
          return '请输入数字';
        } else {
          number = String(number);
        }
        number = number.includes('.') ? number.split('.') : number;
        //带有小数
        if (Array.isArray(number)) {
          let smallarr = ['角', '分'];
          let small = number[1]
            .split('')
            .map((item, index) => numArr[item] + smallarr[index]);
          small = small.join('');
          //判断是否为0一下小数
          if (number[0] == 0) {
            return small;
          } else {
            return unit(number[0]) + small;
          }
          //整数
        } else {
          return unit(number);
        }
      }

      //工具类
      function unit(num) {
        num = num.split('');
        num.reverse();
        let ind = num.indexOf('0');
        num = num.map((item, index) => {
          //去除重复0
          if(item==0&&index!= ind){
            return '';
          }else{
            //0不接单位
            return item == 0 ? numArr[item] : numArr[item] + pArr[index];
          }
        });
        num.reverse();
        return num.join('');
      }

      console.log(convert(prompt('请输入一个数字')));
    </script>