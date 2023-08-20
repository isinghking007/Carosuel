import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carosuel';

  images=[
    {
      ImageSrc:'https://source.unsplash.com/78A265wPiO4',
      ImageAlt:'First Image'
    },
    
    {
      ImageSrc:'https://source.unsplash.com/DlkF4-dbCOU',
      ImageAlt:'Second Image'
    },
    
    {
      ImageSrc:'https://source.unsplash.com/oMneOBYhJxY',
      ImageAlt:'Third Image'
    },
    
    {
      ImageSrc:'https://source.unsplash.com/9Wotadyt7K8',
      ImageAlt:'Fourth Image'
    },
    
    {
      ImageSrc:'https://source.unsplash.com/9KeDcJKEzBY',
      ImageAlt:'Fifth Image'
    }
  ]
}
