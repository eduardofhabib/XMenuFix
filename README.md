# X Menu Fix

A minimal Chromium extension that moves the **Copy Link** button to the top of the share menu on X (Twitter), so it's always the first option regardless of your account language.

## The Problem

X recently added a "Send via Chat" button and placed it above "Copy Link" in the share dropdown. Since "Copy Link" is by far the most commonly used action, this change made the menu noticeably more inconvenient.

**Before:**
```
Send via Chat       ← annoying
Copy Link
Share Post via...
Post Video
Download Video
```

**After:**
```
Copy Link           ← first, as it should be
Send via Chat
Share Post via...
Post Video
Download Video
```

## How It Works

The extension injects a small content script (`content.js`) into every `twitter.com` and `x.com` page. It uses a `MutationObserver` to watch for the share dropdown appearing in the DOM — since X is a React app that renders menus dynamically — and when it detects the `[data-testid="Dropdown"]` container, it swaps the first two items so Copy Link always comes first.

The reorder is language-agnostic: it works by position, not by matching button text, so it works on any account regardless of locale.

## Installation

This extension is not published on the Chrome Web Store. Install it manually in developer mode:

1. Download or clone this repository
2. Open Chrome (or any Chromium-based browser) and go to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked** and select the folder containing the extension files

The extension will activate immediately on any open X/Twitter tab after a page reload.

## Files

```
x-menu-fix/
├── manifest.json   # Extension metadata and permissions
├── content.js      # DOM reordering script
├── icon16.png      # Extension icon (16×16)
├── icon48.png      # Extension icon (48×48)
└── icon128.png     # Extension icon (128×128)
```

## Compatibility

Tested on Chromium-based browsers (Chrome, Edge, Brave, Opera). Does not support Firefox — for Firefox, a `manifest_version: 2` port would be needed.

## License

MIT
