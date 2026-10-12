# Test log – USAPortfolio (MOB_A2_2527116)

**Student:** UMURERWA Shenge Appoline | **Reg. no.:** 25/27116 | **Code:** MOB-A2-7116

**Device:** [model] | **Android version:** [version] | **App version:** 1.0.0 | **Build:** EAS preview APK
**Test date and time:** [date, time]

Fill in the Result column (Pass / Fail) and any note. Test on the INSTALLED APK, not Expo Go.

| # | Test | Expected result | Result | Notes |
|---|---|---|---|---|
| 1 | Install the APK on the phone | Installs without errors | | |
| 2 | Launch the installed app (no Expo Go) | Home screen opens | | |
| 3 | Read first sentence on Home | "My name is UMURERWA Shenge Appoline." | | |
| 4 | Open each bottom tab | Home, Skills, Projects, Edit, About all open | | |
| 5 | Open a project, then press Android Back | Detail opens; Back returns to the Projects list | | |
| 6 | Edit tab: clear headline and press Save | Field-level error shown; not saved | | |
| 7 | Edit tab: biography under 40 characters | Field-level error shown; not saved | | |
| 8 | Edit tab: valid changes and press Save | "Profile saved" message shown | | |
| 9 | Close the app fully and reopen | Saved changes are still shown | | |
| 10 | Take a photo with the camera | Preview shows; photo appears on Home | | |
| 11 | Deny camera permission (Settings) and try again | Clear message; app does not crash | | |
| 12 | Choose a photo from the gallery, then cancel once | Cancel message; old photo kept | | |
| 13 | Remove photo | Initials avatar returns | | |
| 14 | Restart app after setting a photo | Photo is still shown | | |
| 15 | Reset profile | Defaults restored | | |
| 16 | About screen | App name, name, 25/27116, MOB-A2-7116, version 1.0.0, data-use text | | |
| 17 | Turn on Airplane Mode and use every tab | Everything works offline | | |
| 18 | Increase system font size (Settings > Display) | Text stays readable; nothing cut off | | |
