// Task-1
var task1=document.createElement('h1');
task1.textContent='Task 1';
document.body.appendChild(task1);
var unorder=document.createElement('ul');
var list1=document.createElement('li');
list1.innerText='HTML';
var list2=document.createElement('li');
list2.innerText="CSS";
var list3=document.createElement('li');
list3.innerText="JavaScript";
var list4=document.createElement('li');
list4.innerText="React Js";
unorder.append(list1,list2,list3,list4);
document.body.appendChild(unorder);

// Task-2
var task2=document.createElement('h1');
task2.innerText='Task 2';
document.body.appendChild(task2);
var container=document.createElement('div');
var paragraph=document.createElement('p');
paragraph.innerText='Dom stands for document object model it is used for manipulating html and css documents that is we can change,delete,modify the content inside the document using dom.';
container.appendChild(paragraph);
document.body.appendChild(container);

//Task-3
var task3=document.createElement('h1');
task3.innerText='Task 3';
document.body.appendChild(task3);
var container1=document.createElement('div');
var heading=document.createElement('h2');
heading.innerText='JavaScript';

var paragraph1=document.createElement('p');
paragraph1.innerText='JavaScript is a versatile, dynamically typed programming language used for interactive web applications, supporting both client-side and server-side development ...';
container1.append(heading,paragraph1);
document.body.appendChild(container1);

//Task-4
var task4=document.createElement('h1');
task4.innerText='Task 4';
document.body.appendChild(task4);

var table=document.createElement('table');
table.style.border = '2px solid black';
table.cellSpacing = '10'; 
var row=document.createElement('tr');
var column1=document.createElement('td');
column1.style.border='2px solid black';
column1.innerText='let';

var column2=document.createElement('td');
column2.style.border='2px solid black';
column2.innerText='var';

var column3=document.createElement('td');
column3.style.border='2px solid black';
column3.innerText='const';

row.append(column1,column2,column3);
table.appendChild(row);
document.body.appendChild(table);

//Task-5
var task5=document.createElement('h1');
task5.innerText='Task 5';
document.body.appendChild(task5);

var container2=document.createElement('div');

var button1=document.createElement('button');
button1.innerText='btn1';
button1.style.backgroundColor='orange';
button1.style.padding='10px';
button1.style.margin='10px';

var button2=document.createElement('button');
button2.innerText='btn2';
button2.style.backgroundColor='green';
button2.style.padding='10px';
button2.style.margin='10px';
button2.style.color='white';

var button3=document.createElement('button');
button3.innerText='btn3';
button3.style.backgroundColor='yellow';
button3.style.padding='10px';
button3.style.margin='10px';

var button4=document.createElement('button');
button4.innerText='btn4';
button4.style.backgroundColor='pink';
button4.style.padding='10px';
button4.style.margin='10px';

var button5=document.createElement('button');
button5.style.backgroundColor='blue';
button5.innerText='btn5';
button5.style.padding='10px';
button5.style.margin='10px';
button5.style.color='white';

container2.append(button1,button2,button3,button4,button5);
document.body.appendChild(container2);

