export interface Parfum {
    id: number;
    nom: string;
    stock: number;
    prix: number;
    typeId: number;
    marqueId: number;
    type?: TypeParfum; // Propriété pour inclure l'objet Type
    marque?: MarqueParfum; // Propriété pour inclure l'objet Marque
    photoPath: string;
  }
  
  export interface TypeParfum {
    id: number;
    nom: string;
  }
  
  export interface MarqueParfum {
    id: number;
    nom: string;
  }
  