import React from 'react';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function Dropdown(props) {
    return (
        <div className="form-group">
            <label htmlFor="partsOfSpeechDropdown">{props.placeholder}</label>
            <select
                className="form-control"
                id="partsOfSpeechDropdown"
                {...props}
            >
                <option value="" defaultValue>
                    Select part of speech
                </option>
                <option>noun</option>
                <option>pronoun</option>
                <option>verb</option>
                <option>adjective</option>
                <option>adverb</option>
                <option>preposition</option>
                <option>conjunction</option>
                <option>interjection</option>
            </select>
        </div>
    );
}

export function NewWordForm({
    handleInputChange,
    wordObject,
    handleFormSubmit,
}) {
    return (
        <form id="create-word-form">
            <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Word (required)"
            />
            <Input
                onChange={handleInputChange}
                name="definition"
                placeholder="Definition (required)"
            />
            <Input
                onChange={handleInputChange}
                name="origin"
                placeholder="Where did you find the word? (required)"
            />
            <Dropdown
                onChange={handleInputChange}
                name="partOfSpeech"
                placeholder="Part Of Speech (required)"
                required
            />
        </form>
    );
}

export function UpdateWordForm({
    handleInputChange,
    wordObject,
    handleFormUpdate,
    word,
}) {
    return (
        <form id="create-word-form">
            <Input
                onChange={handleInputChange}
                name="name"
                id="updateNameInput"
            />
            <Input
                onChange={handleInputChange}
                name="definition"
                id="updateDefinitionInput"
            />
            <Input
                onChange={handleInputChange}
                name="origin"
                id="updateOriginInput"
            />
            <Dropdown
                onChange={handleInputChange}
                name="partOfSpeech"
                required
                word={word}
            />
        </form>
    );
}
