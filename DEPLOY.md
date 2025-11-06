# Deploying to GitHub Pages

This portfolio is configured to work seamlessly with GitHub Pages static hosting.

## Quick Setup

1. **Create a GitHub repository** for your portfolio (if you haven't already)

2. **Build the static site**:
   ```bash
   ./build-static.sh
   ```
   This creates a `docs` folder with all static files ready for GitHub Pages.

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy portfolio to GitHub Pages"
   git push origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to **Pages** section
   - Under **Source**, select **Deploy from a branch**
   - Select branch: `main` and folder: `/docs`
   - Click **Save**

5. **Access your site**:
   - Your portfolio will be available at: `https://yourusername.github.io/repository-name/`
   - Usually takes 1-2 minutes for the first deployment

## Configuration Notes

- ✅ Uses hash-based routing (`/#/`) for perfect GitHub Pages compatibility
- ✅ No backend server required - fully static
- ✅ All assets are bundled and optimized
- ✅ `.nojekyll` file included to prevent Jekyll processing

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `docs` folder with your domain name
2. Configure DNS settings at your domain provider:
   - Add a CNAME record pointing to `yourusername.github.io`
3. Enable HTTPS in GitHub Pages settings

## Updating Content

After making changes:

1. Run `./build-static.sh`
2. Commit and push the updated `docs` folder
3. GitHub Pages will automatically redeploy

## Troubleshooting

- **404 errors**: Make sure you selected the `/docs` folder in GitHub Pages settings
- **Styles not loading**: Check that the repository name matches your GitHub repo
- **Hash in URLs**: This is normal for GitHub Pages - routing uses `#` for compatibility
