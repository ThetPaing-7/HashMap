class Node{
    constructor(data){
        this.data = data
        this.next = null
    } 
}



export default class LinkListed{
    constructor(){
        this.head = null
    }


    // add a node to the end of the list
    append(value){
        let node = new Node(value)
        if(this.head == null){
            this.head = node
        }else{
            let current = this.head
            while(current.next != null){
                current = current.next
            }
            current.next = node
        }

        return this
    }

    // add a node at the start of the list
    prepend(value){
        let node = new Node(value)
        node.next = this.head
        this.head = node
    }

    // return total number of node in a list
    size(){
        let current = this.head
        let counter = 0
        while(current != null){
            counter++
            current = current.next
        }
        return counter
    }


    // return first-node-value, if list empty, return undefined
    first(){
        let current = this.head
        return current != null ? current.data : undefined
    }

    // retrun final-node-value, if list empty, return undefinded
    tail(){
        let current = this.head
        
        if(current != null){
            let last_node = 0
            while(current.next != null){
                current = current.next
            }
            last_node = current
            return last_node.data
        }else{
            return undefined
        }
        
    }

    //  return the value of the node at the given index, no node at given index return undefined
    at(index){
        let current = this.head
        if(current != null){
            let i = 0
            while(i < index){
                current = current.next
                i++
            }

            return current.data
        }else{
            return undefined
        }
    }

    // remove the first node of lists, if empty lits return undefined
    pop(){
        let current = this.head

        if(current != null){
            this.head = this.head.next
            return current.data
        }else{
            return undefined
        }
    }

    // return true if value is in lists else false
    contain(value){
        let current = this.head
        while(current != null){
            if(current.data === value){
                return true
            }

            current = current.next
        }
        return false
    }


    // return index of node containing given value
    // return -1 if not found, if more than index are found return first index
    findIndex(value){
        let current = this.head
        let index = 0
        while(current != null){
            if(current.data === value){
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    toString(){
        let current = this.head 
        if(current == null){
            return ""
        }else{
            let values = []
            while(current != null){
                values.push(`(${current.data})`)
                current = current.next
            }

            return `${values.join("->")}->null`
        }     
    }


    // list.insertAt(1, 10, 11)
// console.log(list.toString());
//=> "( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null"
    insertAt(index,...values){

    }

    // remove node at given index, index is out of bound throw rangeError
    removeAt(){

    }

    
}

let lists = new LinkListed()
export {lists}
// lists.append(10)
// lists.append(13)
// lists.prepend(3)
// lists.prepend(7)



// let current = lists.head
// console.log(lists.head)

// while(current != null){
//     console.log(current.data)
//     current = current.next
// }


// // console.log(lists.contain(0))
// // console.log(lists.size())
// // console.log(lists.first())
// // console.log(lists.tail())
// console.log("=============")
// // console.log(lists.at(1))
// console.log(lists.findIndex(10))
// console.log(lists.findIndex(11))
// console.log("=============")
// console.log(lists.toString())
// let second_lists = new LinkListed()
// // console.log(second_lists.tail())
// // console.log(second_lists.at(1))
// // console.log(second_lists.contain(1))