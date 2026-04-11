// Dados centralizados de todos os planos — altere aqui para refletir em todo o projeto
const planosData = {

    // ========================
    // PLANO PERSONAL
    // ========================
    personal: {
        nome: "Plano Personal",            // Nome exibido no resumo do pedido
        preco: "R$ 350",                   // Valor em texto simples para o resumo
        tag: "PERSONAL",                   // Label vermelho no topo do card/detalhe
        titulo: "Treino Personal",         // Título principal da página de detalhes
        precoHTML: "R$ 350<span>/mês</span>", // Valor com HTML para exibição em destaque
        lista: [                           // Benefícios exibidos em "O que está incluso"
            "✔ Aulas 100% individuais",
            "✔ Planejamento de treino personalizado",
            "✔ Acompanhamento contínuo de evolução",
            "✔ Horário flexível combinado com o professor",
            "✔ Foco total no seu objetivo"
        ],
        info: [                            // Informações exibidas em "Informações gerais"
            "📍 Local a combinar com o professor",
            "📅 Frequência semanal a definir",
            "💳 Pagamento mensal",
            "⚠️ Valor sujeito a alteração em breve"
        ],
        // Texto exibido na caixa de contrato da página de detalhes
        contrato: `Este contrato estabelece os termos entre o aluno e a Shark Camps para o plano Personal.\n\n• O aluno se compromete a respeitar os horários agendados com o professor.\n• Cancelamentos devem ser comunicados com no mínimo 24 horas de antecedência.\n• O pagamento é mensal e deve ser realizado até o vencimento acordado.\n• A Shark Camps reserva o direito de ajustar os valores com aviso prévio de 30 dias.\n• O aluno declara estar ciente das condições físicas necessárias para a prática do boxe.`
    },

    // ========================
    // PLANO CT AMIGOS DO JARDIM SILVEIRA
    // ========================
    ct: {
        nome: "Treino em Grupo — CT Amigos do Jardim Silveira",
        preco: "R$ 100",
        tag: "CT AMIGOS DO JARDIM SILVEIRA",
        titulo: "Treino em Grupo — CT",
        precoHTML: "R$ 100<span>/mês</span>",
        lista: [
            "✔ Turmas regulares com horários fixos",
            "✔ Treino técnico de boxe",
            "✔ Condicionamento físico",
            "✔ Ambiente de equipe e companheirismo",
            "✔ Acesso à comunidade Shark Camps"
        ],
        info: [
            "📍 CT Amigos do Jardim Silveira",
            "📅 Aulas semanais conforme grade de horários",
            "💳 Pagamento mensal — R$ 100",
            "👥 Turmas com número limitado de alunos"
        ],
        contrato: `Este contrato estabelece os termos entre o aluno e a Shark Camps para o plano Treino em Grupo no CT Amigos do Jardim Silveira.\n\n• O aluno se compromete a respeitar as regras do CT e do professor.\n• A mensalidade deve ser paga até o vencimento acordado.\n• Faltas não geram desconto ou reposição automática de aulas.\n• O aluno declara estar ciente das condições físicas necessárias para a prática do boxe.\n• A Shark Camps reserva o direito de ajustar os valores com aviso prévio de 30 dias.`
    },

    // ========================
    // PLANO BLUEFIT
    // ========================
    bluefit: {
        nome: "Treino em Grupo — Bluefit",
        preco: "R$ 180",
        tag: "BLUEFIT",
        titulo: "Treino em Grupo — Bluefit",
        precoHTML: "R$ 180<span>/mês</span>",
        lista: [
            "✔ Turmas regulares com horários fixos",
            "✔ Treino técnico de boxe",
            "✔ Condicionamento físico",
            "✔ Estrutura completa da Bluefit",
            "✔ Acesso à comunidade Shark Camps"
        ],
        info: [
            "📍 Unidade Bluefit",
            "📅 Aulas semanais conforme grade de horários",
            "💳 Pagamento mensal — R$ 180",
            "👥 Turmas com número limitado de alunos"
        ],
        contrato: `Este contrato estabelece os termos entre o aluno e a Shark Camps para o plano Treino em Grupo na Bluefit.\n\n• O aluno se compromete a respeitar as regras da unidade Bluefit e do professor.\n• A mensalidade deve ser paga até o vencimento acordado.\n• Faltas não geram desconto ou reposição automática de aulas.\n• O aluno declara estar ciente das condições físicas necessárias para a prática do boxe.\n• A Shark Camps reserva o direito de ajustar os valores com aviso prévio de 30 dias.`
    }
};
