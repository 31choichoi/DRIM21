import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function PortfolioPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: "01",
      title: "Premium Residence Branding",
      client: "AONE Construction",
      category: "Branding / Web Design",
      desc: "럭셔리 주거 공간의 가치를 디지털로 전이시킨 프로젝트입니다. 건축적 미학과 사용자의 편의성을 동시에 고려한 UX 설계가 핵심입니다.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2600"
    },
    {
      id: "02",
      title: "Global IT Solution Renewal",
      client: "TechStream Global",
      category: "UX Strategy / Development",
      desc: "복잡한 데이터 구조를 직관적인 디자인 언어로 가공하여 브랜드 신뢰도를 150% 향상시킨 글로벌 리뉴얼 사례입니다.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2600"
    },
    {
      id: "03",
      title: "Luxury Cosmetic Official Mall",
      client: "Beautique Brands",
      category: "Commerce / Marketing",
      desc: "고감도 비주얼 브랜딩을 통해 프리미엄 코스메틱 시장에서 독보적인 존재감을 드러내는 이커머스 경험을 구축했습니다.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2600"
    },
    {
      id: "04",
      title: "High-end Architecture Studio",
      client: "Archive Studio",
      category: "Art Direction / Motion",
      desc: "공간의 여백과 구조미를 웹에 담아냈습니다. 동차 애니메이션과 타이포그래피의 조화를 통해 건축사의 철학을 전달합니다.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2600"
    },
    {
      id: "05",
      title: "Creative Agency Hub",
      client: "Nexus Creativity",
      category: "Web App / Product Design",
      desc: "크리에이티브 대행사의 역동적인 에너지를 담은 허브 사이트입니다. 사용자 인터랙션을 극대화한 독창적인 레이아웃이 특징입니다.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2600"
    },
    {
      id: "06",
      title: "Urban Minimalist Living",
      client: "Living Co.",
      category: "Lifestyle / Content",
      desc: "도시적인 미니멀리즘을 테마로 한 라이프스타일 큐레이션 플랫폼입니다. 깔끔한 그리드와 서정적인 비주얼이 조화를 이룹니다.",
      image: "https://images.unsplash.com/photo-1600607687940-4ad236f757ca?auto=format&fit=crop&q=80&w=2600"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="pt-48 pb-32 px-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 font-sans">Showcasing Excellence</p>
            <h1 className="text-7xl md:text-9xl font-black text-black tracking-tighter uppercase leading-[0.9]">
              Portfolio.
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-12">
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl font-medium">
                    DRIM 21은 단순한 제작을 넘어 비즈니스의 격을 높이는 포트폴리오를 구축해왔습니다. 
                    우리의 모든 결과물은 정교한 기획과 독보적인 디자인 감각의 결합입니다.
                </p>
                <div className="text-[12px] font-black uppercase tracking-widest text-black border-l-2 border-black pl-6 py-2 font-sans">
                    Selected Works <br /> 2020 — 2026
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid - Alternate Layout */}
      <section className="py-24 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-40">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Container - Parallax effect simulation */}
                <div className={`relative overflow-hidden group shadow-2xl ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="absolute top-6 left-6 z-10 w-16 h-16 bg-black text-white flex items-center justify-center font-black text-xl font-sans tracking-widest">
                        {project.id}
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full aspect-[4/3] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                        <button className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                            <ArrowUpRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>

                {/* Content Container */}
                <div className="space-y-8">
                  <div className="space-y-2">
                    <p className="text-[11px] font-black text-black uppercase tracking-[0.3em] font-sans">
                        {project.category}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-none group-hover:text-gray-500 transition-colors">
                        {project.title}
                    </h2>
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-widest pt-2 font-sans">
                        Client: {project.client}
                    </p>
                  </div>
                  
                  <p className="text-gray-500 text-base leading-relaxed font-medium max-w-md">
                    {project.desc}
                  </p>

                  <div className="pt-4">
                    <button className="inline-flex items-center gap-4 group/btn">
                        <span className="text-[12px] font-black uppercase tracking-widest border-b-2 border-black pb-1 group-hover/btn:text-gray-500 group-hover/btn:border-gray-500 transition-all font-sans">
                            Case Study
                        </span>
                        <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center group-hover/btn:bg-black group-hover/btn:text-white transition-all">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 bg-[#141414] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-10 relative z-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-10 font-sans">Ready for your project?</p>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-16">
            Let's build <br /> your success.
          </h2>
          <a 
            href="/#contact"
            className="inline-block px-12 py-5 bg-white text-black text-[12px] font-black uppercase tracking-[0.2em] hover:bg-gray-200 transition-all shadow-xl font-sans"
          >
            Start a Conversation
          </a>
        </div>
        
        {/* Background Graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
            <span className="text-[500px] font-black">21</span>
        </div>
      </section>
    </div>
  );
}
