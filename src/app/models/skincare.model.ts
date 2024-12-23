export interface Skincare {
    id: number;
    nom: string;
    stock: number;
    prix: number;
    typeId: number;
    marqueId: number;
    type?: TypeSkincare; // Propriété pour inclure l'objet Type
    marque?: MarqueSkincare; // Propriété pour inclure l'objet Marque
    photoPath: string;
  }
  
  export interface TypeSkincare {
    id: number;
    nom: string;
  }
  
  export interface MarqueSkincare {
    id: number;
    nom: string;
  }
  
