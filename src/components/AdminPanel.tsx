import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { db, auth } from '../lib/firebase';
import { LogIn, LogOut, ShieldCheck, Mail } from 'lucide-react';

export default function AdminPanel() {
  const [user, setUser] = useState<User | null>(null);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && showPanel) {
      const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setInquiries(data);
      });
      return () => unsubscribe();
    }
  }, [user, showPanel]);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  const handleLogout = () => signOut(auth);

  if (!user) {
    return (
      <button 
        onClick={handleLogin}
        className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors font-sans"
      >
        <LogIn className="w-4 h-4" /> 관리자 로그인
      </button>
    );
  }

  return (
    <div className="flex flex-col items-end gap-2 font-sans">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs font-bold text-accent">
          <ShieldCheck className="w-4 h-4" />
          {user.displayName} 관리자
        </div>
        <button 
          onClick={() => setShowPanel(!showPanel)}
          className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-full"
        >
          {showPanel ? '패널 닫기' : '문의 내역 보기'}
        </button>
        <button onClick={handleLogout} className="text-gray-400 hover:text-white">
          <LogOut className="w-4 h-4" />
        </button>
      </div>

      {showPanel && (
        <div className="fixed inset-0 z-[100] bg-black/90 p-8 overflow-auto font-sans">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-display text-white">문의 관리 시스템</h2>
              <button onClick={() => setShowPanel(false)} className="text-white hover:text-accent">
                닫기
              </button>
            </div>

            <div className="grid gap-6">
              {inquiries.length === 0 ? (
                <p className="text-gray-500 text-center py-20 italic">접수된 문의가 없습니다.</p>
              ) : (
                inquiries.map((inv) => (
                  <div key={inv.id} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold">{inv.name}</h4>
                        <p className="text-accent text-sm font-sans">{inv.phone}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400 font-sans">{inv.createdAt?.toDate().toLocaleString()}</p>
                        <span className="inline-block px-2 py-1 bg-white/10 rounded text-[10px] uppercase font-bold mt-1">
                          {inv.purpose === 'new' ? '신규 제작' : '리뉴얼'}
                        </span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">예산</p>
                        <p className="text-sm font-sans">{inv.budget}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">참고 URL</p>
                        <p className="text-sm truncate font-sans">{inv.referenceUrl || '없음'}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">문의 내용</p>
                      <p className="text-sm whitespace-pre-wrap text-gray-300 font-sans">{inv.content}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
