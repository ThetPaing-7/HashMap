class HashMap{

    
    load_factor = 0.75
    capacity = 16

    constructor(){

    }


    hash(key){
        let hashCode = 0

        const primeNumber = 7;
        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
            hashCode = hashCode % this.capacity
        }

        return hashCode
    }
}

let map = new HashMap()
console.log(map.hash("Thet Paing Lin"))