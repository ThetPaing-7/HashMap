import LinkListed, { lists } from "./linkedList.js";

class HashMap {
  load_factor = 0.75;
  capacity = 16;
  buckets = new Array(this.capacity);

  constructor() {}

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode += primeNumber * hashCode + key.charCodeAt(i);
    }
    // this.buckets[3] = 1
    // console.log(this.buckets)
    // console.log(this.buckets[3])
    return hashCode % this.capacity;
  }

  set(key, value) {
    let hashCode = this.hash(key);

    if (this.buckets[hashCode] === undefined) {
      let newLists = new LinkListed();
      this.buckets[hashCode] = newLists.append({ [key]: value });
    } else {
      let current = this.buckets[hashCode].head;

      // Check if the key already exist
      let found_key = false;
      while (current != null && found_key == false) {
        let exist_key = Object.keys(current.data)[0];
        if (exist_key === key) {
          current.data[exist_key] = value;
          found_key = true;
        }
        current = current.next;
      }

      if (found_key === false) {
        this.buckets[hashCode].append({ [key]: value });
      }
    }
  }

  // take key, return value assign to that key
  get(key) {
    let hashCode = this.hash(key);

    let node = this.buckets[hashCode].head;

    while (node != null) {
      if (Object.keys(node.data)[0] == key) {
        return Object.values(node.data)[0];
      }
      node = node.next;
    }

    return null;
  }

  // take a argument as key, if found return true, else false
  has(key) {
    let hashCode = this.hash(key);

    let node = this.buckets[hashCode].head;

    while (node != null) {
      if (Object.keys(node.data)[0] == key) {
        return true;
      }

      node = node.next;
    }

    return false;
  }

  // take argument as key, if found remove entry with key, else return false
  remove(key) {
    let hashCode = this.hash(key);

    let node = this.buckets[hashCode].head;

    while (node != null) {
      if (Object.keys(node.data)[0] == key) {
        node = node.data;
      }
      node = node.next;
    }

    return null;
  }

  // returns the number of stored keys in hashmap
  length() {
    let total_key = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== undefined) {
        let current = this.buckets[i].head;
        while (current != null) {
          total_key++;
          current = current.next;
        }
      }
    }

    return total_key;
  }

  show() {
    for (let i = 0; i < this.buckets.length; i++) {
      console.log(this.buckets[i]);
    }
  }
}

const map = new HashMap();

// map.set("name","Linn")
// map.set("eman","David")
map.set("hello", "world");
map.set("sara", "ali");
map.set("aras", "love");
map.set("thet", "lin");
map.set("teht", "love");
// map.show()
console.log(map.length());
