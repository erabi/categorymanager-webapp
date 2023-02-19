import { Injectable, Inject } from '@angular/core';
import { RestService } from 'src/app/shared/services/rest.service';
import { Observable } from 'rxjs';
import { ResultPage } from 'src/app/categories/result-page';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public endPoint = '/categories';

  constructor(@Inject(RestService) public restService: RestService) { }

  public getAll(page: number): Observable<ResultPage> {
    const url = this.endPoint + '?page=' + page;
    return this.restService.get(url);
  }

  public getAllByName(page: number, name: string): Observable<ResultPage> {
    const url = this.endPoint + '?page=' + page + '&name=' + name;
    return this.restService.get(url);
  }
}
/**
 * Il reste à implémenter les autres requêtes permettant de naviguer
 * dans les catégories et de créer, modifier et supprimer une
 * catégorie.
 */
