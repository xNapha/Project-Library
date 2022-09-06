const content = document.querySelector("#content");
const addNewShelf = document.querySelector("#addNewShelf");
let shelfCounter = 0;
let myLibrary = {};

function book(shelfNum, title, author, readStatus){
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    let counter = 1;
    while(myLibrary["shelf" + shelfNum]["book"+counter]){
        counter ++;
    }
    myLibrary["shelf" + shelfNum]["book"+counter] = this;
    
};


addNewShelf.addEventListener("click", ()=>{
    shelfCounter++;
    myLibrary["shelf" + shelfCounter] = [];
    shelfDiv();
    shelfHeader();
    seriesCon();
    shelfAddBookButton();
});

function shelfDiv(){
    const createShelf = document.createElement("div");
    createShelf.setAttribute("id", "shelf" + shelfCounter);
    createShelf.setAttribute("class", "shelves");
    content.appendChild(createShelf);
};

function shelfHeader(){
    const shelfHeaderCon = document.createElement("div");
    shelfHeaderCon.setAttribute("id", "shelfHeaderCon" + shelfCounter);
    shelfHeaderCon.setAttribute("class", "shelfHeaderCon");

    appendToShelf(shelfHeaderCon);

    const shelfHeaderLabel = document.createElement("div");
    shelfHeaderLabel.setAttribute("id", "shelfHeaderLabel" + shelfCounter);
    shelfHeaderLabel.setAttribute("class", "shelfHeaderLabel");
    shelfHeaderLabel.textContent="Shelf " + shelfCounter;

    appendToShelfHeaderCon(shelfHeaderLabel);
    shelfRemoveButton();
    shelfRenameButton();
};

function shelfRemoveButton(){
    const shelfRemoveButton = document.createElement("button")
    shelfRemoveButton.setAttribute("id", "remove" + shelfCounter);
    shelfRemoveButton.setAttribute("class", "removeButton");
    shelfRemoveButton.textContent = "Remove Shelf";

    appendToShelfHeaderCon(shelfRemoveButton);
    removeShelf();
};

function shelfRenameButton(){
    const shelfRenameButton = document.createElement("button")
    shelfRenameButton.setAttribute("id", "rename" + shelfCounter);
    shelfRenameButton.setAttribute("class", "renameButton");
    shelfRenameButton.textContent = "Rename Shelf";

    appendToShelfHeaderCon(shelfRenameButton);
    renameShelf();
};

function seriesCon(){
    const seriesCon = document.createElement("div");
    seriesCon.setAttribute("id", "seriesCon" + shelfCounter);
    seriesCon.setAttribute("class", "seriesCon");

    appendToShelf(seriesCon);
    
};

function appendToShelf(x){
    const shelf = document.querySelector("#shelf" + shelfCounter);
    shelf.append(x);
};

function appendToShelfHeaderCon(x){
    const shelfHeaderCon = document.querySelector("#shelfHeaderCon" + shelfCounter);
    shelfHeaderCon.append(x);
};

function removeShelf(){
    const shelf = document.querySelector("#shelf" + shelfCounter);
    const shelfRemoveButton = document.querySelector("#remove" + shelfCounter);
    shelfRemoveButton.addEventListener("click", ()=>{
        shelf.remove();
        delete myLibrary["shelf"+shelfCounter];
    })
}

function renameShelf(){
    const shelfRenameButton = document.querySelector("#rename" + shelfCounter);
    shelfRenameButton.addEventListener("click", ()=>{
        renameForm();
    });
};

function renameForm(){
    const formCon = document.createElement("form");
    formCon.setAttribute("id", "renameForm" + shelfCounter);
    formCon.setAttribute("class", "renameForm");

    const formLabel = document.createElement("label")
    formLabel.setAttribute("for", "shelfName" + shelfCounter);
    formLabel.textContent = "New shelf name:"

    const formInput = document.createElement("input");
    formInput.setAttribute("id", "formInput"+ shelfCounter);
    formInput.setAttribute("type", "text");
    formInput.setAttribute("placeholder", "New shelf name...");
    formInput.setAttribute("name", "shelfName" + shelfCounter);
    formInput.setAttribute("maxlength", "20");
    formInput.setAttribute("required", "true");
    
    const formButton = document.createElement("button");
    formButton.setAttribute("type", "button");
    formButton.textContent = "Done";

    
    formCon.append(formLabel);
    formCon.append(formInput);
    formCon.append(formButton);
    
    const shelfNameForm = document.querySelector("#shelfNameForm");
    shelfNameForm.append(formCon);

    formButton.addEventListener("click", ()=>{
        if(formInput.value.length >= 1){
        const shelfHeaderLabel = document.querySelector("#shelfHeaderLabel" + shelfCounter);
        shelfHeaderLabel.textContent = formInput.value;
        const formConId = document.querySelector("#renameForm"+shelfCounter);
        formConId.remove();
        }
    });
};

function shelfAddBookButton(){
    const addBook = document.createElement("button");
    addBook.setAttribute("id", "addButton" + shelfCounter)
    addBook.setAttribute("class", "addButton");
    addBook.textContent = "Add Book";

    appendToShelf(addBook);
    const shelfNum = shelfCounter

    addBook.addEventListener("click", ()=>{
        bookForm(shelfNum)
    }); 
};

function bookForm(shelfNum){
    const formCon = document.createElement("form");
    formCon.setAttribute("class", "formCon");

    const formH1 = document.createElement("h1");
    formH1.textContent = "Add a new Book";

    formCon.append(formH1)

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title";
    formCon.append(titleLabel)

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("class", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Title...");
    titleInput.setAttribute("required", "true");
    titleInput.setAttribute("minLength", "1");

    formCon.append(titleInput)

    const authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author");
    authorLabel.textContent = "Author";
    formCon.append(authorLabel)

    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("class", "author");
    authorInput.setAttribute("name", "author");
    authorInput.setAttribute("placeholder", "Author...");
    authorInput.setAttribute("required", "true");
    authorInput.setAttribute("minLength", "1");
    formCon.append(authorInput)

    const planToReadInput = document.createElement("input");
    planToReadInput.setAttribute("type", "radio");
    planToReadInput.setAttribute("name", "readStatus");
    planToReadInput.setAttribute("value", "planToRead");
    formCon.append(planToReadInput)

    const planToReadLabel = document.createElement("label");
    planToReadLabel.setAttribute("for", "readStatus");
    planToReadLabel.textContent = "Plan to read";
    formCon.append(planToReadLabel)



    const droppedInput = document.createElement("input");
    droppedInput.setAttribute("type", "radio");
    droppedInput.setAttribute("name", "readStatus");
    droppedInput.setAttribute("value", "dropped");
    formCon.append(droppedInput)

    const droppedLabel = document.createElement("label");
    droppedLabel.setAttribute("for", "readStatus");
    droppedLabel.textContent = "Dropped";
    formCon.append(droppedLabel)



    const onHoldInput = document.createElement("input");
    onHoldInput.setAttribute("type", "radio");
    onHoldInput.setAttribute("name", "readStatus");
    onHoldInput.setAttribute("value", "onHold");
    formCon.append(onHoldInput)
    
    const onHoldLabel = document.createElement("label");
    onHoldLabel.setAttribute("for", "readStatus");
    onHoldLabel.textContent = "On hold";
    formCon.append(onHoldLabel)


    const readingInput = document.createElement("input");
    readingInput.setAttribute("type", "radio");
    readingInput.setAttribute("name", "readStatus");
    readingInput.setAttribute("value", "reading");
    formCon.append(readingInput)

    const readingLabel = document.createElement("label");
    readingLabel.setAttribute("for", "readStatus");
    readingLabel.textContent = "Reading";
    formCon.append(readingLabel)



    const completedInput = document.createElement("input");
    completedInput.setAttribute("type", "radio");
    completedInput.setAttribute("name", "readStatus");
    completedInput.setAttribute("value", "completed");
    completedInput.setAttribute("checked", "true");
    formCon.append(completedInput)

    const completedLabel = document.createElement("label");
    completedLabel.setAttribute("for", "readStatus");
    completedLabel.textContent = "Completed";
    formCon.append(completedLabel)

    const formButton = document.createElement("button");
    formButton.setAttribute("type", "button");
    formButton.setAttribute("id", "addBook")
    formButton.textContent = "Add book"
    formCon.append(formButton)
    
    
    formButton.addEventListener("click", ()=>{
        if(titleInput.value.length >= 1 ||authorInput.value.length >= 1){
            const readStatus = document.querySelector("input[name='readStatus']:checked")
            book(shelfNum, titleInput.value, authorInput.value, readStatus.value);
            visualizeBooks(shelfNum);
            formCon.remove();
        };
    });

    const popUpForm = document.querySelector("#popUpForm");
    popUpForm.append(formCon)
};

function visualizeBooks(shelfNum){
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("class", "books");

    const bookTitle = document.createElement("h1");
    bookTitle.setAttribute("class", "bookTitles");            
    bookDiv.append(bookTitle);
        
    const bookAuthor = document.createElement("p");
    bookAuthor.setAttribute("class", "bookAuthors");
    bookDiv.append(bookAuthor);

    if(Object.keys(myLibrary["shelf" + shelfNum]).length > 0){
        let counter = 1;
        while(myLibrary["shelf" + shelfNum]["book"+counter]){
            bookTitle.textContent = myLibrary["shelf" + shelfNum]["book"+counter].title;
            bookAuthor.textContent = myLibrary["shelf" + shelfNum]["book"+counter].author;
            counter ++;
        };
    };

    const seriesCon = document.querySelector("#seriesCon" + shelfNum)
    seriesCon.append(bookDiv);
        
};