import { useEffect, useMemo, useRef, useState } from "react";
import Auth from "./components/Auth";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Briefcase,
  Camera,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  FileText,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  Moon,
  Network,
  Palette,
  Phone,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

const heroImage =
  "https://images.pexels.com/photos/15543037/pexels-photo-15543037.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920";

const navItems = ["Início", "Serviços", "Portfólio", "Sobre", "Blog", "Contactos"];

const services: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Gestão de Redes Sociais", text: "Calendários editoriais, comunidade e presença consistente.", icon: Users },
  { title: "Criação de Websites", text: "Websites rápidos, premium e preparados para conversão.", icon: Code2 },
  { title: "Publicidade Online", text: "Campanhas integradas para gerar procura e vendas.", icon: Megaphone },
  { title: "Google Ads", text: "Captação de clientes no momento certo da pesquisa.", icon: Search },
  { title: "Facebook Ads", text: "Segmentação inteligente para escala comercial.", icon: Network },
  { title: "Instagram Ads", text: "Criativos de alto impacto para marcas visuais.", icon: Camera },
  { title: "TikTok Ads", text: "Aquisição moderna para audiências em crescimento.", icon: Zap },
  { title: "Branding", text: "Identidades fortes, memoráveis e consistentes.", icon: Sparkles },
  { title: "Design Gráfico", text: "Peças premium para campanhas, eventos e lançamentos.", icon: Palette },
  { title: "Produção de Conteúdo", text: "Conteúdo estratégico para atrair, educar e vender.", icon: Layers3 },
  { title: "SEO", text: "Estrutura, conteúdo e autoridade para crescer organicamente.", icon: Globe2 },
  { title: "Automação com IA", text: "Fluxos inteligentes para reduzir tempo e aumentar vendas.", icon: BrainCircuit },
  { title: "Chatbots", text: "Atendimento automatizado para WhatsApp, websites e CRM.", icon: Bot },
  { title: "Consultoria Digital", text: "Diagnóstico, plano de ação e aceleração de marketing.", icon: Target },
  { title: "Email Marketing", text: "Nutrição, retenção e campanhas com alta precisão.", icon: Mail },
];

const advantages: { title: string; icon: LucideIcon }[] = [
  { title: "Estratégias personalizadas", icon: Target },
  { title: "Foco em resultados", icon: TrendingUp },
  { title: "Relatórios transparentes", icon: FileText },
  { title: "Tecnologia moderna", icon: Rocket },
  { title: "Atendimento rápido", icon: Clock3 },
  { title: "Criatividade estratégica", icon: Sparkles },
  { title: "Automação inteligente", icon: Bot },
  { title: "Acompanhamento contínuo", icon: ShieldCheck },
];

const portfolioItems = [
  {
    title: "Website Premium para Clínica",
    category: "Websites",
    image:
      "https://images.pexels.com/photos/17485352/pexels-photo-17485352.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
    result: "+68% pedidos de contacto",
  },
  {
    title: "Lançamento de Restaurante",
    category: "Redes Sociais",
    image:
      "https://images.pexels.com/photos/6476253/pexels-photo-6476253.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
    result: "+310% alcance local",
  },
  {
    title: "Identidade para Startup Tech",
    category: "Branding",
    image:
      "https://images.pexels.com/photos/6986455/pexels-photo-6986455.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
    result: "Marca pronta para investimento",
  },
  {
    title: "Campanhas de Vendas B2B",
    category: "Publicidade",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
    result: "4.8x retorno estimado",
  },
  {
    title: "Sistema Visual para Marca Pessoal",
    category: "Design",
    image:
      "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
    result: "Presença premium multicanal",
  },
  {
    title: "E-commerce de Moda",
    category: "Websites",
    image:
      "https://images.pexels.com/photos/16675632/pexels-photo-16675632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
    result: "+42% conversão no funil",
  },
];

const testimonials = [
  {
    name: "Amélia Santos",
    role: "CEO, Amani Beauty",
    image:
      "https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=240&w=240",
    text: "A Conecta transformou a nossa presença digital com método, design e campanhas que realmente trouxeram clientes.",
  },
  {
    name: "Edson Miguel",
    role: "Fundador, Kilamba Fit",
    image:
      "https://images.pexels.com/photos/16764124/pexels-photo-16764124.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=240&w=240",
    text: "O processo foi claro do início ao fim. Recebemos relatórios, melhorias constantes e uma marca muito mais profissional.",
  },
  {
    name: "Nádia Bappa",
    role: "Diretora Comercial, Loja Nzola",
    image:
      "https://images.pexels.com/photos/19537356/pexels-photo-19537356.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=240&w=240",
    text: "As campanhas no Google e Instagram geraram pedidos todos os dias. Foi o melhor investimento digital da empresa.",
  },
];

const processSteps = [
  ["01", "Análise do negócio", "Mapeamos objetivos, público, concorrência e oportunidades de crescimento."],
  ["02", "Planeamento estratégico", "Criamos uma rota clara com canais, conteúdos, metas e indicadores."],
  ["03", "Execução", "Produzimos websites, criativos, campanhas, automações e conteúdo."],
  ["04", "Otimização", "Testamos, medimos e melhoramos continuamente cada ponto do funil."],
  ["05", "Crescimento", "Escalamos o que funciona com inteligência, consistência e visão comercial."],
];

const blogPosts = [
  { category: "Marketing", title: "Como transformar visitas digitais em clientes reais", read: "6 min" },
  { category: "Tecnologia", title: "O novo padrão dos websites corporativos premium", read: "5 min" },
  { category: "Redes Sociais", title: "Conteúdo que gera confiança antes da venda", read: "4 min" },
  { category: "IA", title: "Automação inteligente para negócios locais", read: "7 min" },
  { category: "Empreendedorismo", title: "Presença digital como ativo de crescimento", read: "5 min" },
];

const faqs = [
  ["Quanto custa um website?", "Depende da complexidade, páginas, integrações e objetivos. Depois do diagnóstico enviamos uma proposta personalizada e transparente."],
  ["Quanto custa gerir redes sociais?", "O valor varia conforme o volume de conteúdo, canais, design, captação e acompanhamento. Trabalhamos com planos mensais escaláveis."],
  ["Quanto custa publicidade online?", "A gestão é definida por campanha e objetivo. O investimento em mídia é separado e recomendado com base no retorno esperado."],
  ["Quanto tempo demora um projeto?", "Websites institucionais geralmente levam de 2 a 6 semanas. Campanhas podem iniciar mais rapidamente após análise e aprovação."],
  ["Como funciona o suporte?", "A equipa acompanha métricas, envia relatórios, propõe melhorias e mantém canais de comunicação rápidos para decisões importantes."],
];

const heroStats = [
  [200, "Clientes Atendidos"],
  [500, "Projetos Entregues"],
  [98, "de Satisfação", "%"],
  [5, "Anos de Experiência"],
];

function Logo() {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label="CONECTA MARKETING">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-[#FF6B00] text-white shadow-[0_0_30px_rgba(255,107,0,0.35)]">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_38%)]" />
        <Sparkles className="relative h-5 w-5" />
      </span>
      <span className="leading-none">
        <span className="block text-sm font-black tracking-[0.24em] text-[#0A2540] dark:text-white">CONECTA</span>
        <span className="block text-[10px] font-bold tracking-[0.32em] text-[#FF6B00]">MARKETING</span>
      </span>
    </a>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-[#FF6B00]">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-[-0.04em] text-[#0A2540] dark:text-white sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-slate-600 dark:text-white/68 sm:text-lg">{text}</p> : null}
    </motion.div>
  );
}

function AnimatedMetric({ value, label, suffix = "+" }: { value: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const total = 72;
    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setDisplay(Math.round(value * progress));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  const valueText = suffix === "%" ? `${display}%` : `+${display}${suffix === "M" ? "M" : ""}`;

  return (
    <div ref={ref} className="border-t border-[#0A2540]/10 pt-5 dark:border-white/15">
      <div className="text-3xl font-black tracking-[-0.05em] text-[#0A2540] dark:text-white sm:text-4xl">{valueText}</div>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">{label}</p>
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(portfolioItems.map((item) => item.category)))], []);
  const filteredPortfolio = activeCategory === "Todos" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen overflow-hidden bg-white text-[#0A2540] antialiased transition-colors duration-500 dark:bg-[#061826] dark:text-white">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[#0A2540]/10 bg-white/78 backdrop-blur-2xl transition-colors duration-500 dark:border-white/10 dark:bg-[#061826]/72">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
            <Logo />

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace("í", "i").replace("ó", "o")}`} className="text-sm font-bold text-slate-700 transition hover:text-[#FF6B00] dark:text-white/72 dark:hover:text-white">
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={() => setIsDark((value) => !value)}
                className="grid h-11 w-11 place-items-center rounded-full border border-[#0A2540]/10 bg-white/60 text-[#0A2540] transition hover:border-[#FF6B00]/40 hover:text-[#FF6B00] dark:border-white/10 dark:bg-white/5 dark:text-white"
                aria-label="Alternar modo escuro"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <a href="#contactos" className="group inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-5 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(255,107,0,0.32)] transition hover:-translate-y-0.5 hover:bg-[#ff7f22]">
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#0A2540]/10 dark:border-white/10 lg:hidden"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMenuOpen ? (
            <div className="border-t border-[#0A2540]/10 bg-white px-5 py-5 dark:border-white/10 dark:bg-[#061826] lg:hidden">
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace("í", "i").replace("ó", "o")}`} onClick={() => setIsMenuOpen(false)} className="rounded-2xl px-4 py-3 font-bold text-slate-700 hover:bg-[#0A2540]/5 dark:text-white/75 dark:hover:bg-white/5">
                    {item}
                  </a>
                ))}
                <a href="#contactos" onClick={() => setIsMenuOpen(false)} className="rounded-2xl bg-[#FF6B00] px-4 py-3 text-center font-black text-white">
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ) : null}
        </header>

        <main>
          <section
            id="inicio"
            className="relative flex min-h-screen items-end overflow-hidden bg-[#0A2540] pt-28 text-white"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(6,24,38,0.96) 0%, rgba(10,37,64,0.84) 42%, rgba(10,37,64,0.32) 100%), url(${heroImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_26%,rgba(255,107,0,0.23),transparent_27%),linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]" />
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -18, 0], opacity: [0.45, 0.8, 0.45] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[8%] top-[24%] hidden h-56 w-56 rounded-full border border-white/20 bg-white/5 blur-[1px] backdrop-blur-md lg:block"
            />
            <motion.div
              aria-hidden="true"
              animate={{ x: [0, 22, 0], y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[18%] right-[22%] hidden h-24 w-24 rounded-full bg-[#FF6B00]/25 blur-2xl lg:block"
            />

            <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16 lg:pb-20">
              <motion.div
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl"
              >
                <p className="mb-5 text-xs font-black uppercase tracking-[0.42em] text-[#FF6B00]">Agência digital premium em Luanda</p>
                <h1 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">
                  CONECTA MARKETING
                </h1>
                <h2 className="mt-5 max-w-4xl text-3xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                  Crescimento Digital Que Gera Resultados Reais.
                </h2>
                <p className="mt-7 max-w-3xl text-base leading-8 text-white/76 sm:text-xl">
                  Ajudamos empresas a aumentar vendas, fortalecer marcas e conquistar mais clientes através de marketing digital, websites profissionais, publicidade online e inteligência artificial.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href="#contactos" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FF6B00] px-7 py-4 text-sm font-black text-white shadow-[0_22px_70px_rgba(255,107,0,0.4)] transition hover:-translate-y-1 hover:bg-[#ff7f22]">
                    Solicitar Orçamento
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                  <a href="https://wa.me/244900000000?text=Olá%20CONECTA%20MARKETING,%20gostaria%20de%20solicitar%20uma%20proposta." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/45 hover:bg-white/16">
                    <MessageCircle className="h-4 w-4" />
                    Falar no WhatsApp
                  </a>
                </div>
              </motion.div>

              <div className="mt-14 grid gap-6 border-t border-white/18 pt-7 sm:grid-cols-2 lg:grid-cols-4">
                {heroStats.map(([value, label, suffix]) => (
                  <div key={label} className="text-white">
                    <div className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                      {suffix === "%" ? `${value}%` : `+${value}`}
                    </div>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/58">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="serviços" className="relative overflow-hidden bg-[#071B2D] py-24 text-white sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,107,0,0.18),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.1),transparent_24%)]" />
            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
              <SectionHeader
                eyebrow="Serviços"
                title="Um ecossistema completo para acelerar marcas ambiciosas."
                text="Da estratégia à execução, a Conecta Marketing integra criatividade, performance e tecnologia para criar crescimento mensurável."
              />

              <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.a
                      href="#contactos"
                      key={service.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.45, delay: (index % 5) * 0.04 }}
                      className="group relative min-h-56 bg-[#071B2D]/84 p-6 transition hover:z-10 hover:bg-white/[0.08]"
                    >
                      <span className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-[#FF6B00] transition duration-500 group-hover:scale-x-100" />
                      <Icon className="h-7 w-7 text-[#FF6B00]" />
                      <h3 className="mt-8 text-lg font-black tracking-[-0.03em] text-white">{service.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/58">{service.text}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-white/42 transition group-hover:text-[#FF6B00]">
                        Ver solução <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bg-white py-24 transition-colors dark:bg-[#061826] sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65 }}
                className="lg:sticky lg:top-28"
              >
                <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-[#FF6B00]">Porque escolher</p>
                <h2 className="text-4xl font-black tracking-[-0.05em] text-[#0A2540] dark:text-white sm:text-6xl">Estratégia, tecnologia e execução no mesmo ritmo.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-white/68">
                  Trabalhamos como parceiro de crescimento. Cada decisão é orientada por dados, design, velocidade e clareza comercial.
                </p>
              </motion.div>

              <div className="grid gap-5 sm:grid-cols-2">
                {advantages.map((advantage, index) => {
                  const Icon = advantage.icon;
                  return (
                    <motion.div
                      key={advantage.title}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.04 }}
                      className="group border-b border-[#0A2540]/10 pb-7 dark:border-white/10"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B00]/10 text-[#FF6B00] transition group-hover:scale-105 group-hover:bg-[#FF6B00] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-black tracking-[-0.03em] text-[#0A2540] dark:text-white">{advantage.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-white/58">Sistemas claros, decisões rápidas e acompanhamento próximo para transformar intenção em resultados.</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="portfolio" className="bg-[#F5F8FB] py-24 transition-colors dark:bg-[#0A2540] sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <SectionHeader eyebrow="Portfólio" title="Projetos criados para parecer premium e vender melhor." text="Uma galeria preparada para destacar websites, redes sociais, design, publicidade e branding." />

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-black transition ${
                      activeCategory === category
                        ? "border-[#FF6B00] bg-[#FF6B00] text-white shadow-[0_14px_35px_rgba(255,107,0,0.24)]"
                        : "border-[#0A2540]/12 bg-white/70 text-[#0A2540] hover:border-[#FF6B00]/45 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPortfolio.map((item) => (
                  <motion.article
                    layout
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="group overflow-hidden rounded-[1.7rem] bg-white shadow-[0_24px_90px_rgba(10,37,64,0.09)] dark:bg-white/[0.06] dark:shadow-none"
                  >
                    <div className="relative aspect-[1.2] overflow-hidden">
                      <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061826]/86 via-[#061826]/20 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF6B00]">{item.category}</p>
                        <h3 className="mt-2 text-xl font-black tracking-[-0.03em] text-white">{item.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 p-5">
                      <span className="text-sm font-bold text-slate-600 dark:text-white/65">{item.result}</span>
                      <ArrowRight className="h-4 w-4 text-[#FF6B00] transition group-hover:translate-x-1" />
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white py-24 transition-colors dark:bg-[#061826] sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <SectionHeader eyebrow="Depoimentos" title="Confiança construída com resultados e acompanhamento próximo." />
              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {testimonials.map((item, index) => (
                  <motion.article
                    key={item.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-[1.7rem] border border-[#0A2540]/10 bg-white/80 p-7 shadow-[0_24px_90px_rgba(10,37,64,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-none"
                  >
                    <div className="flex items-center gap-1 text-[#FF6B00]" aria-label="Classificação 5 estrelas">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-white/74">"{item.text}"</p>
                    <div className="mt-8 flex items-center gap-4">
                      <img src={item.image} alt={item.name} loading="lazy" className="h-14 w-14 rounded-full object-cover ring-2 ring-[#FF6B00]/25" />
                      <div>
                        <h3 className="font-black text-[#0A2540] dark:text-white">{item.name}</h3>
                        <p className="text-sm text-slate-500 dark:text-white/50">{item.role}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-[#071B2D] py-24 text-white sm:py-32">
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,107,0,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_28%)]" />
            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
              <SectionHeader eyebrow="Processo" title="Um método claro para transformar ambição em crescimento." />
              <div className="mt-16 grid gap-8 lg:grid-cols-5">
                {processSteps.map(([number, title, text], index) => (
                  <motion.div
                    key={number}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    className="relative border-t border-white/15 pt-6"
                  >
                    <span className="text-sm font-black tracking-[0.28em] text-[#FF6B00]">{number}</span>
                    <h3 className="mt-5 text-xl font-black tracking-[-0.03em] text-white">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/58">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="sobre" className="bg-white py-24 transition-colors dark:bg-[#061826] sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-[#FF6B00]">Sobre a empresa</p>
                <h2 className="text-4xl font-black tracking-[-0.05em] text-[#0A2540] dark:text-white sm:text-6xl">A Conecta Marketing existe para ligar negócios a mercados maiores.</h2>
                <p className="mt-7 text-lg leading-9 text-slate-600 dark:text-white/68">
                  Somos uma agência de marketing digital orientada por performance, design e tecnologia. Criamos estratégias para empresas, empreendedores, lojas físicas, restaurantes, startups, profissionais independentes, marcas pessoais e negócios locais que desejam aumentar vendas e presença digital com consistência.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#FF6B00]">Missão</h3>
                    <p className="mt-3 text-slate-600 dark:text-white/65">Ajudar empresas a crescer digitalmente.</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#FF6B00]">Visão</h3>
                    <p className="mt-3 text-slate-600 dark:text-white/65">Ser referência em marketing digital em Angola e África.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="rounded-[2rem] border border-[#0A2540]/10 bg-[#F5F8FB] p-8 dark:border-white/10 dark:bg-white/[0.055]">
                <h3 className="text-2xl font-black tracking-[-0.03em] text-[#0A2540] dark:text-white">Valores</h3>
                <div className="mt-8 grid gap-4">
                  {["Inovação", "Transparência", "Compromisso", "Excelência", "Resultados"].map((value) => (
                    <div key={value} className="flex items-center gap-4 border-b border-[#0A2540]/10 pb-4 last:border-b-0 dark:border-white/10">
                      <CheckCircle2 className="h-5 w-5 text-[#FF6B00]" />
                      <span className="font-black text-[#0A2540] dark:text-white">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 rounded-[1.5rem] bg-[#0A2540] p-6 text-white dark:bg-white/8">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#FF6B00]">Preparada para escalar</p>
                  <p className="mt-3 text-sm leading-7 text-white/68">Estrutura pronta para chatbot IA, CRM, área do cliente, pagamentos e integrações avançadas.</p>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#F5F8FB] py-24 transition-colors dark:bg-[#0A2540] sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <SectionHeader eyebrow="Resultados" title="Métricas que comunicam escala, confiança e maturidade digital." />
              <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <AnimatedMetric value={10} suffix="M" label="Alcance Gerado" />
                <AnimatedMetric value={2} suffix="M" label="Cliques" />
                <AnimatedMetric value={1000} label="Campanhas" />
                <AnimatedMetric value={500} label="Clientes" />
              </div>
            </div>
          </section>

          <section id="blog" className="bg-white py-24 transition-colors dark:bg-[#061826] sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <SectionHeader eyebrow="Blog" title="Uma base editorial pronta para educar o mercado e atrair clientes." text="Conteúdos preparados para Marketing, Tecnologia, Redes Sociais, IA e Empreendedorismo." />
              <div className="mt-14 grid gap-5 lg:grid-cols-5">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="group border-t border-[#0A2540]/12 pt-6 dark:border-white/12"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#FF6B00]">{post.category}</p>
                    <h3 className="mt-5 text-xl font-black tracking-[-0.035em] text-[#0A2540] transition group-hover:text-[#FF6B00] dark:text-white">{post.title}</h3>
                    <p className="mt-6 text-sm text-slate-500 dark:text-white/50">Leitura: {post.read}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="contactos" className="relative overflow-hidden bg-[#071B2D] py-24 text-white sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,107,0,0.18),transparent_30%),radial-gradient(circle_at_82%_82%,rgba(255,255,255,0.1),transparent_28%)]" />
            <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-[#FF6B00]">Contactos</p>
                <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-6xl">Receba uma proposta para crescer com mais clareza.</h2>
                <p className="mt-6 text-lg leading-8 text-white/68">Conte-nos sobre o seu negócio. A equipa da Conecta Marketing analisará o cenário e indicará a melhor rota digital.</p>
                <div className="mt-10 grid gap-4 text-white/72">
                  <a href="https://wa.me/244951240590" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white"><MessageCircle className="h-5 w-5 text-[#FF6B00]" /> WhatsApp: +244 951 240 590</a>
                  <a href="mailto:belmiroaguinaldo2024@gmail.com" className="flex items-center gap-3 transition hover:text-white"><Mail className="h-5 w-5 text-[#FF6B00]" /> belmiroaguinaldo2024@gmail.com</a>
                  <a href="tel:+244947089390" className="flex items-center gap-3 transition hover:text-white"><Phone className="h-5 w-5 text-[#FF6B00]" /> +244 947089390</a>
                  <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#FF6B00]" /> Luanda, Angola</p>
                </div>
                <div className="mt-8 flex gap-3">
                  {[Network, Camera, Briefcase].map((Icon, index) => (
                    <a key={index} href="#" aria-label="Rede social Conecta Marketing" className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/5 transition hover:-translate-y-1 hover:border-[#FF6B00]/50 hover:text-[#FF6B00]">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <form className="rounded-[2rem] border border-white/12 bg-white/[0.08] p-6 backdrop-blur-2xl sm:p-8" data-crm-ready="true">
                <div className="grid gap-5 sm:grid-cols-2">
                  {["Nome", "Empresa", "Telefone", "Email"].map((field) => (
                    <label key={field} className="grid gap-2 text-sm font-bold text-white/72">
                      {field}
                      <input
                        type={field === "Email" ? "email" : field === "Telefone" ? "tel" : "text"}
                        name={field.toLowerCase()}
                        placeholder={field}
                        className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#FF6B00]"
                      />
                    </label>
                  ))}
                </div>
                <label className="mt-5 grid gap-2 text-sm font-bold text-white/72">
                  Mensagem
                  <textarea name="mensagem" rows={5} placeholder="Explique o objetivo do seu negócio" className="resize-none rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#FF6B00]" />
                </label>
                <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#FF6B00] px-7 py-4 text-sm font-black text-white shadow-[0_20px_60px_rgba(255,107,0,0.32)] transition hover:-translate-y-1 hover:bg-[#ff7f22] sm:w-auto">
                  Receber Proposta <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </section>

          <section className="bg-white py-24 transition-colors dark:bg-[#061826] sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-[#FF6B00]">Mapa interativo</p>
                <h2 className="text-4xl font-black tracking-[-0.05em] text-[#0A2540] dark:text-white">Base em Luanda. Visão para Angola e África.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-white/68">Atendemos empresas locais e marcas com ambição regional através de processos digitais, reuniões online e acompanhamento contínuo.</p>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-[#0A2540]/10 bg-[#F5F8FB] shadow-[0_24px_90px_rgba(10,37,64,0.1)] dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                <iframe
                  title="Mapa de Luanda, Angola"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=13.130%2C-8.93%2C13.395%2C-8.73&layer=mapnik&marker=-8.839%2C13.289"
                  className="h-[420px] w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <section className="bg-[#F5F8FB] py-24 transition-colors dark:bg-[#0A2540] sm:py-32">
            <div className="mx-auto max-w-4xl px-5 sm:px-8">
              <SectionHeader eyebrow="FAQ" title="Perguntas frequentes antes de iniciar um projeto." />
              <div className="mt-12 divide-y divide-[#0A2540]/10 rounded-[2rem] border border-[#0A2540]/10 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.055]">
                {faqs.map(([question, answer]) => (
                  <details key={question} className="group p-6 open:bg-[#FF6B00]/[0.03]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-black text-[#0A2540] dark:text-white">
                      {question}
                      <ChevronDown className="h-5 w-5 shrink-0 text-[#FF6B00] transition group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 leading-8 text-slate-600 dark:text-white/65">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-[#061826] py-14 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
              <div className="md:col-span-1">
                <Logo />
                <p className="mt-5 text-sm leading-7 text-white/55">Marketing digital premium para empresas que querem crescer com inteligência, tecnologia e confiança.</p>
              </div>
              <div>
                <h3 className="font-black">Links rápidos</h3>
                <div className="mt-4 grid gap-3 text-sm text-white/58">
                  {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replace("í", "i").replace("ó", "o")}`} className="hover:text-[#FF6B00]">{item}</a>)}
                </div>
              </div>
              <div>
                <h3 className="font-black">Serviços</h3>
                <div className="mt-4 grid gap-3 text-sm text-white/58">
                  {["Websites", "Publicidade Online", "SEO", "Automação com IA"].map((item) => <a key={item} href="#serviços" className="hover:text-[#FF6B00]">{item}</a>)}
                </div>
              </div>
              <div>
                <h3 className="font-black">Redes sociais</h3>
                <div className="mt-4 flex gap-3">
                  {[Network, Camera, Briefcase].map((Icon, index) => (
                    <a key={index} href="#" aria-label="Rede social" className="grid h-10 w-10 place-items-center rounded-full bg-white/6 hover:bg-[#FF6B00]"><Icon className="h-4 w-4" /></a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-7 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
              <p>Copyright 2026 CONECTA MARKETING. Todos os direitos reservados.</p>
              <div className="flex gap-5">
                <a href="#" className="hover:text-white">Política de Privacidade</a>
                <a href="#" className="hover:text-white">Termos de Utilização</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
