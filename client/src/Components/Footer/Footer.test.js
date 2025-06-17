import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './index';
import { within } from '@testing-library/react';

const renderWithRouter = () => {
  return render(
    <Router>
      <Footer />
    </Router>
  );
};

describe('Footer Component', () => {
  test('renders footer with correct content', () => {
    renderWithRouter();
    expect(screen.getByText(/Everyday Fresh Meals/i)).toBeInTheDocument();
    expect(screen.getByText(/Free Delivery for order over \$100/i)).toBeInTheDocument();
    expect(screen.getByText(/Best price on the market/i)).toBeInTheDocument();
    expect(screen.getByText(/Daily Mega Discounts/i)).toBeInTheDocument();
  });

  test('renders footer with correct links', () => {
    renderWithRouter();
    const dessertsSection = screen.getByTestId('desserts-section');

  const dessertLinks = [
    'Chocolate Lava Cake',
    'Cheesecake',
    'Tiramisu',
    'Fruit Tart',
    'Brownie Sundae',
    'Apple Pie',
    'Panna Cotta',
  ];

    dessertLinks.forEach(link => {
    expect(within(dessertsSection).getByText(link)).toBeInTheDocument();
  });
  });

  test('social media links are present', () => {
    renderWithRouter();
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});