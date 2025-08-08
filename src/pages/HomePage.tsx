import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Target, Network, Zap } from '../components/Icons';

const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const fullText = '外贸业务的核心流程及关键角色';
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  // 打字机效果
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  // 滚动动画控制
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const courseModules = [
    {
      title: '一. 外贸业务全景图',
      description: '展现外贸业务全貌，涵盖开发客户、洽谈订单、报关等流程，让学生认识业务员、单证员等关键角色，学会梳理各环节操作，掌握外贸业务基本技能，清晰了解外贸业务连贯运作方式。',
      icon: BookOpen,
      path: '/course/automation-industry',
      color: 'from-accent-500 to-yellow-400',
      delay: 0.1
    },
    {
      title: '二. 外贸业务框架',
      description: '涵盖外贸业务全流程，从开发客户开始，到报价签约、订单执行、报关运输、结汇等环节。学生能学到开发客户的方法、制作规范报价单、跟进订单确保顺利执行、处理报关等单证的技能。',
      icon: Network,
      path: '/course/plc-basics',
      color: 'from-accent-500 to-yellow-400',
      delay: 0.2
    },
    {
      title: '三. 外贸核心流程',
      description: '聚焦外贸业务关键环节，包括开发客户、报价签约、订单执行等。学生在此能学到开发客户的方法，掌握报价签约的正确流程，还能学会跟踪订单、处理物流等技能。',
      icon: Zap,
      path: '/course/io-wiring',
      color: 'from-accent-500 to-yellow-400',
      delay: 0.3
    },
    {
      title: '四. 关键角色职责图谱',
      description: '展示外贸业务关键角色职责图谱，让学生清晰了解业务员如何开发客户、单证员怎样处理单据等，学生能学到明确各角色具体职责，掌握在不同环节中各角色的工作内容。',
      icon: Users,
      path: '/course/program-development',
      color: 'from-accent-500 to-yellow-400',
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const cardHover = {
    scale: 1.02,
    y: -8,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 30
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 主标题区域 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ y }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-[color:var(--accent-sand-500)] rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.3 }
            }}
          >
            <Network className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 className="text-5xl font-bold text-base-50 mb-6 leading-tight">
            <span className="inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-white"
              >
                |
              </motion.span>
            </span>
            <motion.span 
              className="block text-2xl font-normal text-white mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
            >
              国际贸易专业核心课程
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-base-50/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            通过系统性学习外贸业务知识，掌握跨境交易核心流程，
            培养具备外贸业务操作、客户开发、单证处理和风险管控能力的专业人才。
          </motion.p>
        </motion.div>

        {/* 课程特色 - 滚动动画 */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {[
            { icon: Target, title: '实用性强', desc: '紧密结合外贸实际业务需求，从理论基础到实践应用，培养学员解决实际外贸问题的能力。' },
            { icon: Users, title: '系统完整', desc: '涵盖外贸业务的各个方面，从客户开发到货款回收，构建完整的外贸知识体系。' },
            { icon: Award, title: '就业导向', desc: '课程内容与岗位需求紧密对应，助力学员在国际贸易领域实现职业发展。' }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-base text-center cursor-pointer p-8 group"
                whileHover={{
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div 
                  className="w-16 h-16 bg-[color:var(--accent-sand-500)] rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-base-50 mb-3">{feature.title}</h3>
                <p className="text-base-50/80">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 课程模块 - 3D效果 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-base-50 text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            课程章节
          </motion.h2>
          
          {/* 课程模块网格布局 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: module.delay, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={cardHover}
                  className="h-full"
                >
                  <Link
                    to={module.path}
                    className="group relative glass-card p-8 transition-all duration-300 block h-full hover:shadow-glass-hover"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[color:var(--accent-sand-500)] rounded-l-2xl"></div>
                    <motion.div 
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ background: `linear-gradient(135deg, ${module.color.split(' ').join(', ')})` }}
                    />
                    
                    <div className="flex flex-col h-full relative z-10">
                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div 
                          className="w-12 h-12 bg-[color:var(--accent-sand-500)] rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 15,
                            boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <motion.h3 
                            className="text-lg font-semibold text-base-50 mb-3 group-hover:text-white transition-colors leading-tight"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {module.title}
                          </motion.h3>
              </div>
            </div>
            
                      <p className="text-base-50/80 mb-6 leading-relaxed flex-grow text-sm">
                        {module.description}
                      </p>
                      
                      <motion.div 
                        className={`flex items-center text-white group-hover:text-white/80 mt-auto ${
                          index === 0 ? 'drop-shadow-md' : ''
                        }`}
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-sm font-medium">开始学习</span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.div>
                      </motion.div>
              </div>
                </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>


        {/* 学习路径指引 - 弹簧动画 */}
        <motion.div 
                      className="glass-effect rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
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
          {/* 背景动画粒子效果 */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <motion.h2 
                            className="text-3xl font-bold text-base-50 mb-6 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            开始你的外贸学习之旅
          </motion.h2>
          
          <motion.p 
            className="text-xl text-base-50/80 mb-8 max-w-2xl mx-auto relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            按照模块顺序学习，从基础认知到实践应用，循序渐进掌握外贸业务精髓。
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
                to="/objectives"
                className="btn-primary rounded-xl font-semibold transition-all duration-300 shadow-lg inline-block"
              >
                查看学习目标
              </Link>
            </motion.div>
            

          </motion.div>
        </motion.div>
              </div>
            </div>
  );
  };
  
export default HomePage; 