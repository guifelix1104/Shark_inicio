// Dados centralizados de todos os planos — altere aqui para refletir em todo o projeto
const planosData = {
    personal: {
        nome: "Plano Personal",
        preco: "R$ 350",
        tag: "PERSONAL",
        titulo: "Treino Personal",
        precoHTML: "R$ 350<span>/m\u00eas</span>",
        lista: [
            "\u2714 Aulas 100% individuais",
            "\u2714 Planejamento de treino personalizado",
            "\u2714 Acompanhamento cont\u00ednuo de evolu\u00e7\u00e3o",
            "\u2714 Hor\u00e1rio flex\u00edvel combinado com o professor",
            "\u2714 Foco total no seu objetivo"
        ],
        info: [
            "\ud83d\udccd Local a combinar com o professor",
            "\ud83d\udcc5 Frequ\u00eancia semanal a definir",
            "\ud83d\udcb3 Pagamento mensal",
            "\u26a0\ufe0f Valor sujeito a altera\u00e7\u00e3o em breve"
        ],
        contrato: `Este contrato estabelece os termos entre o aluno e a Shark Camps para o plano Personal.\n\n\u2022 O aluno se compromete a respeitar os hor\u00e1rios agendados com o professor.\n\u2022 Cancelamentos devem ser comunicados com no m\u00ednimo 24 horas de anteced\u00eancia.\n\u2022 O pagamento \u00e9 mensal e deve ser realizado at\u00e9 o vencimento acordado.\n\u2022 A Shark Camps reserva o direito de ajustar os valores com aviso pr\u00e9vio de 30 dias.\n\u2022 O aluno declara estar ciente das condi\u00e7\u00f5es f\u00edsicas necess\u00e1rias para a pr\u00e1tica do boxe.`
    },
    ct: {
        nome: "Treino em Grupo \u2014 CT Amigos do Jardim Silveira",
        preco: "R$ 100",
        tag: "CT AMIGOS DO JARDIM SILVEIRA",
        titulo: "Treino em Grupo \u2014 CT",
        precoHTML: "R$ 100<span>/m\u00eas</span>",
        lista: [
            "\u2714 Turmas regulares com hor\u00e1rios fixos",
            "\u2714 Treino t\u00e9cnico de boxe",
            "\u2714 Condicionamento f\u00edsico",
            "\u2714 Ambiente de equipe e companheirismo",
            "\u2714 Acesso \u00e0 comunidade Shark Camps"
        ],
        info: [
            "\ud83d\udccd CT Amigos do Jardim Silveira",
            "\ud83d\udcc5 Aulas semanais conforme grade de hor\u00e1rios",
            "\ud83d\udcb3 Pagamento mensal \u2014 R$ 100",
            "\ud83d\udc65 Turmas com n\u00famero limitado de alunos"
        ],
        contrato: `Este contrato estabelece os termos entre o aluno e a Shark Camps para o plano Treino em Grupo no CT Amigos do Jardim Silveira.\n\n\u2022 O aluno se compromete a respeitar as regras do CT e do professor.\n\u2022 A mensalidade deve ser paga at\u00e9 o vencimento acordado.\n\u2022 Faltas n\u00e3o geram desconto ou reposi\u00e7\u00e3o autom\u00e1tica de aulas.\n\u2022 O aluno declara estar ciente das condi\u00e7\u00f5es f\u00edsicas necess\u00e1rias para a pr\u00e1tica do boxe.\n\u2022 A Shark Camps reserva o direito de ajustar os valores com aviso pr\u00e9vio de 30 dias.`
    },
    bluefit: {
        nome: "Treino em Grupo \u2014 Bluefit",
        preco: "R$ 180",
        tag: "BLUEFIT",
        titulo: "Treino em Grupo \u2014 Bluefit",
        precoHTML: "R$ 180<span>/m\u00eas</span>",
        lista: [
            "\u2714 Turmas regulares com hor\u00e1rios fixos",
            "\u2714 Treino t\u00e9cnico de boxe",
            "\u2714 Condicionamento f\u00edsico",
            "\u2714 Estrutura completa da Bluefit",
            "\u2714 Acesso \u00e0 comunidade Shark Camps"
        ],
        info: [
            "\ud83d\udccd Unidade Bluefit",
            "\ud83d\udcc5 Aulas semanais conforme grade de hor\u00e1rios",
            "\ud83d\udcb3 Pagamento mensal \u2014 R$ 180",
            "\ud83d\udc65 Turmas com n\u00famero limitado de alunos"
        ],
        contrato: `Este contrato estabelece os termos entre o aluno e a Shark Camps para o plano Treino em Grupo na Bluefit.\n\n\u2022 O aluno se compromete a respeitar as regras da unidade Bluefit e do professor.\n\u2022 A mensalidade deve ser paga at\u00e9 o vencimento acordado.\n\u2022 Faltas n\u00e3o geram desconto ou reposi\u00e7\u00e3o autom\u00e1tica de aulas.\n\u2022 O aluno declara estar ciente das condi\u00e7\u00f5es f\u00edsicas necess\u00e1rias para a pr\u00e1tica do boxe.\n\u2022 A Shark Camps reserva o direito de ajustar os valores com aviso pr\u00e9vio de 30 dias.`
    }
};
