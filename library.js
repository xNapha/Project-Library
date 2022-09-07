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
    shelfRemoveButton.textContent = "-";

    appendToShelfHeaderCon(shelfRemoveButton);
    removeShelf();
};

function shelfRenameButton(){
    const shelfRenameButton = document.createElement("button")
    shelfRenameButton.setAttribute("id", "rename" + shelfCounter);
    shelfRenameButton.setAttribute("class", "renameButton");
    shelfRenameButton.textContent = "Rename";

    appendToShelfHeaderCon(shelfRenameButton);
    renameShelf();
};

function seriesCon(){
    const seriesCon = document.createElement("div");
    seriesCon.setAttribute("id", "seriesCon" + shelfCounter);
    seriesCon.setAttribute("class", "seriesCon");
    const seriesButtonCon = document.createElement("div");
    seriesButtonCon.setAttribute("id", "seriesButtonCon"+shelfCounter)
    seriesButtonCon.setAttribute("class", "seriesButtonCon")
    seriesButtonCon.append(seriesCon)
    appendToShelf(seriesButtonCon);
    
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
    const num = shelfCounter
    shelfRemoveButton.addEventListener("click", ()=>{
        shelf.remove();
        delete myLibrary["shelf"+num];
    });
};

function renameShelf(){
    const shelfRenameButton = document.querySelector("#rename" + shelfCounter);
    const num = shelfCounter
    shelfRenameButton.addEventListener("click", ()=>{
        renameForm(num);
    });
};

function renameForm(x){
    const formExitArea = document.createElement("div");
    formExitArea.setAttribute("class", "exitArea");

    formExitArea.addEventListener("click", ()=>{
        formExitArea.remove();
        formCon.remove();
    });
    const formCon = document.createElement("div");
    formCon.setAttribute("class", "renameFormCon");

    const form = document.createElement("form");
    form.setAttribute("id", "renameForm");
    form.setAttribute("class", "renameForm");

    const formLabel = document.createElement("label")
    formLabel.setAttribute("for", "shelfName");
    formLabel.textContent = "New shelf name"

    const formInput = document.createElement("input");
    formInput.setAttribute("id", "formInput");
    formInput.setAttribute("type", "text");
    formInput.setAttribute("placeholder", "New shelf name...");
    formInput.setAttribute("name", "shelfName");
    formInput.setAttribute("maxlength", "20");
    formInput.setAttribute("required", "true");
    
    const formButton = document.createElement("button");
    formButton.setAttribute("type", "button");
    formButton.textContent = "Done";

    
    form.append(formLabel);
    form.append(formInput);
    form.append(formButton);
    
    const shelfNameForm = document.querySelector("#shelfNameForm");
    formCon.append(form)
    shelfNameForm.append(formExitArea);
    shelfNameForm.append(formCon);
    
    formButton.addEventListener("click", ()=>{
        if(formInput.value.length >= 1){
        const shelfHeaderLabel = document.querySelector("#shelfHeaderLabel" + x);
        shelfHeaderLabel.textContent = formInput.value;
        formExitArea.remove();
        formCon.remove();
        }
    });
};

function shelfAddBookButton(){
    const addBook = document.createElement("button");
    addBook.setAttribute("id", "addButton" + shelfCounter)
    addBook.setAttribute("class", "addButton");
    addBook.textContent = "+";
    const seriesButtonCon = document.querySelector("#seriesButtonCon"+shelfCounter)
    seriesButtonCon.append(addBook)
    const shelfNum = shelfCounter;
    addBook.addEventListener("click", ()=>{
        bookForm(shelfNum)
    }); 
};

function bookForm(shelfNum){
    const formExitArea =document.createElement("div");
    formExitArea.setAttribute("class", "exitArea");
    
    formExitArea.addEventListener("click", ()=>{
        formExitArea.remove();
        formCon.remove();
    });

    const formCon = document.createElement("div");
    formCon.setAttribute("id", "addBookFormCon");
    

    const form = document.createElement("form");
    form.setAttribute("id", "addBookForm");

    const formH1 = document.createElement("h1");
    formH1.setAttribute("id", "formH1")
    formH1.textContent = "Add a new Book";

    form.append(formH1);

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.setAttribute("id", "titleLabel");
    titleLabel.textContent = "Title";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "titleInput");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Title...");
    titleInput.setAttribute("required", "true");
    titleInput.setAttribute("minLength", "1");

    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("id", "titleDiv");
    titleDiv.append(titleLabel)
    titleDiv.append(titleInput)
    
    form.append(titleDiv)


    const authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author");
    authorLabel.setAttribute("id", "authorLabel");
    authorLabel.textContent = "Author";
    form.append(authorLabel)

    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "authorInput");
    authorInput.setAttribute("name", "author");
    authorInput.setAttribute("placeholder", "Author...");
    authorInput.setAttribute("required", "true");
    authorInput.setAttribute("minLength", "1");
    form.append(authorInput)

    const authorDiv = document.createElement("div");
    authorDiv.setAttribute("id", "authorDiv");
    authorDiv.append(authorLabel)
    authorDiv.append(authorInput)
    
    form.append(authorDiv)

    const planToReadInput = document.createElement("input");
    planToReadInput.setAttribute("type", "radio");
    planToReadInput.setAttribute("id", "planToReadInput");
    planToReadInput.setAttribute("name", "readStatus");
    planToReadInput.setAttribute("value", "planToRead");
    form.append(planToReadInput)

    const planToReadLabel = document.createElement("label");
    planToReadLabel.setAttribute("for", "readStatus");
    planToReadLabel.textContent = "Plan to read";
    form.append(planToReadLabel)

    const planToReadDiv = document.createElement("div");
    planToReadDiv.setAttribute("class", "radioDiv");
    planToReadDiv.append(planToReadInput)
    planToReadDiv.append(planToReadLabel)
    
    form.append(planToReadDiv)

    const droppedInput = document.createElement("input");
    droppedInput.setAttribute("type", "radio");
    droppedInput.setAttribute("id", "droppedInput");
    droppedInput.setAttribute("name", "readStatus");
    droppedInput.setAttribute("value", "dropped");
    form.append(droppedInput)

    const droppedLabel = document.createElement("label");
    droppedLabel.setAttribute("for", "readStatus");
    droppedLabel.textContent = "Dropped";
    form.append(droppedLabel)

    const droppedDiv = document.createElement("div");
    droppedDiv.setAttribute("class", "radioDiv");
    droppedDiv .append(droppedInput)
    droppedDiv .append(droppedLabel)
    
    form.append(droppedDiv)

    const onHoldInput = document.createElement("input");
    onHoldInput.setAttribute("type", "radio");
    onHoldInput.setAttribute("id", "onHoldInput");
    onHoldInput.setAttribute("name", "readStatus");
    onHoldInput.setAttribute("value", "onHold");
    form.append(onHoldInput)
    
    const onHoldLabel = document.createElement("label");
    onHoldLabel.setAttribute("for", "readStatus");
    onHoldLabel.textContent = "On hold";
    form.append(onHoldLabel)

    const onHoldDiv = document.createElement("div");
    onHoldDiv.setAttribute("class", "radioDiv");
    onHoldDiv .append(onHoldInput)
    onHoldDiv .append(onHoldLabel)
    
    form.append(onHoldDiv)

    const readingInput = document.createElement("input");
    readingInput.setAttribute("type", "radio");
    readingInput.setAttribute("id", "readingInput");
    readingInput.setAttribute("name", "readStatus");
    readingInput.setAttribute("value", "reading");
    form.append(readingInput)

    const readingLabel = document.createElement("label");
    readingLabel.setAttribute("for", "readStatus");
    readingLabel.textContent = "Reading";
    form.append(readingLabel)

    const readingDiv = document.createElement("div");
    readingDiv.setAttribute("class", "radioDiv");
    readingDiv .append(readingInput)
    readingDiv .append(readingLabel)
    
    form.append(readingDiv)

    const completedInput = document.createElement("input");
    completedInput.setAttribute("type", "radio");
    completedInput.setAttribute("id", "completedInput");
    completedInput.setAttribute("name", "readStatus");
    completedInput.setAttribute("value", "completed");
    completedInput.setAttribute("checked", "true");
    form.append(completedInput)

    const completedLabel = document.createElement("label");
    completedLabel.setAttribute("for", "readStatus");
    completedLabel.textContent = "Completed";
    form.append(completedLabel)

    const completedDiv = document.createElement("div");
    completedDiv.setAttribute("class", "radioDiv");
    completedDiv .append(completedInput)
    completedDiv .append(completedLabel)
    
    form.append(completedDiv)

    const formButton = document.createElement("button");
    formButton.setAttribute("type", "button");
    formButton.setAttribute("id", "addBook")
    formButton.textContent = "Add book"
    form.append(formButton)
    
    
    formButton.addEventListener("click", ()=>{
        if(titleInput.value.length >= 1 ||authorInput.value.length >= 1){
            const readStatus = document.querySelector("input[name='readStatus']:checked")
            book(shelfNum, titleInput.value, authorInput.value, readStatus.value);
            visualizeBooks(shelfNum);
            formCon.remove();
            formExitArea.remove();
        };
    });

    const popUpForm = document.querySelector("#popUpForm");
    formCon.append(form)
    popUpForm.append(formExitArea)
    popUpForm.append(formCon)
};

function visualizeBooks(shelfNum){
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("class", "books");

    const bookTitle = document.createElement("h1");
    bookTitle.setAttribute("class", "bookTitles");            
    bookDiv.append(bookTitle);
        
    const bookReadStatus = document.createElement("p");
    bookReadStatus.setAttribute("class", "bookReadStatus");
    bookDiv.append(bookReadStatus);
    
    const bookAuthor = document.createElement("p");
    bookAuthor.setAttribute("class", "bookAuthors");
    bookDiv.append(bookAuthor);

    if(Object.keys(myLibrary["shelf" + shelfNum]).length > 0){
        let counter = 1;
        while(myLibrary["shelf" + shelfNum]["book"+counter]){
            bookTitle.textContent = myLibrary["shelf" + shelfNum]["book"+counter].title;
            bookReadStatus.textContent = myLibrary["shelf" + shelfNum]["book"+counter].readStatus;
            bookAuthor.textContent = myLibrary["shelf" + shelfNum]["book"+counter].author;
            counter ++;
        };
    };

    const seriesCon = document.querySelector("#seriesCon" + shelfNum)
    seriesCon.append(bookDiv);
        
};