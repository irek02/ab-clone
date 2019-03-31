import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'airbnb-clone';

  listings = [];

  ngOnInit() {
    this.listings = this.generateListings();

    console.log(this.listings);
  }

  generateListings() {
    const images = ['listing.jpg', 'listing2.jpeg', 'listing3.jpeg', 'listing4.jpeg'];
    const types = ['private room', 'entire apartment', 'tree house'];
    const locations = ['New York', 'San Francisco', 'Boston'];
    const titles = [
      'Brownstone Studio',
      'Charming gardenroom with woodstove',
      'Superb duplex apartment in the historical centre'
    ];
    const listings = [];

    for (let i = 0; i < 100; i++) {
      listings.push({
        image_url: 'assets/' + images[Math.floor(Math.random() * 4)],
        type: types[Math.floor(Math.random() * 3)],
        location: locations[Math.floor(Math.random() * 3)],
        title: titles[Math.floor(Math.random() * 3)],
        price: Math.floor(Math.random() * 1000),
        rating: {
          stars: Math.floor(Math.random() * 5),
          count: Math.floor(Math.random() * 1000)
        }
      });
    }

    return listings;
  }

  parseStars(stars: number) {
    const result = [0, 0, 0, 0, 0];

    for (let i = 0; i <= stars; i++) {
      result[i] = 1;
    }

    return result;
  }
}
