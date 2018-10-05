## Error boundaries

- Catches serious errors only: during rendering, lifecycle methods and constructors
- They catch nothing else (async, event handler, etc)
- Most useful as a fallback from sneaky render errors
