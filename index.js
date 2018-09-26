const task = [];
const ready = [];

function tasks(){
let html='';
    for(i=0;i<task.length;i++){  
        html+='<section class="task">';
        const y=i
        i++
        html+='<header class="b" id="lp"><i class="demo-icon icon-up-big" onclick="up('+y+')"></i><i class="demo-icon icon-down-big" onclick="down('+y+')"></i></header>';
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
    html+='<header class="b" id="lp"></header>';
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
            function up(y){
                if(y>=1 ){
                    const i=y
                y--
                console.log('pozycje '+i+' przenieś na '+y)
                const a=task[i], b=task[y]
                task[i]=b
                task[y]=a
                tasks()
                }else{
                console.log('nie można przenieść wyżej')
                }
            }
            function down(y){
                if(y<task.length-1){
                const i=y
                y++
                console.log('pozycje '+i+' przenies na '+y)
                const a=task[i], b=task[y]
                task[i]=b
                task[y]=a
                tasks()
                }else{
                    console.log('nie można przenieść niżej')
                }
            }
   
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

