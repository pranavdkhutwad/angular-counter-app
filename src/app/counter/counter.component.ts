import { Component } from '@angular/core';

@Component({
  selector: 'cnt-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  products = [
    {
      id: 1,
      count: 0,
      imgUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      count: 0,
      imgUrl: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      count: 0,
      imgUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      count: 0,
      imgUrl: 'https://plus.unsplash.com/premium_photo-1664360971041-5024c24fa81e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      count: 0,
      imgUrl: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
  ];

  handleIncrement(id: number) {
    this.products[id-1].count++;
  }

  handleDecrement(id: number) {
    if (this.products[id-1].count) {
      this.products[id-1].count--;
    }
  }

  handleDelete(id: number) {
    this.products = this.products.filter((product) => product.id !== id)
  }

  getTotal() {
    const total = this.products.reduce((acc: number, product: any) => {
      acc = acc + product.count;
      return acc;
    }, 0);

    return total;
  }
}
