import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target,
  CheckCircle,
  BookOpen,
  Settings,
  Zap,
  Network,
  Shield
} from '../components/Icons';

const ObjectivesPage: React.FC = () => {
  const [skillProgress, setSkillProgress] = useState<number[]>([]);

  useEffect(() => {
    // 模拟进度条动画
    const timer = setTimeout(() => {
      setSkillProgress([100, 100, 100, 100, 100, 100]);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const learningObjectives = [
    {
      title: '掌握外贸基础与模式',
      description: '理解跨境交易核心概念、目标、挑战及发展，明晰B2B/B2C/C2C等模式特点与运作逻辑。',
      capabilities: [
        '掌握跨境商品/服务交易的核心定义和目标',
        '区分B2B、B2C、C2C等不同外贸模式的特点和适用场景'
      ],
      icon: BookOpen,
      color: 'from-accent-500 to-yellow-400',
      backInfo: '通过实际案例分析，你将能够在复杂的国际贸易环境中准确识别最佳的外贸模式，并为企业提供专业的商务建议。'
    },
    {
      title: '理解业务框架与链条',
      description: '掌握外贸从需求到结算的全链条理论内涵，理解政策调控、产业协作及服务支撑的关键作用。',
      capabilities: [
        '理解外贸业务生态中政策支持、产业链协作、服务支撑的重要性',
        '掌握从客户开发到货款回收的完整业务链条'
      ],
      icon: Network,
      color: 'from-accent-500 to-yellow-400',
      backInfo: '掌握业务框架后，你将能够独立完成中小型外贸项目的整体规划和系统设计，胜任外贸业务主管职位。'
    },
    {
      title: '分析核心流程机制',
      description: '掌握客户开发、风险筛查、合同执行、物流通关、货款回收等关键流程的理论要点与运作机制。',
      capabilities: [
        '熟练掌握客户开发与商务谈判的方法和技巧',
        '具备风险筛查与资信评估的专业能力'
      ],
      icon: Zap,
      color: 'from-accent-500 to-yellow-400',
      backInfo: '完整的流程分析能力是外贸专员的核心竞争力，这将使你能够从零开始完成外贸项目的流程管理工作。'
    },
    {
      title: '认知关键角色定位',
      description: '理解出口商/进口商、执行角色（如外贸经理）、协作角色（如货代/银行/海关）的职责差异与协作关系。',
      capabilities: [
        '清晰了解外贸业务中各关键角色的职责分工',
        '掌握与不同角色的协作沟通技巧和方法'
      ],
      icon: Settings,
      color: 'from-accent-500 to-yellow-400',
      backInfo: '角色认知能力是外贸行业的基础要求，这些知识将确保你在外贸团队中能够高效协作和沟通。'
    },
    {
      title: '构建系统理论框架',
      description: '系统梳理外贸流程、角色及内在联系，理解其复杂性与多样性，奠定分析解决理论问题的基础。',
      capabilities: [
        '具备外贸业务的系统性思维和理论分析能力',
        '能够运用理论知识解决实际外贸业务中的复杂问题'
      ],
      icon: Shield,
      color: 'from-accent-500 to-yellow-400',
      backInfo: '系统理论框架是外贸专业发展的高级能力，将帮助你在外贸领域实现更高层次的职业发展。'
    }
  ];

  const coreSkills = [
    { text: '理解外贸业务在国际贸易中实现跨境交易、促进经济发展的基本作用', level: 85 },
    { text: '具备区分不同外贸模式适用场景，合理选择外贸策略的能力', level: 90 },
    { text: '掌握外贸业务框架及各环节功能特点', level: 88 },
    { text: '熟练进行客户开发和商务谈判操作', level: 92 },
    { text: '具备独立完成外贸流程管理与风险控制的能力', level: 86 },
    { text: '掌握国际贸易规范和外贸业务操作标准', level: 89 }
  ];


  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: '100%',
      transition: {
        duration: 2,
        ease: "easeInOut" as const,
        delay: 0.5
      }
    })
  };

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
            className="inline-flex items-center justify-center w-20 h-20 bg-[color:var(--accent-sand-500)] rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring" as const,
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.5 }
            }}
          >
            <Target className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-bold text-base-50 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
              课程学习目标
          </motion.h1>
          
          <motion.p 
            className="text-xl text-base-50/80 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            通过本课程学习，学员将全面掌握外贸业务核心知识，具备在国际贸易领域独立工作的能力
          </motion.p>
        </motion.div>
            
        {/* 学习目标详细说明 - 卡片翻转效果 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-base-50 text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            详细学习目标
          </motion.h2>

        <div className="space-y-8">
            {learningObjectives.map((objective, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-8"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-xl bg-[color:var(--accent-sand-500)] flex items-center justify-center flex-shrink-0">
                    <objective.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-6 flex-grow">
                    <h3 className="text-xl font-bold text-base-50 mb-3">{objective.title}</h3>
                    <p className="text-base-50/80 mb-4">{objective.description}</p>
                  <div className="space-y-2">
                      {objective.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                          <span className="text-base-50/80">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
        </motion.div>

        {/* 核心技能总结 - 进度条动画 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-base-50 text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            核心技能掌握
          </motion.h2>
          
          <motion.div 
            className="glass-effect rounded-2xl p-8"
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <motion.p 
              className="text-xl text-base-50/80 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              完成本课程学习后，你将具备以下核心技能：
            </motion.p>
            
            <div className="space-y-6">
              {coreSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 bg-base-800/30 rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[color:var(--accent-sand-500)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                      <span className="text-base-50/80 leading-relaxed flex-1">
                        {skill.text}
                      </span>
              </div>
                    <motion.span 
                      className="text-white font-semibold ml-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {skillProgress[index] || 0}%
                    </motion.span>
                </div>
                
                  {/* 进度条 */}
                  <div className="w-full bg-[color:var(--bg-ocean-900)]/60 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-2 bg-[color:var(--accent-sand-500)] rounded-full"
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      custom={skill.level}
                      viewport={{ once: true }}
                    />
                </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* 学习指引 - 弹簧动画 */}
        <motion.div 
          className="glass-effect rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring" as const, 
            stiffness: 100, 
            damping: 15,
            delay: 0.2 
          }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.6)",
            borderColor: "rgba(255, 255, 255, 0.3)"
          }}
        >
          {/* 背景动画效果 */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{ 
              background: [
                "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)",
                "radial-gradient(circle at 70% 40%, rgba(168, 85, 247, 0.3) 0%, transparent 60%)",
                "radial-gradient(circle at 50% 70%, rgba(34, 197, 94, 0.3) 0%, transparent 60%)",
                "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          
          <motion.h2 
                            className="text-3xl font-bold text-base-50 mb-6 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            准备开始学习？
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            按照课程模块顺序学习，每个模块都会帮助你达成相应的学习目标
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/careers"
                className="btn-primary rounded-xl font-semibold transition-all duration-300 shadow-lg inline-block"
              >
                了解职业前景
              </Link>
            </motion.div>
            

          </motion.div>
        </motion.div>
      </div>
          </div>
  );
};

export default ObjectivesPage; 