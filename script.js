const projects = [
  {
    tag: 'Campanha ativa',
    title: 'Páscoa Gamificada',
    description:
      'Projeto pronto para destaque imediato dentro do painel, com foco em navegação rápida, leitura clara e acesso centralizado.',
    status: 'Disponível',
    statusClass: 'status-live',
    phase: 'Operação atual',
    owner: 'Inteligência & campanhas',
    linkLabel: 'Acessar projeto',
    href: '#',
    enabled: true,
  },
  {
    tag: 'Integração pendente',
    title: 'Condor Premia',
    description:
      'Estrutura preparada para receber a conexão assim que o ambiente estiver disponível, mantendo visibilidade no hub desde já.',
    status: 'Aguardando conexão',
    statusClass: 'status-pending',
    phase: 'Próxima entrega',
    owner: 'Relacionamento & fidelidade',
    linkLabel: 'Conexão em breve',
    href: '#',
    enabled: false,
  },
  {
    tag: 'Expansão do ecossistema',
    title: 'Novos projetos',
    description:
      'Card preparado para futuras iniciativas, dashboards analíticos e produtos digitais que façam parte da frente de inteligência.',
    status: 'Espaço reservado',
    statusClass: '',
    phase: 'Escalável',
    owner: 'Pipeline estratégico',
    linkLabel: 'Adicionar próximo projeto',
    href: '#roadmap',
    enabled: true,
  },
];

const container = document.querySelector('#projects-grid');

container.innerHTML = projects
  .map(
    ({ tag, title, description, status, statusClass, phase, owner, linkLabel, href, enabled }) => `
      <article class="project-card">
        <span class="card-tag">${tag}</span>
        <h4>${title}</h4>
        <p>${description}</p>
        <div class="project-meta">
          <span class="${statusClass}">${status}</span>
          <span>${phase}</span>
          <span>${owner}</span>
        </div>
        <a class="project-link ${enabled ? '' : 'disabled'}" ${enabled ? `href="${href}"` : 'aria-disabled="true"'}>
          ${linkLabel}
          <span aria-hidden="true">→</span>
        </a>
      </article>
    `,
  )
  .join('');
