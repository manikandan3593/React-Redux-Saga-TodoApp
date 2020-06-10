export const fetchData = async () =>{
    try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/todos/");
        const data = await responce.json();
        return data;
    } catch(e){
        console.log(e);
    }
}