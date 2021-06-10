export const TYPE_REACT = 'react';

export default class {

    constructor(className, type, title, createdAt) {
        this.type = type;
        this.title = title;
        this.createdAt = createdAt;
        this.className = className;
    }

    get className() {return this.type};
    set className(className) {this.type = className};

    get type() {return this.type};
    set type(type) {this.type = type};

    get title() {return this.title};
    set title(title) {this.title = title};

    get createdAt() {return this.createdAt};
    set createdAt(date) {this.createdAt = date};

}