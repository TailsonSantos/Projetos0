function addTask(){

    function doneTask(btn_done){
        let taskContainer = btn_done.closest("#task");
        //percorre o elemento atual e seus ancestrais procurando por um elemento que corresponda ao seletor especificado
        if (taskContainer) {
        taskContainer.classList.toggle("done");
        }

    }

    function deleteTask(btn_del){
        let taskContainer = btn_del.closest("#task");
        if (taskContainer) {
        taskContainer.remove("#task")
        }
    }

    function editTask(btn_edit){

        var editContainer = btn_edit.closest("#task").querySelector(".edit-container");
            if (editContainer) {
                editContainer.classList.toggle('hide-edit')
            }
    
            const fontes = [
                'Arial',
                'Verdana',
                'Helvetica',
                'Times New Roman',
                'Courier New',
                'Georgia',
                'Palatino',
                'Garamond',
                'Comic Sans MS',
                'Impact',
                'Lucida Sans',
                'Trebuchet MS',
                'Tahoma',
                'Arial Narrow',
                'Century Gothic',
                'Book Antiqua',
                'Franklin Gothic Medium',
                'Copperplate Gothic',
                'Consolas',
                'Calibri',
                'Cambria',
                'Baskerville',
                'Brush Script MT',
                'Futura',
                'Geneva',
                'Myriad Pro',
                'Optima',
                'Rockwell',
                'Segoe UI'
              ];

          
          for(let cont = 0 ; cont < fontes.length ; cont ++){
                let option = document.createElement('option');
                option.classList.add(`opcoes${cont}`)
                let optiontext = document.createElement("span");
                optiontext.textContent = fontes[cont]
                option.style.fontFamily = fontes[cont];
                option.value = fontes[cont];
                option.appendChild(optiontext)
                
                let container = btn_edit.closest("#task").querySelector("#edit-font-family");
                if(container.children.length < fontes.length){
                    container.appendChild(option)
                }                                
          }
          
          
    }

    function updateTask(update_btn) {

        //OLD NEW TASK VALUE
        let oldtitlecontainer = update_btn.closest("#task").querySelector("#task-dinamic-title")
        
        
        /* ATUALIZANDO NOVO TITULO */  
        let newtaskcontainer = update_btn.closest("#task").querySelector("#newtask").value;

        //SELECIONANDO FONTES
        let selectfontcontainer = update_btn.closest("#task").querySelector("#edit-font-family");
        let fontFamily = selectfontcontainer.value;

        //SELECIONANDO COR
        let selectcolorcontainer = update_btn.closest("#task").querySelector("#title-color");
        let colorselect = selectcolorcontainer.value;

        
        if(newtaskcontainer){         
            oldtitlecontainer.textContent = newtaskcontainer;         
            oldtitlecontainer.style.fontFamily = `${fontFamily}`;
            oldtitlecontainer.style.color  = `${colorselect}`;
            
        }else{
            oldtitlecontainer.style.fontFamily = `${fontFamily}`;
            oldtitlecontainer.style.color  = `${colorselect}`;
        }
   
            
    }
    

    let taskTitle = document.querySelector('#task-title').value;

    if(taskTitle){

        //ADD TASK
        let templateOriginal = document.querySelector('.template')

        let templateClone = templateOriginal.cloneNode(true);

        templateClone.classList.remove('template')
        templateClone.classList.remove('hide')
        
        templateClone.classList.remove('done')

        templateClone.querySelector('#task-dinamic-title').textContent = taskTitle;

        let ol_container = document.querySelector("#task-container")

        ol_container.appendChild(templateClone)


        //DONE TASK
        


        templateClone.querySelector(".done-btn").addEventListener('click',function(){
            doneTask(this);
        })



        //DELETE TASK

        templateClone.querySelector(".delete-btn").addEventListener('click',function(){
            deleteTask(this);
        })


        //EDITE TASK
        templateClone.querySelector(".edit-btn").addEventListener('click',function(){
            editTask(this);
        })
        
        templateClone.querySelector("#edit-btn-confirm").addEventListener("click",function(e){ 
            e.preventDefault();      
            updateTask(this);

        
        })
        
       
        
    }else{
       
    }
    

}


let add = document.querySelector('#add');

add.addEventListener('click',function(e){
    e.preventDefault();
    addTask();
})