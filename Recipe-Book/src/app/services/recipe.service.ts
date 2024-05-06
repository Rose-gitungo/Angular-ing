import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<any[]> {
    const jwt: string | null = localStorage.getItem("token")
    const headers = new HttpHeaders().set('Authorization', jwt ? jwt : '');
    return this.http.get<any[]>('http://localhost:8080/api/recipes/', { headers: headers });
  }

  createRecipe(recipe: Recipe): Observable<any> {
    const jwt: string | null = localStorage.getItem("token")
    let headers = new HttpHeaders();
    if (jwt) {
      headers = headers.set('Authorization', 'Bearer ' + jwt);
    }
    return this.http.post<any>("http://localhost:8080/api/recipes/", recipe, { headers: headers });
  }

  updateRecipe(id: any, recipe: any): Observable<any> {
    const jwt: string | null = localStorage.getItem("token")
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + jwt);
    return this.http.put<any>(`http://localhost:8080/api/recipes/${id}`, recipe, { headers: headers });
  }

  getRecipeById(id: any): Observable<any> {
    const jwt: string | null = localStorage.getItem("token")
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + jwt);
    return this.http.get<Recipe>(`http://localhost:8080/api/recipes/${id}`, { headers: headers });

  }

  deleteRecipe(id: any): Observable<any> {
    const jwt: string | null = localStorage.getItem("token")
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + jwt);
    return this.http.delete<any>(`http://localhost:8080/api/recipes/${id}`, { headers: headers });
  }
}
