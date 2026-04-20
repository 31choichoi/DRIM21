import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    purpose: 'new',
    referenceUrl: '',
    budget: '300-500',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        purpose: 'new',
        referenceUrl: '',
        budget: '300-500',
        content: ''
      });
    } catch (err) {
      console.error('Error submitting inquiry:', err);
      setError('제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact" className="max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-3xl border border-gray-100">
      <div className="mb-14 text-left">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 font-sans">Get Started</p>
        <h2 className="text-4xl font-extrabold text-black uppercase">Contact Inquiry</h2>
      </div>

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-black mb-6" />
            <h3 className="text-2xl font-extrabold mb-3 uppercase tracking-tighter">문의가 완료되었습니다</h3>
            <p className="text-gray-400 text-sm mb-10 max-w-xs font-sans">담당자가 확인 후 24시간 이내에 연락드리겠습니다.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-10 py-3 bg-black text-white text-[12px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all font-sans"
            >
              다시 작성하기
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit} 
            className="space-y-10 font-sans"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-black uppercase tracking-widest">성함 / 업체명 *</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:outline-none focus:border-black transition-all text-sm font-medium"
                  placeholder="예: 홍길동 (주식회사 드림)"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-black uppercase tracking-widest">연락처 *</label>
                <input
                  required
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:outline-none focus:border-black transition-all text-sm font-medium"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-black uppercase tracking-widest">프로젝트 유형 *</label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:outline-none focus:border-black transition-all text-sm font-medium cursor-pointer"
                >
                  <option value="new">신규 제작</option>
                  <option value="renewal">리뉴얼 / 고도화</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-black uppercase tracking-widest">예상 예산 *</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:outline-none focus:border-black transition-all text-sm font-medium cursor-pointer"
                >
                  <option value="300-500">300만원 ~ 500만원</option>
                  <option value="500-1000">500만원 ~ 1,000만원</option>
                  <option value="1000-3000">1,000만원 ~ 3,000만원</option>
                  <option value="3000+">3,000만원 이상</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-bold text-black uppercase tracking-widest">문의 내용 *</label>
              <textarea
                required
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:outline-none focus:border-black transition-all text-sm font-medium resize-none"
                placeholder="프로젝트 목표나 원하시는 디자인 콘셉트를 기재해 주세요."
              />
            </div>

            {error && <p className="text-red-500 text-xs font-bold uppercase">{error}</p>}

            <div className="pt-6">
              <button
                disabled={isSubmitting}
                type="submit"
                className="px-12 py-4 bg-black text-white text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all disabled:opacity-30 disabled:cursor-not-allowed group flex items-center gap-3 font-sans"
              >
                {isSubmitting ? '전송 중...' : '상담 신청하기'}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
