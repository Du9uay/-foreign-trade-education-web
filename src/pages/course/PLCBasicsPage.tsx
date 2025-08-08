import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  Network,
  BookOpen,
  Settings,
  Users,
  Monitor,
  Shield,
  Zap,
  CheckCircle,
  ArrowLeft,
  ArrowRight
} from '../../components/Icons';

const PLCBasicsPage: React.FC = () => {
  // 政策支持数据
  const policySupport = [
    {
      title: "税收杠杆",
      subtitle: "出口退税政策",
      description: "国家通过出口退税降低企业出口成本，提高产品国际竞争力",
      example: {
        scenario: "电动工具出口企业案例",
        details: "企业出口价值100万元的电动工具到德国，退税率13%，可获得13万元出口退税，有效降低出口成本。"
      },
      benefits: [
        "降低企业出口成本",
        "提高产品价格竞争力", 
        "鼓励企业扩大出口"
      ],
      icon: Target
    },
    {
      title: "贸易便利",
      subtitle: "单一窗口平台",
      description: "简化贸易流程，提高贸易效率，企业只需在一个界面完成所有申报",
      example: {
        scenario: "化妆品出口韩国案例",
        details: "通过单一窗口平台，企业统一填写申报信息，自动分发给海关、商检、税务等部门，通关时间从几天缩短到几小时。"
      },
      benefits: [
        "简化申报流程",
        "减少人力时间成本",
        "提高通关效率"
      ],
      icon: Settings
    },
    {
      title: "外汇管理",
      subtitle: "外汇收支平衡",
      description: "维护国家国际收支平衡和汇率稳定，规范企业外汇收付行为",
      example: {
        scenario: "服装出口企业案例",
        details: "企业收到10万美元外汇货款，需向银行提供出口合同、报关单等凭证，按当日汇率兑换成人民币。"
      },
      benefits: [
        "规范外汇收支管理",
        "提供汇率风险管理工具",
        "维护金融市场稳定"
      ],
      icon: Shield
    }
  ];

  // 产业链协作数据
  const industrialCooperation = [
    {
      title: "原材料供应商",
      role: "产业链起点",
      description: "提供生产所需的各类原材料，确保产品质量和供货稳定",
      example: {
        scenario: "智能手表生产案例",
        content: "芯片供应商提供高性能芯片，显示屏供应商提供高清显示屏，各供应商协同保障智能手表的高品质生产。"
      },
      keyFactors: [
        "供应商信誉与产品质量",
        "供货能力与交期保障",
        "价格竞争力与成本控制"
      ],
      icon: Target
    },
    {
      title: "生产制造商",
      role: "产品制造核心",
      description: "将原材料转化为成品，具备先进生产设备和科学管理流程",
      example: {
        scenario: "智能手表代工厂案例",
        content: "大型代工厂拥有自动化生产线，能高效进行手表组装，按时按质按量完成生产任务。"
      },
      keyFactors: [
        "生产效率与产能规模",
        "质量控制与工艺水平",
        "设备先进性与技术能力"
      ],
      icon: Settings
    },
    {
      title: "外贸企业",
      role: "市场连接桥梁",
      description: "连接国内外市场，开拓海外客户，协调供应链各环节",
      example: {
        scenario: "智能手表外贸企业案例",
        content: "参加国际消费品展会推广产品，利用阿里巴巴国际站等平台，将海外订单需求传达给生产制造商。"
      },
      keyFactors: [
        "市场开拓与客户维护",
        "供应链整合与协调",
        "风险管控与合规经营"
      ],
      icon: Users
    },
    {
      title: "跨境物流商",
      role: "物流运输保障",
      description: "负责货物的跨境运输、仓储管理和通关服务",
      example: {
        scenario: "智能手表出口欧洲案例",
        content: "海运公司负责从工厂到港口运输，办理报关手续后装船，经长途运输到达欧洲港口，转运至客户指定地点。"
      },
      keyFactors: [
        "运输网络覆盖与时效",
        "仓储管理与货物安全",
        "通关效率与合规能力"
      ],
      icon: Monitor
    }
  ];

  // 服务支撑数据
  const serviceSupport = [
    {
      category: "金融支持",
      services: [
        {
          title: "出口信用保险",
          description: "为外贸企业出口收汇提供保障，降低客户拖欠风险",
          example: "中国玩具企业向非洲出口，投保出口信用保险后，客户拖欠货款时可获得保险赔付",
          icon: Shield
        },
        {
          title: "贸易融资",
          description: "银行为外贸企业提供资金支持，包括信用证融资、打包贷款等",
          example: "企业接到信用证订单但资金不足，向银行申请打包贷款采购原材料生产",
          icon: Target
        }
      ]
    },
    {
      category: "专业服务",
      services: [
        {
          title: "关务咨询",
          description: "为外贸企业提供海关通关相关的专业咨询服务",
          example: "专业关务公司为企业提供报关咨询、商品归类咨询，确保顺利通关",
          icon: BookOpen
        },
        {
          title: "法律仲裁",
          description: "解决外贸业务中的合同纠纷，保障双方合法权益",
          example: "中美贸易争议通过仲裁机构裁决，避免因纠纷造成经济损失",
          icon: Settings
        }
      ]
    },
    {
      category: "技术赋能",
      services: [
        {
          title: "区块链溯源",
          description: "实现产品全流程追溯，提高产品透明度和可信度",
          example: "茶叶出口企业通过区块链记录从种植到出口全过程，客户可扫码查询完整信息",
          icon: Network
        },
        {
          title: "AI单证审核",
          description: "利用人工智能技术审核外贸单证，提高效率和准确性",
          example: "AI系统自动审核信用证、发票、提单等单证，快速检查条款符合性",
          icon: Zap
        }
      ]
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
                外贸业务框架
              </h1>
              <p className="text-[color:var(--text-cashmere-100)]/80 text-lg">
                外贸全链条运作逻辑，包括政策支持、产业链协作与服务支撑
              </p>
            </div>
          </div>
        </motion.div>

        {/* 基本概念 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-cashmere-100)] mb-6 flex items-center">
              <BookOpen className="w-6 h-6 text-[color:var(--accent-sand-500)] mr-3" />
              基本概念
            </h2>

            <div className="card-base p-6">
              <h3 className="text-xl font-semibold text-[color:var(--text-cashmere-100)] mb-4">
                外贸业务框架定义
              </h3>
              <p className="text-[color:var(--text-cashmere-100)]/80 text-lg leading-relaxed mb-4">
                外贸业务框架本质上是一个<span className="text-[color:var(--accent-sand-500)] font-semibold">连接国内生产与海外需求的国际化供应链系统</span>，
                它以获取海外订单为起点，经历原材料采购与产品制造，再通过专业跨境物流商完成跨国运输、报关清关等环节将货物交付至客户，
                最终依托国际结算流程实现货款收付与外汇管理。
              </p>
              <div className="bg-[color:var(--accent-sand-500)]/10 rounded-lg p-4 border border-[color:var(--accent-sand-500)]/20">
                <p className="text-[color:var(--text-cashmere-100)]/90 text-sm">
                  <strong className="text-[color:var(--accent-sand-500)]">关键特点：</strong>
                  整个链条环环相扣，任一环节的延误都可能引发交货违约、资金风险甚至损害商业信誉。
                </p>
                </div>
            </div>
          </motion.div>
        </section>

        {/* 外贸业务生态 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-cashmere-100)] mb-6 flex items-center">
              <Network className="w-6 h-6 text-[color:var(--accent-sand-500)] mr-3" />
              外贸业务生态
            </h2>

            {/* 政策支持 - 卡片式设计 */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[color:var(--text-cashmere-100)] mb-6">政策支持</h3>
              <div className="grid lg:grid-cols-3 gap-6">
                {policySupport.map((policy, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* 3D卡片容器 */}
                    <div className="relative transition-all duration-300 hover:scale-105">
                      <div className="relative">
                        {/* 卡片主体 */}
                        <div className="card-base p-8 relative overflow-hidden"
                             style={{ 
                               background: `linear-gradient(135deg, 
                                 rgba(212, 180, 131, 0.15) 0%, 
                                 rgba(138, 155, 143, 0.2) 100%)`,
                               backdropFilter: 'blur(20px) saturate(180%)',
                               WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                               boxShadow: `0 20px 40px rgba(0, 0, 0, 0.1),
                                         0 0 0 1px rgba(212, 180, 131, 0.2) inset,
                                         0 0 80px rgba(212, 180, 131, 0.05) inset`
                             }}>
                          {/* 装饰性背景元素 */}
                          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                            <policy.icon className="w-full h-full text-[color:var(--accent-sand-500)]" />
                          </div>
                          
                          {/* 顶部徽章 */}
                          <div className="relative z-10 mb-6">
                            <div className="inline-flex items-center">
                              <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/80 rounded-2xl flex items-center justify-center shadow-lg">
                                <policy.icon className="w-7 h-7 text-[color:var(--bg-ocean-900)]" />
                              </div>
                              <span className="ml-4 px-4 py-1.5 bg-[color:var(--accent-sand-500)]/25 text-[color:var(--accent-sand-500)] rounded-full text-sm font-medium backdrop-blur-sm">
                                {policy.subtitle}
                </span>
              </div>
          </div>
          
                          {/* 标题和描述 */}
                          <h4 className="text-xl font-bold text-[color:var(--text-cashmere-100)] mb-3 relative z-10">
                            {policy.title}
                          </h4>
                          <p className="text-[color:var(--text-cashmere-100)]/85 mb-6 leading-relaxed relative z-10">
                            {policy.description}
                          </p>

                          {/* 案例展示卡片 */}
                          <div className="relative z-10 mb-6">
                            <div className="bg-gradient-to-br from-[color:var(--accent-sand-500)]/20 to-[color:var(--accent-sand-500)]/10 rounded-2xl p-5 border border-[color:var(--accent-sand-500)]/30 backdrop-blur-sm">
                              <div className="flex items-center mb-3">
                                <span className="text-2xl mr-2">💡</span>
                                <h5 className="text-md font-semibold text-[color:var(--text-cashmere-100)]">
                                  {policy.example.scenario}
                                </h5>
          </div>
                              <p className="text-[color:var(--text-cashmere-100)]/80 text-sm leading-relaxed">
                                {policy.example.details}
                              </p>
        </div>
      </div>

                          {/* 效益列表 */}
          <div className="relative z-10">
                            <h5 className="text-sm font-semibold text-[color:var(--text-cashmere-100)]/90 mb-3 uppercase tracking-wider">
                              政策效益
                            </h5>
                            <div className="space-y-2.5">
                              {policy.benefits.map((benefit, benefitIndex) => (
              <motion.div
                                  key={benefitIndex} 
                                  className="flex items-center"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.2 + benefitIndex * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/70 flex items-center justify-center mr-3 flex-shrink-0">
                                    <CheckCircle className="w-3 h-3 text-[color:var(--accent-sand-500)]" />
                                  </div>
                                  <span className="text-[color:var(--text-cashmere-100)]/85 text-sm">{benefit}</span>
              </motion.div>
                              ))}
            </div>
          </div>

                          {/* 悬停时的光效 */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"></div>
        </div>
                      </div>
                  </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 产业链协作 - 交错卡片布局 */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[color:var(--text-cashmere-100)] mb-8">产业链协作</h3>
              <div className="space-y-8">
                {industrialCooperation.map((entity, index) => (
              <motion.div
                    key={index}
                    className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative max-w-4xl w-full">
                      {/* 连接线 */}
                      {index < industrialCooperation.length - 1 && (
                        <div className={`absolute top-full h-8 w-0.5 bg-gradient-to-b from-[color:var(--accent-sand-500)]/40 to-transparent ${
                          index % 2 === 0 ? 'left-8' : 'right-8'
                        }`} />
                      )}
                      
                      {/* 卡片容器 */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--accent-sand-500)]/20 to-[color:var(--accent-sand-500)]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative card-base p-8 overflow-hidden"
                             style={{
                               background: `linear-gradient(${index % 2 === 0 ? '135deg' : '-135deg'}, 
                                 rgba(212, 180, 131, 0.12) 0%, 
                                 rgba(138, 155, 143, 0.18) 100%)`,
                               backdropFilter: 'blur(25px) saturate(180%)',
                               WebkitBackdropFilter: 'blur(25px) saturate(180%)'
                             }}>
                          {/* 序号标记 */}
                          <div className={`absolute ${index % 2 === 0 ? '-left-4' : '-right-4'} top-8`}>
                            <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/70 rounded-2xl flex items-center justify-center shadow-xl">
                              <span className="text-2xl font-bold text-[color:var(--accent-sand-500)]">{index + 1}</span>
                  </div>
              </div>

                          {/* 头部信息 */}
                          <div className={`flex items-start ${index % 2 === 0 ? 'ml-16' : 'mr-16'}`}>
                            <div className="flex-1">
                              <div className="flex items-center flex-wrap gap-3 mb-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                  <entity.icon className="w-6 h-6 text-[color:var(--accent-sand-500)]" />
          </div>
                                <h4 className="text-xl font-bold text-[color:var(--text-cashmere-100)]">
                                  {entity.title}
                                </h4>
                                <span className="px-4 py-1.5 bg-gradient-to-r from-[color:var(--accent-sand-500)]/30 to-[color:var(--accent-sand-500)]/20 text-[color:var(--accent-sand-500)] rounded-full text-sm font-medium backdrop-blur-sm border border-[color:var(--accent-sand-500)]/20">
                                  {entity.role}
                                </span>
        </div>
                              <p className="text-[color:var(--text-cashmere-100)]/85 text-base leading-relaxed mb-6">
                                {entity.description}
                              </p>
          </div>
        </div>

                          {/* 内容区域 */}
                          <div className={`grid lg:grid-cols-2 gap-6 ${index % 2 === 0 ? 'ml-16' : 'mr-16'}`}>
                            {/* 案例卡片 */}
            <motion.div
                              className="relative"
                              whileHover={{ scale: 1.02 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="h-full bg-gradient-to-br from-white/8 to-white/4 rounded-2xl p-5 backdrop-blur-sm border border-white/10">
                                <div className="flex items-center mb-3">
                                  <span className="text-2xl mr-3">📋</span>
                                  <h5 className="font-semibold text-[color:var(--text-cashmere-100)]">
                                    {entity.example.scenario}
                                  </h5>
                </div>
                                <p className="text-[color:var(--text-cashmere-100)]/80 text-sm leading-relaxed">
                                  {entity.example.content}
                                </p>
              </div>
                            </motion.div>

                            {/* 关键要素 */}
                            <div className="relative">
                              <h5 className="font-semibold text-[color:var(--text-cashmere-100)] mb-4 flex items-center">
                                <div className="w-1 h-5 bg-[color:var(--accent-sand-500)] rounded-full mr-3" />
                                关键成功要素
                               </h5>
                              <div className="space-y-3">
                                {entity.keyFactors.map((factor, factorIndex) => (
                                  <motion.div 
                                    key={factorIndex} 
                                    className="flex items-start"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15 + factorIndex * 0.05 }}
                                    viewport={{ once: true }}
                                  >
                                    <div className="w-6 h-6 rounded-lg bg-[color:var(--accent-sand-500)]/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                      <div className="w-2 h-2 bg-[color:var(--accent-sand-500)] rounded-full" />
                             </div>
                                    <span className="text-[color:var(--text-cashmere-100)]/85 text-sm leading-relaxed">{factor}</span>
                                  </motion.div>
                                ))}
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

            {/* 服务支撑 - 分层卡片设计 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[color:var(--text-cashmere-100)] mb-8">服务支撑</h3>
              <div className="relative">
                {serviceSupport.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    className="relative mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* 分类标题卡片 */}
                    <div className="relative z-20 mb-6">
                      <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[color:var(--accent-sand-500)]/30 to-[color:var(--accent-sand-500)]/20 backdrop-blur-md rounded-2xl border border-[color:var(--accent-sand-500)]/30 shadow-lg">
                        <div className={`w-2 h-8 bg-gradient-to-b from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/50 rounded-full mr-4`} />
                        <h4 className="text-lg font-bold text-[color:var(--text-cashmere-100)]">
                          {category.category}
                        </h4>
                      </div>
        </div>

                    {/* 服务卡片网格 */}
                    <div className="grid lg:grid-cols-2 gap-6 relative">
                      {category.services.map((service, serviceIndex) => (
                        <motion.div
                          key={serviceIndex}
                          className="relative group"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: categoryIndex * 0.2 + serviceIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {/* 服务卡片 */}
                          <div className="relative h-full transform transition-all duration-300 hover:-translate-y-2">
                            {/* 卡片阴影层 */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent-sand-500)]/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* 卡片主体 */}
                            <div className="relative h-full card-base p-6 overflow-hidden"
                  style={{
                                   background: 'rgba(138, 155, 143, 0.15)',
                                   backdropFilter: 'blur(20px) saturate(180%)',
                                   WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                   boxShadow: `0 10px 30px rgba(0, 0, 0, 0.08),
                                             0 0 0 1px rgba(255, 255, 255, 0.05) inset`
                                 }}>
                              {/* 图标和标题 */}
                              <div className="flex items-start mb-4">
                                <motion.div 
                                  className="relative"
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.8 }}
                                >
                                  <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/70 rounded-xl flex items-center justify-center shadow-lg">
                                    <service.icon className="w-6 h-6 text-[color:var(--accent-sand-500)]" />
                                  </div>
                                  {/* 装饰性光点 */}
                                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/40 rounded-full blur-sm" />
                                </motion.div>
                                <div className="ml-4 flex-1">
                                  <h5 className="text-lg font-semibold text-[color:var(--text-cashmere-100)] mb-2">
                                    {service.title}
                                  </h5>
                                  <p className="text-[color:var(--text-cashmere-100)]/80 text-sm leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
              </div>
              
                              {/* 案例展示 */}
                              <motion.div 
                                className="relative mt-auto"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                              >
                                <div className="bg-gradient-to-br from-white/8 to-white/4 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                                  <div className="flex items-start">
                                    <div className="w-1 h-12 bg-gradient-to-b from-[color:var(--accent-sand-500)] to-transparent rounded-full mr-3 flex-shrink-0" />
                    <div>
                                      <span className="text-xs font-semibold text-[color:var(--accent-sand-500)] uppercase tracking-wider">案例</span>
                                      <p className="text-[color:var(--text-cashmere-100)]/75 text-xs mt-1 leading-relaxed">
                                        {service.example}
                                      </p>
                    </div>
                  </div>
              </div>
                              </motion.div>

                              {/* 悬停装饰 */}
                              <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                <div className="w-full h-full bg-[color:var(--accent-sand-500)] rounded-full blur-3xl" />
            </div>
        </div>
            </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
        </section>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            to="/course/automation-industry" 
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            外贸业务全景图
          </Link>
          
          <Link 
            to="/course/io-wiring" 
            className="btn-primary flex items-center group"
          >
            外贸核心流程
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
                            </div>
  );
};

export default PLCBasicsPage;
