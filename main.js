const form = document.getElementById('form-contato');
let linhas ='';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumerotTelefone = document.getElementById('numero-telefone');


    let linha ='<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumerotTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;


    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
})


