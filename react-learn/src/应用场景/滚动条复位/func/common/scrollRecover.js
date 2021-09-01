let timer;

export default function scrollRecover() {
  const html = document.documentElement;
  recover(html.scrollTop, 0, html);
}

function recover(start, end, html) {
  clearInterval(timer);
  const tick = 16; // 每隔16毫秒完成一次变化
  const total = 100; // 总时间
  const times = Math.ceil(total / tick); // 执行次数
  const totalDis = start - end;
  const dis = totalDis / times; // 每次需要滚动的距离
  let count = 0;
  timer = setInterval(() => {
    count++;
    html.scrollTop -= dis;
    if (count === times) {
      clearInterval(timer);
    }
  }, tick);
}
