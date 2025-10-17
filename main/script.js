const signos = [
    { nome: "Áries", dataInicio: "21-03", dataFim: "20-04", imagem: "aries.jpg", descricao: "Aventureiro, enérgico, pioneiro e corajoso. Arianos são rápidos, dinâmicos e geralmente os primeiros a começar e terminar as coisas." },
    { nome: "Touro", dataInicio: "21-04", dataFim: "20-05", imagem: "touro.jpg", descricao: "Paciente, confiável, de coração quente e determinado. Taurinos são persistentes e determinados, buscando sempre a segurança e o conforto." },
    { nome: "Gêmeos", dataInicio: "21-05", dataFim: "20-06", imagem: "gemeos.jpg", descricao: "Adaptável, versátil, comunicativo e inteligente. Geminianos são curiosos e gostam de variedade, o que os torna excelentes em socializar." },
    { nome: "Câncer", dataInicio: "21-06", dataFim: "22-07", imagem: "cancer.jpg", descricao: "Emocional, amoroso, intuitivo e protetor. Cancerianos são muito ligados à família e ao lar, sendo profundamente sentimentais e carinhosos." },
    { nome: "Leão", dataInicio: "23-07", dataFim: "22-08", imagem: "leao.jpg", descricao: "Generoso, de coração aberto, criativo e fiel. Leoninos são líderes natos, cheios de carisma e com um forte desejo de serem o centro das atenções." },
    { nome: "Virgem", dataInicio: "23-08", dataFim: "22-09", imagem: "virgem.jpg", descricao: "Modesto, meticuloso, confiável e prático. Virginianos são perfeccionistas e analíticos, com uma grande atenção aos detalhes." },
    { nome: "Libra", dataInicio: "23-09", dataFim: "22-10", imagem: "libra.jpg", descricao: "Diplomático, urbano, romântico e sociável. Librianos buscam harmonia e equilíbrio em todas as áreas da vida, sendo justos e charmosos." },
    { nome: "Escorpião", dataInicio: "23-10", dataFim: "21-11", imagem: "escorpiao.jpg", descricao: "Determinado, emocional, intuitivo e poderoso. Escorpianos são intensos e apaixonados, com uma força interior notável." },
    { nome: "Sagitário", dataInicio: "22-11", dataFim: "21-12", imagem: "sagitario.jpg", descricao: "Otimista, amante da liberdade, bem-humorado e honesto. Sagitarianos são aventureiros e filosóficos, sempre em busca de conhecimento." },
    { nome: "Capricórnio", dataInicio: "22-12", dataFim: "20-01", imagem: "capricornio.jpg", descricao: "Prático, prudente, ambicioso e disciplinado. Capricornianos são trabalhadores e responsáveis, com grande foco em seus objetivos." },
    { nome: "Aquário", dataInicio: "21-01", dataFim: "18-02", imagem: "aquario.jpg", descricao: "Original, independente, humanitário e intelectual. Aquarianos são visionários e inovadores, sempre pensando no futuro e no coletivo." },
    { nome: "Peixes", dataInicio: "19-02", dataFim: "20-03", imagem: "peixes.jpg", descricao: "Imaginativo, sensível, compassivo e intuitivo. Piscianos são sonhadores e empáticos, com uma profunda conexão com o mundo emocional e espiritual." }
];

document.getElementById('signoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const dataNascimentoInput = document.getElementById('dataNascimento');
    const resultadoDiv = document.getElementById('resultado');
    const dataNascimento = new Date(dataNascimentoInput.value);
    dataNascimento.setDate(dataNascimento.getDate() + 1);

    const dia = dataNascimento.getDate();
    const mes = dataNascimento.getMonth() + 1;

    let signoEncontrado = null;

    for (const signo of signos) {
        const [diaInicio, mesInicio] = signo.dataInicio.split('-').map(Number);
        const [diaFim, mesFim] = signo.dataFim.split('-').map(Number);

        if ((mes === mesInicio && dia >= diaInicio) || (mes === mesFim && dia <= diaFim)) {
            signoEncontrado = signo;
            break; 
        }
        
        if ((mesInicio > mesFim) && (mes === mesInicio && dia >= diaInicio || mes === mesFim && dia <= diaFim)) {
            signoEncontrado = signo;
            break;
        }
    }

    resultadoDiv.innerHTML = '';
    resultadoDiv.classList.remove('show');

    if (signoEncontrado) {

        resultadoDiv.innerHTML = `
            <img src="img/${signoEncontrado.imagem}" alt="Imagem do signo ${signoEncontrado.nome}" class="signo-imagem">
            <div class="signo-info">
                <h2>${signoEncontrado.nome}</h2>
                <p><strong>Período:</strong> ${signoEncontrado.dataInicio.replace('-', '/')} a ${signoEncontrado.dataFim.replace('-', '/')}</p>
                <p>${signoEncontrado.descricao}</p>
            </div>
        `;
    } else {
        resultadoDiv.innerHTML = `<p>Não foi possível determinar o seu signo. Verifique a data inserida.</p>`;
    }

    resultadoDiv.classList.add('show');
});