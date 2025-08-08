import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Network,
  Settings,
  Users,
  ArrowLeft,
  ArrowRight,
  Award,
  Shield,
  Zap,
  Code
} from '../components/Icons';

const CourseSummaryPage: React.FC = () => {
  

  // 课程内容总结数据（来自课程讲义.md）
  const courseSummary = {
    title: '课程内容总结',
    description: '通过本课程的学习，学生将全面掌握外贸业务的完整知识体系。',
    sections: [
      {
        id: 1,
        title: '外贸全景认知',
        description: '理解跨境交易定义、目标、发展及挑战，掌握B2B/B2C/C2C等模式特点。',
        icon: Network,
        details: [
          '深入理解跨境交易的核心定义与本质',
          '掌握外贸业务的核心目标：安全交付与收汇',
          '了解从古代丝绸之路到现代跨境电商的发展历程',
          '识别并应对跨境规则差异、资金风险、物流复杂度等挑战',
          '区分B2B、B2C、C2C三种模式的特点与运作逻辑'
        ]
      },
      {
        id: 2,
        title: '业务框架构建',
        description: '明晰外贸全链条运作逻辑，包括政策支持、产业链协作与服务支撑。',
        icon: Network,
        details: [
          '理解外贸业务框架作为连接国内生产与海外需求的系统',
          '掌握税收杠杆（出口退税）、贸易便利化、外汇管理等政策工具',
          '熟悉原材料供应商、生产制造商、外贸企业、跨境物流商的协作',
          '了解金融支持（出口信保、贸易融资）的作用',
          '掌握区块链溯源、AI单证审核等技术赋能手段'
        ]
      },
      {
        id: 3,
        title: '核心流程掌握',
        description: '系统学习客户开发、风险筛查、合同签订、生产备货、物流通关、货款回收全流程操作要点。',
        icon: Settings,
        details: [
          '客户开发与商务谈判：市场分析、询盘报价、交易磋商技巧',
          '风险筛查与资信评估：客户背景调查、风险等级判定、收款决策',
          '合同签订与订单确认：条款法律化、细节书面固化',
          '生产备货与订单执行：生产计划调度、质量检验、包装标识',
          '国际物流与出口通关：运输方式选择、单证传递、报关申报',
          '货款回收与外汇管理：结算工具操作、银行交单、外汇核销'
        ]
      },
      {
        id: 4,
        title: '角色职责明晰',
        description: '掌握出口商、进口商、外贸经理、货代、银行、海关等关键角色定位与职能。',
        icon: Users,
        details: [
          '主体角色：出口商（商机开拓、订单洽谈、质量控制）与进口商（需求发起、清关责任、税费缴纳）',
          '执行角色：外贸经理（策略制定、团队管理）、外销员（客户开发、订单跟进）',
          '执行角色：单证员（单据制作审核）、跟单员（生产物流协调）',
          '协作角色：货运代理（运输方案、报关报检）',
          '协作角色：银行（信用证操作、单据审核）、海关（货物查验、税收征管）'
        ]
      },
      {
        id: 5,
        title: '实操技能提升',
        description: '具备客户谈判、资信评估、订单执行、单证处理、外汇管理等实战能力。',
        icon: Zap,
        details: [
          '客户谈判技巧：询盘响应、报价策略、条款协商',
          '资信评估方法：背景调查工具运用、信用评分模型应用',
          '订单执行管理：生产进度跟踪、质量标准执行、异常处理',
          '单证处理规范：单证一致性审核、信息准确性保障、错误纠正流程',
          '外汇管理操作：结算工具选择、收汇跟踪、合规申报'
        ]
      },
      {
        id: 6,
        title: '复杂应对能力',
        description: '理解跨境规则差异、物流复杂度与资金风险，构建系统性业务认知框架。',
        icon: Shield,
        details: [
          '跨境规则差异应对：关税政策、技术标准、法规要求的识别与适应',
          '物流复杂度管理：多式联运协调、清关流程优化、运输风险控制',
          '资金风险防范：汇率风险对冲、信用风险管理、付款方式选择',
          '系统认知框架：全流程关联理解、多方协作机制、风险点识别',
          '问题解决思维：异常情况处理、纠纷解决路径、持续优化改进'
        ]
      },
      {
        id: 7,
        title: '职业发展根基',
        description: '培养应对外贸综合问题的能力，把握行业趋势与机遇，支撑高效从业。',
        icon: Code,
        details: [
          '综合问题解决：跨部门协调、多任务管理、压力承受能力',
          '行业趋势把握：数字化转型、跨境电商发展、绿色贸易趋势',
          '职业路径规划：从业务员到管理岗、专业化与复合型发展',
          '持续学习能力：政策法规更新、新技术应用、国际市场变化',
          '职业素养提升：跨文化沟通、商务礼仪、职业道德规范'
        ]
      }
    ]
  };

  // 课程模块总结数据

  

  

  return (
    <div className="min-h-screen py-8 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* 页面标题 */}
        <motion.div 
          className="glass-card p-8 mb-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/80 rounded-l-2xl" />
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/80 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-base-50 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--text-cashmere-100)] to-[color:var(--text-cashmere-100)]\">
                {courseSummary.title}
              </h1>
              <p className="text-base-50/80 text-lg">
                {courseSummary.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 课程内容总结详解 */}
        <section className="mb-12">
          <div className="grid gap-8">
            {courseSummary.sections.map((section, index) => (
              <motion.div
                key={section.id}
                className="glass-effect p-8 rounded-2xl relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* 装饰性背景 */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[color:var(--accent-sand-500)]/10 to-transparent rounded-full blur-3xl -z-10" />
                
                <div className="flex items-start mb-6">
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/80 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <section.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-base-50 mb-2">
                      {section.id}. {section.title}
                    </h3>
                    <p className="text-base-50/80 text-lg">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="card-base p-6 backdrop-blur-xl bg-white/5">
                  <div className="space-y-3">
                    {section.details.map((detail, detailIndex) => (
                      <motion.div 
                        key={detailIndex} 
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: detailIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/80 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="text-base-50/90 leading-relaxed">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 进度指示器 */}
                <motion.div 
                  className="mt-6 h-1 bg-gradient-to-r from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/80 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  style={{ originX: 0 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* 核心能力总结 */}
        <motion.div
          className="glass-effect p-8 rounded-2xl mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="w-20 h-20 bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Award className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-3xl font-bold text-base-50 mb-4">
              恭喜！您已完成全部课程内容
            </h2>
            
            <p className="text-base-50/80 text-lg mb-6 leading-relaxed">
              通过系统学习，您已经建立了完整的外贸业务知识体系。从外贸全景认知到实操技能提升，
              从核心流程掌握到职业发展规划，您已经具备了从事外贸工作所需的理论基础和实践能力。
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <motion.div 
                className="card-base p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-white mb-1">7</div>
                <div className="text-sm text-base-50/70">核心能力模块</div>
              </motion.div>
              <motion.div 
                className="card-base p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-white mb-1">35+</div>
                <div className="text-sm text-base-50/70">知识要点</div>
              </motion.div>
              <motion.div 
                className="card-base p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-white mb-1">5</div>
                <div className="text-sm text-base-50/70">职业方向</div>
              </motion.div>
              <motion.div 
                className="card-base p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-base-50/70">实用价值</div>
              </motion.div>
            </div>
            
            <p className="text-base-50/70 text-sm italic">
              "理论与实践相结合，知识与能力共提升。继续在实践中深化学习，成为外贸领域的专业人才！"
            </p>
          </div>
        </motion.div>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link
            to="/course/program-development"
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            关键角色职责图谱
          </Link>
          
          <Link
            to="/course-test"
            className="btn-primary flex items-center group"
          >
            开始课堂测试
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSummaryPage;
