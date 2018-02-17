/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    afficher:function (req, res) {
        Article.find({}).exec(function (err, article) {
        
         res.view('afficher', {articles:article});
        });
    },

    ajouter:function (req, res) {
        res.view('ajouter');
    },

    creer:function (req, res) {
        var title = req.body.title;
        var body = req.body.body;
        Article.create({title:title, body:body}).exec(function (err) {
            if (err) {
                res.send(500, {error: "Erreur dans la Base de Données"});
            }
            res.redirect('/article/afficher');
        });
    },

    supprimer:function (req, res) {
        Article.destroy({id:req.params.id}).exec(function (err) {
            if (err) {
                res.send(500, {error: "Erreur dans la Base de Données"});
            }
            res.redirect('/article/afficher');
        });
    },

    modifier: function (req, res) {
        Article.findOne({id:req.params.id}).exec(function (err, article) {
            if (err) {
                res.send(500, {error: "Erreur dans la Base de Données"});
            }
            res.view('modifier', {article:article});
        });
    },

    update: function (req, res) {
        var title = req.body.title;
        var body = req.body.body;
        Article.update({id:req.params.id}, {title:title, body:body}).exec(function (err) {
            if (err) {
                res.send(500, {error: "Erreur dans la Base de Données"});
            }
            res.redirect('/article/afficher');
        });
    }
};

