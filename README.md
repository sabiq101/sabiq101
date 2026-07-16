# Sabiq Islam — GitHub Pages Website

This repository is ready to publish as a personal GitHub Pages website at:

**https://sabiq101.github.io**

The site uses plain HTML, CSS, and JavaScript. It does not require a framework,
package manager, build command, or GitHub Actions workflow.

## Publish it

1. Sign in to the GitHub account `sabiq101`.
2. Create a new **public** repository named exactly:
   `sabiq101.github.io`
3. Upload all files and folders from this package to the repository root.
4. Commit the files to the `main` branch.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
7. Save and visit `https://sabiq101.github.io`.

GitHub may take several minutes to publish the first version.

## Site structure

- `index.html` — Home
- `research.html` — Research, publications, invention, and presentations
- `cv.html` — Web CV with a Print / Save as PDF button
- `projects.html` — Selected projects and research concepts
- `styles.css` — All styling and mobile/print layouts
- `script.js` — Mobile navigation, current year, and print action
- `assets/profile-placeholder.svg` — Replace with your headshot
- `.nojekyll` — Tells GitHub Pages to serve the static files directly

## Add a real profile photo

Place your image in `assets/`, for example:

`assets/profile.jpg`

Then change this line in `index.html`:

```html
<img src="assets/profile-placeholder.svg" alt="Sabiq Islam profile placeholder">
```

to:

```html
<img src="assets/profile.jpg" alt="Portrait of Sabiq Islam">
```

A square or nearly square image works best.

## Edit content

All content is directly inside the HTML files. Search for the text you want to
change, edit it, commit, and GitHub Pages will republish automatically.

## Privacy note

The website intentionally omits a public phone number. Review all unpublished
research, patent, collaborator, and sponsor references before publishing.
