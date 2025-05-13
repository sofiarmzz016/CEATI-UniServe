import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  activeTab: string = 'about';
  title01 = input('');
  text01 = input('');
  email = input('');
  phone = input('');
  webpage = input('');
  url = input('');

  selectTab(tab: string): void {
    this.activeTab = tab;
  }

  getButtonClasses(tab: string): string {
    const baseClasses = 'inline-block p-4 hover:bg-gray-100 ';
    const activeClasses = 'text-primary ';
    const inactiveClasses = 'text-gray-500 hover:text-gray-600 ';

    if (tab === 'about') {
      return `${baseClasses} rounded-ss-lg ${
        this.activeTab === tab ? activeClasses : inactiveClasses
      }`;
    }
    return `${baseClasses} ${
      this.activeTab === tab ? activeClasses : inactiveClasses
    }`;
  }
}
