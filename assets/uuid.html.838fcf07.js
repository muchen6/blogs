import{d as n}from"./app.38e86a53.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="uuid" tabindex="-1"><a class="header-anchor" href="#uuid" aria-hidden="true">#</a> uuid</h1><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>captchaPath<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getCaptcha<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getUUID <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u751F\u6210\u968F\u673A\u6570 \u4F20\u7ED9src</span>
<span class="token function">getCaptcha</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> uuid <span class="token operator">=</span> <span class="token function">getUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/xxx/base/verify/captcha?key=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>uuid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">const</span> baseUrl <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_URL</span> <span class="token comment">// .env.production \u6587\u4EF6 VUE_APP_BASE_URL</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>formData<span class="token punctuation">.</span>uuid <span class="token operator">=</span> uuid<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>captchaPath <span class="token operator">=</span> baseUrl <span class="token operator">+</span> path<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// @/utils/index.js \u7701\u7565</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getUUID</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx&#39;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[xy]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token parameter">c</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>c <span class="token operator">===</span> <span class="token string">&#39;x&#39;</span> <span class="token operator">?</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">16</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token string">&#39;r&amp;0x3&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;0x8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7B49\u4EF7\u65B9\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">guid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx&#39;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[xy]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> r <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">16</span><span class="token operator">|</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u628Ar\u53D8\u6210\u4E86\u6574\u6570</span>
    <span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> r <span class="token operator">:</span> <span class="token punctuation">(</span>r<span class="token operator">&amp;</span><span class="token number">0x3</span><span class="token operator">|</span><span class="token number">0x8</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// x\u76F4\u63A5\u66FF\u6362\uFF1By\u7279\u6B8A\u5904\u7406 r&amp;0x3|0x8 ,\u56E0\u4E3A\u4F4D\u8FD0\u7B97\u6709\u987A\u5E8F\uFF0C\u8FD9\u6837\u7684\u503C\u5C31\u9650\u5B9A\u5728\u4E00\u4E2A\u8303\u56F4\u4E86\uFF0C\u5176\u8303\u56F4\u5C31\u662F\u4E8C\u8FDB\u5236 1000-1011\u8FD9\u68374\u4E2A\u6570\u5B57\u4E86\uFF0C\u7136\u540E\u8F93\u51FA\u4E3A8,9,A,B\u8FD9\u68374\u4E2A\u5B57\u7B26\u4E86\u3002</span>
    <span class="token keyword">return</span> v<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,4);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
