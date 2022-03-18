let btnEndereco = document.getElementById('btn-form-endereco');
let btnCep = document.getElementById('btn-form-cep');
let labelEnderecoCep = document.getElementById('label-endereco-cep');
let inputEnderecoCep = document.getElementById('input-endereco-cep');


const funcaoAlteraEndereco = function(){
  labelEnderecoCep.textContent = 'Endereço';
  inputEnderecoCep.placeholder = 'Endereço do imóvel';
  btnCep.classList.remove('btn-form-active');
  btnEndereco.classList.add('btn-form-active');
}


const funcaoAlteraCep = function(){
  labelEnderecoCep.textContent = 'Cep';
  inputEnderecoCep.placeholder = '00.000-000';
  btnEndereco.classList.remove('btn-form-active');
  btnCep.classList.add('btn-form-active');
}

btnEndereco.addEventListener('click', funcaoAlteraEndereco);
btnCep.addEventListener('click', funcaoAlteraCep);

