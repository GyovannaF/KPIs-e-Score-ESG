import KpiCard from "../components/dashboard/KpiCard";
import ScoreBar from "../components/dashboard/ScoreBar";
import {
  dashboardKpis,
  esgIndicators,
  impactTrend,
  overallEsgScore,
} from "../data/dashboardData";

function BrandMark() {
  return (
    <span className="flex size-9 items-center justify-center rounded-xl bg-[var(--color-brand)] text-white">
      <svg
        aria-hidden="true"
        className="size-5"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M19.5 4.5C12 4.5 6 7 6 13.5a6 6 0 0 0 6 6c6.5 0 7.5-7.5 7.5-15Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
        <path
          d="M4.5 20c2.8-4.2 6-6.8 10-9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.7"
        />
      </svg>
    </span>
  );
}

function TrendChart() {
  return (
    <div
      aria-label="Gráfico ilustrativo: evolução crescente do impacto entre janeiro e dezembro"
      className="mt-7"
      role="img"
    >
      <div className="flex h-48 items-end gap-2 border-b border-l border-[var(--color-line)] px-3 sm:h-56 sm:gap-3 sm:px-5">
        {impactTrend.map(({ month, value }) => (
          <div
            className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
            key={month}
          >
            <div
              className="w-full max-w-8 rounded-t-md bg-[#dce9df] transition-colors hover:bg-[var(--color-brand)]"
              style={{ height: `${value}%` }}
              title={`${month}: ${value} pontos (dado demonstrativo)`}
            />
            <span className="pb-2 text-[10px] text-[var(--color-muted)] sm:text-xs">
              {month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[var(--color-canvas)]">
      <header className="border-b border-[var(--color-line)] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4 sm:px-8 lg:px-10">
          <a
            aria-label="Impacta+ — início do dashboard"
            className="flex items-center gap-2.5 no-underline"
            href="#inicio"
          >
            <BrandMark />
            <span className="text-lg font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
              Impacta<span className="text-[var(--color-brand)]">+</span>
            </span>
          </a>
          <nav
            aria-label="Navegação principal"
            className="order-3 flex w-full gap-6 overflow-x-auto pb-0.5 text-sm sm:order-none sm:w-auto"
          >
            <a
              className="whitespace-nowrap border-b-2 border-[var(--color-brand)] pb-1 font-medium text-[var(--color-brand)] no-underline"
              href="#inicio"
            >
              Visão geral
            </a>
            <a
              className="whitespace-nowrap pb-1 text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-brand)]"
              href="#esg"
            >
              Indicadores ESG
            </a>
            <a
              className="whitespace-nowrap pb-1 text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-brand)]"
              href="#relatorios"
            >
              Relatórios
            </a>
          </nav>
          <span className="rounded-full border border-[var(--color-line)] bg-[#fafbf9] px-3 py-1.5 text-xs font-medium text-[var(--color-muted)]">
            Painel demonstrativo
          </span>
        </div>
      </header>

      <main
        className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 sm:pt-10 lg:px-10"
        id="inicio"
      >
        <section
          aria-labelledby="dashboard-title"
          className="mb-8 flex flex-col justify-between gap-4 sm:mb-9 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
              Impacto em movimento
            </p>
            <h1
              className="text-3xl font-semibold tracking-[-0.045em] text-[var(--color-ink)] sm:text-4xl"
              id="dashboard-title"
            >
              Visão geral
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--color-muted)]">
              Acompanhe os resultados e a evolução dos indicadores de impacto.
            </p>
          </div>
          <span className="w-fit rounded-full bg-[#edf2ed] px-3 py-1.5 text-xs font-medium text-[var(--color-brand)]">
            Dados fictícios para demonstração
          </span>
        </section>

        <section aria-label="Indicadores principais">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-base font-semibold text-[var(--color-ink)]">
              Indicadores principais
            </h2>
            <span className="text-xs text-[var(--color-muted)]">
              Visão demonstrativa
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {dashboardKpis.map((kpi) => (
              <KpiCard key={kpi.title} {...kpi} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="esg-title"
          className="mt-8 grid gap-5 lg:mt-9 lg:grid-cols-[0.8fr_1.2fr]"
          id="esg"
        >
          <article className="flex flex-col justify-between rounded-2xl bg-[var(--color-brand)] p-6 text-white sm:p-7">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/70">
                Desempenho integrado
              </p>
              <h2 className="mt-2 text-lg font-semibold" id="esg-title">
                Score ESG geral
              </h2>
            </div>
            <div className="mt-7 flex items-end gap-3">
              <span className="text-6xl font-semibold leading-none tracking-[-0.06em]">
                {overallEsgScore}
              </span>
              <span className="mb-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white/90">
                Faixa demonstrativa
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">
              Uma leitura resumida das dimensões ambiental, social e de
              governança.
            </p>
          </article>

          <article className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-[0_2px_10px_rgba(38,61,53,0.035)] sm:p-7">
            <div className="mb-6">
              <h3 className="text-base font-semibold text-[var(--color-ink)]">
                Dimensões ESG
              </h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Pontuação demonstrativa por categoria
              </p>
            </div>
            <div className="space-y-5">
              {esgIndicators.map((indicator) => (
                <ScoreBar key={indicator.label} {...indicator} />
              ))}
            </div>
          </article>
        </section>

        <section
          aria-labelledby="impact-title"
          className="mt-8 grid gap-5 lg:mt-9 lg:grid-cols-[1.45fr_0.75fr]"
          id="visao-impacto"
        >
          <article className="rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-[0_2px_10px_rgba(38,61,53,0.035)] sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2
                  className="text-base font-semibold text-[var(--color-ink)]"
                  id="impact-title"
                >
                  Visão geral do impacto
                </h2>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  Evolução ilustrativa dos indicadores ao longo do ano
                </p>
              </div>
              <span className="rounded-full bg-[#f2f5f1] px-3 py-1 text-xs font-medium text-[var(--color-muted)]">
                Jan — Dez
              </span>
            </div>
            <TrendChart />
            <p className="mt-4 text-xs leading-5 text-[var(--color-muted)]">
              Visualização fictícia para demonstração; não representa resultados
              reais.
            </p>
          </article>

          <article className="rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-[0_2px_10px_rgba(38,61,53,0.035)] sm:p-7">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#edf5ef] text-[var(--color-brand)]">
              <svg
                aria-hidden="true"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 3v18M3 12h18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.7"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="8.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            </div>
            <h2 className="mt-5 text-base font-semibold text-[var(--color-ink)]">
              O que isso significa
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Os indicadores ilustram como recursos e iniciativas podem se
              traduzir em alcance social. A leitura ESG ajuda a identificar
              dimensões que merecem atenção contínua.
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Use esta visão como exemplo de acompanhamento, não como avaliação
              real de uma organização.
            </p>
          </article>
        </section>

        <section
          aria-labelledby="reports-title"
          className="mt-5 flex flex-col justify-between gap-4 rounded-2xl border border-[var(--color-line)] bg-white p-5 sm:flex-row sm:items-center sm:p-6"
          id="relatorios"
        >
          <div>
            <h2
              className="text-base font-semibold text-[var(--color-ink)]"
              id="reports-title"
            >
              Relatórios
            </h2>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Acesse esta seção para consultar relatórios quando estiverem
              disponíveis.
            </p>
          </div>
          <span className="w-fit rounded-lg border border-[var(--color-line)] px-4 py-2 text-sm font-medium text-[var(--color-muted)]">
            Em breve
          </span>
        </section>

        <footer className="pt-7 text-center text-xs leading-5 text-[var(--color-muted)]">
          Impacta+ · Demonstração com dados fictícios. Nenhum indicador exibido
          representa dados reais da plataforma.
        </footer>
      </main>
    </div>
  );
}
