export interface Produit {
    id: number;
    nom: string;
    prix: number;
    stock: number;
    typeProduit: number; // 1: Parfum, 2: Skincare, 3: Vêtements
    typeParfum?: TypeParfum; // Null si non applicable
    typeSkincare?: TypeSkincare; // Null si non applicable
    typeVetement?: TypeVetement; // Null si non applicable
    marqueParfum?: MarqueParfum; // Null si non applicable
    marqueSkincare?: MarqueSkincare; // Null si non applicable
    marqueVetement?: MarqueVetement; // Null si non applicable
    description?: string;
    photoPath?: string;
  }
  
  export interface TypeParfum {
    id: number;
    nom: string;
  }
  
  export interface TypeSkincare {
    id: number;
    nom: string;
  }
  
  export interface TypeVetement {
    id: number;
    nom: string;
  }
  
  export interface MarqueParfum {
    id: number;
    nom: string;
  }
  
  export interface MarqueSkincare {
    id: number;
    nom: string;
  }
  
  export interface MarqueVetement {
    id: number;
    nom: string;
  }
  