import{r as t,h as r,g as e}from"./p-07f1ff9b.js";const s=class{constructor(r){t(this,r),this.lazyloadImg="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3307227625,902309094&fm=26&gp=0.jpg"}componentDidLoad(){this.addIntersectionObserver()}componentWillUpdate(){this.src!==this.oldSrc&&this.addIntersectionObserver(),this.oldSrc=this.src}handleImage(){const t=this.el.shadowRoot.querySelector("img");t.setAttribute("src",t.getAttribute("data-src")),t.onload=()=>{t.removeAttribute("data-src")}}addIntersectionObserver(){this.src&&("IntersectionObserver"in window?(this.io=new IntersectionObserver((t=>{t[0].isIntersecting&&(this.handleImage(),this.removeIntersectionObserver())})),this.io.observe(this.el.shadowRoot.querySelector("img"))):setTimeout((()=>{this.handleImage()}),300))}removeIntersectionObserver(){this.io&&(this.io.disconnect(),this.io=null)}render(){return r("img",{"data-src":this.src,src:this.lazyloadImg,alt:this.alt})}get el(){return e(this)}};s.style="@-webkit-keyframes spinAround{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}:host{display:block}img{max-width:100%}";export{s as jsj_lazyload_img}