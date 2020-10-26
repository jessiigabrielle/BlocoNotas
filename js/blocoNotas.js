function trocarTela(event) {
    event.preventDefault();

    document.getElementsByClassName('list')[0].classList.toggle('d-none');
    document.getElementsByClassName('register')[0].classList.toggle('d-none');
    document.getElementsByClassName('nonecard')[0].classList.toggle('d-none');
}

function salvar(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo');
    const texto = document.getElementById('texto');
    let valido = true;

    resetarErros(titulo, texto);

    if (titulo.value.length === 0 || titulo.value.length > 20) {
        titulo.classList.add('error');
        valido = false;
    }

    if (texto.value.length === 0) {
        texto.classList.add('error');
        valido = false;
    }

    if (valido === false) {
        document.getElementsByClassName('alert-danger')[0].classList.remove('d-none');
    }
    if (valido === true) {
        document.getElementsByClassName('alert-success')[0].classList.remove('d-none');
        //resetarErros(titulo, texto);
        //resetarCampos();
    }
    else {
        resetarErros(titulo, texto);
    }
}

function resetarCampos() {
    titulo.value='';
    texto.value='';
} 

function resetarErros(titulo, texto) {
    titulo.classList.remove('error');
    texto.classList.remove('error');
    document.getElementsByClassName('alert-danger')[0].classList.add('d-none');
}

function adicionarCard() {
    document.getElementsByClassName('row-empty')[0].classList.add('d-none');
    document.getElementsByClassName('row-cards')[0].classList.remove('d-none');

    document.getElementsByClassName('row-cards')[0].innerHTML += criarCard();

}
/*
function criarCard() {
    return ' <div class="col-md-2 offset-md-2" > 
        < div class="card" style = "width: 18rem;" >
        <div>
        </div>
        <img class="card-img-top"
            src="https://images.vexels.com/media/users/3/146569/isolated/preview/5485f70eb5247f95b95f3515d1483d96-adesivo-de-seta-violeta-post-it-by-vexels.png"
            alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                    the
                card's content.</p>
        </div>
    </div>
</div > ';
} */

function atribuirEventos() {


}