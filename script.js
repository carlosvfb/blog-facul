document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementsByClassName("navbar");

  if (!navbar) {
    console.error("Elemento 'navbar' não encontrado.");
    return;
  }

  navbar[0].classList.add("transparent");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar[0].classList.remove("transparent");
      navbar[0].classList.add("scrolled");
    } else {
      navbar[0].classList.remove("scrolled");
      navbar[0].classList.add("transparent");
    }
  });
});

const cards = document.querySelectorAll('.card');
const popup = document.getElementById('popup-modal');
const closePopupButton = document.getElementById('close-popup');
const popupBody = document.getElementById('popup-body');

const content = {
  ods4: `
    <h2>ODS 4 - Educação de Qualidade</h2>
    
    <h3>O bullying como uma violação dos direitos humanos</h3>

    <p>Para cada 1% a mais de jovens nas escolas brasileiras, a taxa de homicídios cai 2% nos municípios. Este dado, levantado em estudo de 2016 do Instituto de Pesquisa Econômica Aplicada (Ipea), mostra que a educação é um passo fundamental para a redução dos assassinatos no país.</p>

    <p>Você já tinha pensado nesta conexão? E que outras importantes mudanças sociais podem ser impulsionadas pela educação?</p>

    <p>Uma associação comum está entre os anos de estudo e a renda de uma pessoa. Quanto mais tempo estudando, melhor será a remuneração como profissional. E essa ideia é real: segundo uma análise de 2018 realizada pelo Insper, um trabalhador com ensino superior completo recebe cerca de 5,7 vezes o rendimento de uma pessoa com até um ano de estudo aqui no Brasil.</p>

    <p>Além de ser um elemento chave para que as pessoas consigam quebrar o ciclo da pobreza, a educação de qualidade também é um instrumento de emancipação e de empoderamento. Ela nos sensibiliza e nos conscientiza, nos tornando pessoas mais conectadas conosco, com os outros e com o mundo.</p>

    <pTanto que a Base Nacional Comum Curricular (BNCC) – documento que regulamenta a prática da educação nas escolas brasileiras – é orientada por uma concepção de educação integral, pensando no desenvolvimento das crianças e dos jovens em todas as suas dimensões: intelectual, emocional, física, social e cultural.</p>

    <p>Nestes poucos parágrafos, foi possível falar das relações da educação com a redução da violência, com a chance de melhores condições de emprego e com a criação de uma consciência transformadora. Com isso, quisemos mostrar o quanto a educação de qualidade é essencial para o progresso rumo a diversos Objetivos de Desenvolvimento Sustentável. Justamente por isso ela também faz parte desta lista, configurando o ODS 4.</p>

    <h3>Sobre o ODS 4 e a busca pela educação de qualidade para todas as pessoas</h3>
    
    <p>Um ODS nunca está sozinho. Cada um dos 17 objetivos propostos na Agenda 2030 vem acompanhado de diversas metas. Criados em 2015, os Objetivos de Desenvolvimento Sustentável da ONU são um pacto global em busca da erradicação da pobreza e de uma vida digna para todas as pessoas.</p>
    
    <p>Você pode entender melhor o que são estes objetivos em nosso texto ODS: o que esta sigla significa e como ela impacta o mundo hoje.</p>
    
    <p>O ODS 4 fala sobre a necessidade de “assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todas e todos”.</p>
    
    <h3>Entre suas metas, a serem cumpridas até 2030, estão:</h3>
    
    <p>Garantia de um ensino primário e secundário de qualidade para todas as meninas e meninos;<br>
    Acesso a um desenvolvimento de qualidade na primeira infância, que envolve cuidados e educação pré-escolar;<br>
    Igualdade no acesso à educação técnica, profissional e superior de qualidade, para todos os homens e as mulheres;<br>
    Aumento do número de jovens e adultos com habilidades e competências para trabalho decente e empreendedorismo;<br>
    Eliminação das disparidades de gênero na educação e também igualdade neste acesso para as pessoas mais vulneráveis;<br>
    Garantia de que todos os jovens e o maior número possível de adultos esteja alfabetizado e tenha conhecimento básico de matemática;<br>
    Educação para o desenvolvimento sustentável e estilos de vida sustentáveis, direitos humanos, igualdade de gênero, promoção de uma cultura de paz e não-violência, cidadania global, e valorização da diversidade cultural;<br>
    Construção e melhora de instalações físicas para educação, proporcionando espaços de aprendizagem seguros, inclusivos e não violentos;<br>
    Ampliação do número de bolsas de estudo para países em desenvolvimento;<br>
    Aumento do número de professores qualificados, principalmente nos países em desenvolvimento.</p>
    
    <h3>Como está o acesso à educação no mundo</h3>
    <p>É inegável: há uma evolução mundial no acesso à educação. E esta evolução acontece também no Brasil. Dados de monitoramento das metas do Plano Nacional de Educação (PNE) divulgados pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (Inep) mostram que em 2014, quando o PNE começou a vigorar, 89,1% das crianças entre 4 e 5 anos estavam matriculadas, o que deixava 604 mil delas fora da pré-escola. Já em 2016, esse número caiu para 450 mil, e a porcentagem de crianças matriculadas foi para 91,5%.</p>

    <p>Apesar de avanços como este, quando nos voltamos para outros dados é possível compreender o quanto ainda precisa ser feito para que a educação de fato contemple todas as pessoas. Afinal, existem grupos que continuam sendo deixados para trás.</p>

    <p>Entre estes grupos, destacamos as mulheres e meninas. Segundo dados da ONU sobre o ODS 4, cerca de um terço dos países que se encontram em regiões em desenvolvimento não atingiram a paridade de gênero na educação primária. A Unesco levanta que 9 milhões de meninas em idade escolar nunca irão frequentar a escola, em comparação com 3 milhões de meninos. Destas meninas, 4 milhões vivem na África subsaariana.</p>

    <p>Ou seja, quando falamos de acesso à educação, percebemos que também tem sido deixada para trás a parcela mais pobre da população. Ainda segundo a Unesco, cerca de 19% das crianças entre seis e 11 anos que vivem em países de baixa renda não frequentam a escola. Nos países de alta renda, essa porcentagem cai para 2%.</p>

    <p>E entre as populações mais vulneráveis, metade das crianças em situação de refúgio não frequenta a escola no mundo: de 7,1 milhões, cerca de 3,7 milhões estão fora da sala de aula.</p>

    <h3>ODS 4 na perspectiva dos direitos humanos</h3>
    <p>Se a educação é um instrumento que emancipa, empodera e melhora a qualidade de vida das pessoas, podemos compreendê-la como peça-chave para que diversos direitos humanos sejam contemplados. Certo?</p>
    
    <p>Mais do que isso. A educação é, em si, um direito humano.</p>
    
    <p>Está no Art. 26 da Declaração Universal dos Direitos Humanos (DUDH): “todo ser humano tem direito à instrução”. Gratuita, nos graus elementares e fundamentais. Acessível a todos e todas, no nível técnico-profissional e superior.</p>
  `,
  ods5: `
    <h2>ODS 5 - Igualdade de Gênero</h2>

    <h6>Artigo I</h6>
    <br>
    <h3>O que é o ODS 5 – Igualdade de Gênero?</h3>
  
    <p>O Objetivo de Desenvolvimento Sustentável 5 (ODS 5) da ONU, também conhecido como Agenda 2030 para a Igualdade de Gênero, busca alcançar a igualdade de direitos e oportunidades entre homens e mulheres. Pois bem, essa meta, contém princípios de vital importância e abrangente (ODS 5), visa eliminar todas as formas de discriminação contra as mulheres, garantir sua participação plena e efetiva em todos os níveis da sociedade, e promover o empoderamento econômico das mulheres.</p> 

    <p>Quando falamos das questões de sustentabilidade, os 17 Objetivos de Desenvolvimento Sustentável, da Agenda 2030 da ONU, levam em consideração três pilares: respeito às questões sociais, ao meio ambiente e ao desenvolvimento econômico. E, para que haja o respeito pleno às questões sociais, é importante prever a igualdade de gênero, objetivo no ODS 5.</p>

    <h3>Igualdade de gênero importância, desafio e metasIgualdade de gênero</h3>

    <p>Por isso, mesmo com críticas de alguns países, a ONU definiu temas importantes que levam em conta discussões de inclusão. Este é o tema do ODS 5 (Igualdade de gênero), que visa influenciar os países a definir políticas públicas que desenvolvam assim a igualdade de gênero.</p>  

    <br>
    <hr>
    <hr>
    <hr>

    <br>
    <h6>Artigo II</h6>
    <br>
    <h3>Resumo do artigo</h3> 

    <p>A igualdade de gênero é um tema que vem ganhando cada vez mais destaque em todos os aspectos da sociedade, inclusive no ambiente de trabalho. Infelizmente, ainda existem muitos desafios a serem enfrentados para que as mulheres possam desfrutar dos mesmos direitos que os homens nesse ambiente. Neste texto, vamos falar sobre os direitos das mulheres no ambiente de trabalho e os desafios que elas enfrentam para alcançar a igualdade de gênero.</p>

    <h3>Direitos das mulheres no ambiente de trabalho</h3> 

    <p>As mulheres têm os mesmos direitos que os homens no ambiente de trabalho, de acordo com a legislação brasileira. Isso significa que elas têm direito a salário igual ao dos homens para a mesma função, a benefícios como vale-transporte e vale-refeição, a férias remuneradas e a licenças como a maternidade.</p>

    <p>Além disso, a lei proíbe qualquer tipo de discriminação contra as mulheres no ambiente de trabalho, seja por causa do gênero, da raça, da orientação sexual ou de qualquer outra característica. Isso inclui o assédio moral e o assédio sexual.</p>

    <h3>Desafios das mulheres no ambiente de trabalho</h3>

    <p>Apesar dos direitos garantidos por lei, as mulheres ainda enfrentam muitos desafios no ambiente de trabalho. Um dos maiores desafios é a falta de representatividade feminina em cargos de liderança e em áreas que historicamente são dominadas por homens, como a tecnologia e a engenharia.</p>

    <p>As mulheres também enfrentam dificuldades para conciliar a vida profissional e a vida pessoal, principalmente quando se trata da maternidade. A licença-maternidade é um direito garantido por lei, mas muitas empresas ainda não oferecem uma estrutura adequada para que as mães possam cuidar de seus filhos e continuar trabalhando.</p>

    <p>Outro desafio é o assédio moral e o assédio sexual no ambiente de trabalho. Infelizmente, muitas mulheres ainda são vítimas desse tipo de violência, o que pode prejudicar sua carreira e sua saúde mental.</p>

    <h3>A Igualdade de Gênero e a Equiparação Salarial</h3>

    <p>A equiparação salarial é um direito garantido por lei que estabelece que homens e mulheres devem receber salários iguais para a mesma função ou trabalho de igual valor. A diferença salarial entre homens e mulheres é considerada discriminação e pode ser denunciada às autoridades competentes.</p> 

    <p>A equiparação salarial é uma medida importante para promover a igualdade de gênero no ambiente de trabalho e garantir que as mulheres recebam salários justos e condizentes com suas habilidades e desempenho.</p>

    <h3>Como promover a igualdade de gênero no ambiente de trabalho</h3>

    <p>Para promover a igualdade de gênero no ambiente de trabalho, é necessário que as empresas adotem medidas para combater a discriminação e promover a diversidade. Isso inclui a contratação de mais mulheres, a promoção de mulheres para cargos de liderança, a criação de políticas de conciliação entre a vida pessoal e profissional e a implementação de medidas para prevenir e combater o assédio moral e o assédio sexual.</p>

    <p>Além disso, é importante que as próprias mulheres se unam e lutem pelos seus direitos, denunciando qualquer tipo de discriminação ou violência. A união das mulheres pode ser uma grande aliada na luta pela igualdade de gênero no ambiente de trabalho.</p>

    <h3>O que Fazer se Seus Direitos Forem Feridos</h3>

    <p>Se o direito das mulheres for ferido no ambiente de trabalho, existem algumas medidas que podem ser tomadas para buscar a reparação do dano. Uma das primeiras medidas é conversar com a empresa ou o empregador responsável, buscando solucionar o problema de forma amigável.</p>

    <p>Caso não haja uma solução satisfatória, a mulher pode buscar a orientação de um advogado trabalhista, que poderá avaliar o caso e orientar sobre as medidas cabíveis, tais como denunciar o empregador aos órgãos responsáveis ou ingressar com uma ação judicial para garantir seus direitos.</p>

    <p>É importante ressaltar que a discriminação de gênero no ambiente de trabalho é ilegal e deve ser combatida, e as mulheres têm o direito de buscar a reparação de danos caso seus direitos sejam violados.</p>

    <h3>Resumindo</h3> 

    <p>A igualdade de gênero no ambiente de trabalho é um tema importante e que deve ser discutido por todos. Apesar dos direitos garantidos por lei, ainda existem muitos desafios a serem enfrentados pelas mulheres para alcançar a igualdade. É responsabilidade de todos nós trabalhar juntos para promover a diversidade, combater a discriminação e garantir que as mulheres tenham as mesmas oportunidades.</p>
  `
};


function openPopup(ods) {

  popup.style.display = 'flex';
  setTimeout(() => {
    popup.classList.add('show');
    popupBody.innerHTML = content[ods];
  }, 10);
}


closePopupButton.addEventListener('click', () => {
  popup.classList.remove('show');
  setTimeout(() => {
    popup.style.display = 'none';
  }, 300); 
});


cards.forEach(card => {
  card.querySelector('button').addEventListener('click', () => {
    const ods = card.getAttribute('data-ods');
    openPopup(ods);
  });
});


popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('show');
    setTimeout(() => {
      popup.style.display = 'none';
    }, 300);
  }
});
