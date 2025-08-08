import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, ArrowRight, CheckCircle } from '../components/Icons';

const CareersPage: React.FC = () => {
  const careerPaths = [
    {
      title: '外贸业务主管',
      skills: [
        { name: '外贸业务的核心流程及关键角色', desc: '了解外贸业务的核心流程，明确各关键角色的职责和任务。', highlight: true },
        { name: '客户开发策略与有效沟通技巧', desc: '学习如何制定客户开发策略并有效进行沟通。' },
        { name: '客户资信调查与风险评估', desc: '掌握如何对客户进行资信调查，评估潜在的贸易风险。' },
        { name: '国际贸易术语选择与应用', desc: '熟悉国际贸易术语（Incoterms）的选择与应用，确保合同条款的准确性。' },
        { name: '国际贸易谈判核心技巧与合同要点', desc: '学习国际贸易中的谈判技巧及合同关键条款的制定。' },
        { name: '国际结算工具选择与信用证操作', desc: '掌握常见的国际结算工具和信用证的操作流程。' }
      ],
      color: 'accent'
    },
    {
      title: '外贸业务员',
      skills: [
        { name: '外贸业务的核心流程及关键角色', desc: '了解外贸业务的整体流程和外销员在其中的关键角色。', highlight: true },
        { name: '客户开发策略与有效沟通技巧', desc: '学习如何通过有效沟通开发潜在客户，并建立长期合作关系。' },
        { name: '客户资信调查与风险评估', desc: '掌握对客户的资信调查与风险评估，降低交易风险。' },
        { name: '国际贸易术语选择与应用', desc: '理解国际贸易术语的选择，并能应用到实际外销工作中。' },
        { name: '外贸订单执行全流程管理', desc: '掌握外贸订单从接单到交货的完整执行流程。' },
        { name: '跨境收付汇操作与风险防范', desc: '学习如何进行跨境收付汇操作，并有效防范相关风险。' }
      ],
      color: 'accent'
    },
    {
      title: '物流单证员',
      skills: [
        { name: '外贸业务的核心流程及关键角色', desc: '理解外贸业务流程，并明确外贸单证员在其中的职责。', highlight: true },
        { name: '外贸单证制作规范', desc: '学习如何规范地制作外贸单证，确保文件准确无误。' },
        { name: '出口通关流程与核心单证准备', desc: '掌握出口通关流程及需要准备的核心单证。' },
        { name: '国际结算工具选择与信用证操作', desc: '了解国际结算工具的选择和信用证的操作要求。' },
        { name: '国际货运代理在外贸业务中的作用', desc: '学习国际货运代理在外贸业务中的关键作用，确保物流畅通。' }
      ],
      color: 'accent'
    },
    {
      title: '外贸跟单员',
      skills: [
        { name: '外贸业务的核心流程及关键角色', desc: '熟悉外贸业务的核心流程，并理解外贸跟单员的工作职责。', highlight: true },
        { name: '外贸订单执行全流程管理', desc: '掌握从订单确认到交货的全过程管理，确保订单顺利执行。' },
        { name: '国际结算工具选择与信用证操作', desc: '学习如何根据订单选择合适的结算工具，并操作信用证。' },
        { name: '出口通关流程与核心单证准备', desc: '理解出口通关的相关流程和必要的单证准备工作。' },
        { name: '跨境收付汇操作与风险防范', desc: '学习如何执行跨境收付汇，并采取有效的风险防范措施。' }
      ],
      color: 'accent'
    },
    {
      title: '国际采购助理',
      skills: [
        { name: '外贸业务的核心流程及关键角色', desc: '了解外贸业务流程，并明确国际采购专员在供应链中的作用。', highlight: true },
        { name: '客户资信调查与风险评估', desc: '掌握如何对供应商进行资信调查，并评估供应风险。' },
        { name: '国际结算工具选择与信用证操作', desc: '熟悉国际结算工具的选择及信用证的使用方法。' },
        { name: '国际货运代理在外贸业务中的作用', desc: '了解国际货运代理的作用，并确保货物顺利运输。' },
        { name: '跨境收付汇操作与风险防范', desc: '学习跨境收付汇的操作流程，并进行风险管理。' }
      ],
      color: 'accent'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-accent-500 to-yellow-400 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Users className="w-10 h-10 text-base-900" />
          </motion.div>
          <h1 className="text-4xl font-bold text-base-50 mb-4">职业发展前景</h1>
          <p className="text-lg text-base-50/80 max-w-2xl mx-auto">
            通过本节课的学习，你可以掌握以下岗位的技能
          </p>
        </motion.div>

        {/* 职业发展路径 */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* 第一行：3个岗位 */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {careerPaths.slice(0, 3).map((path, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 overflow-hidden relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-base-900" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-base-50">
                  {path.title}
                </h3>
                <div className="space-y-3">
                  {path.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className={`w-4 h-4 mt-1 mr-2 flex-shrink-0 ${skill.highlight ? 'text-green-400' : 'text-white/20'}`} />
                      <div>
                        <span className={`font-medium ${skill.highlight ? 'text-white' : 'text-white/40'}`}>
                          {skill.name}
                        </span>
                        <p className={`text-sm mt-1 ${skill.highlight ? 'text-white/80' : 'text-white/30'}`}>
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 第二行：2个岗位居中 */}
          <div className="flex justify-center">
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
              {careerPaths.slice(3).map((path, index) => (
                <motion.div
                  key={index + 3}
                  className="glass-card p-6 overflow-hidden relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 3) * 0.1 + 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[color:var(--accent-sand-500)] flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-[color:var(--surf-tundra-700)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-base-50">
                    {path.title}
                  </h3>
                  <div className="space-y-3">
                    {path.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className={`w-4 h-4 mt-1 mr-2 flex-shrink-0 ${skill.highlight ? 'text-green-400' : 'text-white/20'}`} />
                        <div>
                          <span className={`font-medium ${skill.highlight ? 'text-white' : 'text-white/40'}`}>
                            {skill.name}
                          </span>
                          <p className={`text-sm mt-1 ${skill.highlight ? 'text-white/80' : 'text-white/30'}`}>
                            {skill.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 开启你的外贸职业生涯 */}
        <motion.div 
          className="text-center py-16 px-8 glass-effect rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-base-50 mb-6">开启你的外贸职业生涯</h2>
          <p className="text-lg text-base-50/80 mb-8 max-w-2xl mx-auto">
            掌握外贸业务技能，抓住国际贸易发展机遇
          </p>
          <div className="flex justify-center">
            <Link 
              to="/course/automation-industry"
              className="btn-primary rounded-xl flex items-center"
            >
              开始学习课程
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage; 