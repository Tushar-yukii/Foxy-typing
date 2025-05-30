const words = 'in one good real one not school set they state number word about after need much open also change dolor sit amet consectetur adipisicing elit. Id vel vitae ipsum commodi earum in, voluptates consequatur ratione! Expedita corrupti ut dolor sit reiciendis tenetur eum provident nobis harum at'.split('');
const wordscount = words.length;

function randomword(){
    const randomindex = Math.ceil(Math.random() * wordscount);
    return words[randomindex];
}

function formatword(word){
   return  
   `<div class = "word">
     <span class="letter">
        ${word.split('').join('<span class="letter">')}
     </span>
     </span>
   </div>`;
}

function newgame() {
    document.getElementById('words').innerHTML = '';
    for(let i = 0; i < 200; i++){
       document.getElementById('words').innerHTML += formatword(randomword());

    }
    document.querySelector('.word')
}

document.getElementById('game').addEventListener('keyup',(ev)=>{
    const key = ev.key;
})


newgame();
