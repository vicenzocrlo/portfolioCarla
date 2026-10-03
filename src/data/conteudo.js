/* =======================CONTEÚDO DO SITE ============================= */
export const IMAGENS = { coracao:"img/coracao.jpg", menina:"img/menina.jpg", menino:"img/menino.jpg", carla:"img/carla.png", sobre:"img/sobremim.jpeg", terapia:"img/terapia2.0.jpeg", olhar:"img/olhar.jpeg" };

export const CONTATO = {
  whatsapp:"5511985093447", telefone:"(11) 98509-3447",
  instagram:"https://instagram.com/cirilo.carla",
  linkedin:"https://www.linkedin.com/in/carla-cirilo",
  youtube:"https://www.youtube.com/@carlacirilo8102"
};
export const wa = t => `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(t)}`;

export const PAGINAS = [

/* ============================== INÍCIO ============================== */
{ id:"inicio", menu:"Início", home:true,
  titulo:"Modos de Ser", sub:"Terapeuta | Filósofa Clínica", imagem:"coracao",
  blocos:[
  ["h2","Cada história é singular."],
  ["p","Há momentos em que vivemos, trabalhamos, cuidamos, escolhemos e seguimos em frente, mas alguma coisa deixa de fazer sentido."],
  ["p","Podem surgir conflitos, dúvidas, mudanças, dificuldades nas relações, sentimentos que não conseguimos compreender ou simplesmente a sensação de que precisamos olhar para dentro e entender melhor quem somos e como estamos vivendo."],
  ["p","Acompanho pessoas em um processo de investigação de sua história, seus modos de ser, pensamentos, sentimentos, relações, escolhas e formas próprias de lidar com a vida."],
  ["q","Um espaço para parar, escutar, compreender e, quando fizer sentido, construir novos caminhos."],
  ["q","Cada história é singular. E é a partir dessa singularidade que começa o meu trabalho."],
  ["cards",[
    ["Terapia","Filosofia Clínica para compreender sua história.","terapia"],
    ["Crianças","Um espaço para a criança ser compreendida.","criancas"],
    ["Círculos e Experiências","Parar, escutar e voltar a si.","circulos"],
    ["Para Organizações","Pessoas, relações e desenvolvimento.","organizacoes"]]],
  ["btn",[["Vamos conversar","#contato"]]]
]},

/* ============================ SOBRE MIM ============================= */
{ id:"sobre", menu:"Sobre mim", titulo:"Uma trajetória dedicada a pessoas", imagem:"sobre",
   blocos:[
  ["h2","Olá! Eu sou a Carla Cirilo."],
  ["p","Quero compartilhar com você um pouco sobre mim, minha trajetória e meu modo de cuidar do outro."],
  ["p","Sou terapeuta, com abordagem em Filosofia Clínica, mentora de carreira e de vida, orientadora filosófica e também atuo com capacitação e desenvolvimento humano."],
  ["p","Meu trabalho é voltado para pessoas que desejam compreender melhor suas experiências, escolhas, desafios e caminhos, sempre respeitando a singularidade de cada história."],
  ["p","Atendo mulheres, homens e crianças, de forma on-line e presencial, no Brasil e em Moçambique, na África. Também desenvolvo trabalhos junto a empresas, especialmente na área de desenvolvimento humano."],
  ["p","Minha trajetória profissional e pessoal foi sendo construída a partir de um interesse profundo pelo ser humano: por suas histórias, suas escolhas, seus conflitos, suas relações e, principalmente, pela maneira singular como cada pessoa experiencia a própria existência."],
  ["h2","Uma trajetória construída entre pessoas, processos, desenvolvimento e busca por sentido."],
  ["p","Ao longo dessa caminhada, tive a oportunidade de liderar pessoas, acompanhar equipes, conduzir projetos, transformar processos e trabalhar com diferentes organizações e contextos."],
  ["p","Mas, acima de tudo, trabalhei com pessoas."],
  ["p","Foi justamente essa experiência que ampliou meu olhar sobre o ser humano e despertou em mim um interesse cada vez maior pela singularidade de cada pessoa, pelas suas escolhas, seus modos de ser, suas relações e pelas diferentes maneiras de encontrar sentido para aquilo que vive."]
]},

/* ============================== TERAPIA ============================== */
{ id:"terapia", menu:"Terapia", titulo:"Um espaço para compreender sua história", imagem:"terapia",
  blocos:[
  ["p","A terapia pode começar quando percebemos que alguma coisa dentro de nós precisa ser compreendida."],
  ["p","Pode ser uma situação específica, uma mudança, um conflito, uma dificuldade nas relações, uma escolha importante ou simplesmente uma sensação de não se reconhecer mais na própria vida."],
  ["p","Na terapia, não parto de respostas prontas."],
  ["p","Parto da sua história, onde investigo como você experiencia o mundo, como interpreta aquilo que acontece, como sente, pensa, escolhe, se relaciona e age."],
  ["p","O objetivo não é encaixar você em uma explicação pronta."],
  ["p","É compreender quem você é, como você funciona e o que está acontecendo dentro da sua própria maneira de viver."],
  ["p","Uma dificuldade pode ser apenas uma parte da história. Por trás dela existe uma pessoa com uma história própria, relações, experiências, pensamentos, sentimentos, referências, escolhas, possibilidades e uma maneira singular de estar no mundo. A partir dessa compreensão, podemos investigar possibilidades e construir caminhos que façam sentido para aquela pessoa."],

  ["h2","Filosofia Clínica"],
  ["h3","Uma abordagem terapêutica baseada na singularidade"],
  ["p","A Filosofia Clínica é a aplicação da filosofia à prática terapêutica."],
  ["p","É uma forma de investigação que busca compreender a pessoa a partir de sua história, de suas relações, de sua maneira de pensar, sentir e agir e da forma como se relaciona consigo mesma e com o mundo."],
  ["p","A reflexão filosófica possibilita investigar uma situação de maneira organizada e aprofundada, considerando suas causas, origens, circunstâncias, relações e o contexto em que está inserida."],
  ["p","Não se trata apenas de compreender uma questão isoladamente."],
  ["p","Busca-se compreender a pessoa em seu universo."],
  ["p","A partir dessa compreensão, é possível construir um acompanhamento individualizado e buscar maneiras de lidar com aquilo que está sendo vivido."],

  ["h2","Como funciona"],
  ["h3","Compreender para acompanhar"],
  ["p","O processo terapêutico começa pela escuta da história de vida."],
  ["p","A partir das recordações mais remotas que a pessoa possui e das experiências atuais, buscamos compreender progressivamente como ela se estrutura e como experiencia sua própria existência."],
  ["p","Na Filosofia Clínica, três fundamentos orientam essa investigação:"],
  ["cards",[
    ["Exames Categoriais","Compreender o contexto em que a pessoa vive. Investigamos aspectos como tempo, lugar, relações, circunstâncias, acontecimentos e ambientes que fazem parte de sua história."],
    ["Estrutura de Pensamento","Compreender como a pessoa experiencia aquilo que vive. Buscamos compreender sua maneira de pensar, sentir, interpretar, raciocinar, comunicar-se, escolher e agir, considerando sua história e suas experiências."],
    ["Submodos","Compreender como a pessoa lida com aquilo que acontece. Investigamos as maneiras pelas quais ela entra em ação diante das situações da vida."]]],
  ["p","A partir dessa compreensão, podemos potencializar recursos que a pessoa já possui, adaptar formas de agir ou construir novas possibilidades que sejam coerentes com sua maneira própria de ser."],
  ["h3","Um plano clínico individualizado"],
  ["p","A partir da investigação realizada, é construído um plano clínico individualizado."],
  ["p","Esse plano não é uma fórmula pronta."],
  ["p","Ele é construído a partir da singularidade da pessoa, acompanhado ao longo do processo e revisto conforme aquilo que vai sendo vivido."],
  ["q","Não se trata de transformar alguém em outra pessoa. Trata-se de compreender quem ela é e ampliar suas possibilidades de viver."],

  ["h2","Para quem é a terapia?"],
  ["p","A terapia pode ser um espaço para quem deseja compreender melhor:"],
  ["ul",["Momentos de mudança ou transição","Conflitos pessoais e relacionais","Dúvidas e escolhas","Sentimentos difíceis de compreender","Formas repetitivas de agir","Dificuldades na convivência","Questões relacionadas à identidade e ao modo de ser","Situações que deixaram de fazer sentido","Desafios profissionais e pessoais","Relações consigo mesmo e com outras pessoas","Caminhos que deseja construir para a própria vida"]],

  ["h2","Atendimento"],
  ["p","Mulheres, homens e crianças · on-line e presencial · Brasil e Moçambique — África."],

  ["h2","Mentoria e orientação"],
  ["h3","Um espaço para pensar caminhos"],
  ["p","Minha experiência com pessoas também se estende à mentoria de carreira e de vida e à orientação filosófica."],
  ["p","São espaços destinados à reflexão sobre escolhas, mudanças, caminhos, projetos e momentos de transição."],
  ["p","A proposta não é oferecer uma resposta pronta sobre qual caminho seguir."],
  ["p","É criar condições para que a pessoa possa compreender melhor sua situação, suas possibilidades, aquilo que está buscando e os caminhos que deseja construir."],
  ["cards",[
    ["Mentoria de carreira","Para pessoas que estão iniciando uma trajetória profissional, pensando em uma transição ou buscando compreender melhor seus próximos passos."],
    ["Mentoria de vida","Um espaço de reflexão para momentos em que escolhas, mudanças, prioridades e projetos precisam ser revisitados."],
    ["Orientação filosófica","Um espaço para pensar questões da existência, escolhas, relações, sentido, dilemas e maneiras de compreender a própria vida."]]],
  ["btn",[["Agendar conversa","#contato"]]]
]},

/* ============================== CRIANÇAS ============================== */
{ id:"criancas", menu:"Crianças", titulo:"Um espaço para a criança ser compreendida em sua singularidade", imagem:"menina", blocos:[
  ["p","Cada criança possui uma maneira própria de perceber, compreender, sentir, brincar, comunicar-se e relacionar-se com o mundo."],
  ["p","Por isso, no acompanhamento infantil, não buscamos simplesmente enquadrar a criança em modelos prontos de comportamento ou eliminar aquilo que os adultos identificam como um problema."],
  ["p","Buscamos compreender:"],
  ["ul",["Quem é essa criança?","Como ela experiencia o mundo?","O que está vivendo?","E o que seu comportamento pode estar expressando dentro de sua história e de suas circunstâncias?"]],
  ["p","A criança não é apenas aquilo que apresenta como dificuldade."],
  ["p","Existe uma história, uma maneira de ser, relações, experiências, medos, desejos, possibilidades e formas próprias de lidar com o mundo."],

  ["h2","A criança pode contar sua história de muitas maneiras"],
  ["p","A investigação é adaptada à idade, à linguagem e ao modo de expressão de cada criança."],
  ["p","Ela não precisa necessariamente sentar e contar sua história. Pode apresentá-la através do brincar, desenho, histórias que cria, contações de histórias terapêuticas, música, dança, movimentos, escolhas, relações e experiências vividas durante os encontros."],
  ["p","Também podem ser utilizados recursos como álbum de fotos e outras formas de expressão, de acordo com aquilo que fizer sentido para aquela criança."],

  ["h2","O que buscamos compreender"],
  ["p","Ao longo do processo, investigamos aspectos como:"],
  ["ul",["Sua história e experiências","Relações familiares e sociais","Maneira de perceber e interpretar situações","Sentimentos e formas de expressão","Medos, desejos e expectativas","Maneira de lidar com limites e frustrações","Formas de comunicação","Maneira de estabelecer relações","Recursos e possibilidades diante das dificuldades"]],
  ["p","A partir dessa investigação, é construído um plano clínico individualizado, respeitando a estrutura de pensamento e o modo de ser daquela criança."],
  ["p","Buscamos compreender o mundo em que a criança vive. Família, escola, amizades, rotina, ambientes frequentados, relações significativas e acontecimentos importantes de sua história."],
  ["p","Buscamos compreender como aquela criança organiza sua experiência."],
  ["ul",["Como percebe as situações?","Como compreende o que acontece?","Como expressa seus sentimentos?","Como estabelece vínculos?","Como reage às mudanças, aos limites, às frustrações e às situações novas?"]],
  ["p","Investigamos como a criança lida com aquilo que acontece em sua vida."],
  ["p","Identificamos recursos que já fazem parte de sua maneira de ser e agir e, quando necessário, construímos novas possibilidades para que possa lidar com determinadas situações de maneira mais adequada à sua estrutura."],
  ["img","menino"],

  ["h2","A família no processo"],
  ["p","A criança é o centro do acompanhamento, mas não está separada do mundo em que vive."],
  ["p","Por isso, os responsáveis também fazem parte do processo."],
  ["p","O acompanhamento pode incluir encontros com a família, conforme a necessidade clínica, para:"],
  ["ul",["Compartilhar aspectos importantes do processo","Compreender situações do cotidiano","Acompanhar mudanças percebidas","Compreender novas situações que surjam","Conversar sobre possibilidades de manejo","Contribuir para a construção das condições necessárias ao desenvolvimento do processo"]],
  ["p","A participação da família acontece preservando o espaço da criança e considerando sua singularidade."],

  ["h2","Para além do consultório"],
  ["h3","Diferentes ambientes podem fazer parte do processo"],
  ["p","Uma característica do meu trabalho com crianças é a possibilidade de realizar encontros em diferentes ambientes, quando isso fizer sentido para o planejamento clínico."],
  ["cards",[
    ["Casa da família","O ambiente familiar pode possibilitar uma compreensão mais próxima da rotina, das relações, dos limites, da autonomia e da maneira como a criança se organiza no cotidiano."],
    ["Sítios e ambientes de natureza","A natureza pode proporcionar experiências de movimento, exploração, descoberta e interação com diferentes estímulos. Essas experiências podem favorecer novas formas de expressão e possibilitar a observação de diferentes modos de ser da criança."],
    ["Vivências com cavalos","Em alguns casos, podem ser incluídas experiências de aproximação e interação com cavalos. O contato com o animal pode possibilitar situações relacionadas à confiança, comunicação, atenção, limites, presença, cuidado, autonomia e relação com o outro. O cavalo não é utilizado como uma técnica padronizada. A experiência é compreendida a partir daquilo que representa e possibilita para aquela criança. As vivências são realizadas em ambiente adequado e seguro, com os cuidados e profissionais necessários para a condução da atividade."],
    ["Atendimento on-line","O atendimento on-line poderá ser utilizado quando for adequado à idade, às características da criança e ao planejamento clínico."]]],
  ["btn",[["Conversar sobre meu filho(a)", wa("Olá, Carla! Gostaria de conversar sobre o atendimento infantil.")]]]
]},

/* ===================== CÍRCULOS E EXPERIÊNCIAS ===================== */
{ id:"circulos", menu:"Círculos e Experiências", titulo:"Experiências para parar escutar e voltar a si", blocos:[
  ["p","Além do acompanhamento individual, desenvolvo experiências conduzidas em torno de temas relacionados ao autoconhecimento, à reflexão, à escuta e à conexão."],
  ["p","São encontros estruturados, com começo, meio e fim, pensados para criar um espaço diferente da rotina."],
  ["p","Não são uma roda de conversa solta. Não são cursos. Não são terapia em grupo."],
  ["p","São experiências conduzidas em torno de um tema, nas quais as participantes são convidadas a refletir, escutar e compartilhar, sempre respeitando seus próprios limites."],

  ["h2","Círculo Espelho"],
  ["h3","Um encontro para voltar a si"],
  ["p","O Círculo Espelho é voltado para mulheres, seu propósito é criar um espaço onde a mulher possa voltar o olhar para si mesma e perceber aspectos de sua própria história, identidade e maneira de ser que muitas vezes ficam escondidos atrás dos papéis e expectativas do cotidiano."],
  ["p","É um encontro único pensado para que, por algumas horas, ela possa deixar o mundo lá fora."],
  ["p","Parar. Respirar. Escutar-se. Olhar para si."],
  ["p","Um espaço de escuta, conexão, reflexão e pertencimento. Um movimento de volta para casa, uma oportunidade de se reconhecer."],
  ["p","Ao longo do encontro, a participante é convidada a refletir sobre:"],
  ["ul",["Identidade e autoimagem","Papéis e expectativas","Máscaras e autenticidade","Forças, qualidades e potencialidades","Cansaço e invisibilidade","Vulnerabilidades","Crenças","Aceitação","Necessidades e desejos","Autoconhecimento e autorreconhecimento"]],
  ["q","O espelho continua sendo o mesmo. Mas o olhar diante dele começa a ser diferente."],

  ["h2","Círculo Sopro"],
  ["h3","Um caminho para voltar a si e educar os pensamentos"],
  ["p","O Círculo Sopro é voltado para mulheres que, em algum momento, deixaram de sentir a vida acontecendo em si. É para a mulher que carrega expectativas, responsabilidades e pensamentos que, pouco a pouco, foram ocupando espaço demais. Para quem cuida de todos e, muitas vezes, se deixa por último. Para quem se acostumou a ouvir tantas vozes — o que deveria fazer, ser, sentir ou escolher — que já não consegue distinguir com clareza aquilo que realmente pensa, deseja e precisa."],
  ["p","Durante quatro encontros, o convite é voltar ao básico: parar, respirar, escutar o que acontece dentro de você e iniciar o processo de mudança."],
  ["p","Olhar para aquilo que sufoca, para os pensamentos que se repetem e para as ideias que foram sendo construídas sobre quem você deveria ser."],
  ["p","Ao longo dessa jornada, ela é convidada a reconhecer seus modos de ser, seus limites, seus valores, suas necessidades e as histórias que conta para si mesma."],
  ["p","O Círculo Sopro é um espaço para fazer esse movimento com presença, reflexão e companhia."],
  ["cards",[["Encontro 1","Eu respiro, eu existo"],["Encontro 2","O que me sufoca e o que me alimenta"],["Encontro 3","Encontrando meu ritmo próprio"],["Encontro 4","Soltando o que não é meu"]]],

  ["h2","Pausa para Si"],
  ["p","Experiência de pausa e cuidado. (Adicione aqui a descrição.)"],
  ["btn",[["Quero participar", wa("Olá, Carla! Tenho interesse nos Círculos e Experiências.")]]]
]},

/* ========================== PARA ORGANIZAÇÕES ========================== */
{ id:"organizacoes", menu:"Organizações", titulo:"Pessoas, relações e desenvolvimento", blocos:[
  ["p","Minha trajetória profissional foi construída também dentro das organizações."],
  ["p","Ao longo dela, tive a oportunidade de liderar pessoas, acompanhar equipes, conduzir projetos, transformar processos e trabalhar com diferentes organizações e contextos."],
  ["p","Essa experiência permanece presente no meu trabalho com empresas."],
  ["p","Atuo especialmente em temas relacionados a:"],
  ["ul",["Desenvolvimento humano","Liderança","Relações interpessoais","Convivência","Desenvolvimento de equipes","Comunicação","Reflexão sobre o trabalho e as relações","Experiências de pausa e cuidado"]],
  ["p","Meu trabalho busca compreender a realidade de cada organização antes de propor qualquer experiência ou intervenção."],
  ["q","Porque pessoas não existem separadas do contexto em que trabalham."],
  ["btn",[["Falar sobre sua organização", wa("Olá, Carla! Gostaria de conversar sobre um trabalho para minha organização.")]]]
]},

/* =============================== MEU OLHAR =============================== */
{ id:"olhar", menu:"Meu Olhar", titulo:"Reflexões sobre pessoas e seus modos de ser", imagem:"olhar",
   blocos:[
  ["p","Este é um espaço para compartilhar reflexões que nascem do encontro entre Filosofia, experiência profissional e olhar para o ser humano."],
  ["p","São reflexões para quem deseja olhar para a própria vida com um pouco mais de atenção."],
  ["q","Mais clareza. Menos automatismo. Viver de forma mais consciente."],

  ["h2","Todos os dias tomamos decisões."],
  ["p","Algumas parecem simples. Outras mudam completamente o rumo da nossa vida."],
  ["p","Às vezes nos perguntamos:"],
  ["ul",["Continuo ou mudo de caminho?","Insisto ou deixo ir?","Digo o que sinto ou permaneço em silêncio?","Estou vivendo a vida que realmente faz sentido para mim?"]],
  ["p","Na correria do dia a dia, acabamos respondendo no automático."],
  ["p","Vivemos cercados por prazos, expectativas, opiniões e cobranças. E, muitas vezes, tomamos decisões porque “é o que todos fazem”, não porque fazem sentido para nós."],
  ["p","Mas existe um espaço entre o impulso e a ação. É nesse espaço que nasce a reflexão."],
  ["p","Nem sempre precisamos de mais conselhos. Às vezes, precisamos apenas de um lugar seguro para pensar com mais profundidade."],
  ["p","Acredito que, quando nos conhecemos melhor, fazemos escolhas mais conscientes, construímos relações mais saudáveis e vivemos com mais autenticidade."],

  ["h2","Continuo ou mudo de caminho?"],
  ["h3","Compreender o sentido da escolha."],
  ["p","Nem toda permanência é coragem. Nem toda mudança é liberdade."],
  ["p","Às vezes insistimos porque temos medo do desconhecido. Outras vezes queremos mudar apenas para fugir de um desconforto que talvez nos acompanhe em qualquer outro lugar."],
  ["p","A questão talvez não seja “ficar ou partir”, mas qual significado essa escolha tem para mim, neste momento da minha história."],
  ["p","Porque mudar de caminho pode ser um ato de coragem. Mas permanecer também pode ser. Tudo depende da maneira como essa decisão se insere na sua história e no sentido que ela tem para você."],

  ["h2","Insisto ou deixo ir?"],
  ["p","Somos ensinados que desistir é sinal de fraqueza. Mas será que sempre é?"],
  ["p","Existem sonhos que merecem persistência. E existem situações que apenas consomem nossa energia."],
  ["p","Às vezes continuamos por orgulho. Pela expectativa dos outros. Ou porque admitir o fim parece uma derrota."],
  ["p","Mas deixar ir também pode ser um gesto de maturidade."],
  ["p","Nem tudo precisa durar para ter valido a pena. Nem todo fim apaga o que foi vivido. Nem toda mudança significa fracasso."],
  ["p","Nem sempre deixar ir é desistir; às vezes, é reconhecer que insistir já não faz sentido para a sua história."],
  ["p","O que me faz permanecer é um desejo que ainda está vivo, um propósito, algo que realmente importa para mim? Ou é apenas medo, culpa, orgulho ou dificuldade de aceitar um fim?"],
  ["p","Algumas experiências cumprem seu papel em determinado momento da nossa história. E reconhecer isso não diminui o que vivemos. Apenas nos permite olhar para o presente e perguntar o que ainda faz sentido continuar carregando."],

  ["h2","Educar os pensamentos"],
  ["h3","Nem todo pensamento precisa dirigir a nossa vida"],
  ["p","Pensar faz parte de nós. Mas nem todo pensamento precisa ser seguido."],
  ["p","Pensamento não é ordem. Pensamento não é necessariamente verdade. Pensamento é algo que acontece em nós."],
  ["h3","“Educar” é diferente de “controlar”"],
  ["p","Tentar controlar a mente pode criar uma luta: “Eu não posso pensar nisso.”"],
  ["p","E, muitas vezes, quanto mais tentamos expulsar um pensamento, mais atenção damos a ele."],
  ["p","Experimente suavemente: perceber → investigar → avaliar → escolher → direcionar."],
  ["h3","E sobre “silenciar as vozes”?"],
  ["p","Vozes internas, como autocrítica, cobranças, medos e pensamentos repetitivos:"],
  ["p","Inicie uma suave observação e muito cuidadosa daquilo que acontece dentro de você."],
  ["ul",["1. Nomeie","2. Não se confunda com ele","3. Investigue","4. Pergunte pela função","5. Escolha","6. Direcione a atenção"]],
  ["p","Volte-se para algo concreto que esteja acontecendo agora."],
  ["q","A liberdade não está em nunca ouvir as vozes internas, mas em não entregar a todas elas o comando da nossa vida."],
  ["h3","Não procure “silenciar” a mente"],
  ["p","Não inicie tentando eliminar os pensamentos. Inicie prestando atenção neles."],
  ["p","Observe o que acontece dentro de você e para onde isso está te levando."],
  ["p","Educar os pensamentos é também uma forma de nos conhecermos."],
  ["p","Não preciso silenciar todos os pensamentos. Preciso aprender a reconhecê-los, perceber seus efeitos e escolher quais merecem minha atenção e direção."],
  ["p","Sua missão é aprender a escutar os pensamentos sem aceitá-los automaticamente."],

  ["h2","Valores, virtudes e desenvolvimento humano"],
  ["h3","Pensar sobre a maneira como escolhemos viver"],
  ["p","Algumas questões da vida não pedem apenas uma solução imediata. Pedem reflexão."],
  ["p","Na Ética a Nicômaco, Aristóteles inicia sua investigação afirmando:"],
  ["q","“Toda arte e toda investigação, e igualmente toda ação e escolha, parecem visar a algum bem.”"],
  ["p","Isso significa que nossas ações não acontecem simplesmente ao acaso. Escolhemos porque desejamos algo que, de alguma maneira, reconhecemos como um bem."],
  ["p","Em uma leitura contemporânea inspirada em Aristóteles, podemos compreender os valores como referências que expressam aquilo que uma pessoa reconhece como importante, desejável e digno de ser buscado ou cultivado."],
  ["p","São aquilo que pode:"],
  ["ul",["Orientar nossas escolhas","Dar direção às nossas ações","Expressar aquilo que consideramos importante","Participar da construção de uma vida que reconhecemos como boa","Servir de referência para nossas decisões e para a maneira como nos relacionamos com os outros"]],
  ["p","Entre os bens e aspectos valorizados na ética aristotélica encontramos temas como justiça, coragem, amizade, temperança e prudência."],
  ["p","Mas há uma questão fundamental: reconhecer um bem não significa necessariamente saber realizá-lo."],
  ["p","É justamente aí que as virtudes ganham importância."],
  ["p","Podemos pensar, de maneira didática, que os valores apontam para aquilo que consideramos importante, enquanto as virtudes dizem respeito à maneira habitual de agir bem diante das situações concretas."],
  ["p","Não basta reconhecer a justiça como algo importante. É preciso aprender a agir justamente."],
  ["p","Não basta considerar a coragem desejável. É preciso desenvolver a disposição para enfrentar adequadamente aquilo que exige coragem."],
  ["p","Não basta compreender a prudência como importante. É preciso aprender a deliberar e escolher bem diante das circunstâncias."],
  ["p","Por isso, na ética aristotélica, a virtude não é apenas uma ideia que possuímos. Ela se desenvolve pelo exercício e pela formação de hábitos de ação."],
  ["p","Um dos aspectos mais conhecidos da ética aristotélica é a ideia de que a virtude está relacionada ao justo meio. Mas esse “meio” não significa simplesmente ficar entre dois extremos ou encontrar uma média."],
  ["p","Para Aristóteles, trata-se de encontrar a medida adequada à situação, à pessoa e às circunstâncias, conforme a razão e aquilo que é próprio de uma ação virtuosa."],
  ["p","Por exemplo:"],
  ["tabela",[
    ["Deficiência","Virtude","Excesso"],
    ["Covardia","Coragem","Temeridade"],
    ["Insensibilidade","Temperança","Intemperança"],
    ["Avareza","Generosidade","Esbanjamento"]]],
  ["p","A coragem, por exemplo, não significa simplesmente “não ter medo”. O corajoso reconhece o temor, mas consegue agir de maneira adequada diante daquilo que deve ser enfrentado."],
  ["p","Da mesma forma, a temperança não significa ausência de prazer ou desejo, mas uma relação adequada com eles."],
  ["p","Posso dizer que valorizo a justiça e, ainda assim, agir de maneira injusta quando isso me favorece."],
  ["p","Posso dizer que valorizo a coragem e evitar continuamente aquilo que preciso enfrentar."],
  ["p","Posso dizer que valorizo o equilíbrio, mas viver constantemente orientado pelos excessos."],
  ["p","Aquilo que reconhecemos como um bem orienta nossas escolhas; as virtudes nos ajudam a transformar essas escolhas em uma maneira de viver."],
  ["q","Fortaleza para enfrentar. Paciência para suportar. Perseverança para continuar."]
]},

/* ================================ CONTATO ================================ */
{ id:"contato", menu:"Contato", titulo:"Vamos conversar?", imagem:"carla", retrato:true, blocos:[
  ["p","Se você sente que este pode ser um momento para olhar com mais atenção para aquilo que está vivendo, entre em contato comigo."],
  ["p","Podemos conversar sobre o acompanhamento que melhor se aproxima da sua necessidade."],
  ["h2","Atendimento"],
  ["p","Mulheres, homens e crianças · On-line e presencial · Brasil e Moçambique — África."],
  ["p","Para agendamentos de círculos e experiências voltados para mulheres, crianças, organizações, equipes e desenvolvimento humano, contatos pelo WhatsApp."],
  ["btn",[["WhatsApp "+CONTATO.telefone, wa("Olá, Carla! Gostaria de conversar.")],["Instagram @cirilo.carla",CONTATO.instagram],["LinkedIn",CONTATO.linkedin],["YouTube",CONTATO.youtube]]]
]}

];