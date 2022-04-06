const usuarios = []
let totusuarios = 0    
function cadastrar() 
{
         
      let nome = document.getElementById('nome').value
      let Entrada = document.getElementById('Data de entrada').value
      let cpf = document.getElementById('CPF').value
      let telefone = document.getElementById('Telefone').value  
      let res = document.getElementById('res')  
      let corpo = document.getElementById('corpo')
      res.innerHTML = ''
      let u = {nomes:nome, entradas:Entrada, cpfs:cpf, telefones:telefone}
      usuarios[totusuarios] = u      
      let td = document.getElementById('td')
      //let td2 = document.createElement('td')
      //let td3 = document.createElement('td')
      //let td4 = document.createElement('td')
      //let br = document.createElement('br')
      //td1.textContent = nome     
      //td2.textContent = telefone 
      //td3.textContent = Entrada
     // td4.textContent = cpf
      //corpo.appendChild(td1)     
     // corpo.appendChild(td2)     
      //corpo.appendChild(td3)      
      //corpo.appendChild(td4)
      let botao = document.createElement('button')           
      corpo.appendChild(botao)
      botao.addEventListener('onclick', deletar)
      td.innerText = botao
      corpo.appendChild(td1)
      var row = corpo.insertRow(-1)               
      var cel1 = row.insertCell(-1)
      var cel2 = row.insertCell()
      var cel3 = row.insertCell()
      var cel4 = row.insertCell()      
      cel1.innerHTML = nome      
      cel2.innerHTML = telefone
      cel3.innerHTML = Entrada
      cel4.innerHTML = cpf
      td.innerText = botao
       
  
       
      
      totusuarios ++

}


function deletar()
{
      alert('oi')
       usuarios.splice(usuarios[row] , 1)
       var deletar = document.getElementById('deletar').deleteRow(row)



}

function CriarBotao()
{
  

}