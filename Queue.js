//A Queue works on the FIFO(First in First Out) principle. 
// Hence, it performs two basic operations that is addition of elements at the end of the queue and removal of elements from the front of the queue




//making a class as s stack

class Queue {

    //definnig a constructor function which will be executing whenever object will be calling

    constructor() {
            this.queue = [];
        }
        //method for adding a elements at the ending of the Queue

    enqueue(value) {
            this.queue.push(value);
        }
        //method for removing a element from the front only

    dequeue() {
            if (this.isEmpty()) {
                return "Underflow";
            }
            return this.queue.shift();
        }
        //for seeing the first element of the queue
    front() {
            if (this.isEmpty()) {
                return " queue is empty";
            }
            return this.queue[0];
        }
        //for checking whether queue is empty or not

    isEmpty() {
            return this.queue.length == 0;
        }
        //method for seeing whole the queue


    ShowQueue() {
        let String = "";
        for (let item = 0; item < this.queue.length; item++) {
            String += this.queue[item] + " ";

        }
        return String;
    }
}

//making a object from Queue class

const queue = new Queue();
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.ShowQueue());
queue.dequeue();
console.log(queue.ShowQueue());