import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logItems = [];
  showContent = false;
  buttonCaption = 'Display Details';
  logInfo = '';
  
  onShowHideContent(){
    
    this.showContent = !this.showContent;
    if (!this.showContent){
      this.buttonCaption = 'Display Details';
      this.logInfo = 'Content was hidden on: ' + new Date().toLocaleString();
      this.logItems.push(this.logInfo);
    }
    else{
      this.buttonCaption = 'Hide Details';
      this.logInfo = 'Content was shown on: ' + new Date().toLocaleString();
      this.logItems.push(this.logInfo);
    }
    
  }
}
