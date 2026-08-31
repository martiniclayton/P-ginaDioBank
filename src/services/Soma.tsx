export const Soma = (numA: number, numB: number): number =>{
    return(
        numA + numB
    );
}

export const Multiplica = (numA: number, numB: number): string | number =>{
        if(numB !==3){
            return "Multiplicador não aceito"
        } else{
            return numA * numB
        }
}