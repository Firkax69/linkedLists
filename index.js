import LinkedList from "./linkedList.js";
import Node from "./node.js";

const linkedList = new LinkedList();

linkedList.prepend('test1');
linkedList.append('test2');    
linkedList.append('test3'); 

console.log(linkedList);
