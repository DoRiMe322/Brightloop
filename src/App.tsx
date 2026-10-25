import { useEffect, useState } from 'react';
import { LANGS, type LangKey } from './data';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import PlanBar from './components/PlanBar';
import { TooltipLayer } from './components/Tooltip';

export default function App() {
  const { theme, toggle } = useTheme();
  const [lang, setLang] = useState<LangKey>('py');
  const [plan, setPlan] = useState<number[]>([]);

  useEffect(() => {
    document.documentElement.style.setProperty('--lang', LANGS[lang].c);
  }, [lang]);

  const togglePlan = (i: number) => setPlan((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  return (
    <>
      <Header theme={theme} onToggle={toggle} />
      <main>
        <Hero lang={lang} onLang={setLang} />
        <Courses plan={plan} onTogglePlan={togglePlan} />
        <Features />
        <Pricing />
        <Faq />
      </main>
      <Footer />
      <PlanBar plan={plan} onClear={() => setPlan([])} />
      <TooltipLayer />
    </>
  );
}
