import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {

     if(!value) return null;

     let words: string[] = value.split(' ');
        
     for(let i = 0; i < words.length; i++){
       let word = words[i];

        if(this.isPreposition(word) && i > 0)
            words[i] = word.toLowerCase();
        else 
            words[i] = this.toTitleCase(word);      
     }

     return words.join(' ');
  }

  private isPreposition(word: string): boolean {
   
    let prepositions = [
      'the', 
      'of'
    ];
    
    return prepositions.includes(word.toLowerCase());
  } 

  private toTitleCase(word: string): string{

    return  word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
  
}
