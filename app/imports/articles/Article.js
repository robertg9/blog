export const TYPE_REACT = 'react';

export default class {

    #type;
    #title;
    #createdAt;
    #component;

    constructor(component, type, title, createdAt) {
        this.#type = type;
        this.#title = title;
        this.#createdAt = createdAt;
        this.#component = component;
    }

    getComponent() {return this.#component};
    getType() {return this.#type};
    getTitle() {return this.#title};
    getCreatedAt() {return this.#createdAt};

}