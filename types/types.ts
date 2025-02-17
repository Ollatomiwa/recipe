export interface RecipeResponse {
    
    total: number;
    size:number;
    limit: number;
    recipes: Recipe[];


}
export interface Recipe {
    id: number;
    title: string;
    name: string;
    ingredients: string[];
    instructions: string;
    prepTime: number; // in minutes
    cookTime: number; // in minutes
    servings: number;
    category: string;
    image: string;
    difficulty: string;
    cuisine: string;
    mealType: string[];
    userId: number;
    rating: number;
    reviewCount: number;
    caloriesPerServing : number;

}


export interface Category {
    id: number;
    name: string;
}