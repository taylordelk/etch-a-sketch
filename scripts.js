//make container
const container= document.createElement('div');
container.classList.add('container');

//make button
let button=document.createElement('button');
button.textContent='Reset Grid';
//add button functionality
button.addEventListener('click',function(e){

    let rownow;
    for(z=0;z<container.childElementCount;){

    //grab each row        
        rownow=container.firstChild
    
    //delete each row      
        container.removeChild(rownow);
    }
    //prompt for new grid dimensions
        let griddim=prompt('How many boxes per side, chief?','10');
    //check for boxes<=1000
        if(griddim>=100){
            alert('Sides cannot be more than 100 boxes long');
        } else{
            //if not, create the new rows and boxes
                //create rows
                for(let n=0;n<griddim;n++){

                    let row=document.createElement('div');
                    row.classList.add('row');
                    //create boxes
                    for(kk=0;kk<griddim;kk++){
                        let box=document.createElement('div');
                        box.classList.add('box');
                        row.appendChild(box);
                    }
                    container.appendChild(row);
                }
            }
        
            let boxes = document.querySelectorAll('.box');
            boxes.forEach(box => box.addEventListener('mouseover',function(e){
                if(e.target.style.backgroundColor=='black'){
                    e.target.style.backgroundColor='orange';
                } else{
                    e.target.style.backgroundColor='black';
                }
                }));
        
        }
    
)
//add button to webpage
document.body.appendChild(button);

//create rows
for(let j=0;j<4;j++){
    
    let row=document.createElement('div');
    row.classList.add('row');
    //create boxes
    for(i=0;i<4;i++){
        let box=document.createElement('div');
        box.classList.add('box');
        row.appendChild(box);
    }
    container.appendChild(row);
}
//add full container to webpage
document.body.appendChild(container);

//add mouseover functionality to boxes
let boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseover',function(e){
    if(e.target.style.backgroundColor=='black'){
        e.target.style.backgroundColor='orange';
    } else{
        e.target.style.backgroundColor='black';
    }
    }));

