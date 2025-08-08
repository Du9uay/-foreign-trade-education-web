import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
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

const IOWiringPage: React.FC = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  // 核心流程数据
  const coreProcesses = [
    {
      id: 'customer-development',
      title: '客户开发与商务谈判',
      icon: Users,
      description: '开启外贸业务的关键起点',
      steps: [
        {
          title: '市场分析与目标客户定位',
          content: '全方位收集信息，精准分析目标市场需求和消费者喜好',
          details: [
            '通过浏览行业网站、参加展会收集信息',
            '使用Google Trends分析产品搜索趋势',
            '在展会中收集竞品信息',
            '利用市场调研工具精准定位产品和客户'
          ]
        },
        {
          title: '询盘接收与报价策略',
          content: '及时响应客户询盘，制定合理报价策略',
          details: [
            '精准核算成本（零部件、生产加工费、运输费用）',
            '加上合理利润确定报价',
            '考虑汇率波动的影响',
            '根据不同贸易术语（FOB、CIF）调整报价内容'
          ]
        },
        {
          title: '交易磋商',
          content: '就关键条件达成一致，形成初步协议',
          details: [
            '协商采购数量的价格折扣',
            '商定灵活的付款方式',
            '明确产品具体规格要求',
            '形成形式发票（PI）作为初步协议'
          ]
        }
      ]
    },
    {
      id: 'risk-assessment',
      title: '风险筛查与资信评估',
      icon: Shield,
      description: '风险把控的关键环节',
      steps: [
        {
          title: '客户背景调查',
          content: '通过官方平台和第三方报告全面评估客户信用',
          details: [
            '通过官方平台核实客户注册信息',
            '查询注册时间、资本、业务范围等基础信息',
            '结合第三方信用报告评估经营状况',
            '分析拖欠供应商款项等不良记录原因'
          ]
        },
        {
          title: '交易风险等级判定',
          content: '基于信用评分模型进行综合评估',
          details: [
            '财务状况评估（占比30%）',
            '经营历史分析（占比20%）',
            '付款记录审查（占比30%）',
            '行业地位评定（占比20%）'
          ]
        },
        {
          title: '收款方式决策',
          content: '依据风险评级设定收款策略',
          details: [
            '高风险客户：30%定金+信用证组合',
            '中风险客户：20%定金+T/T收款',
            '低风险客户：10%定金+T/T收款',
            '形成风险评估报告指导决策'
          ]
        }
      ]
    },
    {
      id: 'contract-signing',
      title: '合同签订与订单确认',
      icon: BookOpen,
      description: '明确权利义务的法律化过程',
      steps: [
        {
          title: '合同条款法律化',
          content: '明确双方权利义务，规范质量标准和处理方式',
          details: [
            '规定产品质量标准（如棉含量95%以上）',
            '明确质量问题处理责任和时限',
            '设定数量允许偏差范围（±5%）',
            '加入知识产权保护条款'
          ]
        },
        {
          title: '订单细节书面固化',
          content: '将订单具体内容固定，防止后续争议',
          details: [
            '明确产品型号、数量、交货时间',
            '详细说明技术参数和规格要求',
            '确定交货地点和方式',
            '使用电子合同平台保存所有细节'
          ]
        }
      ]
    },
    {
      id: 'production-execution',
      title: '生产备货与订单执行',
      icon: Settings,
      description: '确保产品按时按质交付',
        steps: [
        {
          title: '生产计划调度与进度跟踪',
          content: '制定详细生产计划，建立跟踪机制',
          details: [
            '将生产分解为采购、生产、组装、质检等环节',
            '制定详细时间安排（如10天采购，20天生产）',
            '建立定期跟踪机制（每周进度会议）',
            '及时协调资源解决延迟问题'
          ]
        },
        {
          title: '质量检验标准执行',
          content: '严格按照合同标准执行质量控制',
          details: [
            '设定具体质量标准（如纸张厚度0.1mm±0.01mm）',
            '生产过程中进行抽检（抽检比例10%）',
            '组装完成后全检确保符合标准',
            '不合格产品及时返工或报废'
          ]
        },
        {
          title: '出口包装与运输标识',
          content: '制作符合要求的包装和标识',
          details: [
            '采用五层瓦楞纸箱包装',
            '内部填充防潮、防压材料',
            '清晰印制收货人信息和目的地',
            '标注"小心轻放"等警示语'
          ]
        }
      ]
    },
    {
      id: 'logistics-customs',
      title: '国际物流与出口通关',
      icon: Monitor,
      description: '确保货物顺利出运',
      steps: [
        {
          title: '运输方式选择',
          content: '根据货物特性选择最适合的运输方式',
          details: [
            '海运：适合大批量、价值较低的货物',
            '空运：适合紧急、高价值的货物',
            '整柜vs拼箱：根据货物量决定',
            '查询船公司/航空公司船期航班'
          ]
        },
        {
          title: '货运代理委托与单证传递',
          content: '委托专业货代处理运输事务',
          details: [
            '向货代提供货物详细信息',
            '货代制作运输单证（如提单）',
            '通过EDI系统传递装箱单、发票等',
            '确保单证准确无误'
          ]
        },
        {
          title: '出口报关申报与海关查验配合',
          content: '完成海关申报和查验配合',
          details: [
            '向海关提交报关单',
            '准确填写商品编码、数量、价值',
            '配合海关查验提供货物资料',
            '获得海关放行文件'
          ]
        }
      ]
    },
    {
      id: 'payment-collection',
      title: '货款回收与外汇管理',
      icon: Target,
      description: '实现外汇货款到账',
      steps: [
        {
          title: '结算工具操作',
          content: '选择合适的结算方式确保收款',
        details: [
            '信用证结算：严格按要求制作单证',
            'T/T结算：明确付款时间和账户信息',
            '单证要求：清洁提单、发票、装箱单等',
            '确保单证与信用证条款一致'
          ]
        },
        {
          title: '银行交单与收款跟踪',
          content: '通过银行完成收款流程',
        details: [
            '将单证提交给银行审核',
            '银行传递单证给进口方银行',
            '定期查询款项流向',
            '及时沟通解决付款延迟问题'
          ]
        },
        {
          title: '外汇核销合规流程',
          content: '完成外汇收支合规管理',
        details: [
            '通过银行系统办理国际收支申报',
            '提交报关单、合同等资料',
            '由银行代为登记外汇收支',
            '确保外汇收支合规管理'
          ]
        }
      ]
    }
  ];

  // 自动切换流程展示
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % coreProcesses.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [coreProcesses.length]);

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
              <Zap className="w-8 h-8 text-[color:var(--surf-tundra-700)]" />
              </div>
            <div>
              <h1 className="text-3xl font-bold text-[color:var(--text-cashmere-100)] mb-2">
                外贸核心流程
              </h1>
              <p className="text-[color:var(--text-cashmere-100)]/80 text-lg">
                掌握外贸六大核心流程，从客户开发到货款回收的完整操作要点
              </p>
            </div>
          </div>
        </motion.div>

        {/* 流程概览 - 时间轴设计 */}
        <motion.div
          className="glass-effect-light p-8 rounded-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-[color:var(--text-cashmere-100)] mb-8 text-center">
            外贸核心流程概览
          </h2>
          
          {/* 横向时间轴 */}
          <div className="relative">
            {/* 主轴线 */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[color:var(--accent-sand-500)]/20 via-[color:var(--accent-sand-500)]/40 to-[color:var(--accent-sand-500)]/20 -translate-y-1/2 hidden lg:block" />
            
            {/* 流程节点 */}
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-4 relative">
              {coreProcesses.map((process, index) => (
                <motion.div
                  key={process.id}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {/* 连接线（移动端） */}
                  {index > 0 && (
                    <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-gradient-to-b from-transparent to-[color:var(--accent-sand-500)]/30 -translate-x-1/2 lg:hidden" />
                  )}
                  
                  {/* 节点卡片 */}
                  <div 
                    className={`relative cursor-pointer transition-all duration-500 ${
                      activeProcess === index ? 'scale-110 z-10' : 'hover:scale-105'
                    }`}
                    onClick={() => setActiveProcess(index)}
                  >
                    {/* 节点圆圈 */}
                    <div className="flex justify-center mb-4">
                      <div className={`relative w-20 h-20 rounded-full transition-all duration-500 ${
                        activeProcess === index 
                          ? 'bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/80 shadow-2xl shadow-[color:var(--accent-sand-500)]/30' 
                          : 'bg-gradient-to-br from-white/20 to-white/10'
                      }`}>
                        <process.icon className={`absolute inset-0 m-auto w-10 h-10 transition-colors duration-500 ${
                          activeProcess === index 
                            ? 'text-[color:var(--accent-sand-500)]' 
                            : 'text-[color:var(--text-cashmere-100)]/70'
                        }`} />
                        
                        {/* 流程序号 */}
                        <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                          activeProcess === index 
                            ? 'bg-[color:var(--bg-ocean-900)] text-[color:var(--accent-sand-500)]' 
                            : 'bg-white/20 text-[color:var(--text-cashmere-100)]'
                        }`}>
                          {index + 1}
            </div>
                        
                        {/* 脉冲效果 */}
                        {activeProcess === index && (
                          <div className="absolute inset-0 rounded-full animate-ping bg-[color:var(--accent-sand-500)] opacity-20" />
                        )}
          </div>
        </div>
                    
                    {/* 流程信息 */}
                    <div className={`text-center transition-all duration-500 ${
                      activeProcess === index ? 'opacity-100' : 'opacity-80'
                    }`}>
                      <h3 className="text-sm font-bold text-[color:var(--text-cashmere-100)] mb-1">
                        {process.title}
          </h3>
                      <p className="text-xs text-[color:var(--text-cashmere-100)]/70 leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 详细流程内容 - 步骤式展示 */}
        {coreProcesses.map((process, processIndex) => (
          <section key={process.id} className="mb-16">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: processIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* 流程标题卡片 */}
              <div className="mb-10">
                <motion.div 
                  className="relative inline-block"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-6 bg-gradient-to-r from-[color:var(--accent-sand-500)]/20 to-transparent backdrop-blur-md rounded-r-3xl pr-12 pl-6 py-4">
                    {/* 流程图标 */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/70 rounded-2xl flex items-center justify-center shadow-xl">
                        <process.icon className="w-8 h-8 text-[color:var(--accent-sand-500)]" />
                </div>
                      <div className="absolute -top-2 -left-2 w-20 h-20 bg-[color:var(--accent-sand-500)]/20 rounded-2xl blur-xl" />
        </div>
              
                    {/* 流程信息 */}
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="px-3 py-1 bg-[color:var(--accent-sand-500)] text-[color:var(--bg-ocean-900)] rounded-full text-sm font-bold">
                          流程 {processIndex + 1}
                        </span>
                        <h2 className="text-2xl font-bold text-[color:var(--text-cashmere-100)]">
                          {process.title}
                        </h2>
        </div>
                      <p className="text-[color:var(--text-cashmere-100)]/85">
                        {process.description}
                </p>
              </div>
            </div>
                </motion.div>
              </div>
              
              {/* 步骤内容 - 阶梯式布局 */}
              <div className="relative pl-8 lg:pl-16">
                {/* 垂直连接线 */}
                <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[color:var(--accent-sand-500)]/40 via-[color:var(--accent-sand-500)]/20 to-transparent" />
                
                <div className="space-y-8">
                  {process.steps.map((step, stepIndex) => (
                    <motion.div
                      key={stepIndex}
                      className="relative"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: stepIndex * 0.15 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex gap-6">
                        {/* 步骤指示器 */}
                        <div className="relative flex-shrink-0">
                          {/* 连接点 */}
                          <div className="absolute -left-[1.625rem] lg:-left-[2.625rem] top-6 w-3 h-3 bg-[color:var(--accent-sand-500)] rounded-full ring-4 ring-[color:var(--bg-ocean-900)]" />
                          
                          {/* 步骤编号 */}
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--accent-sand-500)]/30 to-[color:var(--accent-sand-500)]/10 rounded-2xl flex items-center justify-center">
                              <span className="text-lg font-bold text-[color:var(--accent-sand-500)]">
                                {(stepIndex + 1).toString().padStart(2, '0')}
                              </span>
              </div>
                            {/* 步骤连接线 */}
                            {stepIndex < process.steps.length - 1 && (
                              <div className="absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-[color:var(--accent-sand-500)]/20 to-transparent -translate-x-1/2" />
                            )}
            </div>
                      </div>
          
                        {/* 步骤内容 */}
                        <div className="flex-1">
                          <motion.div 
                            className="relative group"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--accent-sand-500)]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                            
                            <div className="relative glass-effect p-6 rounded-2xl border border-white/10 hover:border-[color:var(--accent-sand-500)]/30 transition-colors duration-300">
                              {/* 步骤标题 */}
                              <h3 className="text-xl font-bold text-[color:var(--text-cashmere-100)] mb-3 flex items-center">
                                <div className="w-1 h-6 bg-[color:var(--accent-sand-500)] rounded-full mr-3" />
                                {step.title}
          </h3>
          
                              {/* 步骤描述 */}
                              <p className="text-[color:var(--text-cashmere-100)]/85 mb-6 leading-relaxed">
                                {step.content}
                              </p>
                              
                              {/* 详细要点 - 标签式布局 */}
              <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-[color:var(--text-cashmere-100)]/90 uppercase tracking-wider">
                                  执行要点
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {step.details.map((detail, detailIndex) => (
        <motion.div 
                                      key={detailIndex}
                                      className="relative"
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: stepIndex * 0.15 + detailIndex * 0.05 }}
                                      viewport={{ once: true }}
                                    >
                                      <div className="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-[color:var(--accent-sand-500)]/30 transition-all duration-300">
                                        <div className="flex items-center gap-2">
                                          <CheckCircle className="w-3.5 h-3.5 text-[color:var(--accent-sand-500)]" />
                                          <span className="text-[color:var(--text-cashmere-100)]/85 text-sm">
                                            {detail}
                                          </span>
            </div>
          </div>
        </motion.div>
                                  ))}
                </div>
                </div>
                </div>
                          </motion.div>
            </div>
          </div>
        </motion.div>
                  ))}
            </div>
        </div>
        </motion.div>
          </section>
        ))}

        {/* 流程总结 */}
        <motion.div
          className="glass-effect-light p-8 rounded-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-[color:var(--text-cashmere-100)] mb-6 flex items-center">
            <Target className="w-6 h-6 text-[color:var(--accent-sand-500)] mr-3" />
            外贸核心流程要点总结
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-base p-6">
              <h3 className="text-lg font-semibold text-[color:var(--text-cashmere-100)] mb-4">
                🎯 关键成功因素
          </h3>
                <div className="space-y-3">
                {[
                  '精准的市场分析与客户定位',
                  '严格的风险筛查与资信评估', 
                  '完善的合同条款法律化',
                  '科学的生产计划与质量控制',
                  '高效的物流运输与通关配合',
                  '合规的外汇管理与收款跟踪'
                ].map((factor, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[color:var(--accent-sand-500)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[color:var(--text-cashmere-100)]/80 text-sm">
                      {factor}
                    </span>
                    </div>
                ))}
                    </div>
                  </div>
                  
            <div className="card-base p-6">
              <h3 className="text-lg font-semibold text-[color:var(--text-cashmere-100)] mb-4">
                ⚠️ 常见风险点
          </h3>
                <div className="space-y-3">
                {[
                  '客户资信不实导致的收款风险',
                  '生产延误影响交货期承诺',
                  '质量标准不符合客户要求',
                  '单证制作错误导致通关延误',
                  '汇率波动影响最终收益',
                  '政策变化带来的合规风险'
                ].map((risk, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-[color:var(--text-cashmere-100)]/80 text-sm">
                      {risk}
                    </span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            to="/course/plc-basics" 
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            外贸业务框架
          </Link>
          
          <Link 
            to="/course/program-development" 
            className="btn-primary flex items-center group"
          >
            关键角色职责图谱
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
  </div>
  );
};

export default IOWiringPage;