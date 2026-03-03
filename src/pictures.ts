// AUTO-GENERATED — run: node generate-pictures.mjs
// Do not edit by hand; re-run the script after adding/removing images.
// Found 4 browser-compatible image(s).
//
// NOTE: HEIC files were skipped (not supported by web browsers).
//       Convert them to JPG with:
//         for f in Picture/*.HEIC; do sips -s format jpeg "$f" --out "Picture/$(basename "$f" .HEIC).jpg"; done

export interface PictureEntry {
  filename: string;
  url: string;  // served from public/pictures/
  title: string;
}

export const pictures: PictureEntry[] = [
  {
    "filename": "IMG_0751.JPG",
    "url": "/pictures/IMG_0751.JPG",
    "title": "IMG 0751"
  },
  {
    "filename": "IMG_0763.JPG",
    "url": "/pictures/IMG_0763.JPG",
    "title": "IMG 0763"
  },
  {
    "filename": "IMG_2712.jpeg",
    "url": "/pictures/IMG_2712.jpeg",
    "title": "IMG 2712"
  },
  {
    "filename": "IMG_5797.JPG",
    "url": "/pictures/IMG_5797.JPG",
    "title": "IMG 5797"
  }
];
