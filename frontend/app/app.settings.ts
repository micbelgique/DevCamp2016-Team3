import { provide } from '@angular/core';

export class AppSettings {
  baseUrl: String;
}

export const APP_SETTINGS: AppSettings = {
  baseUrl: "http://192.168.241.12:3001"
};

export const appSettingsProviders = [
  provide(AppSettings, { useValue: APP_SETTINGS })
];
