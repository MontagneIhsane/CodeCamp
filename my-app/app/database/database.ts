import sqlite3 from 'sqlite3';

// Ouvre une connexion à la base de données SQLite
const db = new sqlite3.Database('codecamp.db', (err) => {
if (err) {
    console.error('Erreur lors de l’ouverture de la base de données', err.message);
    } else {
    console.log('Connexion à SQLite réussie');
    }
});

// Crée une table "users" si elle n'existe pas
export const initDB = () => {
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
    );
    `, (err) => {
    if (err) {
        console.error('Erreur lors de la création de la table', err.message);
    } else {
        console.log('Table "users" prête');
    }
  });
};

// Fonction pour ajouter un utilisateur
export const addUser = (name: string, email: string) => {
    db.run(`INSERT INTO users (name, email) VALUES (?, ?)`, [name, email], function (err) {
    if (err) {
        console.error('Erreur lors de l’insertion', err.message);
    } else {
        console.log(`Utilisateur ajouté avec l'ID ${this.lastID}`);
    }
    });
};

// Fonction pour récupérer tous les utilisateurs
export const getUsers = () => {
  db.all(`SELECT * FROM users`, [], (err, rows) => {
    if (err) {
        console.error('Erreur lors de la récupération', err.message);
        return;
    }
    console.log('Liste des utilisateurs :', rows);
    });
};

// Fermer la connexion (optionnel)
export const closeDB = () => {
    db.close((err) => {
    if (err) {
        console.error('Erreur lors de la fermeture de la base', err.message);
    } else {
        console.log('Connexion SQLite fermée');
    }
    });
};

export default db;
