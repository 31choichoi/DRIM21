import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Review() {
  const reviews = [
    {
      text: "단순히 예쁜 홈페이지가 아니라, 비즈니스의 본질을 꿰뚫는 기획력에 놀랐습니다. 런칭 후 상담 전환율이 200% 이상 상승했습니다.",
      author: "김민재 대표",
      company: "에이원 컨설팅",
      role: "CEO"
    },
    {
      text: "24년 경력의 디렉터님이 직접 가이드를 주셔서 그런지 프로젝트가 매우 매끄럽게 진행되었습니다. 디자인 퀄리티는 말할 것도 없고요.",
      author: "이서윤 팀장",
      company: "뷰티크 브랜즈",
      role: "Marketing Manager"
    },
    {
      text: "건축적인 미학이 느껴집니다. 군더더기 없는 미니멀리즘 속에서도 브랜드의 아이덴티티가 확실하게 살아있는 결과물이 나왔습니다.",
      author: "박상준 디렉터",
      company: "아카이브 스튜디오",
      role: "Creative Director"
    }
  ];

  return (
    <section id="review" className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 font-sans">Voices of Trust</p>
          <h2 className="text-6xl font-black text-black leading-[1] tracking-tighter uppercase mb-6">
            Review.
          </h2>
          <div className="w-16 h-[2px] bg-black mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-12 border border-gray-100 bg-white hover:bg-gray-50 transition-all duration-300 group"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-gray-100 group-hover:text-gray-200 transition-colors" />
              <div className="space-y-10">
                <p className="text-xl text-black font-medium leading-relaxed font-serif italic">
                  "{review.text}"
                </p>
                <div className="pt-6 border-t border-gray-50">
                  <div className="font-sans">
                    <p className="text-[13px] font-black text-black uppercase tracking-widest">{review.author}</p>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                      {review.company} — {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Highlight Section - Full Width Orange */}
      <div className="mt-32 py-20 lg:py-24 bg-brand-orange text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight text-balance">
                      "디자인을 넘어 성과를 설계하는 <br className="hidden md:block" /> 유일한 파트너입니다."
                  </h3>
                  <p className="text-white/80 text-sm max-w-lg font-medium font-sans text-balance">
                      DRIM 21과 함께한 수많은 고객분들이 매출 성장과 브랜드 가치 상승을 경험하고 있습니다. 
                      당신의 비즈니스도 그 다음 성공 스토리가 될 수 있습니다.
                  </p>
              </div>
              <div className="text-center lg:text-right">
                  <a 
                    href="/#contact"
                    className="inline-block px-12 py-5 bg-white text-black text-[12px] font-black uppercase tracking-[0.2em] hover:bg-gray-100 transition-all shadow-xl rounded-full"
                  >
                      시작하기
                  </a>
              </div>
          </div>
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full hidden sm:block">
              <div className="w-full h-full opacity-10 flex flex-col justify-center items-end pr-10">
                  <span className="text-[200px] font-black leading-none pointer-events-none">21</span>
              </div>
          </div>
      </div>
    </section>
  );
}
