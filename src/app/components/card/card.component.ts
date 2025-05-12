import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  activeTab: string = 'about';

  selectTab(tab: string): void {
    this.activeTab = tab;
  }

  getButtonClasses(tab: string): string {
    const baseClasses =
      'inline-block p-4 hover:bg-gray-100 dark:hover:bg-gray-700';
    const activeClasses = 'text-blue-600 dark:text-blue-500 dark:bg-gray-800';
    const inactiveClasses =
      'text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300';

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
