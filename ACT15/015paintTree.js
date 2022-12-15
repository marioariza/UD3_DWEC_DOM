"use strict";

let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};

let container = document.getElementById('container');

function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { // función recursiva aislada
    let li = '';
    let ul;
    for (let key in obj) {
      li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
      ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
}

createTree(container, data); // crea el árbol en el contenedor

function createTree2(container2, obj) {
    container.append(createTreeDom2(obj));
  }

  function createTreeDom2(obj) {

    let ul = document.createElement('ul');

    for (let key in obj) {
      let li = document.createElement('li');
      li.innerHTML = key;

      let childrenUl = createTreeDom2(obj[key]);
      if (childrenUl) {
        li.append(childrenUl);
      }

      ul.append(li);
    }

    return ul;
  }

  let container2 = document.getElementById('container2');
  createTree2(container2, data);