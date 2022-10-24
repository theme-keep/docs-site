import{_ as e,c as i,o as l,a}from"./app.f1d00a47.js";const _=JSON.parse('{"title":"\u8D21\u732E\u51C6\u5219","description":"","frontmatter":{},"headers":[],"relativePath":"contribute/contribute.md"}'),t={name:"contribute/contribute.md"},o=a('<h1 id="\u8D21\u732E\u51C6\u5219" tabindex="-1">\u8D21\u732E\u51C6\u5219 <a class="header-anchor" href="#\u8D21\u732E\u51C6\u5219" aria-hidden="true">#</a></h1><p>\u5F88\u9AD8\u5174\u60A8\u6709\u5174\u8DA3\u4E3A Keep \u53C2\u4E0E\u4EE3\u7801\u8D21\u732E\uFF0C\u5728\u8FDB\u884C\u4EE3\u7801\u8D21\u732E\u4E4B\u524D\uFF0C\u8BF7\u52A1\u5FC5\u82B1\u4E00\u4E9B\u65F6\u95F4\u901A\u8BFB\u4EE5\u4E0B\u51C6\u5219\uFF1A</p><ul><li><a href="#pull-request-%e5%87%86%e5%88%99">Pull request \u51C6\u5219</a></li><li><a href="#%e5%bc%80%e5%8f%91%e4%b9%8b%e5%89%8d%e7%9a%84%e5%87%86%e5%a4%87">\u5F00\u53D1\u4E4B\u524D\u7684\u51C6\u5907</a></li><li><a href="#%e6%8f%90%e4%ba%a4%e4%bf%a1%e6%81%af%e8%a7%84%e8%8c%83">\u63D0\u4EA4\u4FE1\u606F\u89C4\u8303</a></li></ul><h2 id="pull-request-\u51C6\u5219" tabindex="-1">Pull request \u51C6\u5219 <a class="header-anchor" href="#pull-request-\u51C6\u5219" aria-hidden="true">#</a></h2><p>\u8981\u77E5\u9053\uFF0C<code>master</code> \u5206\u652F\u53EA\u662F\u6700\u65B0\u7A33\u5B9A\u7248\u672C\u7684\u4E00\u4E2A\u5FEB\u7167\u3002\u6240\u6709\u7684\u5F00\u53D1\u90FD\u5E94\u8BE5\u5728\u4E13\u95E8\u7684\u5206\u652F\u4E2D\u8FDB\u884C\uFF0C<strong>\u4E0D\u8981\u5411 <code>master</code> \u5206\u652F\u63D0\u4EA4 PRs</strong>\u3002</p><ul><li>\u5C06\u4ED3\u5E93 fork \u5230\u4F60\u7684 Github\uFF0C\u5E76 clone \u5230\u672C\u5730</li><li>\u5207\u6362\u5230<strong>\u65B0\u5206\u652F</strong>\uFF08\u4F8B\u5982 <code>patch-1</code>\uFF09\u4E0A\u5F00\u53D1</li><li>\u5C06\u672C\u5730\u4FEE\u6539\u8FDB\u884C\u63D0\u4EA4</li><li>\u5C06\u63D0\u4EA4 push \u5230 fork \u7684\u4ED3\u5E93\u4E0B</li><li>\u521B\u5EFA\u4E00\u4E2A Pull request \u5230 Keep \u4E3B\u9898\u4ED3\u5E93\u7684 <strong><code>dev</code></strong> \u5206\u652F</li></ul><h2 id="\u5F00\u53D1\u4E4B\u524D\u7684\u51C6\u5907" tabindex="-1">\u5F00\u53D1\u4E4B\u524D\u7684\u51C6\u5907 <a class="header-anchor" href="#\u5F00\u53D1\u4E4B\u524D\u7684\u51C6\u5907" aria-hidden="true">#</a></h2><p>\u8BF7\u786E\u4FDD\u4F60\u7684\u672C\u5730\u73AF\u5883\u6B63\u786E\u5B89\u88C5 <a href="http://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a>\u3001<a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank" rel="noreferrer">npm</a>\u548C Git\u3002</p><h2 id="\u63D0\u4EA4\u4FE1\u606F\u89C4\u8303" tabindex="-1">\u63D0\u4EA4\u4FE1\u606F\u89C4\u8303 <a class="header-anchor" href="#\u63D0\u4EA4\u4FE1\u606F\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5BF9\u9879\u76EE\u7684 git \u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F\u8FDB\u884C\u7EDF\u4E00\u683C\u5F0F\u7EA6\u5B9A\uFF0C\u6BCF\u6761\u63D0\u4EA4\u4FE1\u606F\u7531 <code>type</code> + <code>subject</code> \u7EC4\u6210\uFF0C\u8FD9\u5C06\u63D0\u5347\u9879\u76EE\u65E5\u5FD7\u7684\u53EF\u8BFB\u6027\u3002</p><ul><li><code>type</code> \u7528\u4E8E\u63CF\u8FF0\u6B64\u6B21\u63D0\u4EA4\u4FE1\u606F\u7684\u610F\u4E49\uFF0C\u5168\u5C0F\u5199\uFF0C\u4EC5\u5305\u62EC\u5982\u4E0B\u7C7B\u578B\uFF1A <ul><li><code>feat</code>\uFF1A\u65B0\u529F\u80FD</li><li><code>fix</code>\uFF1ABug \u4FEE\u590D</li><li><code>refactor</code>\uFF1A\u91CD\u6784\uFF08\u65E2\u4E0D\u662F\u65B0\u589E\u529F\u80FD\uFF0C\u4E5F\u4E0D\u662F\u4FEE\u6539 Bug \u7684\u4EE3\u7801\u53D8\u52A8\uFF09</li><li><code>docs</code>\uFF1A\u6587\u6863\u53D8\u5316</li><li><code>style</code>\uFF1A\u4EE3\u7801\u683C\u5F0F\u53D8\u5316\uFF08\u7A7A\u683C\u3001\u7F29\u8FDB\u3001\u6362\u884C\u3001\u5206\u53F7\u7B49\uFF09</li><li><code>test</code>\uFF1A\u4EE3\u7801\u6D4B\u8BD5\u76F8\u5173</li><li><code>chore</code>\uFF1A\u57FA\u7840\u6784\u5EFA\u5DE5\u5177\u6216\u4F9D\u8D56\u5E93\u7684\u53D8\u5316\uFF08\u4E0D\u6D89\u53CA\u6E90\u7801\uFF09</li><li><code>revert</code>\uFF1A\u4EE3\u7801\u56DE\u6EDA\uFF08\u56DE\u9000\u5DF2\u7ECF\u5B58\u5728\u7684 <code>commit</code>\uFF09</li></ul></li><li><code>subject</code> \u7528\u4E8E\u7B80\u8981\u63CF\u8FF0\u4FEE\u6539\u53D8\u66F4\u7684\u5185\u5BB9\uFF0C\u5982 <code>Update quick start in readme.md</code><ul><li>\u53E5\u5C3E\u4E0D\u8981\u4F7F\u7528\u7B26\u53F7</li><li>\u4F7F\u7528\u4E00\u822C\u73B0\u5728\u65F6\u3001\u7948\u4F7F\u53E5\u8BED\u6C14</li></ul></li></ul><h2 id="keep-to-do" tabindex="-1">Keep To do <a class="header-anchor" href="#keep-to-do" aria-hidden="true">#</a></h2><h3 id="completed-\u5DF2\u5B8C\u6210" tabindex="-1">Completed \u5DF2\u5B8C\u6210 <a class="header-anchor" href="#completed-\u5DF2\u5B8C\u6210" aria-hidden="true">#</a></h3><ul><li>\u54CD\u5E94\u5F0F\u8BBE\u8BA1\uFF0C\u9002\u914D\u5E73\u677F/\u624B\u673A</li><li>\u65E5\u95F4/\u591C\u95F4\u6A21\u5F0F\u81EA\u7531\u5207\u6362</li><li>\u591A\u79CD\u4EE3\u7801\u9AD8\u4EAE\u65B9\u6848</li><li>\u591A\u8BED\u8A00\uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u4E2D/\u82F1\u6587</li><li>\u5185\u7F6E\u591A\u6B3E\u8BC4\u8BBA\u63D2\u4EF6</li><li>\u652F\u6301\u5168\u7AD9\u6587\u7AE0\u641C\u7D22</li><li>\u652F\u6301\u6587\u7AE0\u9876\u7F6E</li><li>\u4EE3\u7801\u5757\u4E00\u952E\u590D\u5236</li><li>TOC \u76EE\u5F55\u7ED3\u6784</li><li>RSS \u8BA2\u9605</li><li>\u7F51\u7AD9 UV \u548C PV \u7EDF\u8BA1</li><li>\u6587\u7AE0\u9605\u8BFB\u6B21\u6570\u3001\u5B57\u6570\u548C\u9605\u8BFB\u65F6\u957F\u7EDF\u8BA1</li><li>\u6587\u7AE0\u9875\u5927\u56FE\u67E5\u770B\u5668</li><li>\u6587\u7AE0\u7248\u6743\u4FE1\u606F</li><li>\u5728\u7EBF\u66F4\u6539\u5B57\u53F7</li><li>\u9875\u9762\u6EDA\u52A8\u8FDB\u5EA6\u6761\u63D0\u793A</li><li>\u4E00\u952E\u5FEB\u901F\u56DE\u5230\u9876\u90E8</li><li>\u652F\u6301 CDN</li><li>\u652F\u6301 PJAX</li><li>\u56FE\u7247\u61D2\u52A0\u8F7D</li></ul><h3 id="unfinished-\u672A\u5B8C\u6210" tabindex="-1">Unfinished \u672A\u5B8C\u6210 <a class="header-anchor" href="#unfinished-\u672A\u5B8C\u6210" aria-hidden="true">#</a></h3><ul><li>\u6587\u7AE0\u70B9\u8D5E\u529F\u80FD</li><li>\u4EE3\u7801\u5757\u6298\u53E0</li><li>\u5728\u7EBF\u66F4\u6539\u5B57\u4F53</li><li>\u6253\u8D4F\u529F\u80FD</li><li>\u5DE6\u4E0A\u89D2\u589E\u52A0 logo \u914D\u7F6E</li><li>\u5934\u90E8\u83DC\u5355\u680F\u4F18\u5316\uFF08\u900F\u660E\u3001\u534A\u900F\u660E\uFF09</li><li>\u6587\u7AE0 meta \u589E\u52A0\u8BC4\u8BBA\u6570\u91CF</li><li>\u5FAE\u4FE1\u5206\u4EAB\u4E8C\u7EF4\u7801\u751F\u6210</li><li>\u5206\u7C7B\u9875\u9762\u4F18\u5316\uFF08\u6298\u53E0\u3001\u7F29\u8FDB\u3001\u5C42\u7EA7\u3001\u5B57\u4F53\u5927\u5C0F\u3001\u6587\u7AE0\u6570\u91CF\uFF09</li><li>\u589E\u52A0 Disqus \u8BC4\u8BBA\u7CFB\u7EDF</li><li>......</li></ul><h2 id="\u8D21\u732E\u4EBA\u5458" tabindex="-1">\u8D21\u732E\u4EBA\u5458 <a class="header-anchor" href="#\u8D21\u732E\u4EBA\u5458" aria-hidden="true">#</a></h2><p>\u611F\u8C22\u6240\u6709\u4E3A Keep \u4E3B\u9898\u505A\u51FA\u8D21\u732E\u7684\u4EBA\uFF01</p><a href="https://github.com/XPoet/hexo-theme-keep/graphs/contributors"><img src="https://opencollective.com/hexo-theme-keep/contributors.svg?width=980"></a>',19),d=[o];function r(c,n,s,h,u,p){return l(),i("div",null,d)}const m=e(t,[["render",r]]);export{_ as __pageData,m as default};
