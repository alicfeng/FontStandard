import{r as t,h as i}from"./p-30ca909f.js";import{P as a}from"./p-b4a29409.js";import{P as s}from"./p-f793c76c.js";import{t as o,a as r}from"./p-4304aad8.js";import"./p-7183ba4d.js";let n,e=null;const c=()=>{var t;const i=[];for(const a of n)if(a.data){a.data.ad_weight||(a.data.ad_weight=1);for(let t=0;t<a.data.ad_weight;t++)i.push(a)}return(null===(t=i[Math.floor(Math.random()*i.length)])||void 0===t?void 0:t.data)||null},l=class{constructor(i){t(this,i)}async componentWillLoad(){return this.update()}async update(){this.ad=await(async()=>((null===e||Date.now()-e>12e5)&&await(async()=>{const t=await s.getApi("https://ionicframeworkcom.prismic.io/api/v2"),i=await t.query(s.Predicates.at("document.type","docs_ad"),{});n=i.results,e=Date.now()})(),c()))(),this.ad&&(this.timeout=setTimeout((()=>{o(this.ad.ad_id)}),50))}disconnectedCallback(){clearTimeout(this.timeout)}render(){if(this.ad&&0!==Object.keys(this.ad).length)return i("a",{href:this.ad.ad_url.url,target:this.ad.ad_url.target,onClick:t=>r(this.ad.ad_id,t)},i("picture",null,i("source",{media:"(min-width: 37.5em)",src:this.ad.ad_image.url}),i("source",{src:this.ad.ad_image["1x"].url}),i("img",{src:this.ad.ad_image.url,alt:this.ad.ad_image.alt,height:this.ad.ad_image["1x"].dimensions.height,width:this.ad.ad_image["1x"].dimensions.width}),i("p",null,this.ad.ad_image.alt)),i("div",{innerHTML:a.RichText.asHtml(this.ad.ad_copy)}))}};l.style="internal-ad{max-width:148px;display:block;margin:48px 0 0}internal-ad p{font-size:13px;line-height:19px;font-weight:400;letter-spacing:0.02em;color:var(--c-indigo-100);-webkit-transition:.2s color;transition:.2s color}internal-ad a:hover p{color:var(--c-indigo-90)}@media (max-width: 1233px){internal-ad{display:none}}";export{l as internal_ad}