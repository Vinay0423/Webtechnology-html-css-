
function afterSubmitting(){
    const h1= document.getElementById('message')
    h1.innerText='Button clicked'
    h1.style.backgroundColor='green'
    document.body.appendChild(h1)
    
    // setTimeout(()=> {
    //     window.location.reload()
    // },3000)
    
  }
  
  function afterReset(){
    //   const h1=  document.createElement('h1');
    const h1= document.getElementById('message')
    h1.innerText='Button clicked'
    h1.style.backgroundColor='red'
    document.body.appendChild(h1) 
    // setTimeout(()=> {
    //     window.location.reload()
    // },3000)
  }