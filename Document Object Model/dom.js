//WINDOW OBJECT

//The window object represents an open window in a browser. it is browser's object (not javascripts's) & is automatically created by browser.

//it is a global object with lots  of properties & methods
console.dir(window.document);
console.dir(document.body.childNodes[3]);
console.log(window.document);
console.log("hello1");
window.console.log("hello2");
window.alert("attention!");



//DOM====== DOCUMENT OBJECT MODEL  (a tree like structure)
// when the web page is loaded, the browser creates a document object model of the page.
///window->document->html=>>head->meta, meta, title , link,=>> body->div=>>img, h1, p , div,=>> script
//to check the property of a object in javascript use (console.dir(window..document))

//console.log----> print (items in that object)
//console.dir->document------>prints the properties and methods.
//use for dynamic changes 

