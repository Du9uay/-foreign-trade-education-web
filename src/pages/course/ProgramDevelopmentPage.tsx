import React, { useState, useEffect } from 'react';
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
  CheckCircle,
  ArrowLeft,
  ArrowRight
} from '../../components/Icons';

const ProgramDevelopmentPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState(0);

  // 主体角色数据
  const mainRoles = [
    {
      id: 'exporter',
      title: '出口商',
      description: '外贸业务的主要发起方和执行方',
      icon: Target,
      responsibilities: [
        {
          title: '商机开拓与客户开发',
          description: '通过国际展会、市场调研等方式主动发掘海外客户，建立业务联系',
          details: [
            '参加国际展会展示产品',
            '利用B2B平台开发客户',
            '进行市场调研分析',
            '建立客户联系网络'
          ]
        },
        {
          title: '订单洽谈与合同签订',
          description: '与进口商就产品细节、交货期、付款方式等关键条款进行谈判并达成协议',
          details: [
            '产品款式、数量、单价谈判',
            '交货期协商（如3个月）',
            '付款方式确定',
            '合同条款谈判'
          ]
        },
        {
          title: '内部生产协调',
          description: '根据订单需求，协同生产部门制定生产计划，确保设备、原材料供应满足交付要求',
          details: [
            '制定生产计划',
            '协调设备资源',
            '确保原材料供应',
            '满足交付要求'
          ]
        },
        {
          title: '财务资源协调',
          description: '与财务部门协作，筹备运营资金，用于支付原材料采购、生产等环节的费用',
          details: [
            '筹备运营资金',
            '支付原材料采购费用',
            '支付生产环节费用',
            '财务风险控制'
          ]
        },
        {
          title: '物流运输安排',
          description: '与货运代理协调，确定海运航线、安排货物运输及投保运输保险等事宜',
          details: [
            '确定海运航线',
            '安排货物运输',
            '投保运输保险',
            '确保货物按时出运'
          ]
        },
        {
          title: '全流程质量控制',
          description: '严格把控从原材料检验、生产过程监控到成品检验的质量关，确保出口产品符合目标市场的国际安全标准',
          details: [
            '原材料检验',
            '生产过程监控',
            '成品检验',
            '符合国际安全标准'
          ]
        }
      ]
    },
    {
      id: 'importer',
      title: '进口商',
      description: '外贸业务的需求方和接收方',
      icon: Shield,
      responsibilities: [
        {
          title: '需求发起与采购',
          description: '基于目标市场需求，主动发起进口采购计划并选择供应商',
          details: [
            '分析目标市场需求',
            '发起进口采购计划',
            '选择合适供应商',
            '制定采购策略'
          ]
        },
        {
          title: '货款支付安排',
          description: '按贸易合同约定支付货款，明确货物规格、金额、交货期及单据要求',
          details: [
            '按合同约定支付货款',
            '明确货物规格',
            '确定金额和交货期',
            '明确单据要求'
          ]
        },
        {
          title: '目的国清关责任',
          description: '在货物到港后，作为清关主体提交报关单、发票、提单等文件，配合海关查验',
          details: [
            '提交报关单',
            '提供发票、提单等文件',
            '配合海关查验',
            '作为清关主体'
          ]
        },
        {
          title: '合规标准遵守',
          description: '确保进口货物符合目的国法规与技术标准，承担合规风险',
          details: [
            '确保符合目的国法规',
            '遵守技术标准',
            '承担合规风险',
            '履行法律义务'
          ]
        },
        {
          title: '税费缴纳义务',
          description: '依法缴纳海关征收的关税、增值税等进口环节税款，履行财政义务',
          details: [
            '缴纳关税',
            '缴纳增值税等税款',
            '履行财政义务',
            '遵守税收法规'
          ]
        },
        {
          title: '问题单据处理',
          description: '对清关中因单证问题导致的货物扣留，负责补充或修正单据直至通关',
          details: [
            '处理单证问题',
            '补充缺失单据',
            '修正错误信息',
            '确保顺利通关'
          ]
        }
      ]
    }
  ];

  // 主要执行角色数据
  const executionRoles = [
    {
      id: 'foreign-trade-manager',
      title: '外贸经理',
      description: '外贸业务的战略制定者和团队管理者',
      icon: Users,
      responsibilities: [
        {
          title: '策略制定',
          description: '通过市场调研分析目标市场需求，制定外贸策略和针对性产品推广计划',
          keyPoints: [
            '市场调研分析',
            '制定外贸策略',
            '产品推广计划',
            '目标市场定位'
          ]
        },
        {
          title: '内部协调',
          description: '统筹内部团队工作，包括与外销员沟通新客户开发方向、与单证员商讨订单单据规范',
          keyPoints: [
            '团队工作统筹',
            '客户开发方向指导',
            '单据规范制定',
            '跟单进度管理'
          ]
        },
        {
          title: '客户谈判',
          description: '代表企业参与重要客户洽谈，争取更有利的订单条件，例如延长付款期限至60天',
          keyPoints: [
            '重要客户洽谈',
            '争取有利条件',
            '付款期限谈判',
            '合同条款优化'
          ]
        },
        {
          title: '团队管理',
          description: '定期组织业务培训，提升外销员的跨文化谈判技巧，并指导单证员掌握最新电子单据制作系统操作',
          keyPoints: [
            '组织业务培训',
            '跨文化谈判技巧',
            '单证员指导',
            '系统操作培训'
          ]
        }
      ]
    },
    {
      id: 'sales-representative',
      title: '外销员',
      description: '外贸业务的前线执行者和客户联络员',
      icon: Target,
      responsibilities: [
        {
          title: '客户开发',
          description: '利用海关数据平台等渠道，通过邮件营销等方式主动联系潜在客户，介绍企业产品优势',
          keyPoints: [
            '海关数据平台利用',
            '邮件营销',
            '潜在客户联系',
            '产品优势介绍'
          ]
        },
        {
          title: '订单执行跟进',
          description: '在订单履行过程中，负责与客户沟通产品细节修改，将客户要求准确反馈给生产部门',
          keyPoints: [
            '客户沟通',
            '产品细节修改',
            '客户要求反馈',
            '生产进度跟踪'
          ]
        },
        {
          title: '物流协调与问题处理',
          description: '负责协调物流运输环节，包括与物流部门协作选择合适的货运代理，全程监控货物运输状态',
          keyPoints: [
            '物流运输协调',
            '货运代理选择',
            '运输状态监控',
            '突发问题处理'
          ]
        }
      ]
    },
    {
      id: 'documentation-specialist',
      title: '外贸单证员',
      description: '外贸单证的制作和审核专家',
      icon: BookOpen,
      responsibilities: [
        {
          title: '单据制作',
          description: '根据订单合同和信用证要求，精准制作全套外贸单据（如商业发票、提单、装箱单等）',
          keyPoints: [
            '商业发票制作',
            '提单制作',
            '装箱单制作',
            '信息完整准确'
          ]
        },
        {
          title: '单据审核',
          description: '严格遵循"单证一致、单单一致"原则，系统审核所有单据',
          keyPoints: [
            '单证一致原则',
            '单单一致检查',
            '系统审核流程',
            '信息相符验证'
          ]
        },
        {
          title: '信息核对与纠错',
          description: '在审核过程中发现单据信息错误（如提单目的港错误），及时联系相关方进行沟通和更正',
          keyPoints: [
            '错误信息发现',
            '相关方联系',
            '沟通协调',
            '及时更正'
          ]
        },
        {
          title: '单据准确性保障',
          description: '通过细致的制作、严格的审核和及时的纠错，确保所有提交的单据准确无误',
          keyPoints: [
            '细致制作',
            '严格审核',
            '及时纠错',
            '准确无误'
          ]
        },
        {
          title: '信息管理',
          description: '确保关键交易信息在所有相关单据中正确、一致地体现',
          keyPoints: [
            '关键信息管理',
            '正确体现',
            '一致性保证',
            '相关单据核对'
          ]
        }
      ]
    },
    {
      id: 'merchandiser',
      title: '外贸跟单员',
      description: '订单执行过程的监控和协调者',
      icon: Settings,
      responsibilities: [
        {
          title: '生产进度跟进',
          description: '订单签订后，与工厂密切沟通生产进度，及时发现并协调解决异常，确保生产按计划进行',
          keyPoints: [
            '工厂沟通',
            '进度跟进',
            '异常发现',
            '协调解决'
          ]
        },
        {
          title: '物流协调管理',
          description: '负责与国际货运代理沟通，办理订舱手续，选择合适的集装箱运输方式',
          keyPoints: [
            '货代沟通',
            '订舱手续',
            '运输方式选择',
            '运输状态跟踪'
          ]
        },
        {
          title: '运输单证处理',
          description: '及时处理运输途中产生的文件问题，如发现并协调修改报关单信息错误等',
          keyPoints: [
            '文件问题处理',
            '报关单修改',
            '信息错误协调',
            '及时处理'
          ]
        },
        {
          title: '目的港清关协助',
          description: '货物到达目的港后，协助进口商办理清关手续，提供所需的完整清关文件',
          keyPoints: [
            '清关协助',
            '清关手续',
            '文件提供',
            '完整清关'
          ]
        },
        {
          title: '收款跟进确认',
          description: '跟进客户付款情况，在确认收到货款后及时通知公司财务部门',
          keyPoints: [
            '付款跟进',
            '收款确认',
            '财务通知',
            '及时反馈'
          ]
        }
      ]
    }
  ];

  // 协作角色数据
  const cooperationRoles = [
    {
      id: 'freight-forwarder',
      title: '国际货运代理',
      description: '专业的物流服务提供商',
      icon: Monitor,
      responsibilities: [
        {
          title: '运输方案设计',
          description: '根据货物特性（如20吨生鲜水果）设计运输方案，建议采用空运+冷藏运输组合方式',
          example: '为20吨榴莲设计空运冷藏方案，确保水果新鲜度'
        },
        {
          title: '订舱操作执行',
          description: '向航空公司（如新加坡航空）预订符合要求的冷藏货舱，提供货物详细信息',
          example: '向新加坡航空预订冷藏货舱，起运港：广州白云机场'
        },
        {
          title: '报关报检代办',
          description: '准备报关单、商业发票、提单、植物检疫证书等文件，向海关申报',
          example: '协助生鲜水果出口的植物检疫和病虫害检查'
        }
      ]
    },
    {
      id: 'bank',
      title: '银行',
      description: '外贸金融服务的核心提供者',
      icon: Shield,
      responsibilities: [
        {
          title: '开立信用证',
          description: '根据进口商（申请人）的申请和要求，审核其信用后，开立信用证并发送给出口商的银行',
          example: '审核进口商信用，开立信用证作为付款承诺'
        },
        {
          title: '通知信用证',
          description: '出口商银行收到信用证后，负责核验其真实性并通知出口商，告知其信用证条款和要求',
          example: '核验信用证真实性，通知出口商条款要求'
        },
        {
          title: '审核单据',
          description: '收到出口商提交的全套单据后，严格按照信用证条款进行单据审核',
          example: '检查"单证相符"和"单单一致"原则'
        },
        {
          title: '传递单据/处理不符点',
          description: '审核无误后向开证行寄送单据并要求其付款，发现不符点后及时通知出口商',
          example: '发现不符点时联系进口商接受或要求修改'
        },
        {
          title: '付款/承兑',
          description: '开证行收到相符单据后，履行付款责任给出口商银行，最终由出口商银行支付给出口商',
          example: '履行付款责任，保障出口商收款'
        },
        {
          title: '信用中介',
          description: '以银行自身信用替代进口商的商业信用，为出口商提供收款保障',
          example: '银行信用担保，降低收款风险'
        }
      ]
    },
    {
      id: 'customs',
      title: '海关',
      description: '国家进出口贸易的监管机构',
      icon: Network,
      responsibilities: [
        {
          title: '货物查验监管',
          description: '核对进出口货物实物信息（品名、规格、数量等）是否与申报单证一致',
          example: '检查货物品名、规格、数量与申报单证的一致性'
        },
        {
          title: '税收征收管理',
          description: '依法计算并征收进出口货物的关税、增值税、消费税等进口环节税',
          example: '计算征收关税、增值税等，确保税款及时入库'
        },
        {
          title: '合规标准审查',
          description: '审查进出口货物是否符合国家强制性法律法规、安全标准、环保标准、卫生检疫等要求',
          example: '审查货物是否符合安全、环保、卫生检疫标准'
        },
        {
          title: '通关放行控制',
          description: '对申报真实、单证齐全、税款缴清、符合所有监管要求的货物予以通关放行',
          example: '确认合规后予以通关放行，不合规货物依法处置'
        }
      ]
    }
  ];

  // 角色自动切换
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedRole((prev) => (prev + 1) % mainRoles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen py-8 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
                  <motion.div
          className="glass-card p-8 mb-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[color:var(--accent-sand-500)] rounded-l-2xl" />
                    <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-[color:var(--accent-sand-500)] rounded-2xl flex items-center justify-center mr-6">
              <Users className="w-8 h-8 text-[color:var(--surf-tundra-700)]" />
                      </div>
                      <div>
              <h1 className="text-3xl font-bold text-[color:var(--text-cashmere-100)] mb-2">
                关键角色职责图谱
              </h1>
              <p className="text-[color:var(--text-cashmere-100)]/80 text-lg">
                明确各角色具体职责，掌握在不同环节中各角色的工作内容
              </p>
              </div>
            </div>
          </motion.div>

        {/* 主体角色及职责 - 图文混排设计 */}
        <section className="mb-12">
          <motion.div 
            className="glass-effect p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-cashmere-100)] mb-8 flex items-center">
              <Users className="w-6 h-6 text-[color:var(--accent-sand-500)] mr-3" />
              主体角色及职责
            </h2>

            {/* 角色选择器 - 大图标设计 */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {mainRoles.map((role, index) => (
                <motion.div
                  key={role.id}
                  className={`relative cursor-pointer group ${
                    selectedRole === index ? 'scale-105' : ''
                  }`}
                  onClick={() => setSelectedRole(index)}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                    selectedRole === index 
                      ? 'shadow-2xl shadow-[color:var(--accent-sand-500)]/20' 
                      : 'shadow-lg'
                  }`}>
                    {/* 背景渐变 */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${
                      selectedRole === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent-sand-500)]/20 via-[color:var(--accent-sand-500)]/10 to-transparent" />
                  </div>
                    
                    {/* 内容区 */}
                    <div className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10">
                      <div className="flex flex-col items-center text-center">
                        {/* 大图标 */}
                        <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                          selectedRole === index 
                            ? 'bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/80 shadow-xl' 
                            : 'bg-white/10'
                        }`}>
                          <role.icon className={`w-12 h-12 transition-colors duration-500 ${
                            selectedRole === index 
                              ? 'text-[color:var(--accent-sand-500)]' 
                              : 'text-[color:var(--text-cashmere-100)]/60'
                          }`} />
                        </div>
                        
                        {/* 文字内容 */}
                        <h3 className="text-xl font-bold text-[color:var(--text-cashmere-100)] mb-2">
                          {role.title}
                        </h3>
                        <p className="text-[color:var(--text-cashmere-100)]/80 text-sm leading-relaxed">
                          {role.description}
                        </p>
                        
                        {/* 选中指示器 */}
                        <div className={`mt-4 w-full h-1 bg-gradient-to-r from-transparent via-[color:var(--accent-sand-500)] to-transparent rounded-full transition-opacity duration-500 ${
                          selectedRole === index ? 'opacity-100' : 'opacity-0'
                        }`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 选中角色的详细职责 - 杂志风格布局 */}
            <div className="relative">
              {/* 装饰性标题 */}
              <div className="absolute -top-4 left-8 px-4 py-1 bg-white/10] rounded-full">
                <span className="text-sm font-bold text-[color:var(--accent-sand-500)]">
                  {mainRoles[selectedRole].title}职责详解
                </span>
          </div>

              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <div className="grid gap-8">
                  {mainRoles[selectedRole].responsibilities.map((responsibility, index) => (
          <motion.div 
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-start`}>
                        {/* 序号和标题 - 图形化设计 */}
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-[color:var(--accent-sand-500)]/30 to-[color:var(--accent-sand-500)]/10 rounded-2xl flex items-center justify-center">
                              <span className="text-3xl font-bold text-[color:var(--accent-sand-500)]">
                                {(index + 1).toString().padStart(2, '0')}
                              </span>
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[color:var(--accent-sand-500)]/20 rounded-full blur-md" />
                          </div>
                        </div>

                        {/* 内容区 */}
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-[color:var(--text-cashmere-100)] mb-3">
                            {responsibility.title}
                </h4>
                          <p className="text-[color:var(--text-cashmere-100)]/85 mb-6 text-base leading-relaxed">
                            {responsibility.description}
                          </p>
                          
                          {/* 详细点 - 两栏布局 */}
                          <div className="grid md:grid-cols-2 gap-4">
                            {responsibility.details.map((detail, detailIndex) => (
                              <motion.div 
                                key={detailIndex} 
                                className="relative group"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + detailIndex * 0.05 }}
                              >
                                <div className="flex items-start p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/8 transition-all duration-300">
                                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/70 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                    <CheckCircle className="w-3.5 h-3.5 text-[color:var(--accent-sand-500)]" />
                  </div>
                                  <span className="text-[color:var(--text-cashmere-100)]/80 text-sm leading-relaxed">
                                    {detail}
                                  </span>
                        </div>
                              </motion.div>
                            ))}
                        </div>
                        </div>
                      </div>

                      {/* 分隔线 */}
                      {index < mainRoles[selectedRole].responsibilities.length - 1 && (
                        <div className="mt-8 flex items-center justify-center">
                          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[color:var(--accent-sand-500)]/30 to-transparent" />
                    </div>
                      )}
                    </motion.div>
                  ))}
              </div>
            </div>
            </div>
          </motion.div>
        </section>

        {/* 主要执行角色及职责 - 侧边栏式图文布局 */}
        <section className="mb-12">
          <motion.div 
            className="glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-cashmere-100)] mb-8 flex items-center">
              <Settings className="w-6 h-6 text-[color:var(--accent-sand-500)] mr-3" />
              主要执行角色及职责
            </h2>

            <div className="space-y-12">
              {executionRoles.map((role, index) => (
                <motion.div
                  key={role.id}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* 左侧 - 角色信息卡片 */}
                    <div className="lg:w-1/3">
                      <div className="sticky top-8">
                        <div className="relative group">
                          {/* 背景装饰 */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent-sand-500)]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* 卡片主体 */}
                          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                            {/* 角色图标 */}
                            <div className="mb-6">
                              <div className="w-20 h-20 bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/70 rounded-3xl flex items-center justify-center shadow-2xl mx-auto">
                                <role.icon className="w-10 h-10 text-[color:var(--bg-ocean-900)]" />
                    </div>
                  </div>
                            
                            {/* 角色信息 */}
                            <h3 className="text-2xl font-bold text-[color:var(--text-cashmere-100)] mb-3 text-center">
                              {role.title}
            </h3>
                            <p className="text-[color:var(--text-cashmere-100)]/85 text-center leading-relaxed">
                              {role.description}
                            </p>
                            
                            {/* 装饰性元素 */}
                            <div className="mt-6 flex justify-center">
                              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[color:var(--accent-sand-500)]/50 to-transparent rounded-full" />
                    </div>
                  </div>
                  </div>
            </div>
          </div>

                    {/* 右侧 - 职责详情 */}
                    <div className="lg:w-2/3">
                      <div className="space-y-6">
                        {role.responsibilities.map((responsibility, respIndex) => (
          <motion.div 
                            key={respIndex}
                            className="relative group"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: respIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {/* 连接线 */}
                            {respIndex > 0 && (
                              <div className="absolute -top-3 left-8 w-0.5 h-3 bg-gradient-to-b from-transparent to-[color:var(--accent-sand-500)]/30" />
                            )}
                            
                            <div className="relative flex gap-6">
                              {/* 序号指示器 */}
                  <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--accent-sand-500)]/20 to-[color:var(--accent-sand-500)]/10 rounded-2xl flex items-center justify-center">
                                  <span className="text-xl font-bold text-[color:var(--accent-sand-500)]">
                                    {(respIndex + 1).toString().padStart(2, '0')}
                                  </span>
                    </div>
                  </div>

                              {/* 内容区 */}
                  <div className="flex-1">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:bg-white/8 transition-all duration-300">
                                  <h4 className="text-lg font-bold text-[color:var(--text-cashmere-100)] mb-2">
                                    {responsibility.title}
                                  </h4>
                                  <p className="text-[color:var(--text-cashmere-100)]/85 mb-4 leading-relaxed">
                                    {responsibility.description}
                                  </p>
                                  
                                  {/* 要点网格 */}
                                  <div className="grid md:grid-cols-2 gap-3">
                                    {responsibility.keyPoints.map((point, pointIndex) => (
                                      <div key={pointIndex} className="relative group/item">
                                        <div className="flex items-start p-3 rounded-xl bg-gradient-to-r from-white/5 to-white/3 hover:from-white/8 hover:to-white/5 transition-all duration-300">
                                          <div className="w-5 h-5 rounded-lg bg-[color:var(--accent-sand-500)]/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                            <div className="w-2 h-2 bg-[color:var(--accent-sand-500)] rounded-full" />
                                          </div>
                                          <span className="text-[color:var(--text-cashmere-100)]/80 text-sm">
                                            {point}
                        </span>
                      </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                    </div>
                  </div>
                </motion.div>
              ))}
                      </div>
                    </div>
            </div>
          </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 协作角色及职责 - 画册式设计 */}
        <section className="mb-12">
          <motion.div 
            className="glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-cashmere-100)] mb-8 flex items-center">
              <Network className="w-6 h-6 text-[color:var(--accent-sand-500)] mr-3" />
              协作角色及职责
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {cooperationRoles.map((role, index) => (
                <motion.div
                  key={role.id}
                  className="relative h-full"
                  initial={{ opacity: 0, y: 40, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* 画册页面效果 */}
                  <div className="relative h-full group" style={{ perspective: '1000px' }}>
                    <div className="relative h-full preserve-3d transition-transform duration-700 group-hover:rotate-y-3">
                      {/* 主卡片 */}
                      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10">
                        {/* 顶部装饰条 */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[color:var(--accent-sand-500)]/50 via-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/50" />
                        
                        {/* 角色头部信息 */}
                        <div className="p-8 pb-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--accent-sand-500)] to-[color:var(--accent-sand-500)]/70 rounded-2xl flex items-center justify-center shadow-xl">
                              <role.icon className="w-8 h-8 text-[color:var(--bg-ocean-900)]" />
                            </div>
                            <div className="text-right">
                              <span className="text-3xl font-bold text-[color:var(--accent-sand-500)]/30">
                                {(index + 1).toString().padStart(2, '0')}
                              </span>
                  </div>
                </div>

                          <h3 className="text-xl font-bold text-[color:var(--text-cashmere-100)] mb-2">
                            {role.title}
                          </h3>
                          <p className="text-[color:var(--text-cashmere-100)]/85 text-sm leading-relaxed">
                            {role.description}
                          </p>
                  </div>

                        {/* 分隔装饰 */}
                        <div className="px-8">
                          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                        {/* 职责列表 - 手风琴式 */}
                        <div className="p-8 pt-6 space-y-4">
                          {role.responsibilities.map((responsibility, respIndex) => (
                            <motion.div
                              key={respIndex}
                              className="relative"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: index * 0.2 + respIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              {/* 职责卡片 */}
                              <div className="relative group/item">
                                <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--accent-sand-500)]/10 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                                
                                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                                  {/* 标题栏 */}
                                  <div className="flex items-start gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-[color:var(--accent-sand-500)]/20 flex items-center justify-center flex-shrink-0">
                                      <span className="text-xs font-bold text-[color:var(--accent-sand-500)]">
                                        {respIndex + 1}
                                      </span>
                                    </div>
                                    <h4 className="text-sm font-semibold text-[color:var(--text-cashmere-100)] flex-1">
                                      {responsibility.title}
                                    </h4>
              </div>

                                  {/* 描述 */}
                                  <p className="text-[color:var(--text-cashmere-100)]/80 text-xs mb-3 leading-relaxed">
                                    {responsibility.description}
                                  </p>
                                  
                                  {/* 实例展示 */}
                                  <div className="bg-gradient-to-r from-[color:var(--accent-sand-500)]/15 to-[color:var(--accent-sand-500)]/5 rounded-lg p-3 border border-[color:var(--accent-sand-500)]/20">
                                    <p className="text-[color:var(--text-cashmere-100)]/85 text-xs leading-relaxed">
                                      <span className="font-semibold text-[color:var(--accent-sand-500)]">实例：</span>
                                      <br className="sm:hidden" />
                                      <span className="sm:ml-1">{responsibility.example}</span>
                                    </p>
                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                </div>

                        {/* 底部装饰 */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
                      </div>
                      </div>
                    </div>
                </motion.div>
              ))}
                  </div>
          </motion.div>
        </section>

        {/* 角色协作关系图 */}
        <motion.div
          className="glass-effect p-8 rounded-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-[color:var(--text-cashmere-100)] mb-6 flex items-center">
            <Target className="w-6 h-6 text-[color:var(--accent-sand-500)] mr-3" />
            角色协作关系总结
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-base p-6">
              <h3 className="text-lg font-semibold text-[color:var(--text-cashmere-100)] mb-4">
                🎯 主体角色
              </h3>
              <div className="space-y-3">
                {[
                  '出口商：业务发起和执行',
                  '进口商：需求提出和接收'
                ].map((role, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[color:var(--accent-sand-500)] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[color:var(--text-cashmere-100)]/80 text-sm">
                      {role}
                    </span>
                      </div>
                ))}
                      </div>
                    </div>

            <div className="card-base p-6">
              <h3 className="text-lg font-semibold text-[color:var(--text-cashmere-100)] mb-4">
                ⚙️ 执行角色
              </h3>
              <div className="space-y-3">
                {[
                  '外贸经理：战略制定',
                  '外销员：客户联络',
                  '单证员：单据处理', 
                  '跟单员：订单跟踪'
                ].map((role, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[color:var(--accent-sand-500)] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-[color:var(--text-cashmere-100)]/80 text-sm">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-base p-6">
              <h3 className="text-lg font-semibold text-[color:var(--text-cashmere-100)] mb-4">
                🤝 协作角色
              </h3>
              <div className="space-y-3">
                {[
                  '货代：物流服务',
                  '银行：金融服务', 
                  '海关：监管服务'
                ].map((role, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-[color:var(--text-cashmere-100)]/80 text-sm">
                      {role}
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
            to="/course/io-wiring" 
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            外贸核心流程
          </Link>
          
          <Link 
            to="/course-summary"
            className="btn-primary flex items-center group"
          >
            课程总结
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
      </div>
  </div>
    </div>
  );
};

export default ProgramDevelopmentPage; 