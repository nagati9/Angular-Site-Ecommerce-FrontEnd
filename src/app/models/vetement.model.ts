export interface Vetement {
    id: number;
    nom: string;
    stock: number;
    prix: number;
    typeId: number;
    marqueId: number;
    type?: TypeVetement; // Propriété pour inclure l'objet Type
    marque?: MarqueVetement; // Propriété pour inclure l'objet Marque
    photoPath: string;
  }
  
  export interface TypeVetement {
    id: number;
    nom: string;
  }
  
  export interface MarqueVetement {
    id: number;
    nom: string;
  }
  