import './ComoJogar.css'

const ComoJogar = () => {
  return (
    <div className='container-como-jogar'>
      <div>
        <h1 className='title-como-jogar'>lembre-se de se divertir...</h1>
        <p className='sub-title-como-jogar'>Aqui estão as instruções detalhadas de como jogar</p>
      </div>
      
      <div className='game-como-jogar'>
        <h3 className='h3-title-como-jogar'><span className='span-como-jogar'>[</span>Como Jogar Love Cards Clássico<span className='span-como-jogar'>]</span></h3>
        <p>
          As cartas pretas contêm desafios e as vermelhas trazem perguntas e ações.
          Antes de começar o jogo as cartas são embaralhadas automaticamente.
        </p>
        <p>
          No seu turno, retire uma carta do topo do baralho e escolha uma das duas alternativas
          para realizar. 
        </p>
        <p>
          Cada escolha da pontos. Quanto mais ousada a ação, mais pontos você recebe.
          Após completar sua escolha, passe a vez ao mozão.
        </p>
        <p>
          O jogo termina quando as cartas terminarem ou o casal decidi parar...
          O jogador com mais pontos pode escolher uma das cartas prêmio ao finalizar. 
        </p>
        <p>
          O baralho gratuito possui 7 cartas gratuitas e a versâo completa possui 40 cartas.
        </p>
      </div>

      <div className='game-como-jogar'>
        <h3 className='h3-title-como-jogar'><span className='span-como-jogar'>[</span>Como Jogar Love Cards Question<span className='span-como-jogar'>]</span></h3>
        <p>
          Uma dinamica mais leve e descontraida, onde o casal tem uma coleção de 90 cartas com perguntas e respostas.
        </p>
        <p>
          Antes de começar o jogo as cartas são embaralhadas automaticamente.
          E o casal alterna entre responder e fazer perguntas.
        </p>
        <p>
          O jogo termina quando as cartas terminarem ou o casal decidi parar...
          ao finalizar o casal deve escolher uma das cartas prêmios. 
        </p>
      </div>

      <div className='game-como-jogar'>
        <h3 className='h3-title-como-jogar'><span className='span-como-jogar'>[</span>Como entrar com a sua conta?<span className='span-como-jogar'>]</span></h3>
        <ol className='ol-como-jogar'>
          <li>
            Clique no menu no menu lateral esquerdo e veja o botâo entrar.
          </li>
          <li>
            Vá ao campo de Faça login com CPF usado na compra e digite o CPF.
          </li>
          <li>
            Você receberá um e-mail com o código de acesso.
          </li>
          <li>
            Digite o código de acesso e clique em Validar o código.
          </li>
          <li>
            Pronto! Você está logado.
          </li>
        </ol>
      </div>

      <div className='game-como-jogar'>
        <h3 className='h3-title-como-jogar'><span className='span-como-jogar'>[</span>Como comprar o jogo?<span className='span-como-jogar'>]</span></h3>
        <ol className='ol-como-jogar'>
          <li>
            Você pode acessar nosso site oficial <a className='a-como-jogar' href='https://lovechocolate.com.br/'>https://lovechocolate.com.br</a>.
            Ou clicar no botão Mais Jogos no canto inferior direito da tela.
          </li>
          <li>
            Escolha o jogo e clique em Comprar.
          </li>
          <li>
            Preencha os dados e clique em Finalizar compra.
          </li>
          <li>
            Você receberá um e-mail verificando sua compra.
          </li>
          <li>
            Clique no botao entrar no menu lateral esquerdo e digite o CPF usado na compra.
          </li>
          <li>
            Você receberá um e-mail com o código de acesso.
          </li>
          <li>
            Pronto! Você está logado.
          </li>
        </ol>
      </div> 
      
      <div className='game-como-jogar'>
        <h3 className='h3-title-como-jogar'><span className='span-como-jogar'>[</span>Selecionar jogo que comprei?<span className='span-como-jogar'>]</span></h3>
        <ol className='ol-como-jogar'>
          <li>
            Clique na botão mais jogos no canto inferior direito da tela.
            E selecione seu jogo.
          </li>
        <li>
            Clique e em Jogar e pronto!
          </li>
        </ol>
      </div>

      <div className='game-como-jogar'>
        <h3 className='h3-title-como-jogar'><span className='span-como-jogar'>[</span>Contato de suporte<span className='span-como-jogar'>]</span></h3>
        <ol className='ol-como-jogar'>
          <li>
            Caso tenha alguma dúvida ou problema, entre em contato conosco.
          </li>
          <li>
            E-mail: <a className='a-como-jogar' href='mailto:sac@lovechocolate.com.br'>sac@lovechocolate.com.br</a>
          </li>
          <li>
            Telefone: (47) 8880-7515
          </li>
          <li>
            Estamos aqui para ajudar você!
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ComoJogar;
