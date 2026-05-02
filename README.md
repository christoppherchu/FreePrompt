# FreePrompt AI Library

FreePrompt is a high-end, precision-engineered AI prompt library designed with a "Dribbble-Level" modern tech UI. It provides structured operational parameters to upgrade standard LLMs into highly specialized professional tools.

## Deployment & Git Workflow

To preserve Netlify build credits and maintain a professional CI/CD pipeline, this project uses a strict branching strategy:

1. **Active Branching:** The live Netlify environment (`freeprompt.netlify.app`) is strictly linked to the `main` branch.
2. **Development:** All intermediate work, UI updates, and new prompt additions MUST be conducted on the `development` branch.
3. **Merging:** Pushes to `main` are restricted. The `development` branch should only be merged into `main` when the user explicitly requests the changes to go live. This ensures Netlify only uses 1 build credit per major update cycle.

## Tech Stack
* Vanilla HTML5
* CSS3 (Glassmorphism, CSS Variables, Flexbox/Grid)
* Vanilla JavaScript (Clipboard API, DOM manipulation)
* Hosted via Netlify & GitHub Pages
