import { provide } from '@angular/core';

export class AppSettings {
  baseUrl: String;
}

export const APP_SETTINGS: AppSettings = {
  baseUrl: "http://localhost:3001"
};

export const appSettingsProviders = [
  provide(AppSettings, { useValue: APP_SETTINGS })
];
