import type { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'template-repo-mobile-multi-test',
  slug: 'template-repo-mobile-multi-test',
  version: '1.0.0',
  orientation: 'portrait',
  platforms: ['android', 'ios', 'web'],
  android: {
    package: 'com.anonymous.templaterepombsingle',
  },
  extra: {
    appName: 'Template Repo Mobile Multi Test',
    environment: process.env.EXPO_PUBLIC_APP_ENV,
    apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL,
  },
};

export default config;
