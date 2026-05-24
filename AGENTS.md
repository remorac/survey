# Expert Judgment — Metaverse Readiness HEI

## Project Overview
A single-page expert judgment instrument for assessing Metaverse Readiness in Higher Education Institutions (HEI). Built with a Typeform-inspired design system, bilingual EN/ID support, sidebar navigation, item carousel, and full offline auto-save.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Minimal HTML shell — loads CSS, JS, and config |
| `css/styles.css` | All styles — Typeform-inspired, responsive, dark mode |
| `js/app.js` | All application logic — data, state, render, navigation, persistence |
| `config.js` | External config (`SHEETS_URL` for Google Apps Script submission) |
| `expert.html` | Original source file (kept for reference) |
| `AGENTS.md` | This file — project docs and Google Apps Script reference |

## Running

Simply open `index.html` in any modern browser. No build step required.

```bash
# Optional: serve with a local server for full feature testing
python3 -m http.server 8000
# Then visit http://localhost:8000/index.html
```

## Key Features

- **Left sidebar navigation** — collapsible on mobile, shows all constructs with completion status and dim-colored badges
- **Item carousel** — one item at a time with dot indicators and prev/next navigation
- **Visual card-per-criterion** — YES/NO pill buttons with expandable feedback
- **Typeform-inspired design** — large typography, generous whitespace, minimal chrome
- **Dark / Light mode** toggle (respects system preference, persists to localStorage)
- **localStorage auto-save** — progress saved every 800ms; restore banner on return
- **Inline validation** — required fields highlighted with red borders
- **Bilingual** — English & Indonesian with instant language switching
- **Accessibility** — focus-visible rings, semantic HTML, keyboard navigation, reduced-motion support

## Data Structure

All survey data (constructs, items, definitions, translations) is embedded in `js/app.js`. See the `CONSTRUCTS` array and `T` translation object.

## Google Sheets Integration

1. Copy the Google Apps Script code below into a new Apps Script project
2. Set `SHEET_ID` to your Google Sheet ID
3. Deploy as Web App with access set to **Anyone**
4. Paste the deployment URL into `config.js` as `SHEETS_URL`

Leave `SHEETS_URL` empty to run in demo mode (no actual submission).

## State & Persistence

State is keyed by `expert-judgment-v2` in localStorage. Includes:
- `lang`, `page`, `currentConstructIndex`, `currentItemIndex`, `answers`, `overallAnswers`, `profile`, `timestamp`

Theme is keyed separately by `expert-theme`.

## Tech Stack

- Vanilla HTML5 / CSS3 / ES6
- Google Fonts: DM Serif Display, DM Sans
- Bootstrap Icons 1.11.1
- No frameworks, no build tools

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Notes

- The original `expert.html` is preserved as a reference of the source UI.
- The new UI is a complete rewrite with separate CSS and JS files.

---

## Google Apps Script Reference

Paste the following into your Apps Script project and deploy as a Web App (access: Anyone):

```javascript
function doPost(e) {
  const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
  const SHEET_NAME = 'Expert Judgment Responses';

  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      const headers = Object.keys(data);
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    }

    const values = Object.values(data);
    sheet.appendRow(values);

    return ContentService
      .createTextOutput(JSON.stringify({status:'success'}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({status:'error', message: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Expert Judgment Survey API is running.');
}
```
