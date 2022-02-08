import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  url: string = "https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert";
  // postUrl: string = "https://jsonplaceholder.typicode.com/posts";


  // cartArray: any = localStorage.getItem('cartItems');
  cartArray: any = JSON.parse(localStorage.getItem('cartItems') || "[]");

  get() {
    // const data = JSON.parse(localStorage.getItem('cartItems'));
    // let cartArray = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    this.cartArray = [
      {
          strMeal: "Apam balik",
          strMealThumb: "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
          idMeal: "53049",
          qty: 1
      },
      {
          strMeal: "Banana Pancakes",
          strMealThumb: "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
          idMeal: "52855",
          qty: 1
      },
      {
          strMeal: "Battenberg Cake",
          strMealThumb: "https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg",
          idMeal: "52894",
          qty: 1
      },
      {
          strMeal: "BeaverTails",
          strMealThumb: "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
          idMeal: "52928",
          qty: 1
      },
      {
          strMeal: "Blackberry Fool",
          strMealThumb: "https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg",
          idMeal: "52891",
          qty: 1
      },
      {
          strMeal: "Bread and Butter Pudding",
          strMealThumb: "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
          idMeal: "52792",
          qty: 1
      },
      {
          strMeal: "Chelsea Buns",
          strMealThumb: "https://www.themealdb.com/images/media/meals/vqpwrv1511723001.jpg",
          idMeal: "52898",
          qty: 1
      },
      {
          strMeal: "Chinon Apple Tarts",
          strMealThumb: "https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg",
          idMeal: "52910",
          qty: 1
      },
      {
          strMeal: "Choc Chip Pecan Pie",
          strMealThumb: "https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg",
          idMeal: "52856",
          qty: 1
      },
      {
          strMeal: "Chocolate Avocado Mousse",
          strMealThumb: "https://www.themealdb.com/images/media/meals/uttuxy1511382180.jpg",
          idMeal: "52853",
          qty: 1
      },
      {
          strMeal: "Chocolate Caramel Crispy",
          strMealThumb: "https://www.themealdb.com/images/media/meals/1550442508.jpg",
          idMeal: "52966",
          qty: 1
      },
      {
          strMeal: "Chocolate Gateau",
          strMealThumb: "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
          idMeal: "52776",
          qty: 1
      },
      {
          strMeal: "Chocolate Raspberry Brownies",
          strMealThumb: "https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg",
          idMeal: "52860",
          qty: 1
      },
      {
          strMeal: "Chocolate Souffle",
          strMealThumb: "https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg",
          idMeal: "52905",
          qty: 1
      },
      {
          strMeal: "Christmas cake",
          strMealThumb: "https://www.themealdb.com/images/media/meals/ldnrm91576791881.jpg",
          idMeal: "52990",
          qty: 1
      },
      {
          strMeal: "Christmas Pudding Flapjack",
          strMealThumb: "https://www.themealdb.com/images/media/meals/vvusxs1483907034.jpg",
          idMeal: "52788",
          qty: 1
      },
      {
          strMeal: "Christmas Pudding Trifle",
          strMealThumb: "https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg",
          idMeal: "52989",
          qty: 1
      }
  ]
    return this.cartArray;
    // return this.http.get(this.url);
  }

  add(body: any) {
    this.cartArray.push(body);
    localStorage.setItem('items', JSON.stringify(this.cartArray));
    // body: JSON.stringify({
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 1,
    // }),
    // return this.http.post(this.postUrl, {
    //   body: body,
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   }});
  }

  update() {
    localStorage.setItem('items', JSON.stringify(this.cartArray));
  }

  remove() { }

  clear() {
    localStorage.clear();
    // while (ul.firstChild) {
    //   ul.removeChild(ul.firstChild);
    // }
    this.cartArray = [];
  }

}
