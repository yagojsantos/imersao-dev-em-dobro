// VARIAVEL RETORNA UMA NODE LIST COM TODOS OS ELEMENTOS QUE POSSUEM A CLASSE PERSONAGEM
const personagens = document.querySelectorAll('.personagem');

// NÃO É POSSÍVEL UTILIZAR O ADDEVENTLISTNER DIRETAMENTA NA VARIAVEL PERSONAGENS, JÁ QUE ELA É UMA LISTA.
// PARA RESOLVER IDBObjectStore, IREMOS PERCORRER A LISTA ITEM A ITEM
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior: 'smooth'});
        }

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

        const personagemGrandeSelecionado = document.querySelector('.personagem-selecionado__img');
        const idPersonagem = personagem.attributes.id.value;
        
        personagemGrandeSelecionado.src=`./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
});
