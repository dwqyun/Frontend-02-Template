const TICK = Symbol("tick");
const TICK_HANDLER = Symbol("tick-handle");
const ANIMATION = Symbol("animation");
const START_TIME = Symbol("start-time");
const PAUSE_START = Symbol("pause-start");
const PAUSE_TIME = Symbol("pause-time");

export class Timeline {
  constructor() {
    this.state = "inited";
    this[ANIMATION] = new Set();
    this[START_TIME] = new Map();
  }
  // 启动Tick
  start() {
    if (this.state !== "inited") {
      return;
    }
    this.state = "started";
    let startTime = Date.now();
    this[PAUSE_TIME] = 0;
    // symbol构造私有变量 字符串唯一性
    this[TICK] = () => {
      // console.log("tick");
      let now = Date.now();
      for (const animation of this[ANIMATION]) {
        // duration处理delay
        let t = this[START_TIME].get(animation) < startTime
          ? now - startTime - this[PAUSE_TIME] - animation.delay
          : now - this[START_TIME].get(animation) - this[PAUSE_TIME] - animation.delay;

        if (animation.duration < t) {
          this[ANIMATION].delete(animation);
          // 执行时间大于duration时纠正范围
          t = animation.duration;
        }

        // t < 0时动画未开始 延迟
        if (t > 0) {
          animation.receiveTime(t);
        }
      }
      // 调用自身
      this[TICK_HANDLER] = requestAnimationFrame(this[TICK]);
    }
    this[TICK]();
  }
  pause() {
    if (this.state !== "started") {
      return;
    }
    this.state = "paused";
    this[PAUSE_START] = Date.now();
    cancelAnimationFrame(this[TICK_HANDLER]);
  }
  resume() {
    if (this.state !== "paused") {
      return;
    }
    this.state = "started";
    // 暂停时间
    this[PAUSE_TIME] += Date.now() - this[PAUSE_START];
    this[TICK]();
  }
  reset() {
    this.state = "inited";
    // 重置
    this.pause();
    this[ANIMATION] = new Set();
    this[START_TIME] = new Map();
    this[TICK_HANDLER] = null;
    this[PAUSE_TIME] = 0;
    this[PAUSE_START] = 0;
  }
  add(animation, addTime = Date.now()) {
    this[ANIMATION].add(animation);
    this[START_TIME].set(animation, addTime);
  }
}

export class Animation {
  constructor(object, property, startValue, endValue, duration, delay, timeFunction, template) {
    this.object = object;
    this.property = property;
    this.startValue = startValue;
    this.endValue = endValue;
    this.duration = duration;
    this.delay = delay;
    this.timeFunction = timeFunction || (v => v);
    this.template = template || (v => v);
  }

  receiveTime(time) {
    let range = (this.endValue - this.startValue);
    // 进度 使用缓动效果
    let progress = this.timeFunction(time / this.duration);
    // 差值均匀变化
    this.object[this.property] = this.template(this.startValue + range * progress);
  }
}