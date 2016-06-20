

function runcode(playerChoice){
  var choices = ['rock', 'scissors','paper' ]
  var randI = Math.floor(Math.random() * choices.length)
  var compChoice = choices[randI]
  console.log(playerChoice +' '+ compChoice)
  

 
   if (playerChoice==compChoice)
   {
  
   alert ( 'it\'s a draw')
   }
      
  if(compChoice == 'rock'){
    if(playerChoice=="paper"){
      alert ( 'I win')
    }
    
    if(playerChoice=="scissors"){
      alert('comp wins')
    }
    
   
  }
  
if(compChoice == 'scissors')
{
    if(playerChoice=="rock"){
      alert('I win')
    }
    
    if(playerChoice=="paper"){
      alert('comp wins')
    }
}
    
    
    if(compChoice == 'paper')
    {
    if(playerChoice=="scissors")
    {
      alert('I win')
    }
    
    if(playerChoice=="rock"){
      alert('comp wins')
    }
    }
}

