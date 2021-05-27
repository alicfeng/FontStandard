import{r as e,h as t,g as o}from"./p-30ca909f.js";import"./p-82a85041.js";import{R as i}from"./p-b9021c29.js";import"./p-395bd3b0.js";import"./p-12b41941.js";import"./p-7183ba4d.js";const n=class{constructor(t){e(this,t),this.pageX=0,this.pageY=0,document.title="Stencil DS - Stencil for Production Design Systems"}disconnectedCallback(){document.body.classList.remove("dark"),cancelAnimationFrame(this.raf)}componentDidLoad(){document.body.classList.add("dark");{let e=document.querySelector("#hbs-script");e&&e.remove();const t=document.createElement("script");t.src="//js.hsforms.net/forms/v2.js",t.id="hbs-script",t.defer=!0,t.onload=()=>{this.injectForm()},document.body.appendChild(t)}this.startRendering()}startRendering(){const e=this.glShader;if(e){let t=0;const o=1e4*Math.random(),i=n=>{if(n>t){const i=e.offsetHeight;e.uniforms={"1f:iTime":(n+o)/16e3,"2fv:iResolution":[e.offsetWidth,i],"2fv:iMouse":[this.pageX-e.offsetLeft,i-this.pageY]},t=n+32}this.raf=requestAnimationFrame(i)};this.raf=requestAnimationFrame(i)}}onMouseMove(e){this.pageX=e.pageX,this.pageY=e.pageY}injectForm(){hbspt.forms.create({portalId:"3776657",formId:"fe81d3de-e3ee-43c7-8636-e664bf53bc91",css:"",target:"#ds-form-target"})}handleCtaClick(e,t){if(document.documentElement.scrollIntoView){e.preventDefault();const o=document.getElementById(t);o&&function(e){let t=0;const o=window.scrollY,i=e.offsetTop,n=Math.max(.1,Math.min(Math.abs(o-i)/600,.8)),s=()=>{t+=1/60;const e=t/n,r=1===(a=e)?1:1-Math.pow(2,-10*a);var a;e<1?(requestAnimationFrame(s),window.scrollTo(0,o+(i-o)*r)):window.scrollTo(0,i)};s()}(o)}}render(){return[t("div",{class:"hero"},t("pro-glshader",{class:"shader",frag:s,ref:e=>this.glShader=e}),t(i,{class:"container"},t("div",{class:"measure-lg"},t("hgroup",null,t("svg",{class:"ds-logo",width:"208",height:"208",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("circle",{cx:"104",cy:"104",r:"48",fill:"#001AFF",opacity:".3",filter:"url(#filter0_f)"}),t("path",{d:"M155.84 122c11.62 0 17.95-7.15 17.95-17.04 0-9.89-6.33-17.04-17.95-17.04H143.6V122h12.24zm10.56-17.04c0 6.38-3.31 10.6-10.75 10.6h-5.04v-21.2h5.04c7.44 0 10.75 4.22 10.75 10.6z",fill:"url(#paint0_linear)"}),t("path",{d:"M189.59 116.43c-4.42 0-6.43-2.45-6.63-5.23h-6.9c.19 5.62 3.69 11.47 13.15 11.47 8.1 0 13.48-4.32 13.48-10.41 0-13.54-18.43-8.16-18.43-14.98 0-2.2 2.11-3.84 5.43-3.84 3.64 0 5.75 2.16 5.9 5.14h6.86c-.19-6.15-4.7-11.38-12.67-11.38-7.87 0-12.43 4.75-12.43 10.51 0 13.35 18.24 8.07 18.24 14.79 0 2.5-2.26 3.93-6 3.93z",fill:"url(#paint1_linear)"}),t("g",{filter:"url(#filter1_dddi)",fill:"#fff"},t("path",{d:"M95.6 113.76h24.67L106.93 128H82.4l13.2-14.24z"}),t("path",{opacity:".3",d:"M95.6 113.76h24.67L89 120.88l6.6-7.12z"}),t("path",{d:"M136 96.88H85.33L72 111.12h50.67L136 96.88zM101.03 80h24.57l-13.27 14.24h-24.6L101.03 80z"})),t("defs",null,t("filter",{id:"filter0_f",x:"0",y:"0",width:"208",height:"208",filterUnits:"userSpaceOnUse","color-interpolation-filters":"s-rGB"},t("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),t("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),t("feGaussianBlur",{stdDeviation:"28",result:"effect1_foregroundBlur"})),t("filter",{id:"filter1_dddi",x:"32",y:"40",width:"144",height:"128",filterUnits:"userSpaceOnUse","color-interpolation-filters":"s-rGB"},t("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),t("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),t("feOffset",null),t("feGaussianBlur",{stdDeviation:"4"}),t("feColorMatrix",{values:"0 0 0 0 0.439216 0 0 0 0 0.498039 0 0 0 0 1 0 0 0 0.75 0"}),t("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),t("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),t("feOffset",null),t("feGaussianBlur",{stdDeviation:"20"}),t("feColorMatrix",{values:"0 0 0 0 0.529412 0 0 0 0 0.564706 0 0 0 0 1 0 0 0 1 0"}),t("feBlend",{in2:"effect1_dropShadow",result:"effect2_dropShadow"}),t("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),t("feOffset",null),t("feGaussianBlur",{stdDeviation:"8"}),t("feColorMatrix",{values:"0 0 0 0 0.14902 0 0 0 0 0.215686 0 0 0 0 1 0 0 0 1 0"}),t("feBlend",{in2:"effect2_dropShadow",result:"effect3_dropShadow"}),t("feBlend",{in:"SourceGraphic",in2:"effect3_dropShadow",result:"shape"}),t("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),t("feOffset",null),t("feGaussianBlur",{stdDeviation:"3"}),t("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}),t("feColorMatrix",{values:"0 0 0 0 0.752941 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 1 0"}),t("feBlend",{in2:"shape",result:"effect4_innerShadow"})),t("linearGradient",{id:"paint0_linear",x1:"144",y1:"105",x2:"203",y2:"105",gradientUnits:"userSpaceOnUse"},t("stop",{"stop-color":"#F9F9FD"}),t("stop",{offset:"1","stop-color":"#DAD9E9","stop-opacity":".9"})),t("linearGradient",{id:"paint1_linear",x1:"144",y1:"105",x2:"203",y2:"105",gradientUnits:"userSpaceOnUse"},t("stop",{"stop-color":"#F9F9FD"}),t("stop",{offset:"1","stop-color":"#DAD9E9","stop-opacity":".9"})))),t("h1",null,"Bring your company’s design system to life."),t("p",null,"Reduce design debt, connect disparate tech teams, and enforce brand consistency at scale with code-based, world-class design systems that work everywhere."),t("a",{href:"#learn-more",onClick:e=>this.handleCtaClick(e,"learn-more")},"Learn more ",t("app-icon",{name:"arrow-down"})))))),t("section",{class:"content content--gradient-bg",id:"learn-more"},t(i,{class:"container"},t("hgroup",null,t("h2",null,"Production-ready Design Systems at Scale."),t("p",null,"Build shared components across teams using a diverse set of frontend frameworks and technologies, all while enforcing brand guidelines and exceeding accessibility standards.")),t("div",{class:"features"},t("table",null,t("thead",null,t("tr",null,t("th",null,t("h3",null,"Stencil OSS"),t("p",null,"Always free & open source")),t("th",null,t("h3",null,"Stencil DS"),t("p",null,"Custom pricing")))),t("tbody",null,t("tr",null,t("td",null,t("div",{class:"icon-cell"},t("app-icon",{name:"checkmark"})," Web Component compiler")),t("td",null,t("div",{class:"icon-cell"},t("app-icon",{name:"checkmark"})," Web Component compiler"))),t("tr",null,t("td",null,t("div",{class:"icon-cell"},t("app-icon",{name:"checkmark"})," Lazy-loading for Components")),t("td",null,t("div",{class:"icon-cell"},t("app-icon",{name:"checkmark"})," Lazy-loading for Components"))),t("tr",null,t("td",null,t("div",{class:"icon-cell"},t("app-icon",{name:"checkmark"})," Intelligent polyfill loading")),t("td",null,t("div",{class:"icon-cell"},t("app-icon",{name:"checkmark"})," Intelligent polyfill loading"))),t("tr",null,t("td",null,t("div",{class:"icon-cell"},t("app-icon",{name:"checkmark"})," Community support")),t("td",null,t("div",{class:"icon-cell"},t("app-icon",{name:"checkmark"})," Premium Support SLA"))),t("tr",null,t("td",null,t("div",{class:"icon-cell"},t("app-icon",{name:"checkmark"})," Generate bindings for Angular, React, and Vue")),t("td",null,t("div",{class:"icon-cell"},t("app-icon",{name:"checkmark"})," Generate bindings for Angular, React, and Vue"))),t("tr",null,t("td",{class:"empty"}),t("td",null,t("div",{class:"icon-cell"},t("app-icon",{name:"checkmark"})," Expert advisory on your Design System project"))),t("tr",null,t("td",{class:"empty"}),t("td",null,t("div",{class:"icon-cell"},t("app-icon",{name:"checkmark"})," Training opportunities")))),t("tbody",null,t("tr",null,t("td",null,t("stencil-route-link",{anchorClass:"btn btn--secondary",url:"/docs/getting-started"},"Install Stencil")),t("td",null,t("a",{href:"#cta-form",class:"btn btn--primary",onClick:e=>this.handleCtaClick(e,"cta-form")},"Get in touch")))))))),t("guide-callout",null),t("div",{class:"content"},t(i,{class:"container"},t("hgroup",null,t("h2",null,"FAQ for Stencil DS")),t("div",{class:"faq-grid"},t("div",null,t("h4",null,"What parts of Stencil are free? What parts are commercially licensed?"),t("p",null,"Yes, the official Stencil project is 100% free and open source (MIT licensed), and always will be. We offer Stencil DS for teams undertaking large Design System initiatives which offers additional features and tools that are not free. This keeps the lights on and lets us keep making the Stencil you know and love better and better, all while helping teams be successful with their Design System initiatives.")),t("div",null,t("h4",null,"What do I get with Premium Support?"),t("p",null,"While Stencil has an active community and is being actively maintained, there are cases where certain bugs or features are not a priority due to misalignment with our open source roadmap or time constraints."),t("p",null,"For teams deploying major Design System initiatives, relying on open source and community support is not sufficient. You'll need assurance that key issues or features are identified and communicated quickly, with potential fixes or workarounds made available in a timely fashion."),t("p",null,"With Stencil DS, Premium Support is provided and teams will have a dedicated account manager to communicate with if anything goes wrong.")),t("div",null,t("h4",null,"My team needs help making our initiative successful. Do you offer Advisory Services?"),t("p",null,"Yes! The Stencil team is the same team that build and deployed one of the most successful open source Design Systems ever: Ionic Framework. Today, Ionic is used by millions of developers for over five million applications."),t("p",null,"Not only that, but the team behind Stencil is a leader in modern Web APIs and Progressive Web Apps, and has unique expertise that is difficult to find anywhere else."),t("p",null,"We work with major enterprise companies and high growth startups undertaking major Design System initiatives that can't afford to fail, and we're ready to help your team, too!"))))),t(i,{class:"content content--border-top",id:"cta-form",as:"section"},t("div",{class:"container"},t("hgroup",null,t("h2",null,"Want to learn more about Stencil DS?"),t("p",null,"Our team will reach out to see how we can help make your Design System initiative successful.")),t("div",{id:"ds-form-target",class:"hubspot-override"})))]}get el(){return o(this)}},s="\n#extension GL_EXT_shader_texture_lod : enable\n#extension GL_OES_standard_derivatives : enable\nprecision highp float;\n\nuniform float iTime;\nuniform vec2 iResolution;\nuniform vec2 iMouse;\n\n#define ALTERNATE_VERSION\n#define PI 3.14159265359\n\nvec3 hash33(vec3 p) {\n  float n = sin(dot(p, vec3(7, 157, 113)));\n  return fract(vec3(2097152, 262144, 32768)*n)*2. - 1.;\n}\n\nfloat tetraNoise(in vec3 p) {\n  vec3 i = floor(p + dot(p, vec3(0.333333)) );  p -= i - dot(i, vec3(0.166666)) ;\n  vec3 i1 = step(p.yzx, p), i2 = max(i1, 1.0-i1.zxy); i1 = min(i1, 1.0-i1.zxy);\n  vec3 p1 = p - i1 + 0.166666, p2 = p - i2 + 0.333333, p3 = p - 0.5;\n  vec4 v = max(0.5 - vec4(dot(p,p), dot(p1,p1), dot(p2,p2), dot(p3,p3)), 0.0);\n  vec4 d = vec4(dot(p, hash33(i)), dot(p1, hash33(i + i1)), dot(p2, hash33(i + i2)), dot(p3, hash33(i + 1.)));\n  return clamp(dot(d, v*v*v*8.)*1.732 + .5, 0., 1.); // Not sure if clamping is necessary. Might be overkill.\n}\n\nvec2 smoothRepeatStart(float x, float size) {\n  return vec2(\n    mod(x - size / 2., size),\n    mod(x, size)\n  );\n}\n\nfloat smoothRepeatEnd(float a, float b, float x, float size) {\n  return mix(a, b,\n    smoothstep(\n      0., 1.,\n      sin((x / size) * PI * 2. - PI * .5) * .5 + .5\n    )\n  );\n}\n\n#define repeatSize 10.\n\nvoid main() {\n  vec2 uv = (-iResolution.xy + 2. * gl_FragCoord.xy) / iResolution.y;\n  float dist = distance(gl_FragCoord.xy, iMouse) / length(iResolution);\n\n  // Zoom in a bit\n  uv *= 0.9;\n\n  float x = uv.x - mod(iTime, repeatSize / 2.);\n  float y = uv.y;\n\n  vec2 ab; // two sample points on one axis\n\n  float noise;\n  float noiseA, noiseB;\n\n  ab = smoothRepeatStart(x, repeatSize) * dist;\n  noiseA = tetraNoise(16.+vec3(vec2(ab.x, uv.y) * 1.2, 0)) * .5;\n  noiseB = tetraNoise(16.+vec3(vec2(ab.y, uv.y) * 1.2, 0)) * .5;\n  noise = smoothRepeatEnd(noiseA, noiseB, x, repeatSize);\n\n  ab = smoothRepeatStart(y, repeatSize / 2.);\n  noiseA = tetraNoise(vec3(vec2(uv.x, ab.x) * .5, 0)) * 2.;\n  noiseB = tetraNoise(vec3(vec2(uv.x, ab.y) * .5, 0)) * 2.;\n  noise *= smoothRepeatEnd(noiseA, noiseB, y, repeatSize / 2.);\n\n  ab = smoothRepeatStart(x, repeatSize);\n  noiseA = tetraNoise(9.+vec3(vec2(ab.x, uv.y) * .05, 0)) * 5.;\n  noiseB = tetraNoise(9.+vec3(vec2(ab.y, uv.y) * .05, 0)) * 5.;\n  noise *= smoothRepeatEnd(noiseA, noiseB, x, repeatSize);\n\n  noise = mix(noise * .8, dot(uv, vec2(-.66,1.)*.4), .6);\n\n  float spacing = 1./90.;\n  float lines = mod(noise, spacing) / spacing;\n  lines = min(lines * 2., 1.) - max(lines * 2. - 1., 0.);\n  lines /= fwidth(noise / spacing);\n\n  // Double to occupy two pixels and appear smoother\n  lines = 1. - lines * 0.5;\n\n  float iconRate = clamp(1., 240./distance(gl_FragCoord.xy, vec2(iResolution.x *.5 - 30.0, iResolution.y - 265.)), 300.);\ngl_FragColor = vec4(\n  vec3(0.04, 0.04, 0.078) +\n  (vec3(lines) * clamp(.0, abs(noise), 1.) * 0.4 * iconRate)\n,1.0);\n}\n";n.style='ds-page{display:block}ds-page .container{overflow:hidden}ds-page .hero{position:relative;padding-top:24px;padding-bottom:240px;color:#fff}ds-page .hero .ds-logo{margin:-40px 0 -40px -64px}ds-page .hero hgroup{text-align:center;max-width:540px;margin-left:auto;margin-right:auto}ds-page .shader{background:#0A0A12;position:absolute;top:-150px;left:0;bottom:0;height:auto;z-index:-1}ds-page .hero h1{color:#fff;font-size:64px;letter-spacing:-0.01em;line-height:1.1;font-weight:700;margin-top:0;margin-bottom:0}ds-page .hero p{font-size:24px;line-height:1.4;letter-spacing:-0.01em;color:#E1E1F2;margin:24px auto 30px;max-width:440px}ds-page .hero a{-webkit-transition:color 0.2s;transition:color 0.2s;color:#8583FF;text-decoration:none;text-transform:uppercase;letter-spacing:0.08em;font-weight:bold;font-size:20px;line-height:24px}ds-page .hero a:hover{color:#9B99FD}ds-page .hero a svg{-webkit-transition:fill 0.2s, -webkit-transform 0.2s;transition:fill 0.2s, -webkit-transform 0.2s;transition:transform 0.2s, fill 0.2s;transition:transform 0.2s, fill 0.2s, -webkit-transform 0.2s;fill:#8583FF;-webkit-transform:translate(1px, 1px);transform:translate(1px, 1px)}ds-page .hero a:hover svg{-webkit-transform:translate(1px, 3px);transform:translate(1px, 3px);fill:#9B99FD}ds-page .measure-lg{margin-left:auto;margin-right:auto}ds-page .content{padding:200px 0}ds-page .content--gradient-bg{background:-webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#F9FAFB));background:linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)}ds-page .content--border-top{border-top:1px solid #E9EDF3}ds-page .content hgroup{max-width:612px;margin-bottom:36px}ds-page h2{font-size:48px;line-height:1.2;letter-spacing:-0.02em;font-weight:700;margin-bottom:10px;margin-top:0}ds-page h3{font-size:32px;line-height:1.2;letter-spacing:-0.01em;margin:0}ds-page h4{font-weight:600;font-size:28px;line-height:1.2;letter-spacing:-0.01em;margin-bottom:18px;text-transform:none;color:#000}ds-page .content hgroup p{font-size:24px;line-height:1.6;letter-spacing:-0.01em}ds-page .faq-grid{-webkit-columns:2;-moz-columns:2;columns:2;-webkit-column-gap:112px;-moz-column-gap:112px;column-gap:112px}ds-page .faq-grid>div{margin-bottom:20px;display:inline-block}ds-page .faq-grid p{font-size:16px;line-height:27px;color:#626175}ds-page table{margin-top:78px}ds-page table,ds-page table tr,ds-page table tr:nth-child(2n){background-color:transparent}ds-page table td,ds-page table th{padding:14px 0;border:0;width:50%;font-weight:500;font-size:16px;line-height:27px;text-align:left}ds-page table th{padding-bottom:24px;-ms-flex-direction:column;flex-direction:column}ds-page table .icon-cell{display:-ms-flexbox;display:flex}ds-page table td app-icon .icon-checkmark{fill:#000;margin-right:8px}ds-page table tr{border-top:0}ds-page table tbody tr:not(:last-child) td:not(.empty){border-bottom:1px solid #DEE3EA}ds-page table th p{font-size:24px;line-height:30px;letter-spacing:-0.01em;color:#2F3A48;font-weight:400;margin-top:8px}ds-page tbody+tbody td{padding-top:32px}@media screen and (max-width: 768px){ds-page .hero{padding-bottom:132px}ds-page .hero h1{font-size:56px}ds-page .content{padding:148px 0}ds-page h2{font-size:42px}ds-page h3{font-size:28px}ds-page table{min-width:532px}ds-page table th p{font-size:20px}ds-page table td,ds-page table th{font-size:15px}ds-page .faq-grid{-webkit-columns:1;-moz-columns:1;columns:1;-webkit-column-gap:0;-moz-column-gap:0;column-gap:0}ds-page .faq-grid>div{margin-bottom:0}}@media screen and (max-width: 520px){ds-page .features{overflow-x:scroll;margin-right:-24px}}@media screen and (max-width: 420px){ds-page .hero h1{font-size:42px}ds-page .hero p{font-size:22px}ds-page .content{padding:100px 0}ds-page h2{font-size:34px}ds-page .content hgroup p{font-size:20px}ds-page table{margin-top:24px}}.hs-form .actions{text-align:center}.hs-form .hs-button{cursor:pointer}.hubspot-override .hs-form label{font-weight:600;font-size:14px;display:block;padding-bottom:2px}.hubspot-override .hs-form,.hs-form fieldset{max-width:100% !important}.hubspot-override .hs-form .hs-form-field{margin-top:22px}.hubspot-override .hs-form label{margin-bottom:3px}.hubspot-override .hs-form .hs-form-required{display:inline;color:#f45454;margin-left:4px}.hubspot-override .hs-form .hs-richtext{margin-top:8px}.hubspot-override .hs-form .hs-input,.hubspot-override .hs-form input.hs-input{-webkit-transition:border 0.3s;transition:border 0.3s;font-weight:500;background-color:#fff;background-image:none;border:1px solid #ced6e3;line-height:1.39286;border-radius:4px;padding:11px 15px;font-size:15px;margin-bottom:0;color:#505863}.hubspot-override .hs-form input.hs-input[type="number"]{float:none}.hs-form .hs-input:hover,.hs-form .hs-input:focus,.hs-form .hs-input:active,.hs-form input.hs-input:hover,.hs-form input.hs-input:focus,.hs-form input.hs-input:active,.hs-form select.hs-input:hover,.hs-form select.hs-input:focus,.hs-form select.hs-input:active{outline:none;-webkit-box-shadow:none;box-shadow:none}.hubspot-override .hs-form input.hs-input[type="text"],.hubspot-override .hs-form input.hs-input[type="email"],.hubspot-override .hs-form input.hs-input[type="tel"]{height:auto;width:100%;float:none}.hubspot-override .hs-form input.hs-input[type="text"]:focus,.hubspot-override .hs-form input.hs-input[type="email"]:focus,.hubspot-override .hs-form input.hs-input[type="tel"]:focus,.hubspot-override .hs-form textarea:focus{border-color:var(--color-dodger-blue)}.hubspot-override .hs-form input.hs-input[type="radio"],.hubspot-override .hs-form input.hs-input[type="checkbox"]{height:auto;margin-right:8px}.hubspot-override .hs-form .hs-form-booleancheckbox-display{display:-ms-flexbox;display:flex}.hubspot-override .hs-form select.hs-input{height:44px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);background-position:calc(100% - 20px) 50%, calc(100% - 15px) 50%;background-size:5px 5px, 5px 5px, 1px 1.5em;background-repeat:no-repeat}.hubspot-override .hs-form fieldset.form-columns-1 .hs-input{width:100%}.hubspot-override .hs-form form fieldset.form-columns-2 .input{margin:0}.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field{padding:0 10px}.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field:first-child{padding-left:0}.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field:last-child{padding-right:0}.hubspot-override .hs-form .inputs-list,.hubspot-override .hs-form .hs-error-msgs{margin:0;padding:0;list-style-type:none}.hubspot-override .hs-form .inputs-list.multi-container{overflow:hidden}.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child,.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li{width:50%;float:left;padding-right:11px}.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li:nth-child(even){padding-right:0;padding-left:11px}.hubspot-override .hs-form .hs-form-checkbox-display{margin-top:4px;display:-ms-flexbox;display:flex}.hubspot-override .hs-form .hs-form-checkbox-display .hs-input[type="checkbox"]{margin-right:10px}.hubspot-override .hs-form .hs-form-checkbox-display span{font-size:15px;color:#505863}.hubspot-override .hs-form .hs-error-msgs{padding:5px 0 0;font-size:11px;color:#f45454}.hubspot-override .hs-form .hs_submit{margin-top:30px}.hubspot-override .hs-form .hs_submit input.hs-button{-webkit-transition:all .15s ease;transition:all .15s ease;text-decoration:none;border:none;outline:none;font-size:14px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:6px;letter-spacing:0.04em;-webkit-box-shadow:var(--button-shadow);box-shadow:var(--button-shadow);cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;background:var(--color-dodger-blue);color:var(--color-white)}.hubspot-override .hs-form .hs_submit input.hs-button:hover{text-decoration:none;-webkit-transform:translateY(-1px);transform:translateY(-1px);-webkit-box-shadow:var(--button-shadow-hover);box-shadow:var(--button-shadow-hover)}@media (max-width: 768px){.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field{width:100%;float:none;padding:0 !important}.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field+.hs-form-field{margin-top:24px}.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child,.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li{width:100%;float:none;padding-right:0}.hubspot-override .hs-form .inputs-list.multi-container li:nth-last-child(n+6):first-child~li:nth-child(even){padding-left:0}.hubspot-override .hs-form .hs_submit input.hs-button{width:100%}}.hubspot-override .submitted-message{font-size:18px;line-height:1.4;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;font-weight:600;color:var(--color-dodger-blue);max-width:410px;background-color:white;margin:0 auto}.hubspot-override .hs-form label:not(.hs-form-booleancheckbox-display){text-transform:uppercase;font-size:12px;letter-spacing:0.05em;margin-bottom:6px}.hubspot-override .hs-form .hs-form-booleancheckbox-display{font-size:15px}.hubspot-override .hs-form .hs-richtext p span,.hubspot-override .hs-form .hs-richtext p a{font-size:15px}.hubspot-override .hs-form .hs-input,.hubspot-override .hs-form input.hs-input{padding:16px 20px 18px;font-size:18px}.hubspot-override .hs-form select.hs-input{text-indent:10px;height:60px}@-moz-document url-prefix(){.hubspot-override .hs-form select.hs-input{text-indent:0}}.hubspot-override .hs-form .hs-error-msgs label{font-size:11px;letter-spacing:0;text-transform:none}.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field{padding:0 20px}.hubspot-override .hs-form .hs_submit{text-align:center;padding-top:18px}.hubspot-override .hs-form .hs_submit input.hs-button{padding:22px 27px 24px;border-radius:6px}@media (max-width: $screen-sm){.hubspot-override .hs-form fieldset.form-columns-2 .hs-form-field{padding:0}}';export{n as ds_page}