import React from 'react';
import { motion } from 'motion/react';
import { Quote, ArrowRight } from 'lucide-react';

export default function Review() {
  const reviews = [
    {
      text: "단순히 예쁜 홈페이지가 아니라, 비즈니스의 본질을 꿰뚫는 기획력에 놀랐습니다. 런칭 후 상담 전환율이 200% 이상 상승했습니다.",
      author: "김민재 대표",
      company: "에이원 컨설팅",
      category: "Professional Service"
    },
    {
      text: "24년 경력의 디렉터님이 직접 가이드를 주셔서 그런지 프로젝트가 매우 매끄럽게 진행되었습니다. 디자인 퀄리티는 말할 것도 없고요.",
      author: "이서윤 팀장",
      company: "뷰티크 브랜즈",
      category: "Cosmetics"
    },
    {
      text: "건축적인 미학이 느껴집니다. 군더더기 없는 미니멀리즘 속에서도 브랜드의 아이덴티티가 확실하게 살아있는 결과물이 나왔습니다.",
      author: "박상준 디렉터",
      company: "아카이브 스튜디오",
      category: "Architecture"
    },
    {
      text: "호텔 특유의 우아함과 공간감이 디지털로 완벽히 이전되었습니다. 예약 시스템의 UX 직관성이 뛰어나 외국인 투숙객 만족도가 매우 높습니다.",
      author: "Robert Chen",
      company: "L'Atelier Hotel",
      category: "Hospitality"
    },
    {
      text: "병원 웹사이트가 이렇게 신뢰감 있으면서도 세련될 수 있음을 보여주었습니다. 치료 철학을 전달하는 정교한 디자인이 내원 결정의 결정적 요인이 되고 있습니다.",
      author: "정우진 원장",
      company: "다온 메디컬 센터",
      category: "Healthcare"
    },
    {
      text: "법률 서비스의 권위와 현대적인 감각이 균형 있게 담겼습니다. 전문성을 훼손하지 않으면서도 고객에게 접근하기 쉬운 UX 설계가 인상적입니다.",
      author: "이지은 변호사",
      company: "법무법인 앤트",
      category: "Legal"
    }
  ];

  return (
    <section id="review" className="py-32 bg-[#FCF8F5] overflow-hidden relative">
      {/* Decorative Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-brown/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-orange font-sans">Voices of Trust</p>
            <h2 className="text-5xl md:text-7xl font-extralight text-brand-brown leading-[1.1] tracking-tighter uppercase">
              Selected <br /> <span className="font-serif italic font-normal">Feedback.</span>
            </h2>
          </div>
          <div className="max-w-sm text-right">
             <p className="text-brand-brown/50 text-[13px] font-medium leading-relaxed font-sans">
               데이터로 증명된 성과, 감각으로 증명된 디자인. <br />
               분야별 리더들이 검증한 DRIM 21의 탁월함입니다.
             </p>
          </div>
        </div>

        {/* Staggered, Fluid Layout - 6 Cards */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.2, duration: 0.8 }}
              className={`relative col-span-12 lg:col-span-4 p-8 lg:p-10 bg-white shadow-[0_20px_50px_-20px_rgba(61,43,31,0.06)] group hover:-translate-y-2 transition-all duration-500 rounded-[2rem] border border-brand-brown/5 ${
                idx % 3 === 1 ? 'lg:translate-y-12' : ''
              } ${idx % 3 === 2 ? 'lg:-translate-y-4' : ''}`}
            >
              <div className="absolute top-6 right-6 text-brand-orange/5 group-hover:text-brand-orange/10 transition-colors">
                <Quote className="w-16 h-16 fill-current" />
              </div>

              <div className="space-y-8 relative z-10">
                <span className="inline-block px-3 py-1 bg-soft-bg text-[9px] font-black uppercase tracking-widest text-brand-orange rounded-full">
                    {review.category}
                </span>
                <p className="text-base lg:text-lg text-brand-brown font-normal leading-relaxed tracking-tight font-serif italic">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-brand-orange/5">
                  <div className="w-10 h-10 rounded-full bg-soft-bg flex items-center justify-center font-bold text-brand-orange text-xs">
                    {review.author.charAt(0)}
                  </div>
                  <div className="font-sans">
                    <p className="text-[12px] font-bold text-brand-brown uppercase tracking-tight">{review.author}</p>
                    <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mt-0.5">
                      {review.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Highlight Section - CTA */}
      <div className="mt-48 lg:mt-64 py-24 bg-brand-brown text-white overflow-hidden relative rounded-t-[4rem] lg:rounded-t-[6rem]">
          <div className="max-w-7xl mx-auto px-10 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                      <motion.div 
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        className="w-20 h-1 bg-brand-orange origin-left"
                      />
                      <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] text-balance">
                          단순한 디자인을 넘어 <br />
                          <span className="text-brand-orange">성장 가치</span>를 설계합니다.
                      </h3>
                  </div>
                  <div className="flex flex-col gap-8 items-start lg:items-end">
                      <p className="text-white/70 text-lg font-medium font-sans max-w-md lg:text-right">
                          당신의 비즈니스가 가진 잠재력을 최상위 디자인으로 끌어올리세요. 
                          지금 바로 DRIM 21과 상의하세요.
                      </p>
                      <a 
                        href="/#contact"
                        className="group flex items-center gap-6 text-[12px] font-black uppercase tracking-[0.3em] bg-brand-orange px-10 py-5 rounded-full hover:bg-white hover:text-brand-brown transition-all duration-500 shadow-2xl"
                      >
                          시작하기 <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </a>
                  </div>
              </div>
          </div>
          
          {/* Background Graphic */}
          <div className="absolute top-0 right-0 h-full w-1/2 opacity-5 flex items-center justify-end pr-20 select-none pointer-events-none">
              <span className="text-[300px] font-black">21</span>
          </div>
      </div>
    </section>
  );
}
