{
    //Write a TypeScript function to find the maximum number in an array of numbers.

    function findMax (numbers: number[]):number {
        let max = numbers[0] ;
        for(let i = 1  ; i < numbers.length ; i++ ) {
            if(numbers[i] > max ){
                max= numbers[i];
            }
        }
        console.log(max)
        return max ;
    }

    findMax([34,5,23,6,6,77,92]);

    //Implement a TypeScript function to reverse the string

    function reverseString (inputString : string):string {
        const reverse:string = inputString.split("").reverse().join('');
        console.log(reverse)
        return reverse;

    }

    reverseString("Samin");


    //Write a TypeScript function to remove duplicates from an array.

    const removeDuplicate = (inputArry : number[] ): number[] => {
        const newArray = inputArry.filter((value, index, self) => self.indexOf(value) === index);
        console.log(newArray)
        return newArray;
    }

    removeDuplicate([11,3,5,6,6,77,4,676]);

    





    //
}