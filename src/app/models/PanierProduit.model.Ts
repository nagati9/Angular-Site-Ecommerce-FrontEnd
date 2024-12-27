export interface PanierProduit {
    id: number; // Identifiant unique pour chaque produit dans le panier
    produitId: number; // Identifiant du produit
    quantite: number; // Quantité de ce produit dans le panier
    produitNom: string; // Nom du produit
    produitPrix: number; // Prix du produit
    produitPhotos: string; // Chemin de la photo du produit
    typeProduit: number; // Type du produit (1: Parfum, 2: Skincare, 3: Vêtements)
    marqueSkincare?: string; // Nom de la marque pour les produits skincare (facultatif)
    marqueParfum?: string; // Nom de la marque pour les parfums (facultatif)
    marqueVetement?: string; // Nom de la marque pour les vêtements (facultatif)
    description: string; // Description du produit
    stock: number; // Quantité en stock
  }
  