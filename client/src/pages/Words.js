import React from 'react';
import { NewWordForm, UpdateWordForm } from '../components/Form';
import Jumbotron from '../components/Jumbotron';
import { List, WordCard } from '../components/List';
import AddWordModal from '../components/Modals/AddWordModal';
import API from '../utils/API';
import { Row, Col, Space } from 'antd';
import UpdateWordModal from '../components/Modals/UpdateWordModal';

class Words extends React.Component {
    state = {
        words: [],
        wordObject: {},
        updating: false,
        currentWord: {},
        showAddWordModal: false,
        showUpdateWordModal: false,
    };

    componentDidMount() {
        API.getWords().then((res) => {
            this.setState({
                words: res.data,
            });
        });
    }

    // helper functions
    handleDelete = (id) => {
        console.log('DELETE: ', id);
        API.deleteWord(id)
            .then(() => {
                this.loadWords();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    handleUpdate = (id) => {
        const { showUpdateWordModal } = this.state;

        console.log('ID: ', id);

        API.getWord(id).then((res) => {
            console.log('RES: ', res);
            this.setState((state) => {
                return {
                    ...state,
                    updating: true,
                    currentWord: res.data,
                    showUpdateWordModal: !showUpdateWordModal,
                };
            });

            this.populateInputFields();
        });
    };

    populateInputFields = () => {
        setTimeout(() => {
            const {
                partOfSpeech,
                name,
                definition,
                origin,
            } = this.state.currentWord;

            let selectElement = document.getElementById(
                'partsOfSpeechDropdown',
            );
            let updateNameInput = document.getElementById('updateNameInput');
            let updateDefinitionInput = document.getElementById(
                'updateDefinitionInput',
            );
            let updateOriginInput = document.getElementById(
                'updateOriginInput',
            );

            selectElement.options[
                selectElement.selectedIndex
            ].text = partOfSpeech;

            updateNameInput.value = name;
            updateDefinitionInput.value = definition;
            updateOriginInput.value = origin;
        }, 100);
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState((prevState) => {
            let word = prevState.wordObject; // creating copy of state variable word

            word[name] = value; // update the name property, assign a new value
            return { wordObject: word }; // return new object word object
        });
    };

    handleAddWord = () => {
        const { wordObject } = this.state;
        const date = new Date();

        if (
            wordObject.name &&
            wordObject.definition &&
            wordObject.partOfSpeech &&
            wordObject.origin
        ) {
            API.saveWord({
                name: wordObject.name,
                definition: wordObject.definition,
                partOfSpeech: wordObject.partOfSpeech,
                origin: wordObject.origin,
                date,
            })
                .then((res) =>
                    API.getWords().then((res) =>
                        this.setState(
                            { words: res.data, wordObject: {} },
                            this.clearForm(),
                        ),
                    ),
                )
                .catch((err) => console.log(err));
        }
    };

    handleUpdateWord = () => {
        const { wordObject, currentWord, showUpdateWordModal } = this.state;

        let updatedWord = { ...currentWord, ...wordObject };

        if (
            updatedWord.name &&
            updatedWord.definition &&
            updatedWord.partOfSpeech &&
            updatedWord.origin
        ) {
            API.updateWord({
                id: currentWord.id,
                name: updatedWord.name,
                definition: updatedWord.definition,
                partOfSpeech: updatedWord.partOfSpeech,
                origin: updatedWord.origin,
            })
                .then((res) =>
                    API.getWords().then((res) =>
                        this.setState(
                            {
                                words: res.data,
                                wordObject: {},
                            },
                            this.hanldeCloseUpdateModal,
                        ),
                    ),
                )
                .catch((err) => console.log(err));
        }
    };

    loadWords = () => {
        API.getWords().then((res) => {
            this.setState({
                words: res.data,
            });
        });
    };

    clearForm = () => {
        if (this.state.updating) {
            this.setState((state) => {
                return { updating: false, currentWord: {} };
            });
        }
        document.getElementById('create-word-form').reset();
        this.setState({ wordObject: {} });
    };

    showAddWordModal = () => {
        const { showAddWordModal } = this.state;
        console.log('STATE: ', this.state);
        this.setState(() => {
            return { showAddWordModal: !showAddWordModal };
        }, this.handleAddWord());
    };

    hanldeCloseUpdateModal = () => {
        const { showUpdateWordModal } = this.state;

        this.setState(() => {
            return { showUpdateWordModal: !showUpdateWordModal };
        });
    };

    renderWordForm = () => {
        if (this.state.updating) {
            return (
                <UpdateWordForm
                    handleInputChange={this.handleInputChange}
                    handleUpdate={this.handleFormUpdate}
                    wordObject={this.state.wordObject}
                    word={this.state.currentWord}
                />
            );
        } else {
            return (
                <NewWordForm
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    wordObject={this.state.wordObject}
                />
            );
        }
    };

    render() {
        const {
            words,
            currentWord,
            updating,
            showAddWordModal,
            showUpdateWordModal,
        } = this.state;

        console.log('STATE: ', this.state);
        return (
            <>
                <Row justify="center">
                    <Col span={22}>
                        <Jumbotron
                            headerText="My Words"
                            handleAddWord={this.showAddWordModal}
                        />

                        <Row>
                            {words.length ? (
                                <List>
                                    {words.map((word) => (
                                        <WordCard
                                            key={word.id}
                                            word={word}
                                            handleDelete={this.handleDelete}
                                            handleUpdate={this.handleUpdate}
                                        />
                                    ))}
                                </List>
                            ) : (
                                <div className="mx-auto">
                                    <h3>You have not added any words</h3>
                                </div>
                            )}
                        </Row>
                    </Col>
                </Row>
                {updating ? (
                    <UpdateWordModal
                        handleCancel={this.hanldeCloseUpdateModal}
                        handleUpdate={this.handleUpdateWord}
                        visible={showUpdateWordModal}
                        children={this.renderWordForm()}
                        updating={updating}
                        word={currentWord}
                    />
                ) : (
                    <AddWordModal
                        showModal={this.showAddWordModal}
                        visible={showAddWordModal}
                        children={this.renderWordForm()}
                        updating={updating}
                    />
                )}
            </>
        );
    }
}

export default Words;
