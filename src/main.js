import { createApp } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import './style.css'
import landscapeSvg from '../public/kufund-landscape.svg?raw'

const app = createApp({
  components: { ArrowUpRight },
  methods: { scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) } },
  template: `
    <div class="site-shell">
      <header class="nav-wrap">
        <nav class="nav container">
          <a class="brand" href="#top" @click.prevent="scrollTo('top')"><span class="brand-mark" aria-hidden="true"></span><span><b>KuFund</b><small>库丰基金</small></span></a>
          <div class="nav-links">
            <a href="#about" @click.prevent="scrollTo('about')">关于库丰</a><a href="#funds" @click.prevent="scrollTo('funds')">策略体系</a><a href="#strategies" @click.prevent="scrollTo('strategies')">策略品牌</a><a href="#contact" @click.prevent="scrollTo('contact')">联系我们</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section class="hero"><div class="container hero-layout"><div class="hero-inner"><div class="eyebrow"><span class="eyebrow-line"></span> KUFUND / 私募资产管理</div><h1><span>库</span>积价值<br><em><span>丰</span>盈未来</em></h1><p class="hero-motto">RESEARCH. DISCIPLINE. PERSPECTIVE.</p><p class="hero-description">以研究理解市场，以纪律管理风险。<br>积累每一分认知，着眼更长远的价值。</p><div class="hero-actions"><a class="hero-primary" href="#strategies" @click.prevent="scrollTo('strategies')">探索库丰策略 <ArrowUpRight :size="18"/></a><a class="hero-secondary" href="#about" @click.prevent="scrollTo('about')">认识库丰 <span>↗</span></a></div><div class="hero-markets"><span>股票 EQUITIES</span><span>期货 FUTURES</span><span>量化 QUANT</span></div></div><div class="brand-landscape" aria-hidden="true"><div class="landscape-label">K / F <span>积蓄 · 生长</span></div><div class="landscape-shape">${landscapeSvg}</div><div class="landscape-caption"><span>01 / THE KUFUND PERSPECTIVE</span><p>库，是积蓄的厚度。<br>丰，是生长的可能。</p></div></div></div><div class="hero-bottom container"><span>研究为基 · 风险为界 · 长期为向</span><a href="#about" @click.prevent="scrollTo('about')">向下探索 ↓</a></div></section>

        <section class="stats"><div class="container stats-grid"><div><strong>长期</strong><small>以时间沉淀价值</small></div><div><strong>专注</strong><small>以研究建立认知</small></div><div><strong>审慎</strong><small>以纪律管理风险</small></div><div><strong>同行</strong><small>以信任连接未来</small></div></div></section>

        <section id="about" class="section about"><div class="container split"><div><div class="section-tag">01 / ABOUT KUFUND</div><h2>以研究理解市场，<br><span>以纪律面对波动。</span></h2></div><div class="about-copy"><p>库丰基金以股票、期货、量化多策略为核心，为高净值客户及机构投资者提供审慎、专业、透明的私募资产管理服务。依托悟空量化的系统化投研能力与阿尔法鹿的敏感策略能力，构建更立体、更敏捷、更审慎的资产管理框架。</p><a class="arrow-link" href="#contact" @click.prevent="scrollTo('contact')">交流投资理念 <ArrowUpRight :size="16"/></a></div></div></section>

        <section id="funds" class="section funds"><div class="container"><div class="section-head"><div><div class="section-tag">02 / OUR APPROACH</div><h2>以研究为始，<br>以长期为终。</h2></div><p>期货与股票，构成市场研究的两条主线。<br>量化方法，贯穿信号、验证与执行。</p></div><div class="fund-cards"><article><div class="card-num">01</div><h3>期货研究</h3><p>关注期货市场的趋势、波动与量价结构，探索不同市场状态下的信号与仓位管理方法。</p><a href="#strategies" @click.prevent="scrollTo('strategies')">探索策略品牌 <ArrowUpRight :size="15"/></a></article><article><div class="card-num">02</div><h3>股票研究</h3><p>从股票市场的价格、成交量与横截面特征出发，研究选股逻辑、市场风格与组合构建。</p><a href="#strategies" @click.prevent="scrollTo('strategies')">探索策略品牌 <ArrowUpRight :size="15"/></a></article><article><div class="card-num">03</div><h3>量化研究</h3><p>将投资想法转化为可检验的规则，围绕数据处理、历史验证、样本外评估与执行约束持续迭代。</p><a href="#strategies" @click.prevent="scrollTo('strategies')">探索策略品牌 <ArrowUpRight :size="15"/></a></article></div></div></section>

        <section id="strategies" class="section strategy-brands"><div class="container"><div class="section-tag">03 / STRATEGY BRANDS</div><div class="parent-brand"><span>KUFUND / 库丰基金</span><h2>多策略私募资产管理</h2><p>旗下策略 · 股票 / 期货 / 量化</p><small>系统化投研与敏感策略，两种能力，共同构建审慎的投资框架。</small></div><div class="brand-grid"><article class="strategy-card wu"><div class="strategy-symbol">悟</div><div><small>WUQUANT · QUANTITATIVE</small><h3>WuQuant <span>悟空量化</span></h3><p>悟道 · 空仓 · 量价 · 数化</p><em>悟道市场，量化前行。在不确定性中建立纪律。</em></div></article><article class="strategy-card deer"><div class="strategy-symbol">鹿</div><div><small>ALPHADEER · SENSITIVE STRATEGY</small><h3>AlphaDeer <span>阿尔法鹿</span></h3><p>敏锐 · 灵活 · 适应 · 捕捉</p><em>敏锐感知，敏捷捕捉。在细微变化中发现 Alpha。</em></div></article></div></div></section>

        <section class="strategy-notes"><div class="container"><article class="method-panel wu-panel"><header class="method-heading"><span>01 / WuQuant</span><h3>悟空量化：让交易有方法，让风险有边界</h3></header><div class="principles"><div><b>悟道</b><p>理解市场规律与自身边界，不迷信短期波动。</p></div><div><b>空仓</b><p>尊重风险、懂得等待。知道何时不参与，也是一种能力。</p></div><div><b>量价</b><p>从成交与价格中识别结构信号，以数据检验交易假设。</p></div><div><b>数化</b><p>用数据、模型和系统提升决策一致性，以纪律落实执行。</p></div></div></article><article class="method-panel deer-panel"><header class="method-heading"><span>02 / AlphaDeer</span><h3>阿尔法鹿：感知变化，审慎响应</h3></header><div class="deer-description"><p>阿尔法鹿代表「敏感策略」能力。以敏捷感知、快速验证和严格风控为核心，关注因子变化、交易结构变化与市场情绪变化，在风险边界内寻找更具时效性的 Alpha 来源。</p><div class="research-flow"><span>感知信号</span><i>→</i><span>识别状态</span><i>→</i><span>过滤噪音</span><i>→</i><span>评估响应</span></div><p>敏感不是冲动，而是更精细的观察。通过快速验证与持续迭代提升环境适应能力；敏锐于市场，克制于风险。</p></div></article><p class="strategy-caption">以上为策略品牌理念与研究方向介绍，不代表已发行产品或业绩表现。</p></div></section>

        <section id="insight" class="insight"><div class="container insight-inner"><div><div class="section-tag light">04 / INVESTMENT INSIGHT</div><h2>穿越噪音，<br>看见长期。</h2><p>我们持续记录对市场、企业与时代的思考。</p></div><div class="insight-list"><article><span>投资思考 · 01</span><b>在不确定中寻找确定性</b><p>从期货与股票的量价结构中提出假设，再通过历史验证与样本外观察审视信号。研究同时关注交易成本、流动性与失效情形。</p></article><article><span>投资思考 · 02</span><b>关于信号、空仓与纪律</b><p>交易机会需要等待。空仓是一种主动的仓位选择；当信号不清晰或条件不满足时，保留判断与行动的空间。</p></article></div></div></section>

        <section id="risk" class="section risk-section"><div class="container"><div class="section-tag">05 / RISK & DISCIPLINE</div><h2>风险优先，纪律执行。</h2><div class="principles"><div><b>研究验证</b><p>关注样本外表现、模型假设与策略失效情形，避免以单一结果替代完整判断。</p></div><div><b>仓位边界</b><p>以风险预算审视仓位、集中度和市场暴露，尊重流动性与执行约束。</p></div><div><b>持续审视</b><p>关注因子、市场状态与交易成本变化，持续复核信号与策略适应性。</p></div><div><b>透明沟通</b><p>以正式文件明确服务边界、产品风险及信息披露安排。</p></div></div></div></section>
        <section id="clients" class="section clients-section"><div class="container split"><div><div class="section-tag">06 / WHO WE SERVE</div><h2>专业同行，<br><span>始于理解与信任。</span></h2></div><div><h3>高净值客户</h3><p>关注风险承受能力、资产配置目标与投资期限，以充分沟通建立长期关系。</p><h3>机构投资者</h3><p>围绕策略逻辑、研究方法、风险边界与信息透明度开展专业交流。</p><a class="arrow-link" href="#disclosure" @click.prevent="scrollTo('disclosure')">了解合规与风险揭示 <ArrowUpRight :size="16"/></a></div></div></section>
        <section id="contact" class="section contact"><div class="container contact-inner"><div><div class="section-tag">07 / GET IN TOUCH</div><h2>一起，走得更远。</h2><p>无论是投资咨询，还是职业机会，我们期待听见你的声音。</p></div><div class="contact-placeholder"><span>期待与您建立联系</span><small>官方联系方式即将公布</small></div></div></section>
        <section id="disclosure" class="disclosure"><div class="container"><div class="section-tag">08 / COMPLIANCE & DISCLOSURE</div><h3>合规与风险揭示</h3><p>投资有风险，入市需谨慎。私募产品仅面向合格投资者募集，股票、期货及量化策略均存在市场波动、策略失效、模型风险、流动性风险等不确定性。</p><p><span class="disclosure-name">库丰基金</span>、<span class="disclosure-name">悟空量化</span>、<span class="disclosure-name">阿尔法鹿</span>相关品牌内容不构成任何收益承诺或投资建议，具体产品信息、风险揭示及服务内容以正式法律文件为准。</p></div></section>
      </main>
      <footer><div class="container footer-inner"><div class="brand"><span class="brand-mark" aria-hidden="true"></span><span><b>KuFund</b><small>库丰基金</small></span></div><div class="footer-copyright"><span>© 2026 KuFund. All rights reserved.</span><div class="brand-domains" aria-label="品牌域名"><span>库丰基金 <b>KuFund.com</b></span><span>悟空量化 <b>WuQuant.com</b></span><span>阿尔法鹿 <b>AlphaDeer.com</b></span></div></div><span>投资有风险，决策需谨慎</span></div></footer>
    </div>`
})
app.mount('#app')
