import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import ThemeToggle from '../../Template/ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    window.localStorage.clear();
    // The no-flash script in the app layout owns the initial data-theme;
    // here we set it directly to simulate that, then let the toggle flip it.
    document.documentElement.removeAttribute('data-theme');
  });

  it('renders theme toggle button', async () => {
    render(<ThemeToggle />);

    await waitFor(() => {
      expect(screen.getByRole('button')).toHaveClass('theme-toggle');
    });
  });

  it('has an accessible label', async () => {
    render(<ThemeToggle />);

    await waitFor(() => {
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-label',
        expect.stringMatching(/theme/i),
      );
    });
  });

  it('toggles from dark to light and persists', async () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    render(<ThemeToggle />);

    const button = await screen.findByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
      expect(window.localStorage.getItem('theme')).toBe('light');
    });
  });

  it('toggles from light to dark and persists', async () => {
    document.documentElement.setAttribute('data-theme', 'light');
    render(<ThemeToggle />);

    const button = await screen.findByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
      expect(window.localStorage.getItem('theme')).toBe('dark');
    });
  });
});
