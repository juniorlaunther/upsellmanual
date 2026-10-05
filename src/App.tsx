import { useEffect } from 'react';
import { AlertTriangle, ShieldCheck, Lock, Sparkles } from 'lucide-react';

const HALLOWEEN_COVER_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWakIQSEx9RoW2rwEr-lP-J5OpUX6ZH4Z9eg50eHXGQwvEkPg0l8gWyzY1ZTOFfeMyvo59VCiGfuqNXE352oLTQfMuyO85Wz0udYsQzPA7e4ZYatOLsLhMhiixbdayvLpfpX5EP4UTnDIvCmV3fiKNEEKT-Pd6W0nSsUXL7ooKWluwCm5kN1uSrJbYpvo/w400-h400/Manual%20de%20halloween%20capa.png";

export default function App() {
  // Ensure the Cakto upsell script is loaded and custom elements registered
  useEffect(() => {
    const scriptUrl = "https://caktoscripts.nyc3.cdn.digitaloceanspaces.com/upsell.js";
    let script = document.querySelector(`script[src="${scriptUrl}"]`) as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement("script");
      script.src = scriptUrl;
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#9C1ECC] selection:text-white font-sans bg-[#0D0814] text-[#F3EEF9] relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-[#8B1EC4]/18 rounded-full blur-[100px] pointer-events-none" />

      {/* 1. Barra Vermelha no Topo - Oferta Desbloqueada */}
      <aside aria-label="Aviso de oferta exclusiva" className="bg-gradient-to-r from-red-700 via-rose-600 to-red-700 text-white py-2 px-3 text-center border-b border-red-500/30 shadow-md shrink-0 z-30">
        <div className="max-w-xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 animate-scale-pulse text-amber-300" />
          <span>
            Você desbloqueou uma oferta exclusiva!
          </span>
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 animate-scale-pulse text-amber-300" />
        </div>
      </aside>

      {/* 2. Conteúdo Central - Minimalista, Fluido e Não Segmentado */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-4 sm:py-6 max-w-xl mx-auto w-full text-center relative z-10">
        
        {/* Chamada para Ação com Tema Dark Halloween */}
        <div className="text-xs sm:text-sm font-bold text-[#FFA726] tracking-wider uppercase mb-1">
          <span>Edição Limitada</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
          Manual para Desenhar <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0AAFF] via-[#C77DFF] to-[#FFA726] drop-shadow-[0_2px_14px_rgba(199,125,255,0.4)]">
            Edição Especial de Halloween
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium max-w-lg mx-auto mt-2 leading-snug">
          Centenas de novas referências temáticas exclusivas para você criar ilustrações de arrepiar, do seu jeito.
        </p>

        {/* Imagem do Livro Grande em Destaque Absoluto */}
        <div className="my-4 sm:my-5 relative flex justify-center items-center w-full">
          <div className="relative group">
            <img 
              src={HALLOWEEN_COVER_URL} 
              alt="Manual para Desenhar - Edição Especial de Halloween" 
              width={420}
              height={420}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-72 sm:w-84 md:w-96 max-w-[85vw] aspect-square object-cover rounded-2xl sm:rounded-3xl border-3 border-[#9C1ECC]/70 shadow-[0_0_35px_rgba(156,31,204,0.35),0_15px_35px_rgba(0,0,0,0.85)] group-hover:scale-102 transition-transform duration-300 pointer-events-none"
            />
          </div>
        </div>

        {/* Preço em Destaque Contemporâneo (Sem Caixas Segmentadas) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-1">
          <span className="line-through text-gray-400 text-base sm:text-lg md:text-xl font-bold">
            De R$ 67,00
          </span>
          <span className="text-gray-300 text-base sm:text-lg font-medium">
            por apenas
          </span>
          <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFA726] tracking-tight drop-shadow-[0_2px_12px_rgba(255,167,38,0.35)]">
            R$ 34,90
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-400 font-medium">
          Pagamento único • Acesso imediato liberado junto ao seu pedido
        </p>

        {/* Botões Oficiais da Cakto */}
        <div className="w-full my-3 max-w-md">
          <cakto-upsell-buttons>
            <cakto-upsell-accept
              bg-color="#690d87ff"
              text-color="#ffffff"
              upsell-accept-url="members_area"
              offer-id="3fmywcj"
              app-base-url="https://app.cakto.com.br"
              offer-type="upsell"
              upsell-reject-url="https://downmanualdehalloween.acasadoju.club/"
            >
              Sim, quero aproveitar a oferta
            </cakto-upsell-accept>
            
            <cakto-upsell-reject
              upsell-reject-url="https://downmanualdehalloween.acasadoju.club/"
            >
              Recusar Oferta
            </cakto-upsell-reject>
          </cakto-upsell-buttons>
        </div>

        {/* Ícones de Garantia e Compra 100% Segura */}
        <div className="w-full pt-2 flex items-center justify-center gap-4 text-xs sm:text-sm text-gray-300 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
            <span>Garantia de 7 dias</span>
          </div>
          <span className="text-gray-600">•</span>
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFA726] shrink-0" />
            <span>Compra 100% segura</span>
          </div>
        </div>

      </main>

      {/* 3. Rodapé Minimalista */}
      <footer className="text-center text-xs text-gray-500 py-3 px-4 shrink-0 relative z-10 border-t border-white/5">
        <p>© {new Date().getFullYear()} A Casa do Ju • Todos os direitos reservados</p>
      </footer>

    </div>
  );
}
