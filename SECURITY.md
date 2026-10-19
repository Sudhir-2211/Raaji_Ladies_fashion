# SECURITY.md — Raaji Ladies Fashion

## 1. Security Scope

The initial website is primarily a public-facing website and does not require a customer database, authentication system, or administrative dashboard.

Security requirements should therefore focus on:

- Safe deployment
- Safe handling of configuration
- Safe links
- Input handling where forms exist
- Third-party integrations
- Dependency management
- Privacy
- Future extensibility

---

# 2. No Secrets in Source Code

Never commit:

- API keys
- Passwords
- Access tokens
- Private keys
- Database credentials
- Deployment tokens
- Third-party credentials

Do not place secrets inside:

- React components
- TypeScript files
- Markdown documentation
- Public image metadata
- Git commits

Use environment variables where secrets are required.

---

# 3. Environment Variables

If environment variables become necessary, use:

```text
.env.local
```

Keep `.env.local` out of Git.

Provide a safe example file when needed:

```text
.env.example
```

The example must contain variable names only, not real credentials.

---

# 4. Public vs Private Values

Assume anything shipped to the browser can be inspected by users.

Never place a secret in a client-side environment variable.

Only values intentionally safe for public exposure may be exposed to client-side code.

---

# 5. Forms

If a contact or enquiry form is added:

Validate input on the server when server-side processing is used.

Validate:

- Name
- Phone
- Email
- Message
- Other required fields

Reject clearly invalid input.

Do not trust browser-side validation alone.

---

# 6. User Input

Never directly insert untrusted user input into HTML.

Prevent:

- XSS
- HTML injection
- Script injection

Use framework-safe rendering and appropriate validation/sanitization.

---

# 7. External Links

External links must:

- Point to the intended destination
- Use HTTPS where available
- Be checked before production deployment

For links opening in a new tab, use appropriate security attributes where applicable.

---

# 8. WhatsApp / Phone / Maps

Contact actions should use correct and verified destinations.

Before deployment verify:

- Phone number
- WhatsApp number
- Maps location
- Branch addresses

Do not expose private personal information unnecessarily.

---

# 9. Google Maps

If using a basic map embed or directions link, use the minimum integration necessary.

If a Google Maps API is introduced later:

- Keep credentials out of source control.
- Restrict API keys to the required APIs.
- Restrict keys by appropriate application/domain where supported.
- Monitor usage.
- Do not expose unnecessary APIs.

---

# 10. Images and Uploads

The initial website does not require public customer uploads.

Business/gallery images are maintained by the developer.

If a future admin upload system is introduced:

- Validate file type
- Validate file size
- Validate file extension and MIME type
- Restrict upload permissions
- Generate safe filenames
- Prevent executable file uploads
- Store files outside sensitive application paths where appropriate

---

# 11. Dependencies

Keep dependencies current and intentional.

Before adding a package:

- Confirm it is actually needed.
- Prefer established packages.
- Avoid packages that duplicate existing framework capabilities.
- Check for known security issues.

Remove unused dependencies.

---

# 12. Authentication

There is no authentication requirement for the initial public website.

If authentication is introduced later:

- Never store plaintext passwords.
- Use established authentication libraries/services.
- Protect authenticated routes.
- Implement appropriate session handling.
- Apply authorization separately from authentication.

---

# 13. Database

No database is required for the initial version.

If MySQL is introduced later:

- Use parameterized queries/ORM-safe queries.
- Keep credentials in environment variables.
- Use least-privilege database accounts.
- Validate all incoming data.
- Avoid exposing database access directly to the browser.

---

# 14. API Security

If APIs are introduced:

- Validate requests
- Validate responses where appropriate
- Protect secrets
- Apply rate limiting where necessary
- Restrict origins when appropriate
- Avoid exposing internal errors
- Return safe error messages

---

# 15. Error Handling

Production errors should not expose:

- Stack traces
- Credentials
- Internal file paths
- Database details
- Private configuration
- Internal implementation details

Show users clear, useful error messages.

Log technical details securely where logging is implemented.

---

# 16. Privacy

Only collect customer information that is genuinely required.

If a future form collects personal information:

- Explain why it is collected.
- Do not collect unnecessary sensitive information.
- Do not publish customer information without appropriate permission.
- Protect submitted information appropriately.

---

# 17. Content Security

Do not add:

- Hidden scripts
- Unknown tracking scripts
- Unapproved third-party widgets
- Suspicious embeds

Every third-party integration should have a clear purpose.

---

# 18. Production Checklist

Before deployment verify:

- No secrets in Git
- No `.env.local` committed
- No debug credentials
- No test accounts exposed
- No placeholder API keys
- No insecure HTTP-only production integrations where HTTPS is available
- External links checked
- Forms validated
- Dependencies checked
- Production build succeeds
- No sensitive console logging

