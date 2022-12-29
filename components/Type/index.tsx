import React, { useEffect, useRef } from "react";

type Props = {};
const TYPE_DATA = ["觉知", "Awareness", "意識啓発", "의식"];
const TYPE_PERIOD = 2000;
class TextType {
  el: HTMLSpanElement;
  loopNum: number = 0;
  period: number = 2000;
  txt: string = "";
  isDeleting: boolean = false;
  toRotate: string[];

  constructor(el: HTMLSpanElement, toRotate: string[], period?: number) {
    this.el = el;
    this.period = period || 2000;
    this.toRotate = toRotate;
    // this.tick();
  }

  tick() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    const that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    var css = document.createElement("style");
    // css.type = "text/css";
    // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    const timer = setTimeout(function () {
      that.tick();
    }, delta);
    return timer;
  }
}
export default function Type({}: Props) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (wrapRef.current) {
      const instance = new TextType(wrapRef.current, TYPE_DATA);
      const timer = instance.tick();
      return () => {
        clearTimeout(timer);
      };
    }
    return () => {};
  }, []);
  return (
    <h1
      style={{
        fontSize: "2em",
        fontWeight: "bold",
      }}
    >
      <a
        // style={{ borderRight: "2px solid rgba(255,255,255,.75)" }}
        href=""
        className="typewrite "
      >
        <span ref={wrapRef} className="wrap"></span>
      </a>
    </h1>
  );
}
