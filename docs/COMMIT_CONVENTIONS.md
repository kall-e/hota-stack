# Commit Message Guidelines

We follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) for our commit messages. This leads to more readable messages that are easy to follow when looking through the project history. It also allows us to automatically generate changelogs.

## Format

Each commit message consists of a **header**, a **body** and a **footer**.

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Header

The header is mandatory and has a special format that includes a **type**, an optional **scope**, and a **description**.

**Type**

Must be one of the following:

*   **feat**: A new feature
*   **fix**: A bug fix
*   **docs**: Documentation only changes
*   **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
*   **refactor**: A code change that neither fixes a bug nor adds a feature
*   **perf**: A code change that improves performance
*   **test**: Adding missing tests or correcting existing tests
*   **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
*   **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
*   **chore**: Other changes that don't modify `src` or `test` files
*   **revert**: Reverts a previous commit

**Scope** (Optional)

The scope provides additional contextual information and is contained within parentheses, e.g., `feat(parser): add ability to parse arrays`. Choose a scope that represents the area of the codebase affected by the change (e.g., `api`, `ui`, `core`, `auth`).

**Description**

The description contains a succinct description of the change:

*   use the imperative, present tense: "change" not "changed" nor "changes"
*   don't capitalize the first letter
*   no dot (.) at the end

### Body (Optional)

Just as in the **description**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer (Optional)

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues, Jira tickets, or other PRs that this commit closes or relates to.

```
BREAKING CHANGE: <description>
```

or

```
Refs: #123
Closes: #456
```

### Breaking Changes

Breaking changes MUST be indicated in the type/scope prefix of a commit by appending a `!` to the type/scope, OR by adding a `BREAKING CHANGE:` footer.

Example with `!`:

```
feat(api)!: remove deprecated user endpoint
```

Example with `BREAKING CHANGE:` footer:

```
refactor: simplify authentication logic

BREAKING CHANGE: The authentication method now requires an API key instead of a username/password combination.
```

## Examples

```
feat: add dark mode toggle
```

```
fix(auth): resolve issue with token refresh loop
```

```
docs(readme): update installation instructions
```

```
refactor(core)!: rewrite data processing engine

BREAKING CHANGE: The data processing engine interface has changed significantly. Refer to the updated documentation for migration steps.
```

```
chore: update dependencies
```

```
test(ui): add unit tests for login form validation
```
