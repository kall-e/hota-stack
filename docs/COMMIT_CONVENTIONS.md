# Commit Message Guidelines

We follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) for our commit messages. This leads to more readable messages that are easy to follow when looking through the project history and enables automated tooling for versioning and changelogs.

## Format

Each commit message consists of a **header**, an optional **body**, and an optional **footer**:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Types

Types are categorized by their impact on the codebase:

### API or UI Changes
- **feat**: Adds a new feature or capability (correlates with MINOR in semver)
- **fix**: Fixes a bug in existing functionality (correlates with PATCH in semver)

### Code Quality
- **refactor**: Rewrites/restructures code without changing behavior
- **perf**: Special type of refactor that improves performance
- **style**: Changes that don't affect code meaning (whitespace, formatting, etc.)

### Non-Code Changes
- **docs**: Documentation only changes
- **test**: Adding or correcting tests

### Infrastructure
- **build**: Changes affecting build system, dependencies, or project version
- **ci**: Changes to CI configuration and scripts
- **chore**: Other changes that don't modify src or test files

## Scope

The scope provides additional contextual information:

- Is contained within parentheses, e.g., `feat(auth):`
- Must be a noun describing the section of codebase
- Should not use issue identifiers
- Examples: `api`, `ui`, `auth`, `db`, `core`

## Description

The description contains a concise explanation of the change:

- Use imperative, present tense: "add" not "added" or "adds"
- Start with lowercase letter
- No period at the end
- Keep it under 72 characters
- Think: "This commit will [description]"

Examples:
✅ Good: `feat(auth): add OAuth2 support for Google login`
❌ Bad: `feat(auth): Added google OAuth2 support.`

## Body

The body should explain the motivation for the change:

- Use imperative, present tense
- Explain the "why" not the "what"
- Include context and contrasts with previous behavior
- Wrap at 72 characters

Example:
```
refactor(api): simplify error handling logic

Replace custom error handling with standard HTTP status codes.
This makes the API more predictable and easier to consume.
```

## Breaking Changes

Breaking changes must be indicated in one of two ways:

1. Add `!` before the colon:
```
feat(api)!: remove deprecated user endpoints
```

2. Include `BREAKING CHANGE:` in footer:
```
feat(api): change authentication flow

BREAKING CHANGE: JWT tokens now required instead of session cookies
```

## Examples

```
feat(ui): add dark mode toggle
fix(api): resolve rate limiting issue
docs(readme): update deployment instructions
refactor(core): simplify data processing pipeline
perf(queries): optimize database indexing
style: standardize code formatting
test(auth): add unit tests for password reset
build(deps): update dependencies to latest versions
ci(github): configure automated releases
chore: update .gitignore patterns
```

## Relation to Semantic Versioning

- `fix:` → PATCH version
- `feat:` → MINOR version
- `BREAKING CHANGE:` → MAJOR version (any type)
