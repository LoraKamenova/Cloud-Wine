const Dictionary = require('../models/Dictionary');

module.exports = {
    get: {
        all: (req, res, next) => {
            Dictionary.find().sort('title')
                .then(entries => {
                    res.json(entries);
                });
        },

        details: (req, res, next) => {
            const {id} = req.params;
            Dictionary.findById(id)
                .then(entry => {
                    res.json(entry);
                })
        },

    },

    post: (req, res, next) => {
        let {
            title,
            fullText,
            shortText,
            iconWhiteUrl,
            iconBlackUrl,
            imageUrl,
        } = req.body;

        shortText += '...';

        Dictionary.create({title, fullText, shortText, iconWhiteUrl, iconBlackUrl, imageUrl})
            .then((createdEntry) => {
                return Promise.all([
                    Dictionary.findOne({_id: createdEntry._id})
                ]);
            })
            .then(([modifiedObj, entryObj]) => {
                res.send(entryObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        let {
            title,
            fullText,
            shortText,
            iconWhiteUrl,
            iconBlackUrl,
            imageUrl,
        } = req.body;

        shortText += '...';

        Dictionary.updateOne({_id: id}, {title, fullText, shortText, iconWhiteUrl, iconBlackUrl, imageUrl})
            .then((updatedEntry) => res.send(updatedEntry))
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        Dictionary.deleteOne({_id: id})
            .then((removedEntry) => res.send(removedEntry))
            .catch(next)
    }
};
