const form = document.getElementById('registroform');
const tabelaBody = document.querySelector('#tabela-pets tbody');
let id = 1; 


form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    const nomePet = document.getElementById('nome-pet').value;
    const raca = document.getElementById('raca').value;
    const donoPet = document.getElementById('dono-pet').value;
    const telefone = document.getElementById('telefone').value;

    const linha = document.createElement('tr');

    linha.innerHTML = `
        <td>${id++}</td>
        <td>${nomePet}</td>
        <td>${raca}</td>
        <td>${donoPet}</td>
        <td>${telefone}</td>
        <td class="delete-btn">🗑️</td>
    `;

    
    tabelaBody.appendChild(linha);

    
    linha.querySelector('.delete-btn').addEventListener('click', function () {
        linha.remove();
    });


    form.reset();
});
