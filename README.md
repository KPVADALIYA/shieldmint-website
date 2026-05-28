# ShieldMint Static Website

A responsive, static website for ShieldMint insurance advisory. It is ready for GitHub Pages upload. The uploaded reference images are not included in the website package.

## Files

- `index.html` — main website page
- `styles.css` — website design and responsive layout
- `script.js` — mobile menu, reveal animation, WhatsApp/email form actions
- `assets/` — logo/favicon assets only
- `404.html` — simple fallback page for GitHub Pages
- `CNAME.example` — sample custom domain file

## How to upload to GitHub Pages

1. Create a new GitHub repository.
2. Upload all files inside this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Save and wait for the GitHub Pages link to appear.

## How to connect your domain

### Option A: Use `www.yourdomain.com`

1. In your DNS provider, create a **CNAME** record:
   - Name/Host: `www`
   - Value/Target: `YOUR-GITHUB-USERNAME.github.io`
2. In GitHub repository **Settings → Pages → Custom domain**, enter `www.yourdomain.com` and save.
3. GitHub will create a `CNAME` file automatically. Or you can rename `CNAME.example` to `CNAME` and replace the text with your domain.
4. Enable **Enforce HTTPS** after DNS is verified.

### Option B: Use root domain `yourdomain.com`

Create these **A** records at your DNS provider:

```text
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

Optional IPv6 **AAAA** records:

```text
@  AAAA  2606:50c0:8000::153
@  AAAA  2606:50c0:8001::153
@  AAAA  2606:50c0:8002::153
@  AAAA  2606:50c0:8003::153
```

Then set the custom domain in GitHub Pages settings and enable HTTPS.

Reference: GitHub Pages custom domain DNS records are documented here: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site


## Customize

Edit these details in `index.html` if needed:

- Phone: `+91 84608 68264`
- Email: `shieldmint@outlook.com`
- Name: `Kishan Vadaliya`
- Location: `Surat, Gujarat`
- Services and text content
