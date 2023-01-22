import { Component } from '@angular/core';
import { SpeechRecognitionService } from './speech-recognition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'speechToText';
  text: string | undefined;
  languageCode: { key: string; value: string; }[] = [];
  selectedValue: any;

  constructor(
   public service:SpeechRecognitionService
    ) {
      this.service.init()
     }
   
    ngOnInit(): void {
      this.languageCode=[{
        key:"marathi",
        value:"mr"
      },
      {
        key:"English",
        value:"en-US"
      },
      {
        key:"Hindi",
        value:"hi"
      },
      {
        key:"German",
        value:"de"
      },
      {
        key:"French",
        value:"fr-FR"
      },
      {
        key:"Japanese",
        value:"ja"
      }
   
    ]
    }
   
    start(){
      this.service.start()
    }
   
    stop(){
      this.service.stop()
    }
    clear(){
      this.service.text="";
    }
    selectValue(){
      this.service.recognition.lang=this.selectedValue;
    }
 
}
