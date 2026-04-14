# reyisjones.github.io (Landing Redirect)

This is the public landing page for Reyis Jones. It instantly redirects to the private portfolio site:

👉 **https://reyisjones.github.io/ReyisJonesTech/**

---

## How to set up the redirect landing page

1. **Clone this repo:**
   ```sh
   git clone https://github.com/reyisjones/reyisjones.github.io.git
   cd reyisjones.github.io
   ```
2. **Copy or edit `index.html`**
   - The file should contain a meta refresh redirect to your portfolio URL (already provided).
3. **Commit and push:**
   ```sh
   git add index.html
   git commit -m "feat: add redirect to portfolio"
   git push
   ```
4. **Enable GitHub Pages:**
   - Go to **Settings → Pages** in this repo.
   - Set **Source** to `main` branch, root (`/`).
5. **Test:**
   - Visit https://reyisjones.github.io/ — you should be redirected to your portfolio.

---

**Note:** Your main portfolio repo (`ReyisJonesTech`) can remain private. Only the built static site is public.
