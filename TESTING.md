# Testing Documentation

## Overview

This project implements a comprehensive testing strategy covering:
- ✅ Unit Testing (Jest + React Testing Library)
- ✅ Integration Testing (React Testing Library + MSW)
- ✅ End-to-End Testing (Playwright)
- ✅ Accessibility Testing (axe-core)
- ✅ Performance Testing (Lighthouse CI)

## Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run all tests
npm run test:all

# Run unit tests
npm test

# Run unit tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run E2E tests in debug mode
npm run test:e2e:debug

# Run Lighthouse performance tests
npm run test:lighthouse
```

## Test Structure

```
├── __tests__/              # Unit and integration tests
│   ├── lib/               # Library function tests
│   │   └── utils.test.ts
│   └── components/        # Component tests
│       ├── PixelButton.test.tsx
│       ├── PixelCard.test.tsx
│       ├── PixelBadge.test.tsx
│       └── SearchBar.test.tsx
├── e2e/                   # End-to-end tests
│   ├── navigation.spec.ts
│   ├── blog.spec.ts
│   ├── projects.spec.ts
│   └── accessibility.spec.ts
├── jest.config.js         # Jest configuration
├── jest.setup.js          # Jest setup
├── playwright.config.ts   # Playwright configuration
└── lighthouserc.json     # Lighthouse CI configuration
```

## Unit Testing

### Framework
- **Jest** - Test runner
- **React Testing Library** - Component testing
- **@testing-library/jest-dom** - Custom matchers

### What We Test
- Utility functions (`lib/utils.ts`)
- Component rendering and behavior
- Event handlers
- Component states
- Props handling

### Example

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { PixelButton } from '@/components/pixel-button'

describe('PixelButton', () => {
  it('renders children correctly', () => {
    render(<PixelButton>Click me</PixelButton>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<PixelButton onClick={handleClick}>Click</PixelButton>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### Coverage Targets
- **Branches:** 70%
- **Functions:** 70%
- **Lines:** 70%
- **Statements:** 70%

### Running Unit Tests

```bash
# Run all unit tests
npm test

# Run with coverage
npm run test:coverage

# Run in watch mode (for development)
npm run test:watch

# Run specific test file
npm test -- utils.test.ts
```

## Integration Testing

Integration tests verify that multiple components work together correctly.

### What We Test
- Page rendering with data fetching
- Form submissions
- Navigation flows
- Search and filter interactions

### Example

```typescript
describe('Blog Page', () => {
  it('displays list of blog posts', async () => {
    render(<BlogPage />)
    await waitFor(() => {
      expect(screen.getByText('Blog')).toBeInTheDocument()
    })
  })

  it('filters posts by search query', async () => {
    render(<BlogPage />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    fireEvent.change(searchInput, { target: { value: 'test' } })
    
    await waitFor(() => {
      expect(screen.getByText(/found/i)).toBeInTheDocument()
    })
  })
})
```

## End-to-End Testing

### Framework
- **Playwright** - Browser automation

### What We Test
- Full user journeys
- Navigation flows
- Form submissions
- Search and filter functionality
- Mobile responsive behavior
- Cross-browser compatibility

### Browser Coverage
- ✅ Chromium (Desktop)
- ✅ Firefox (Desktop)
- ✅ WebKit/Safari (Desktop)
- ✅ Mobile Chrome (Pixel 5)
- ✅ Mobile Safari (iPhone 12)

### Example

```typescript
import { test, expect } from '@playwright/test'

test('user can navigate through all main pages', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toContainText('Brian Best')
  
  await page.click('text=About')
  await expect(page).toHaveURL('/about')
})
```

### Running E2E Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run with UI mode (interactive)
npm run test:e2e:ui

# Run in debug mode
npm run test:e2e:debug

# Run specific test file
npx playwright test e2e/navigation.spec.ts

# Run on specific browser
npx playwright test --project=chromium

# Run in headed mode (see browser)
npx playwright test --headed
```

## Accessibility Testing

### Framework
- **@axe-core/playwright** - Automated accessibility testing

### What We Test
- WCAG 2.1 compliance
- Keyboard navigation
- Screen reader compatibility
- Color contrast
- ARIA labels
- Form accessibility

### Standards
- **WCAG Level:** AA
- **Target Score:** 100%

### Example

```typescript
import AxeBuilder from '@axe-core/playwright'

test('home page should not have accessibility violations', async ({ page }) => {
  await page.goto('/')
  
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
  expect(accessibilityScanResults.violations).toEqual([])
})
```

### Manual Accessibility Checklist
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators clearly visible
- [ ] Screen reader announces all content correctly
- [ ] Form errors announced to assistive tech
- [ ] Skip navigation link present
- [ ] All images have meaningful alt text
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text)

## Performance Testing

### Framework
- **Lighthouse CI** - Automated performance auditing

### Metrics & Targets

| Metric | Target | Weight |
|--------|--------|--------|
| Performance | ≥ 85 | High |
| Accessibility | ≥ 90 | High |
| Best Practices | ≥ 90 | Medium |
| SEO | ≥ 90 | Medium |
| FCP (First Contentful Paint) | < 2s | High |
| LCP (Largest Contentful Paint) | < 2.5s | High |
| CLS (Cumulative Layout Shift) | < 0.1 | High |
| TBT (Total Blocking Time) | < 300ms | Medium |

### Pages Tested
- Home (`/`)
- About (`/about`)
- Blog (`/blog`)
- Projects (`/projects`)
- Contact (`/contact`)
- Now (`/now`)
- Uses (`/uses`)

### Running Performance Tests

```bash
# Run Lighthouse CI
npm run test:lighthouse

# Build and test locally
npm run build
npm run start
# In another terminal:
npm run test:lighthouse
```

### Lighthouse Configuration

The Lighthouse CI configuration is in `lighthouserc.json`:
- 3 runs per URL (averaged)
- Desktop preset
- Assertions for all major metrics
- Results uploaded to temporary public storage

## Continuous Integration

### GitHub Actions Workflow

The `.github/workflows/test.yml` file defines our CI pipeline:

1. **Linting** - ESLint checks
2. **Type Checking** - TypeScript validation
3. **Unit Tests** - Jest with coverage
4. **Build** - Next.js production build
5. **E2E Tests** - Playwright across browsers
6. **Lighthouse** - Performance audits

### Running on CI

Tests run automatically on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop`

### Matrix Testing
- Node.js versions: 18.x, 20.x
- Multiple browsers via Playwright

## Test Data Management

### Mock Data
- Posts: `lib/posts.ts` - 3 mock blog posts
- Projects: `lib/projects.ts` - 4 mock projects

### Mocking Strategy
1. **API Calls:** Mock Sanity CMS responses
2. **Navigation:** Mock next/navigation hooks
3. **Observers:** Mock IntersectionObserver
4. **External Services:** Mock third-party APIs

## Best Practices

### Writing Tests

1. **Follow AAA Pattern**
   - Arrange: Set up test data and conditions
   - Act: Execute the code being tested
   - Assert: Verify the results

2. **Use Descriptive Test Names**
   ```typescript
   it('displays error message when form submission fails', () => {})
   ```

3. **Test User Behavior, Not Implementation**
   ```typescript
   // Good
   expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
   
   // Avoid
   expect(container.querySelector('.submit-btn')).toBeTruthy()
   ```

4. **Keep Tests Independent**
   - Each test should run in isolation
   - Don't rely on test execution order
   - Clean up after each test

5. **Use Data-testid Sparingly**
   - Prefer semantic queries (role, label, text)
   - Use data-testid only when necessary

### Test Organization

```typescript
describe('ComponentName', () => {
  describe('rendering', () => {
    it('renders correctly with default props', () => {})
    it('renders correctly with custom props', () => {})
  })

  describe('interactions', () => {
    it('handles click events', () => {})
    it('handles form submission', () => {})
  })

  describe('edge cases', () => {
    it('handles empty state', () => {})
    it('handles error state', () => {})
  })
})
```

## Debugging

### Jest

```bash
# Run tests in debug mode
node --inspect-brk node_modules/.bin/jest --runInBand

# Add debugger statement in test
test('my test', () => {
  debugger
  // test code
})
```

### Playwright

```bash
# Run in debug mode (opens inspector)
npm run test:e2e:debug

# Run with headed browser
npx playwright test --headed

# Run with slowmo
npx playwright test --headed --slow-mo=1000

# Generate codegen
npx playwright codegen http://localhost:3000
```

## Troubleshooting

### Common Issues

**Issue:** Tests fail with "Cannot find module '@/...'"
**Solution:** Check `moduleNameMapper` in `jest.config.js`

**Issue:** Playwright tests timeout
**Solution:** Increase timeout in `playwright.config.ts` or specific test

**Issue:** Coverage below threshold
**Solution:** Add tests for uncovered code or adjust thresholds in `jest.config.js`

**Issue:** E2E tests fail on CI but pass locally
**Solution:** Ensure webServer is configured correctly in `playwright.config.ts`

## Coverage Reports

### Viewing Coverage

```bash
# Generate and open coverage report
npm run test:coverage
open coverage/lcov-report/index.html
```

### Coverage Location
- HTML Report: `coverage/lcov-report/index.html`
- LCOV File: `coverage/lcov.info` (for CI integration)
- JSON Report: `coverage/coverage-final.json`

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Maintenance

### Updating Test Dependencies

```bash
# Check for updates
npm outdated

# Update specific package
npm update @testing-library/react

# Update all packages
npm update
```

### Adding New Tests

1. Create test file in appropriate directory
2. Follow naming convention: `*.test.tsx` or `*.spec.ts`
3. Import necessary testing utilities
4. Write descriptive test cases
5. Run tests to verify
6. Check coverage impact

## Summary

This testing setup provides:
- ✅ Comprehensive test coverage (unit, integration, E2E)
- ✅ Automated accessibility checks
- ✅ Performance monitoring
- ✅ Cross-browser testing
- ✅ CI/CD integration
- ✅ Clear documentation and examples

**Current Status:**
- Unit Tests: 7 test files, covering key components and utilities
- E2E Tests: 4 test files, covering critical user journeys
- Accessibility: Automated scans on all major pages
- Performance: Lighthouse CI configured for 7 pages
- CI/CD: GitHub Actions workflow configured

**Target Coverage:** 70%+ (branches, functions, lines, statements)

---

*Last Updated: October 7, 2025*
