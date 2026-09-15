# Ji Lab — Penn State

A complete, responsive lab website for GitHub Pages. Includes research, the principal investigator, selected publications, graduate research inquiries, and contact information.

## Open the website

Unzip the package and double-click `index.html`. Keep the `assets` folder beside it. The site works locally and on GitHub Pages without installing anything.

## Publish on GitHub Pages

The website files are in [abirmh-droid/ji-lab](https://github.com/abirmh-droid/ji-lab). To enable publishing:

1. Open the repository's [Settings → Pages](https://github.com/abirmh-droid/ji-lab/settings/pages).
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose **main** and **/ (root)**, then **Save**.
4. Wait for the Pages deployment to finish. The Pages settings will display the live address. Updates may take several minutes to appear.

For the connected account `abirmh-droid`, a repository called `ji-lab` will normally publish at **https://abirmh-droid.github.io/ji-lab/** after Pages is enabled. This is an expected address, not a claim that the site is already published.

**Choosing a root address:** A repository named `abirmh-droid.github.io` would publish at `https://abirmh-droid.github.io/`. A root address such as `jilab.github.io` requires an account or organization actually named `jilab`; naming a repository `jilab.github.io` under a different account does not give you that root address. Use the account or organization the lab intends to maintain long term.

The included `.nojekyll` file lets GitHub Pages serve these static files directly. You do not need a custom GitHub Actions workflow.

Official instructions: [Create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Make changes directly in GitHub

1. Open the file you want to change, then select the pencil icon (**Edit this file**).
2. In `index.html`, use **Ctrl+F** on Windows or **Command+F** on Mac to find one of the `EDIT:` comments, a person's name, or a publication title.
3. Replace the text between the HTML tags. Keep the tags and quotation marks intact.
4. Select **Commit changes** and commit to `main`. GitHub Pages will publish the update.

| Change | File |
| --- | --- |
| Research, people, publications, email, phone, and address | `index.html` |
| Colors, spacing, typography, and responsive layouts | `assets/style.css` |
| Mobile navigation and automatic footer year | `assets/site.js` |
| Dr. Ji's photo | `assets/xiangming-ji.png` |
| Chandlee Laboratory photo | `assets/chandlee-lab.png` |

To add a publication, copy one complete `<article class="publication">...</article>` block and edit its year, journal, title, authors, citation, and both DOI links. Add newer work at the top. Confirm author names and DOI against the published paper.

To add team members, copy a `team-card` in the People section and update the name, role, email, office, and LinkedIn link. The team includes Amalina Shabrina (2nd-year PhD student), Mehedy Hasan Abir (1st-year PhD student), and Parth Shah (Research Technologist). Update student years as needed.

## Source and design notes

The structure follows the straightforward GitHub Pages editing approach described in the supplied guide. This is an original static HTML/CSS implementation. All navigation and content work without JavaScript; JavaScript adds the mobile menu, section highlighting, and current footer year.

Research descriptions, contact details, photos, and publication metadata were checked against the official sources listed in `SOURCES.md` on September 15, 2026. The website distinguishes **315 Chandlee Building** (lab and team office) from **323 Chandlee Building** (Dr. Ji's office), at **209 Pollock Rd., University Park, PA 16802**, using the owner's corrected contact information. The selected publications include work from before his Penn State appointment.

Penn State images retain their owners' rights. Their source pages do not state a separate reuse license. Replace them with lab-supplied images if needed. The Ji monogram is a custom site mark, not an official Penn State logo.
