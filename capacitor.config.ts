import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gauel.gifyo',
  appName: 'gifyo',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
