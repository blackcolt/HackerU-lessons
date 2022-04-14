import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../classes/contact';

@Pipe({
  name: 'temp',
})
export class TempPipe implements PipeTransform {
  transform(contact: Contact, ...args: unknown[]): string {
    return contact.name + ': ' + (contact.isLikeCold ? '🧊' : '🔥');
  }
}
