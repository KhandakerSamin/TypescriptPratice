{
    //! Topic : Asynchhronous Typescript 

    //? Promise : 

    // simulate
    const createPromise = () : Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data : string = "Something "
            if(data) {
                resolve(data)
            }else{
                reject('failed to load data')
            }
        } )
    }


    // calling createPromise function 

    const showData = async() : Promise<string> => {
        const data : string = await createPromise()
        // console.log(data);
        return data;
    }

    showData()


    type Something = {
        something : string
    }

    // simulate
    const createPromise2 = () : Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data2 : Something = {something:'something'}
            if(data2) {
                resolve(data2)
            }else{
                reject('failed to load data')
            }
        } )
    }


    // calling createPromise function 

    const showData2 = async() : Promise<Something> => {
        const data2 : Something = await createPromise2()
        // console.log(data);
        return data2;
    }

    showData()


    type Todo = {
        id: number;
        userId: number;
        title : string;
        completed: boolean;
    }

    const getTodo = async() : Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data =await response.json();
        console.log(data);
        return data
    }
    
    getTodo();

    












    //
}