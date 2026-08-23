import LinkListed from "./linkedList.js"

class HashMap{

    
    load_factor = 0.75
    capacity = 16
    buckets = new Array(this.capacity)

    constructor(){

    }


    hash(key){
        let hashCode = 0

        const primeNumber = 7;
        for(let i = 0; i < key.length; i++){
            hashCode += primeNumber * hashCode + key.charCodeAt(i)
        }
        // this.buckets[3] = 1
        // console.log(this.buckets)
        // console.log(this.buckets[3])
        return hashCode % this.capacity
    }

    set(key,value){
        let hashCode = this.hash(key)

        console.log(hashCode)
        if(this.buckets[hashCode] ===  undefined){
            this.newLists = new LinkListed()
           this.buckets[hashCode] = this.newLists.append({[key]: value})
        }else{
            let current = this.buckets[hashCode]

               // Check if the key already exist
            let found_key = false
            while(current != null && found_key == false){
                let exist_key = Object.keys(current.data)[0]
                if(exist_key === key){
                    current.data[exist_key] = value
                    found_key = true
                }
                current = current.next
            }    
            
            if (found_key === false){
                this.newLists.append({[key]:value})
            }


        }

    }


    show(){
        console.log(this.buckets)
        for(let i = 0; i < this.buckets.length; i++){
            console.log(this.buckets[i])
        }
    }



   

}

let map = new HashMap
map.set("name","Thet")
map.set("name","Lin")
map.set("eman","Haydar")
map.set("name","Paing")
map.set("fruit","orange")
map.show()