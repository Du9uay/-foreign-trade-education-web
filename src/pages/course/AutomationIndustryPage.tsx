import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  Network, 
  BookOpen,
  Users,
  Monitor,
  Settings,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Shield
} from '../../components/Icons';

const AutomationIndustryPage: React.FC = () => {
  // 核心定义数据
  const coreDefinitions = [
    {
      title: "跨境商品/服务交易",
      definition: "跨越不同国家或地区界限的商品买卖以及服务提供行为",
      example: "中国家居用品企业将手工编织竹篮通过跨境电商平台销售给美国消费者",
      icon: Network
    }
  ];

  // 核心目标数据
  const coreGoals = [
    {
      title: "安全交付货物",
      description: "确保产品按照合同约定的数量、质量、规格和时间要求交付给客户",
      details: [
        "按合同约定数量交付",
        "符合质量标准要求", 
        "满足规格技术参数",
        "遵守交付时间承诺"
      ],
      icon: Target
    }
  ];

  // 发展历程数据
  const developmentHistory = [
    {
      period: "古代",
      title: "丝绸之路",
      description: "商人们骑着骆驼，将中国的丝绸、瓷器等运往欧洲和亚洲其他地区",
      icon: "🐪"
    },
    {
      period: "近代",
      title: "工业革命",
      description: "轮船、铁路等现代化运输方式的出现极大地推动了外贸的发展",
      icon: "🚢"
    },
    {
      period: "现代初期",
      title: "互联网时代",
      description: "阿里巴巴等B2B平台的兴起，开启了中国外贸电商的新纪元",
      icon: "💻"
    },
    {
      period: "21世纪",
      title: "跨境电商",
      description: "亚马逊全球开店、速卖通等平台崛起，标志着B2C模式快速发展",
      icon: "🛒"
    }
  ];

  // 关键挑战数据
  const keyChallenges = [
    {
      title: "跨境规则差异",
      description: "不同国家有着迥异的关税政策、技术标准和法规",
      examples: [
        "欧盟对中国钢铁制品征收反倾销关税",
        "美国对儿童玩具的严格安全标准"
      ],
      icon: Shield
    },
    {
      title: "资金风险",
      description: "汇率波动、客户拖欠等财务风险需要谨慎管理",
      examples: [
        "人民币兑美元汇率波动影响收益",
        "海外客户信用风险导致坏账"
      ],
      icon: Target
    },
    {
      title: "物流复杂度",
      description: "跨国运输涉及多种运输方式和复杂的通关流程",
      examples: [
        "海运、空运、陆运的多式联运",
        "不同国家的清关要求差异"
      ],
      icon: Monitor
    }
  ];

  // 外贸模式数据
  const tradeModels = [
    {
      type: "B2B",
      title: "企业对企业",
      characteristics: [
        "交易对象：制造商、贸易商、代理商",
        "交易规模：大批量、高价值",
        "运作方式：展会、B2B平台、代理渠道",
        "核心目标：长期合作、规模效益"
      ],
      features: {
        advantages: ["订单稳定", "利润可观", "关系长期"],
        challenges: ["竞争激烈", "账期较长", "要求专业"]
      },
      icon: Users
    },
    {
      type: "B2C",
      title: "企业对消费者",
      characteristics: [
        "交易对象：终端消费者",
        "交易核心：品牌营销、用户体验",
        "运作方式：跨境电商平台、独立站",
        "核心目标：高毛利、快周转"
      ],
      features: {
        advantages: ["毛利率高", "资金回笼快", "市场反应快"],
        challenges: ["运营复杂", "物流成本高", "客服要求高"]
      },
      icon: Settings
    },
    {
      type: "C2C",
      title: "消费者对消费者",
      characteristics: [
        "交易对象：个人对个人",
        "交易核心：二手闲置、手工艺品",
        "运作方式：eBay、Etsy等平台",
        "核心目标：闲置物品变现"
      ],
      features: {
        advantages: ["门槛低", "操作简单", "个性化"],
        challenges: ["规模有限", "质量难控", "信任度低"]
      },
      icon: Network
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 relative">
      <div className="max-w-6xl mx-auto">
      {/* 页面标题 */}
        <motion.div 
          className="glass-card p-8 mb-8 relative overflow-hidden gpu-accelerated"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[color:var(--accent-sand-500)] rounded-l-2xl" />
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-[color:var(--accent-sand-500)] rounded-2xl flex items-center justify-center mr-6">
              <Network className="w-8 h-8 text-[color:var(--surf-tundra-700)]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[color:var(--text-cashmere-100)] mb-2">
                外贸业务全景图
              </h1>
              <p className="text-[color:var(--text-cashmere-100)]/80 text-lg">
                了解跨境交易基本概念，掌握不同外贸模式的特点与运作逻辑
            </p>
          </div>
        </div>
        </motion.div>

        {/* 基本概念与发展概述 - 网格化布局 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-cashmere-100)] mb-8 flex items-center">
              <BookOpen className="w-6 h-6 text-[color:var(--accent-sand-500)] mr-3" />
              基本概念与发展概述
          </h2>

            {/* 核心定义 - 大卡片网格 */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[color:var(--text-cashmere-100)] mb-6">核心定义</h3>
              <div className="grid gap-6">
                {coreDefinitions.map((definition, index) => (
        <motion.div 
                    key={index}
                    className="relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative group">
                      {/* 背景装饰 */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent-sand-500)]/5 to-transparent rounded-3xl" />
                      
                      <div className="relative card-base p-8 hover:shadow-2xl transition-all duration-500">
                        <div className="grid lg:grid-cols-12 gap-6 items-center">
                          {/* 图标区 */}
                          <div className="lg:col-span-2">
                            <div className="relative">
                              <div className="w-24 h-24 bg-gradient-to-br from-[color:var(--accent-sand-500)]/20 to-[color:var(--accent-sand-500)]/10 rounded-3xl flex items-center justify-center mx-auto">
                                <definition.icon className="w-12 h-12 text-[color:var(--accent-sand-500)]" />
                  </div>
                              <div className="absolute inset-0 bg-[color:var(--accent-sand-500)]/20 rounded-3xl blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                  </div>
                  
                          {/* 内容区 */}
                          <div className="lg:col-span-10">
                            <h4 className="text-2xl font-bold text-[color:var(--text-cashmere-100)] mb-3">
                              {definition.title}
                            </h4>
                            <p className="text-[color:var(--text-cashmere-100)]/85 text-lg mb-4 leading-relaxed">
                              {definition.definition}
                            </p>
                            
                            {/* 示例框 */}
                            <div className="bg-gradient-to-r from-[color:var(--accent-sand-500)]/15 to-[color:var(--accent-sand-500)]/5 backdrop-blur-sm rounded-2xl p-5 border border-[color:var(--accent-sand-500)]/20">
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <span className="text-[color:var(--accent-sand-500)] text-sm font-bold">例</span>
                </div>
                                <p className="text-[color:var(--text-cashmere-100)]/90 leading-relaxed">
                                  {definition.example}
                    </p>
              </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
                ))}
              </div>
        </div>

            {/* 核心目标 - 紧凑网格 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[color:var(--text-cashmere-100)] mb-6">核心目标</h3>
              {coreGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* 目标标题 */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/70 rounded-2xl flex items-center justify-center shadow-lg">
                      <goal.icon className="w-7 h-7 text-[color:var(--accent-sand-500)]" />
                        </div>
                        <div>
                      <h4 className="text-xl font-bold text-[color:var(--text-cashmere-100)]">
                        {goal.title}
                      </h4>
                      <p className="text-[color:var(--text-cashmere-100)]/80">
                        {goal.description}
                      </p>
                        </div>
        </div>

                  {/* 详情网格 */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 ml-[4.5rem]">
                    {goal.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        className="relative group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + detailIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[color:var(--accent-sand-500)]/30 transition-all duration-300">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[color:var(--accent-sand-500)] mt-0.5 flex-shrink-0" />
                            <span className="text-[color:var(--text-cashmere-100)]/85 text-sm leading-relaxed">
                              {detail}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                            </div>
                </motion.div>
              ))}
              </div>
              
            {/* 发展历程 - 时间线网格 */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[color:var(--text-cashmere-100)] mb-6">发展历程</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {developmentHistory.map((period, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    {/* 连接线 */}
                    {index < developmentHistory.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-[color:var(--accent-sand-500)]/30 to-transparent -translate-y-1/2 z-0" />
                    )}
                    
                    {/* 卡片 */}
                    <div className="relative h-full group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent-sand-500)]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                      
                      <div className="relative h-full card-base p-6 hover:transform hover:scale-105 transition-all duration-300">
                        {/* 时期标签 */}
                        <div className="absolute -top-3 left-6 px-4 py-1 bg-white/10 rounded-full">
                          <span className="text-xs font-bold text-[color:var(--accent-sand-500)]">
                            {period.period}
                          </span>
                        </div>
                        
                        {/* 图标 */}
                        <div className="text-5xl mb-4 pt-3">{period.icon}</div>
                        
                        {/* 内容 */}
                        <h4 className="text-lg font-bold text-[color:var(--text-cashmere-100)] mb-2">
                          {period.title}
                        </h4>
                        <p className="text-[color:var(--text-cashmere-100)]/80 text-sm leading-relaxed">
                          {period.description}
                        </p>
                        
                        {/* 装饰元素 */}
                        <div className="absolute bottom-4 right-4 w-8 h-8 bg-[color:var(--accent-sand-500)]/10 rounded-full blur-md" />
                      </div>
                    </div>
                </motion.div>
          ))}
              </div>
        </div>
            
            {/* 关键挑战 - 砖块网格 */}
            <div>
              <h3 className="text-xl font-semibold text-[color:var(--text-cashmere-100)] mb-6">关键挑战</h3>
              <div className="grid lg:grid-cols-3 gap-6">
                {keyChallenges.map((challenge, index) => (
                <motion.div
                    key={index}
                    className="relative h-full"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-full group relative">
                      {/* 悬停效果背景 */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-[color:var(--accent-sand-500)]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                      
                      <div className="relative h-full card-base p-6 flex flex-col">
                        {/* 顶部警示条 */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 rounded-t-2xl" />
                        
                        {/* 图标和标题 */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-2xl flex items-center justify-center">
                              <challenge.icon className="w-7 h-7 text-orange-400" />
                        </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse" />
                      </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-[color:var(--text-cashmere-100)]">
                              {challenge.title}
                            </h4>
                        </div>
                      </div>
                      
                        {/* 描述 */}
                        <p className="text-[color:var(--text-cashmere-100)]/85 mb-6 flex-grow">
                          {challenge.description}
                        </p>
                        
                        {/* 示例列表 */}
                          <div className="space-y-3">
                          <div className="text-sm font-semibold text-orange-400 uppercase tracking-wider">
                            实际案例
                            </div>
                          <div className="space-y-2">
                            {challenge.examples.map((example, exampleIndex) => (
                              <motion.div 
                                key={exampleIndex} 
                                className="relative"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 + exampleIndex * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg">
                                  <div className="w-5 h-5 rounded-full bg-orange-400/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full" />
                            </div>
                                  <span className="text-[color:var(--text-cashmere-100)]/80 text-sm leading-relaxed">
                                    {example}
                                  </span>
                          </div>
                              </motion.div>
                            ))}
                        </div>
                </div>
                  </div>
                      </div>
                </motion.div>
                    ))}
                  </div>
            </div>
          </motion.div>
        </section>

        {/* 外贸模式分类与特点 - 对比网格 */}
        <section className="mb-12">
                  <motion.div
            className="glass-effect-light p-8 rounded-2xl"
                    initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-cashmere-100)] mb-8 flex items-center">
              <Network className="w-6 h-6 text-[color:var(--accent-sand-500)] mr-3" />
              外贸模式分类与特点
            </h2>

            {/* 模式对比网格 */}
            <div className="grid lg:grid-cols-3 gap-6">
              {tradeModels.map((model, index) => (
                <motion.div
                  key={index}
                  className="relative h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full group relative">
                    <div className="relative h-full transition-transform duration-300 group-hover:scale-105">
                      {/* 模式卡片 */}
                      <div className="relative h-full glass-effect rounded-3xl overflow-hidden">
                        {/* 顶部标识区 */}
                        <div className="relative bg-gradient-to-br from-[color:var(--accent-sand-500)]/30 to-[color:var(--accent-sand-500)]/10 p-6">
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5" />
                          
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                              <span className="px-4 py-2 bg-[color:var(--bg-ocean-900)] text-[color:var(--accent-sand-500)] rounded-full text-lg font-bold">
                                {model.type}
                              </span>
                              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                <model.icon className="w-7 h-7 text-[color:var(--text-cashmere-100)]" />
                          </div>
                          </div>
                            <h3 className="text-xl font-bold text-[color:var(--text-cashmere-100)]">
                              {model.title}
                            </h3>
                        </div>
                      </div>
                      
                        {/* 特点网格 */}
                        <div className="p-6">
                          <h4 className="text-sm font-semibold text-[color:var(--text-cashmere-100)]/90 uppercase tracking-wider mb-4">
                            模式特点
                          </h4>
                          <div className="grid grid-cols-1 gap-2 mb-6">
                            {model.characteristics.map((characteristic, charIndex) => (
                              <motion.div
                                key={charIndex}
                                className="relative"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 + charIndex * 0.05 }}
                                viewport={{ once: true }}
                              >
                                <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/8 transition-colors duration-300">
                                  <div className="w-8 h-8 bg-[color:var(--accent-sand-500)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-4 h-4 text-[color:var(--accent-sand-500)]" />
                      </div>
                                  <span className="text-[color:var(--text-cashmere-100)]/85 text-sm">
                                    {characteristic}
                                  </span>
                </div>
                  </motion.div>
                ))}
              </div>

                          {/* 优劣对比 */}
                          <div className="grid grid-cols-2 gap-4">
                            {/* 优势 */}
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-xl" />
                              <div className="relative p-4">
                                <h5 className="text-sm font-bold text-green-400 mb-3 flex items-center">
                                  <div className="w-1 h-4 bg-green-400 rounded-full mr-2" />
                                  优势
                                </h5>
                                <div className="space-y-2">
                                  {model.features.advantages.map((advantage, advIndex) => (
                                    <div key={advIndex} className="flex items-start gap-2">
                                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0" />
                                      <span className="text-[color:var(--text-cashmere-100)]/80 text-xs leading-relaxed">
                                        {advantage}
                                      </span>
        </div>
                                  ))}
                </div>
                </div>
              </div>
              
                            {/* 挑战 */}
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-xl" />
                              <div className="relative p-4">
                                <h5 className="text-sm font-bold text-orange-400 mb-3 flex items-center">
                                  <div className="w-1 h-4 bg-orange-400 rounded-full mr-2" />
                                  挑战
                                </h5>
                                <div className="space-y-2">
                                  {model.features.challenges.map((challenge, chalIndex) => (
                                    <div key={chalIndex} className="flex items-start gap-2">
                                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 flex-shrink-0" />
                                      <span className="text-[color:var(--text-cashmere-100)]/80 text-xs leading-relaxed">
                                        {challenge}
                                      </span>
              </div>
                                  ))}
            </div>
              </div>
        </div>
              </div>
            </div>

                        {/* 底部装饰 */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[color:var(--accent-sand-500)]/50 to-transparent" />
                    </div>
                    </div>
                  </div>
                </motion.div>
          ))}
        </div>

            {/* 总结对比 */}
              <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-[color:var(--accent-sand-500)]/10 to-[color:var(--accent-sand-500)]/5 backdrop-blur-sm rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-3 gap-6 text-center">
                  <div>
                  <h4 className="text-lg font-bold text-[color:var(--text-cashmere-100)] mb-2">B2B 模式</h4>
                  <p className="text-[color:var(--text-cashmere-100)]/80 text-sm">适合追求稳定大批量订单的企业</p>
                  </div>
                  <div>
                  <h4 className="text-lg font-bold text-[color:var(--text-cashmere-100)] mb-2">B2C 模式</h4>
                  <p className="text-[color:var(--text-cashmere-100)]/80 text-sm">适合有品牌意识和运营能力的企业</p>
                          </div>
                        <div>
                  <h4 className="text-lg font-bold text-[color:var(--text-cashmere-100)] mb-2">C2C 模式</h4>
                  <p className="text-[color:var(--text-cashmere-100)]/80 text-sm">适合个人创业者和小规模经营</p>
                        </div>
                      </div>
              </motion.div>
          </motion.div>
        </section>

      {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            to="/"
            className="btn-glass flex items-center group"
            >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            返回首页
              </Link>
          
          <Link 
            to="/course/plc-basics" 
            className="btn-primary flex items-center group"
          >
            外贸业务框架
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
        </div>
                </div>
                </div>
  );
};

export default AutomationIndustryPage;
