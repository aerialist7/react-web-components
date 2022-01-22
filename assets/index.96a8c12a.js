import{r as u,w as n,s as p,C as f,R as c,L as m,j as e,c as i,a as h}from"./vendor.10386772.js";const g=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function d(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(o){if(o.ep)return;o.ep=!0;const t=d(o);fetch(o.href,t)}};g();function b(){const[a,r]=u.exports.useState(!1);return u.exports.useEffect(()=>{a&&setTimeout(()=>r(!1),3e3)},[a]),[a,r]}const v=n("clipboard-copy"),C=p(c,"clipboard-copy",f,{onClipboardCopy:"clipboard-copy"}),L=n("lite-youtube"),I=p(c,"lite-youtube",m,{onLiteYoutubeIframeLoaded:"liteYoutubeIframeLoaded"});function w(){const[a,r]=b(),[d,l]=b();return e("div",{css:i`
                display: grid;
                grid-template-rows: 100px 400px;
                grid-template-areas:
                    "clipboard-copy"
                    "lite-youtube";
                `},e("div",{css:i`grid-area: clipboard-copy`},e("h3",null,"@github/clipboard-copy-element"),e("div",{css:i`
                        display: grid;
                        grid-template-columns: auto auto;
                        grid-template-areas:
                            "clipboard-copy-1 clipboard-copy-2";
                        `},e(v,{css:i`grid-area: clipboard-copy-1`,value:"Click here to copy the text to clipboard",clipboardCopy:()=>r(!0)},e("span",null,"Click here to copy the text to clipboard"),e("br",null),e("span",{hidden:!a},"Copied! Now paste the value somewhere")),e(C,{css:i`grid-area: clipboard-copy-2`,value:"Click here to copy the text to clipboard",onClipboardCopy:()=>l(!0)},e("span",null,"Click here to copy the text to clipboard"),e("br",null),e("span",{hidden:!d},"Copied! Now paste the value somewhere")))),e("div",{css:i`grid-area: lite-youtube`},e("h3",null,"@justinribeiro/lite-youtube"),e("div",{css:i`
                        height: 100%;
                        display: grid;
                        grid-template-columns: auto auto;
                        grid-template-areas:
                            "lite-youtube-1 lite-youtube-2";
                        `},e(L,{css:i`
                            height: 100%;
                            grid-area: lite-youtube-1;
                        `,videoId:"guJLfqTFfIw",videoPlay:"Mirar",videoTitle:"This is a video title",videoStartAt:5,liteYoutubeIframeLoaded:()=>console.log("[liteYoutubeIframeLoaded]")}),e(I,{css:i`
                            height: 100%;
                            grid-area: lite-youtube-2;
                        `,videoId:"guJLfqTFfIw",videoPlay:"Mirar",videoTitle:"This is a video title",videoStartAt:5,onLiteYoutubeIframeLoaded:()=>console.log("[liteYoutubeIframeLoaded]")}))))}const x=e(c.StrictMode,null,e(w,null)),y=document.createElement("div");document.body.appendChild(y);h.render(x,y);
