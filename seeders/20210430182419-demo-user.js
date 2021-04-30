'use strict';

const words = [
    {
        name: 'cadence',
        definition: 'a modulation or inflection of the voice.',
        partOfSpeech: 'noun',
        origin: 'Slack message at work',
        date: new Date(Date.now()),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'furlough',
        definition:
            'leave of absence, especially that granted to a member of the armed services.',
        partOfSpeech: 'noun',
        origin: 'A news article',
        date: new Date(Date.now()),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'halcyon',
        definition:
            'denoting a period of time in the past that was idyllically happy and peaceful.',
        partOfSpeech: 'adjective',
        origin: 'Slack message at work',
        date: new Date(Date.now()),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'antithesis',
        definition:
            'a person or thing that is the direct opposite of someone or something else.',
        partOfSpeech: 'noun',
        origin: 'Read it online',
        date: new Date(Date.now()),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'synecdoche',
        definition:
            "a figure of speech in which a part is made to represent the whole or vice versa, as in Cleveland won by six runs (meaning “Cleveland's baseball team”).",
        partOfSpeech: 'noun',
        origin: 'Conversation with a friend',
        date: new Date(Date.now()),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'metonymy',
        definition:
            'the substitution of the name of an attribute or adjunct for that of the thing meant, for example suit or business executive, or the track for horse racing.',
        partOfSpeech: 'noun',
        origin: 'Reading online',
        date: new Date(Date.now()),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'double entendre',
        definition:
            'a word or phrase open to two interpretations, one of which is usually risqué or indecent.',
        partOfSpeech: 'noun',
        origin: 'Conversation with a friend ',
        date: new Date(Date.now()),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'zilch',
        definition: 'nothing',
        partOfSpeech: 'pronoun',
        origin: 'Conversation with a friend ',
        date: new Date(Date.now()),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'precocious',
        definition:
            '(of a child) having developed certain abilities or proclivities at an earlier age than usual.',
        partOfSpeech: 'adjective',
        origin: 'Read it in a book',
        date: new Date(Date.now()),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'ardent',
        definition: 'enthusiastic or passionate.',
        partOfSpeech: 'adjective',
        origin: 'Read it online',
        date: new Date(Date.now()),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'conviviality',
        definition: 'the quality of being friendly and lively; friendliness.',
        partOfSpeech: 'noun',
        origin: 'Read online',
        date: new Date(Date.now()),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'torpid',
        definition: 'mentally or physically inactive; lethargic.',
        partOfSpeech: 'adjective',
        origin: 'Read it online',
        date: new Date(Date.now()),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'myopic',
        definition: 'nearsighted',
        partOfSpeech: 'adjective',
        origin: 'The Gene By Siddhartha Mukherjee',
        date: new Date(Date.now()),
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        //  Add seed commands here.

        await queryInterface.bulkInsert('Words', words, {});
    },

    down: async (queryInterface, Sequelize) => {
        //  Add commands to revert seed here.

        await queryInterface.bulkDelete('Words', null, {});
    },
};
