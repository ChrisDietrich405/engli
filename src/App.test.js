import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders main title', () => {
    render(<App />);
    const mainTitle = screen.getByText('Chris');
    expect(mainTitle).toBeInTheDocument();
  });

  test('renders online credentials', () => {
    render(<App />);
    const onlineCredentials = screen.getByText('aulas de inglês online');
    expect(onlineCredentials).toBeInTheDocument();
  });

  // Add more test cases for other parts of your component as needed

  // For example:
  test('renders testimonials section', () => {
    render(<App />);
    const testimonialsSection = screen.getByText('O que estao dizendo?');
    expect(testimonialsSection).toBeInTheDocument();
  });
});
