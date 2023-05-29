// const title = document.querySelector('.list');

// console.dir(list.children);
// console.log([...list.children]);

// console.dir(title.textContent);
// title.textContent= "Hello JS"
// console.dir(title.dataset.id);
// Classlist
// title.classList.add('title-color')
// title.classList.remove('title-color');
// title.classList.toggle('title-color');
// title.classList.toggle('title-color');
// title.style.fontSize= "50px";
// title.style.color = "green";

// title.hidden =false;
// title.hidden = true;
// title.hidden =false;
// console.dir(title.getAttribute('data-id'))
// title.removeAttribute('hidden');
// title.setAttribute('hidden', 'false');
// const list = document.createElement('list');
// const li = document.createElement('li');
// li.textContent = list.children.length +1;
// li.classList.add("title-color");
// li.dataset.id  ='12234';


// const div = document.createElement('div');
// const h2 = document.createElement('h2');
// h2.textContent='hello';
// li.append(div);
// div.append(h2);
// list.append(li);
// list.append(li)
// console.log(li);

// const li = `<li class="title-color" data-id="123">${list.children.length = 1}
// <div>
// <h2>
// hello
// </h2>
// </div>
// </li>`


// list.insertAdjacentHTML('beforend', li)


const listStatic = document.querySelectorAll('li');
const listDynamics = document.getElementsByTagName('li');
const list = document.querySelector('.js-list');
const li = document.createElement('li');
li.textContent = list.children.length +1;
list.append(li);
console.log('listStatic' , listStatic);
console.log('listDynamic' , listDynamics);