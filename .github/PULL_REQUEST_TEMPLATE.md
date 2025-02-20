<!-- Insert GitHub issue number below -->
Fixes #

<!-- Select which type of PR this is -->
- [ ] This PR contains CSS changes
- [ ] This PR does not contain CSS changes

## Description
<!-- Briefly describe the proposed changes -->

## Notes
<!-- Be sure to mention anything unusual, out-of-scope or new technical debt, etc -->

## Screenshots
<!-- Upload screenshots of UI before & after these changes -->

## Checklist
<!-- Acknowledge completion of steps in checklists below. Delete lists that are not applicable -->

<!-- For all PR types -->
- [ ] I verify the build is in a non-broken state
- [ ] I verify all changes are within scope of the linked issue

<!-- For Markup Changes -->
- [ ] I verify the markup will not be a breaking change (if not a major release)
- [ ] I verify the MIND pattern for the component has been created/revised

<!-- For CSS changes -->
- [ ] I regenerated all CSS files under dist folder
- [ ] I tested the UI in all supported browsers
- [ ] I did a visual regression check of the components impacted by doing a Percy build and approved the build
- [ ] I tested the UI in dark mode and RTL mode
- [ ] I added/updated/removed Storybook coverage as appropriate
