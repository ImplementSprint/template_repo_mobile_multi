# template_repo_mobile_multi-test

Expo + TypeScript template aligned to the `template-repo-mobile-single` `test` branch behavior, adapted for this repository.

## Stack

- Expo SDK 54
- React Native 0.81
- TypeScript (strict mode)
- React Navigation (native stack)
- Jest (`tests/unit`)
- Detox (`tests/e2e`)

## Structure

```text
src/
	app/
	config/
	features/
	navigation/
	system/
	theme/
	utils/
tests/
	unit/
	e2e/
scripts/
```

## Commands

- `npm run start`: Start Expo dev server
- `npm run android`: Build and run Android app
- `npm run ios`: Build and run iOS app
- `npm run web`: Run web target
- `npm run lint`: Lint all files
- `npm run typecheck`: Type-check project
- `npm run test` or `npm run test:unit`: Run unit tests with coverage
- `npm run detox:build`: Build Detox Android binary
- `npm run detox:test`: Run Detox Android tests
- `npm run test:e2e`: Alias for Detox Android tests
- `npm run detox:build:ios`: Build Detox iOS simulator app
- `npm run detox:test:ios`: Run Detox iOS tests

## CI Multi Systems Variable

This repository expects the GitHub repository variable `MOBILE_MULTI_SYSTEMS_JSON`.
Without it, the mobile caller workflow now fails fast before orchestration.

Recommended value:

```json
[
	{
		"name": "mobile-expo",
		"dir": ".",
		"mobile_stack": "expo",
		"enable_android_build": true,
		"enable_ios_build": true,
		"enable_lint": true,
		"enable_security_scan": true,
		"enable_governance": true,
		"coverage_threshold": 80,
		"version_stream": "mobile-expo"
	},
	{
		"name": "mobile-kotlin",
		"dir": "android",
		"mobile_stack": "kotlin",
		"enable_android_build": true,
		"enable_ios_build": false,
		"enable_governance": true,
		"version_stream": "mobile-kotlin"
	}
]
```
