export interface Profil {
  id: number; // Identifiant unique de l'utilisateur
  nom: string; // Nom de l'utilisateur
  prenom: string; // Prénom de l'utilisateur
  dateDeNaissance: string; // Date de naissance de l'utilisateur au format ISO (YYYY-MM-DD)
  email: string; // Adresse email de l'utilisateur
  telephone: string; // Numéro de téléphone de l'utilisateur
  indicatifTelephone: string; // Indicatif téléphonique de l'utilisateur
  adresse: string; // Adresse de l'utilisateur
  ville: string; // Ville de résidence de l'utilisateur
  codePostal: string; // Code postal de l'utilisateur
  pays: string; // Pays de résidence de l'utilisateur
  motDePasse: string; // Mot de passe de l'utilisateur
  genreId: number; // Identifiant du genre de l'utilisateur
}
