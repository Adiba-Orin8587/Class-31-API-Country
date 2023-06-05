const loadKanye = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayKanye(data))
      
}

const displayKanye = (kanye) => {
    document.getElementById('quote').innerText = kanye.quote
    
}
