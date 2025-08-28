console.log("Script loaded successfully!");

let userName = prompt('Digite seu nome:');

if (!userName) {
    userName = 'Usuário Anônimo';
};

alert(`Bem-vindo(a), ${userName}! Vamos começar o quiz.`);


// Projeto 5 – Quiz (Questionário)

// Criar um quiz de múltipla escolha com perguntas de programação.

// Requisitos:
    // - Ter pelo menos 4 perguntas com 3 alternativas cada (A, B, C).
    // - Armazenar perguntas e alternativas em uma matriz.
    const quizzes = [
        [
            'Qual linguagem é usada para estilizar páginas web?', 
            ['A) HTML', 'B) CSS', 'C) JavaScript'], 
            'B'
        ],
        [
            'Qual linguagem é usada para adicionar interatividade a páginas web?', 
            ['A) Java', 'B) C#', 'C) JavaScript'], 
            'C'
        ],
        [
            'Qual dessas não é uma linguagem de programação?', 
            ['A) Ruby', 'B) HTML', 'C) Swift'], 
            'B'
        ],
        [
            'Qual linguagem é conhecida por sua simplicidade e legibilidade?', 
            ['A) Python', 'B) C++', 'C) Assembly'], 
            'A'
        ]
    ];


    // - Receber respostas do usuário via prompt.
    let score = 0;
    
    
    for (let i = 0; i < quizzes.length; i += 1) {
        const [question, options, correctAnswer] = quizzes[i];

        const userAnswer = prompt(`${question}\n${options.join('\n')}\nDigite A, B ou C:`).toUpperCase();
        
        if (userAnswer === correctAnswer) {
            score += 25;
            console.log('Resposta correta!');
        } else {
            console.log(`Resposta incorreta! A resposta correta era ${correctAnswer}.`);
        }
    }

    // - Verificar respostas corretas e calcular pontuação.
    // - Exibir pontuação final e gabarito no console.
    console.log(`Sua pontuação final é: ${score}/100`);

    console.log('Gabarito:');
    
    for (let i = 0; i < quizzes.length; i += 1) {
        const [question, options , correctAnswer] = quizzes[i];
        console.log(` ${question} ${options}: Resposta "${correctAnswer}"`);
    }

    // - Exibir pontuação final via alert.
    alert(`Quiz finalizado! ${userName} sua pontuação final é: ${score}/100`);
    alert('Confira o gabarito no console.');

    // - Adicionar feedback baseado na pontuação.
    switch (true) {
        case score === 100:
            console.log(`Parabéns! ${userName} você é um(a) expert em programação!`);
            break;
        case score >= 75:
            console.log(`Muito bem! ${userName} Você tem um ótimo conhecimento em programação!`);
            break;
        case score >= 50:
            console.log(`Bom esforço! ${userName} Você tem um conhecimento razoável em programação.`);
            break;
        default:
            console.log(`Continue praticando! ${userName} Você precisa melhorar seu conhecimento em programação. A programação é uma jornada contínua de aprendizado.`);
            break;
    };
