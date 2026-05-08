const projectData = {
  chordflow: {
    title: "ChordFlow 像素乐理助手",
    meta: "C 端 · 在研 · 个人独立开发（AI产品经理）",
    desc: "针对“学乐理门槛高”和“创作门槛高”两个痛点，把主链路聚焦为：喜好歌单学习 + 哼唱创作。",
    bullets: [
      "完成 5 类目标用户深度访谈，明确产品定位和核心人群。",
      "定义三项核心验收：和弦解析正确率、哼唱识别效果、生成满意度。",
      "当前处于小程序开发测试阶段，后续推进和弦库、模型接入、歌单同步接口。"
    ]
  },
  mediaio: {
    title: "Media.io AI 工具-视频长改短功能迭代优化 5.0",
    meta: "C 端 · 实习参与 · 2024.08 - 2024.09",
    desc: "基于用户反馈与漏斗模型分析，定位旧版导出成功率仅 6.32% 的核心原因，围绕 URL 分享主链路进行流程减法和云端化优化。",
    bullets: [
      "聚焦 YouTube 分享场景：去掉中间加载页，支持用户提交链接后快速创建工程并进入处理流程。",
      "增强云端处理能力：用户无需停留在处理页等待，降低流程中断和跳失。",
      "优化首页信息结构与参数预设：减少用户配置步骤，补充清晰 URL 引导，并参考 Opus 方案补齐移动端 H5 适配。",
      "结果：上线 1 个月内生成速率提升 30%+，用户流失率较旧版本降低 12.65%。"
    ]
  },
  aeroband: {
    title: "AeroBand 教学功能模块",
    meta: "C 端 · 已上线 · 乐器产品经理",
    desc: "负责智能吉他硬件与 APP 的教学功能策划，围绕新手用户提升学习留存和使用体验。",
    bullets: [
      "搭建用户研究 SOP，整理 300+ 用户反馈，完成 50+ 可用性测试。",
      "数据驱动迭代：上线后退货率下降 12.4%，购买率提升 9.8%。",
      "参与教学模块 0-1 方案落地，协助建设基础教学曲谱库。"
    ]
  },
  tianfu: {
    title: "天孚光通信 AI 安全建设项目",
    meta: "B 端 · 已交付 · 深信服售前产品经理",
    desc: "将复杂企业安全需求抽象为可落地的产品化方案，推进跨团队协作和验收闭环。",
    bullets: [
      "拆解四类核心场景：合规、告警闭环、暴露面收敛、出海访问优化。",
      "引入 AI 告警聚合与分级处置逻辑，定义准确率与覆盖率验收指标。",
      "项目中标 200 万+，完成方案落地与能力交付。"
    ]
  },
  yieryi: {
    title: "益而益远程办公安全建设项目",
    meta: "B 端 · 规模化交付 · 1400+ 点位",
    desc: "面向多分支企业远程办公场景，解决多认证源、系统发布与暴露面收敛问题。",
    bullets: [
      "先完成温州重点业务 PoC（100 点位），验证业务可达与端口暴露控制。",
      "协调 HR/OA 双认证源并推动 OAuth2 定制接口开发。",
      "最终从总部推广至多分支，共完成 1400+ 点位部署交付。"
    ]
  },
  suda: {
    title: "苏州大学 AI 算力资源池平台",
    meta: "B 端 · AI 基建平台 · 高校场景",
    desc: "围绕高校算力分散与高成本外采问题，设计统一调度与计费的算力平台方案。",
    bullets: [
      "整合 A100/A800/4090 等异构 GPU，构建一体化云管平台。",
      "对接超算中心实现弹性扩展，并同步推进等保与安全体系。",
      "支撑多学院统一算力订阅，替代大规模外采支出。"
    ]
  },
  boteni: {
    title: "波特尼私有云承载与存储项目",
    meta: "B 端 · 基础设施优化 · 制造业",
    desc: "针对超融合集群压力和备份耦合风险，设计存算分离与资源扩容方案。",
    bullets: [
      "定位计算瓶颈、备份风险、文件 IO 三类核心问题。",
      "新增超融合集群与分布式存储，完成生产与备份解耦。",
      "提升高并发文件读取能力，增强整体线性扩容弹性。"
    ]
  }
};

const cards = [...document.querySelectorAll('.work-card')];
const filters = [...document.querySelectorAll('.filter')];
const detail = document.getElementById('detail');
const galleryFilters = [...document.querySelectorAll('.gallery-filter')];
const galleryItems = [...document.querySelectorAll('.gallery-item')];
const galleryGrid = document.getElementById('gallery-grid');

function renderDetail(key) {
  const item = projectData[key];
  if (!item) return;
  detail.innerHTML = `
    <h3 class="title">${item.title}</h3>
    <p class="meta">${item.meta}</p>
    <p class="desc">${item.desc}</p>
    <ul>${item.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
  `;
}

function setActiveCard(targetCard) {
  cards.forEach((card) => card.classList.remove('is-active'));
  targetCard.classList.add('is-active');
  renderDetail(targetCard.dataset.key);
}

cards.forEach((card) => {
  card.addEventListener('click', () => setActiveCard(card));
});

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((btn) => btn.classList.remove('is-active'));
    filter.classList.add('is-active');

    const type = filter.dataset.filter;
    cards.forEach((card) => {
      const show = type === 'all' || card.dataset.type === type;
      card.classList.toggle('is-hidden', !show);
    });

    const firstVisible = cards.find((card) => !card.classList.contains('is-hidden'));
    if (firstVisible) setActiveCard(firstVisible);
  });
});

renderDetail('chordflow');

function applyGalleryLayout(type) {
  if (!galleryGrid) return;
  galleryGrid.classList.remove('layout-all', 'layout-landscape', 'layout-portrait', 'layout-cg');
  galleryGrid.classList.add(`layout-${type}`);

  galleryItems.forEach((item) => {
    item.classList.remove('is-wide', 'is-tall', 'is-hero', 'is-subtle');
  });

  const visibleItems = galleryItems.filter((item) => !item.classList.contains('is-hidden'));
  if (!visibleItems.length) return;

  if (type === 'all') {
    // 恢复第一版布局：仅使用 HTML 里预置的 wide/tall，不做二次重排
    return;
  }

  if (type === 'cg') {
    // 主次分明：1 主图 + 2 次主图 + 若干标准图
    visibleItems.forEach((item, index) => {
      if (index === 0) item.classList.add('is-hero');
      else if (index === 1 || index === 2) item.classList.add('is-wide');
      else if (index === 5 || index === 8) item.classList.add('is-subtle');
    });
    return;
  }

  if (type === 'portrait') {
    // 尽量填满：混合宽高块，避免空洞
    visibleItems.forEach((item, index) => {
      if (index === 0 || index === 3) item.classList.add('is-tall');
      if (index === 1 || index === 2) item.classList.add('is-wide');
    });
    return;
  }

  if (type === 'landscape') {
    visibleItems.forEach((item, index) => {
      if (index === 0 || index === 3) item.classList.add('is-wide');
      if (index === 2) item.classList.add('is-tall');
    });
    return;
  }
}

galleryFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    galleryFilters.forEach((btn) => btn.classList.remove('is-active'));
    filter.classList.add('is-active');

    const type = filter.dataset.gallery;
    galleryItems.forEach((item) => {
      const show = type === 'all' || item.dataset.gallery === type;
      item.classList.toggle('is-hidden', !show);
    });

    applyGalleryLayout(type);
  });
});

applyGalleryLayout('all');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const numberNodes = [...document.querySelectorAll('[data-target]')];
numberNodes.forEach((node) => {
  const target = Number(node.dataset.target);
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 22));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    node.textContent = `${current}+`;
  }, 36);
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const body = document.body;
const fxToggle = document.getElementById('fx-toggle');
let fxEnabled = !reduceMotion;

function setFxState(on) {
  fxEnabled = on && !reduceMotion;
  body.classList.toggle('fx-off', !fxEnabled);
  if (fxToggle) {
    fxToggle.classList.toggle('is-off', !fxEnabled);
    fxToggle.setAttribute('aria-pressed', String(fxEnabled));
    fxToggle.textContent = fxEnabled ? 'FX ON' : 'FX OFF';
  }
}

if (fxToggle) {
  fxToggle.addEventListener('click', () => setFxState(!fxEnabled));
}

setFxState(fxEnabled);

const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  progressBar.style.width = `${ratio * 100}%`;
}, { passive: true });

const spotlightTargets = [...document.querySelectorAll('.work-card, .card, .value-grid article')];
spotlightTargets.forEach((el) => {
  el.addEventListener('mousemove', (event) => {
    if (!fxEnabled) return;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mx', `${x}%`);
    el.style.setProperty('--my', `${y}%`);
  });
});

const tiltTargets = [...document.querySelectorAll('.tilt')];
const magneticTargets = [...document.querySelectorAll('.magnetic')];

function initTilt() {
  tiltTargets.forEach((el) => {
    el.addEventListener('mousemove', (event) => {
      if (!fxEnabled || window.innerWidth < 900) return;
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      const rx = (-py * 6).toFixed(2);
      const ry = (px * 8).toFixed(2);
      el.style.transform = `perspective(980px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(980px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
  });
}

function initMagnetic() {
  magneticTargets.forEach((el) => {
    el.addEventListener('mousemove', (event) => {
      if (!fxEnabled || window.innerWidth < 900) return;
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${dx * 0.1}px, ${dy * 0.1}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0px, 0px)';
    });
  });
}

initTilt();
initMagnetic();

if (!reduceMotion) {
  const glow = document.getElementById('cursor-glow');
  let gx = window.innerWidth / 2;
  let gy = window.innerHeight / 2;
  let tx = gx;
  let ty = gy;

  window.addEventListener('mousemove', (event) => {
    tx = event.clientX;
    ty = event.clientY;
    if (fxEnabled) glow.style.opacity = '1';
  });

  window.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });

  function animateGlow() {
    if (fxEnabled) {
      gx += (tx - gx) * 0.12;
      gy += (ty - gy) * 0.12;
      glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
    }
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  const canvas = document.getElementById('music-canvas');
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  let notes = [];
  let width = 0;
  let height = 0;
  const symbols = ['♪', '♫', '♬', '♩'];

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * DPR);
    canvas.height = Math.floor(height * DPR);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    const count = width < 680 ? 14 : 26;
    notes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1 + 0.3,
      speed: 0.15 + Math.random() * 0.45,
      drift: (Math.random() - 0.5) * 0.25,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      alpha: 0.16 + Math.random() * 0.35,
      size: 18 + Math.random() * 24,
    }));
  }

  function drawNotes() {
    ctx.clearRect(0, 0, width, height);

    if (!fxEnabled) {
      requestAnimationFrame(drawNotes);
      return;
    }

    for (const n of notes) {
      n.y -= n.speed * n.z;
      n.x += n.drift;
      n.rot += n.rotSpeed;

      if (n.y < -40) {
        n.y = height + 40;
        n.x = Math.random() * width;
      }
      if (n.x < -20) n.x = width + 20;
      if (n.x > width + 20) n.x = -20;

      const scale = 0.6 + n.z * 0.7;
      ctx.save();
      ctx.translate(n.x, n.y);
      ctx.rotate(n.rot);
      ctx.scale(scale, scale);
      ctx.fillStyle = `rgba(0, 113, 227, ${Math.max(0.06, n.alpha * 0.55)})`; 
      ctx.shadowColor = 'rgba(0, 113, 227, 0.14)';
      ctx.shadowBlur = 6;
      ctx.font = `${n.size}px "Noto Sans SC", serif`;
      ctx.fillText(n.symbol, 0, 0);
      ctx.restore();
    }
    requestAnimationFrame(drawNotes);
  }

  resizeCanvas();
  drawNotes();
  window.addEventListener('resize', resizeCanvas);
}
