const mongoose = require('mongoose');

var produitSchema = new mongoose.Schema({
    action: {
        type: String,
        required: 'Ce champ est requis.'
    },
    quantite: {
        type: String,
        required: 'Ce champ est requis.'
    },
    prix: {
        type: String,
        required: 'Ce champ est requis.'
    }
});


mongoose.model('Produit', produitSchema);

