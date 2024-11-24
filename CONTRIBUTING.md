# HIMARPL Blog Website Contributing Guide

Thank you for your interest in contributing to the HIMARPL Ascendia Cabinet Website. Before proceeding, please briefly read the following:

- [Code of Conduct](https://github.com/himarplupi/ascendia-himarpl/blob/main/CODE_OF_CONDUCT.md)
- [Contributing](#contributing)
- [Getting Started](#getting-started)
  - [CLI Commands](#cli-commands)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Policy](#pull-request-policy)
- [Developer Certificate of Origin 1.1](#developer-certificate-of-origin-11)

## Contributing

Any individual is welcome to contribute to the HIMARPL Ascendia Cabinet Website. This repository currently has two types of contribution personas:

- **Contributors** are any individuals who create issues/PRs, comment on issues/PRs, or contribute in other ways.

- **Collaborators** are any individuals who review issues/PRs, manage issues/PRs, or actively contribute in discussions and decision-making in this project.

## Getting Started

The steps below will give you an overview of how to set up your local environment for the HIMARPL Ascendia Cabinet Website and the general steps to complete something and submit your contribution.

1. Click the fork button in the top right to copy the [HIMARPL Ascendia Cabinet Website Repository](https://github.com/himarplupi/ascendia-himarpl/fork)

2. Clone your fork using SSH, GitHub CLI, or HTTPS.

   ```bash
   git clone git@github.com:<YOUR_GITHUB_USERNAME>/ascendia-himarpl.git # SSH
   git clone https://github.com/<YOUR_GITHUB_USERNAME>/ascendia-himarpl.git # HTTPS
   gh repo clone <YOUR_GITHUB_USERNAME>/ascendia-himarpl # GitHub CLI
   ```

3. Change to the ascendia-himarpl directory.

   ```bash
   cd ascendia-himarpl
   ```

   1. **Prerequisites for .env file**: Create a `.env` file in the project root.

   2. Follow the getting started guide at [CoackroachDB](https://www.cockroachlabs.com/docs/cockroachcloud/quickstart) for the `DATABASE_URL` value.

      ```bash
      DATABASE_URL=
      ```

   3. Follow the getting started guide at [Google OAuth](https://developers.google.com/identity/protocols/oauth2) to get OAuth 2.0 credentials from Google API Console for `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` values.

      ```bash
      GOOGLE_CLIENT_ID=
      GOOGLE_CLIENT_SECRET=
      ```

   4. Follow the getting started guide at [Upstash Ratelimiting](https://upstash.com/docs/oss/sdks/ts/ratelimit/gettingstarted) to get `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` values.

      ```bash
      UPSTASH_REDIS_REST_URL=
      UPSTASH_REDIS_REST_TOKEN=
      ```

4. Create a remote to sync your fork and local clone with the main repository.

   ```bash
   git remote add upstream git@github.com:himarplupi/ascendia-himarpl.git # SSH
   git remote add upstream https://github.com/himarplupi/ascendia-himarpl.git # HTTPS
   gh repo sync himarplupi/ascendia-himarpl # GitHub CLI
   ```

5. Create a new branch for your work.

   ```bash
   git checkout -b your-branch-name
   ```

6. Run the following commands to install dependencies and start a local preview of your work.

   ```bash
   npm ci # install project dependencies
   npm run db:push # push database schema to CockroachDB
   npm run dev # start development environment
   ```

7. Make your changes. If you're not familiar with this repository's structure, we recommend reading the [HIMARPL Documentation Website](https://docs.himarpl.com).

8. Merge to sync your current branch with the upstream branch.

   ```bash
   git fetch upstream
   git merge upstream/main
   ```

9. Run `npm run lint` to ensure linting and formatting are correct.

   ```bash
   npm run lint
   ```

10. Once you're satisfied with your changes, add and commit them to your branch, then push the branch to your fork.

    ```bash
    cd ~/ascendia-himarpl
    git add .
    git commit # Please follow the commit guidelines below
    git push -u origin your-branch-name
    ```

> [!IMPORTANT]\
> Before committing and opening a Pull Request, please read the [Commit Guidelines](#commit-guidelines) and [Pull Request Policy](#pull-request-policy) explained below.

11. Create a Pull Request.

> [!NOTE]\
> We ask PR authors to avoid unnecessarily rebasing/updating their PR with the base branch (`main`).

### CLI Commands

This repository contains several scripts and commands to perform various tasks. The most relevant commands are described below.

<details>
  <summary>Commands for Running & Building Website</summary>

- `npm run dev` runs the Next.js Local Development Server, listening by default at `http://localhost:3000/`.
- `npm run build` builds the Application in Production mode. Output is by default inside the `.next` folder.
  - This is used for HIMARPL Ascendia Cabinet Website Vercel Deployments (Preview & Production)
- `npm run start` starts a web server running the built content from `npm run build`

</details>

<details>
  <summary>Commands for Maintenance Tasks and Tests</summary>

- `npm run db:push` pushes database schema to CockroachDB.
- `npm run db:studio` runs prisma studio for database management.
- `npm run lint` runs the linter for all files.
- `npm run test` runs all tests locally

</details>

## Commit Guidelines

This project follows the [Conventional Commits][] specification.

Commits must be signed. You can read more about [Signing Commits][] here.

### Commit Message Guidelines

- Commit messages must include a "type" as described in Conventional Commits
- Commit messages **must not** end with a period `.`

## Pull Request Policy

This policy governs how contributions should be made in this repository. The lines below state the checks and policies that must be followed before merging and when merging.

### When merging

- All required Status checks must pass.
- Ensure that all discussions have been resolved.
- [`squash`][] pull requests consisting of multiple commits

## Developer Certificate of Origin 1.1

```
By contributing to this project, I certify that:

- (a) The contribution was created in whole or in part by me and I have the right to submit it under the open source license indicated in the file; or
- (b) The contribution is based upon previous work that, to the best of my knowledge, is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license (unless I am permitted to submit under a different license), as indicated in the file; or
- (c) The contribution was provided directly to me by some other person who certified (a), (b) or (c) and I have not modified it.
- (d) I understand and agree that this project and the contribution are public and that a record of the contribution (including all personal information I submit with it, including my sign-off) is maintained indefinitely and may be redistributed consistent with this project or the open source license(s) involved.
```

[`squash`]: https://help.github.com/en/articles/about-pull-request-merges#squash-and-merge-your-pull-request-commits
[Conventional Commits]: https://www.conventionalcommits.org/
[Signing Commits]: https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits
