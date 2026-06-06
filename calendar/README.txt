# The Observatory — Interactive Calendar

An aesthetic, client-side interactive calendar you can run from a single HTML file. Features:
- Click any day to add, edit, or delete events (modal interface).
- Quick add form for date + event.
- Month/year navigation.
- Persistent storage via localStorage.
- Constellation mode: visual stars for days with events.
- Export/import or sync not included (can be added).

## Usage

1. Save `index.html` (the file you copied) into a repo.
2. Open `index.html` in a browser to use the calendar.
3. Events are stored in localStorage under the key `observatoryEvents_v1`.

## Development

- To add features like export/import, recurring events, or calendar sync, create new functions in the script and UI controls in the HTML.
- Styles are inside the HTML for easy portability; you can extract them to a CSS file and the script to a JS file for a more standard project structure.

## License

This project is provided under the MIT License. See LICENSE.md.
