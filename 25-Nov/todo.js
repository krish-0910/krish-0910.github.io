var todo= [];

        function check_item(task){
            todo.push(task+"✔️");

        }
        function taskview(){
            for(var i=0;i<todo.length;i=i++){
                console.log(todo[i]);
            }
        }
        function edit_task(){
            console.log(todo);
            //for edit we can overwrite using index
            todo[0]=task;
        }
        function pop_task(){
            todo.pop();
        }
        function splice_task(){
            todo.splice(1,1,"addnew");
        }

        