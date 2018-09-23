const task = ['Tutaj będą wyświetlane zadania'];
const ready = [];

function tasks(){
let html='';
    for(i=0;i<task.length;i++){  
        html+='<section class="task">';
        i++
        html+='<header class="b" id="lp">'+i+'</header>';
        i--
        html+='<article class="b" >'+task[i]+'</article>'
        html+='	<footer class="b"><i class="demo-icon icon-check" onclick="fready('+i+')"></i><i class="demo-icon icon-cancel-circled-outline" onclick="fdel('+i+')"></i> </footer>';
        html+='</section>';
    }
    document.getElementById('task').innerHTML=html;
}
tasks()

function readytasks(){
    let html='';
    for(i=0;i<ready.length;i++){
    html+='<section class="ready">';
    i++
    html+='<header class="b" id="lp">'+i+'</header>';
    i--
    html+='<article class="b" >'+ready[i]+'</article>'  
    html+='	<footer class="b"><i class="demo-icon icon-undo" onclick="fundo('+i+')"></i></footer>';
    html+='</section>';
}
document.getElementById('gotowe').innerHTML=html;
}
readytasks()

const dodaj = document.getElementById('dodaj');
dodaj.addEventListener('click',function(){
    const txt=document.getElementById('zad').value;
    console.log('Dodano: '+txt);
    task.push (txt);
    tasks()
})
   
            function fready(i){
                const name=task[i];
                ready.push(name);
                task.splice(i,1);
                console.log(name);
                readytasks()
                tasks()
            }

            function fdel(i){
                console.log('usunięto '+i);
                task.splice(i,1);
                tasks()
            }

            function fundo(i){
                const name=ready[i];
                console.log('cofnięto'+name);
                task.push(name);
                ready.splice(i,1);
                readytasks()
                tasks()
            }

