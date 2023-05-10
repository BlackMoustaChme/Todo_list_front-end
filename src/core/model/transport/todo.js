export class Todo {

    id;
    title;
    creationDate;
    text;
    check;

    constructor(id, title, creationDate, text, check) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.text = text;
        this.check = check;
    }

    setId(id) {
        this.id = id;
    }

    setTitle(title) {
        this.title = title;
    }

    setCreationDate(creationDate) {
        this.creationDate = creationDate;
    }

    setText(text) {
        this.text = text;
    }

    setCheck(check) {
        this.check = check;
    }

    getId(){
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getCreationDate() {
        return this.creationDate;
    }

    getText() {
        return this.text;
    }

    getCheck() {
        return this.check;
    }
}