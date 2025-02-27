import { initDB, addUser, getUsers, closeDB } from '../database/database';

// Initialiser la base de données
initDB();

// Ajouter un utilisateur (Exemple)
addUser('Alice', 'alice@example.com');
addUser('Bob', 'bob@example.com');

// Récupérer et afficher les utilisateurs
setTimeout(() => {
getUsers();
  closeDB(); // Ferme la base après utilisation (optionnel)
}, 1000);