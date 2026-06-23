# Original manuscript scans (the page beside each translation)

Drop the scanned pages of the 1915 grantha here and they appear automatically on
each chapter page (`/grantha/translation/<num>`) — no code change needed.

## Where each chapter's scan goes
Two conventions (use either, per chapter):

- **One image per manuscript page** (preferred when a chapter spans several pages):
  ```
  public/grantha/scans/adhyay-65/p1.webp
  public/grantha/scans/adhyay-65/p2.webp
  ```
  Files are shown in natural order (p1, p2, …, p10).

- **A single image** for the whole chapter:
  ```
  public/grantha/scans/adhyay-65.webp
  ```

`<num>` is the Adhyāy number (matches the translation, e.g. 65, 66, …).

## Format
- **webp** preferred. After dropping PNG/JPG, run `node scripts/to-webp.mjs`.
- Keep them legible (long edge ~1600px is plenty for the lightbox).
- Until a chapter's scan exists, the page shows a calm "will appear here" note.

> Getting the images: export the pages from the source PDF (one image per page),
> name them as above, convert to webp, commit. That is also the basis for G3
> (a downloadable original).
