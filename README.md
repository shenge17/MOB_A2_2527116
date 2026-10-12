My name is UMURERWA Shenge Appoline.

# USAPortfolio

A personal portfolio mobile app built with React Native, Expo and TypeScript for **Mobile Application Development (SWE 3409)**, Individual Assignment 2, INES-Ruhengeri.

| Item | Value |
|---|---|
| Student | UMURERWA Shenge Appoline |
| Registration number | 25/27116 |
| App name | USAPortfolio |
| Verification code | MOB-A2-7116 |
| Android package | `rw.ac.ines.ug2527116.usaportfolio` |
| Version | 1.0.0 |

## Purpose

A recruiter can install the APK, open it without Expo Go and understand who I am within two minutes, even with no internet connection.

## Features

- **Home:** "My name is..." introduction, profile photo, headline, short biography, availability, verification code
- **Skills and education:** five skills and an education timeline, built from reusable components
- **Projects:** project cards with a separate Project Details screen (stack route)
- **Profile editor:** controlled fields with field-level validation (required, length limits, letters check, valid primary skill); invalid saves are blocked
- **Profile photo:** take a photo or pick from the gallery; preview, replace, remove; permission-denied and cancel handling
- **Local persistence:** profile data and photo reference saved with AsyncStorage and restored after restart; Reset profile restores defaults
- **Offline:** every feature works in Airplane Mode; no feature needs an internet connection
- **About:** app name, student name, registration number, verification code, version and data-use statement
- **Navigation:** bottom tabs (Home, Skills, Projects, Edit, About) with a nested stack for Project Details

## Setup and run

```bash
npm install
npx expo start          # quick development check only (Expo Go is NOT the submission)
npx tsc --noEmit        # type-check
```

## Build the Android APK (EAS)

```bash
npx eas-cli login
npx eas-cli init
npx eas-cli build -p android --profile preview
```

The `preview` profile in `eas.json` produces an installable `.apk`.

## Test information

- Tested device: **Tecno Spark 8**
- Android version: **Android 11**
- Final commit hash: 0417d3b13589d4cada5b16f6dba895b6002ad2a8 (code, documents and evidence; the v1.0.0 tag adds only this README line)
- Release link: https://github.com/shenge17/MOB_A2_2527116/releases/tag/v1.0.0
- APK link: https://github.com/shenge17/MOB_A2_2527116/releases/download/v1.0.0/MOB_A2_2527116.apk
- Test log: `evidence/MOB_A2_2527116_TEST_LOG.pdf`
- UI/UX document: `docs/MOB_A2_2527116_UIUX.pdf`
- Declaration: `evidence/MOB_A2_2527116_DECLARATION.pdf`

## Known limitations

- The profile photo is stored as a reference to a local file. If the phone removes that file (for example by clearing the cache), the app shows initials and the photo can be chosen again.
- Skills, education and projects are defined in `src/data/portfolio.ts`; only headline, biography, primary skill, availability and photo are editable inside the app.
- Android only. No web or iOS build is provided.

## Acknowledgements

Built with Expo, React Navigation, `@react-native-async-storage/async-storage` and `expo-image-picker`. AI assistance is disclosed in `evidence/AI_USE.md`.
