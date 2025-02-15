export interface Recipe {
    id: number;
    title: string;
    ingredients: string[];
    instructions: string;
    prepTime: number; // in minutes
    cookTime: number; // in minutes
    servings: number;
    category: string;
    imageUrl?: string;
    difficulty: string;
    cuisine: string;
    mealType: string[];
    userId: number;

}

export interface RecipeResponse {
    
    total: number;
    size:number;
    limit: number;
    Recipe: Recipe[];


}

export interface Category {
    id: number;
    name: string;
}