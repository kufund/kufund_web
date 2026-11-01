import { createApp } from 'vue'
import { ArrowUpRight, Menu, X } from 'lucide-vue-next'
import './style.css'
import landscapeSvg from './assets/kufund-landscape.svg?raw'
import { animateLandscape } from './landscape-animation.js'

const app = createApp({
  components: { ArrowUpRight, Menu, X },
  data() { return { menuOpen: false } },
  mounted() {
    this.stopLandscapeAnimation = animateLandscape(this.$el.querySelector('.landscape-shape svg'))
    this.desktopQuery = window.matchMedia('(min-width: 761px)')
    this.desktopQuery.addEventListener('change', this.resetMenu)
    document.addEventListener('click', this.handleOutsideClick)
    document.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    this.stopLandscapeAnimation?.()
    this.desktopQuery.removeEventListener('change', this.resetMenu)
    document.removeEventListener('click', this.handleOutsideClick)
    document.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    resetMenu() { this.menuOpen = false },
    handleOutsideClick(event) {
      if (this.menuOpen && !event.composedPath().includes(this.$refs.navigation)) this.resetMenu()
    },
    handleKeydown(event) {
      if (event.key === 'Escape' && this.menuOpen) {
        this.resetMenu()
        this.$refs.menuToggle.focus()
      }
    },
    scrollTo(id) {
      this.resetMenu()
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      document.getElementById(id)?.scrollIntoView({ behavior })
    }
  },
  template: `
    <div class="site-shell">
      <header class="nav-wrap">
        <nav class="nav container" ref="navigation" aria-label="主导航">
          <a class="brand" href="#top" @click.prevent="scrollTo('top')"><span class="brand-mark" aria-hidden="true"></span><span><b>KuFund</b><small>库丰基金</small></span></a>
          <button class="mobile-toggle" ref="menuToggle" type="button" :aria-expanded="menuOpen" aria-controls="main-navigation" :aria-label="menuOpen ? '关闭导航菜单' : '打开导航菜单'" @click="menuOpen = !menuOpen"><X v-if="menuOpen" :size="24" aria-hidden="true"/><Menu v-else :size="24" aria-hidden="true"/></button>
          <div class="nav-links" id="main-navigation" :class="{ open: menuOpen }">
            <a href="#about" @click.prevent="scrollTo('about')">关于库丰</a><a href="#funds" @click.prevent="scrollTo('funds')">投资策略</a><a href="#strategies" @click.prevent="scrollTo('strategies')">产品矩阵</a><a href="#contact" @click.prevent="scrollTo('contact')">联系我们</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section class="hero"><div class="container hero-layout"><div class="hero-inner"><div class="eyebrow"><span class="eyebrow-line"></span> KUFUND / 私募资产管理</div><h1><span>库</span>积价值<br><em><span>丰</span>盈未来</em></h1><p class="hero-motto">RESEARCH. DISCIPLINE. PERSPECTIVE.</p><p class="hero-description"><span class="copy-sentence">以研究理解市场，以纪律管理风险。</span><span class="copy-sentence">积累每一分认知，着眼更长远的价值。</span></p><div class="hero-actions"><a class="hero-primary" href="#strategies" @click.prevent="scrollTo('strategies')"><span>探索库丰策略</span><ArrowUpRight :size="18" :stroke-width="1.6" aria-hidden="true"/></a><a class="hero-secondary" href="#about" @click.prevent="scrollTo('about')"><span>认识库丰</span><ArrowUpRight :size="18" :stroke-width="1.6" aria-hidden="true"/></a></div><div class="hero-markets"><span>研究 RESEARCH</span><span>策略 STRATEGY</span><span>风控 RISK</span></div></div><div class="brand-landscape" aria-hidden="true"><div class="landscape-label">KUFUND <span>积蓄 · 生长</span></div><div class="landscape-shape">${landscapeSvg}</div><div class="landscape-caption"><span>01 / THE KUFUND PERSPECTIVE</span><p>库，是积蓄的厚度。<br>丰，是生长的可能。</p></div></div></div><div class="hero-bottom container"><span>研究为基 · 风险为界 · 长期为向</span><a href="#about" @click.prevent="scrollTo('about')">向下探索 ↓</a></div></section>

        <section class="stats"><div class="container stats-grid"><div><strong>长期</strong><small>以时间沉淀价值</small></div><div><strong>专注</strong><small>以研究建立认知</small></div><div><strong>审慎</strong><small>以纪律管理风险</small></div><div><strong>同行</strong><small>以信任连接未来</small></div></div></section>

        <section id="about" class="section about"><div class="container split"><div><div class="section-tag">01 / ABOUT KUFUND</div><h2>以研究理解市场，<br><span>以纪律面对波动。</span></h2><p class="investment-conviction">研究为基，风险为界，长期为向。</p></div><div class="about-copy"><p>库丰基金侧重投资管理，围绕投资目标、组合配置与风险约束，构建研究驱动的多策略框架。悟空量化侧重量化交易，阿尔法鹿侧重信号判断，共同为投资决策提供研究与方法支持。</p><a class="arrow-link" href="#contact" @click.prevent="scrollTo('contact')">交流投资理念 <ArrowUpRight :size="16"/></a></div></div></section>

        <section id="funds" class="section funds"><div class="container"><div class="section-head"><div><div class="section-tag">02 / OUR APPROACH</div><h2>以研究为始，<br>以长期为终。</h2></div><p><span class="copy-sentence">以开放视野研究市场，以持续验证拓展策略。</span><span class="copy-sentence">量化方法，贯穿信号、验证与执行。</span></p></div><div class="fund-cards"><article><div class="card-num">01</div><h3>市场研究</h3><p>关注不同市场的运行机制、状态与结构变化，研究风险特征、交易条件与机会来源。</p><a href="#strategies" @click.prevent="scrollTo('strategies')">查看产品矩阵 <ArrowUpRight :size="15"/></a></article><article><div class="card-num">02</div><h3>策略研究</h3><p>围绕投资逻辑、市场状态与组合构建，研究策略适用条件、风险收益特征及协同关系。</p><a href="#strategies" @click.prevent="scrollTo('strategies')">查看产品矩阵 <ArrowUpRight :size="15"/></a></article><article><div class="card-num">03</div><h3>量化研究</h3><p>将投资假设转化为可检验的规则，围绕数据质量、历史回测与样本外评估持续完善策略。</p><a href="#strategies" @click.prevent="scrollTo('strategies')">查看产品矩阵 <ArrowUpRight :size="15"/></a></article></div></div></section>

        <section id="strategies" class="section strategy-brands"><div class="container"><div class="section-tag">03 / OUR BRANDS</div><div class="parent-brand"><span>库丰基金 / 投资管理</span><h2 class="parent-brand-name">KuFund <span>库丰基金</span></h2><p>投资管理 · 组合配置 · 风险统筹</p><small>以量化交易与信号判断为支持，统筹投资目标与风险边界。</small></div><div class="brand-grid"><article class="strategy-card wu"><div class="strategy-symbol">悟</div><div><small>WUQUANT · QUANTITATIVE TRADING</small><h3>WuQuant <span>悟空量化</span></h3><p>量化交易 · 研究验证 · 纪律执行</p><em class="brand-conviction">无趣，是交易里的自律。</em></div></article><article class="strategy-card deer"><div class="strategy-symbol">鹿</div><div><small>ALPHADEER · SIGNAL ASSESSMENT</small><h3>AlphaDeer <span>阿尔法鹿</span></h3><p>信号判断 · 状态识别 · 噪音过滤</p><em class="brand-conviction">敏锐于市场，克制于风险。</em></div></article></div></div></section>

        <section class="strategy-notes"><div class="container"><article class="method-panel wu-panel"><header class="method-heading"><span>01 / WuQuant</span><h3><span class="heading-phrase">悟空量化：</span><span class="heading-phrase">量化驱动，</span><span class="heading-phrase">纪律执行</span></h3></header><div class="principles"><div><b>悟道</b><p>理解市场状态，以研究建立认知，审慎界定能力边界。</p></div><div><b>空仓</b><p>条件未满足时保持空仓，以耐心与纪律保留决策空间。</p></div><div><b>量价</b><p>观察量价结构，以数据检验假设，识别有效市场信号。</p></div><div><b>数化</b><p>以回测与样本外验证评估策略，以系统规范交易执行。</p></div></div><div class="wu-discipline"><h4>无趣，是交易里的自律。</h4><p>以实证研究支持判断，以执行纪律约束情绪。在既定规则内决策，在持续验证中完善。</p><small class="wu-discipline-signature">WuQuant · Less noise, more evidence.</small></div></article><article class="method-panel deer-panel"><header class="method-heading"><span>02 / AlphaDeer</span><h3><span class="heading-phrase">阿尔法鹿：</span><span class="heading-phrase">感知变化，</span><span class="heading-phrase">审慎研判</span></h3></header><div class="deer-description"><p>聚焦信号判断，关注市场结构与情绪变化，评估信号的有效性、时效性及适用条件，为决策提供参考。</p><div class="research-flow"><span>感知信号</span><i>→</i><span>识别状态</span><i>→</i><span>过滤噪音</span><i>→</i><span>评估信号</span></div><div class="deer-conviction"><h4>敏锐于市场，克制于风险。</h4><p>以细致观察识别变化，以交叉验证审视信号，在不确定性中保持判断的审慎与独立。</p></div></div></article><p class="strategy-caption">以上为品牌定位、投资理念与研究方向介绍，不代表已发行产品或业绩表现。</p></div></section>

        <section id="insight" class="insight"><div class="container insight-inner"><div><div class="section-tag light">04 / INVESTMENT INSIGHT</div><h2>穿越噪音，<br>看见长期。</h2><p>以系统约束行动，以证据校准判断。</p></div><div class="insight-list"><article><span>投资思考 · 01</span><b>信号先于行动，验证先于调整。</b><p>以经验证的系统支持交易决策，结合历史回测、样本外表现与交易成本评估策略。调整以实证检验为依据，执行遵循既定规则。</p></article><article><span>投资思考 · 02</span><b>要尊重趋势，不预设拐点。</b><p>尊重市场趋势，依据信号决策，不主观预设拐点。面对震荡或方向不明的环境，审慎评估策略适用性；缺乏有效信号时保持等待，不为参与而交易。</p></article></div></div></section>

        <section id="risk" class="section risk-section"><div class="container"><div class="section-tag">05 / RISK & DISCIPLINE</div><h2>风险优先，纪律执行。</h2><div class="principles"><div><b>系统为据</b><p>以回测与持续验证支持策略决策，不以主观预期替代信号，保持研究方法与执行标准的一致性。</p></div><div><b>纪律为先</b><p>入场、持有与退出均遵循既定规则；条件未满足时维持空仓，减少情绪驱动的交易与主观干预。</p></div><div><b>动态风控</b><p>在风险预算内，结合盈亏与市场状态管理止盈止损，区分盈利保护与亏损控制，遵循预设规则。</p></div><div><b>顺势而为</b><p>尊重趋势，依据信号决策；震荡环境下审慎评估策略适用性，条件不足时保持等待，避免主观干预。</p></div></div></div></section>
        <section id="clients" class="section clients-section"><div class="container split"><div><div class="section-tag">06 / WHO WE SERVE</div><h2>专业同行，<br><span>始于理解与信任。</span></h2></div><div><h3>高净值客户</h3><p>关注风险承受能力、资产配置目标与投资期限，以充分沟通建立长期关系。</p><h3>机构投资者</h3><p>围绕策略逻辑、研究方法与风险边界开展专业交流，以透明的信息沟通支持投资评估。</p><a class="arrow-link" href="#disclosure" @click.prevent="scrollTo('disclosure')">了解合规与风险揭示 <ArrowUpRight :size="16"/></a></div></div></section>
        <section id="contact" class="section contact"><div class="container contact-inner"><div><div class="section-tag">07 / GET IN TOUCH</div><h2>始于交流，同行致远。</h2><p>无论是投资咨询，还是职业机会，我们期待听见你的声音。</p></div><div class="contact-placeholder"><span>官方联系邮箱</span><a class="contact-email" href="mailto:contact@kufund.com">contact@kufund.com</a></div></div></section>
        <section id="disclosure" class="disclosure"><div class="container"><div class="section-tag">08 / COMPLIANCE & DISCLOSURE</div><h3>合规与风险揭示</h3><p>投资有风险，入市需谨慎。私募产品仅面向合格投资者募集，各类投资及策略均存在市场波动、策略失效、模型风险、流动性风险等不确定性。</p><p><span class="disclosure-name">库丰基金</span>、<span class="disclosure-name">悟空量化</span>、<span class="disclosure-name">阿尔法鹿</span>相关品牌内容不构成任何收益承诺或投资建议，具体产品信息、风险揭示及服务内容以正式法律文件为准。</p></div></section>
      </main>
      <footer><div class="container footer-inner"><div class="brand"><span class="brand-mark" aria-hidden="true"></span><span><b>KuFund</b><small>库丰基金</small></span></div><div class="footer-copyright"><span>© 2026 KuFund. All rights reserved.</span><div class="brand-domains" aria-label="品牌域名"><span>库丰基金 <b>KuFund.com</b></span><span>悟空量化 <b>WuQuant.com</b></span><span>阿尔法鹿 <b>AlphaDeer.com</b></span></div></div><span>投资有风险，决策需谨慎</span></div></footer>
    </div>`
})
app.mount('#app')
