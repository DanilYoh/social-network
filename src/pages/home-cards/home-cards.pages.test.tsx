import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { HomeCards } from '@pages/home-cards';

const mockState = [
  {
    title: 'DISCOVER',
    header: 'Explore the world',
    text: 'We fly over 200 destinations around the world. Explore all our destinations and new routes.',
    image: 'https://i.ibb.co/4gXNq04/discover.png',
  },
  {
    title: 'HOLIDAY DESTINATIONS',
    header: 'Get inspired',
    text: 'Looking for summer destinations, city gate aways or hidden gems? Discover best locations across the globe.',
    image: 'https://i.ibb.co/KVmVFk7/inspired.png',
  },
  {
    title: 'OUR BEST OFFERS',
    header: 'Surprise yourself ',
    text: 'Benefit from our best deals and fly to your favourite  destinations. Or maybe explore a new one?',
    image: 'https://i.ibb.co/xHkwqzq/surprise.png',
  },

  {
    title: 'ADDITIONAL SERVICES',
    header: 'Enjoy extra comfort',
    text: 'Explore our additional services including seat selection, extra baggage, add-on in-flight menus',
    image: 'https://i.ibb.co/xGWYz1M/enjoy.png',
  },
];

describe('Cards List tests', () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <HomeCards />
      </BrowserRouter>,
      {
        preloadedState: {
          cards: mockState,
        },
      }
    );
  });
  it('Container check labels', () => {
    expect(screen.getByTestId(/cardsWrapper/i)).toBeInTheDocument();
    expect(screen.getByText('Travel Regulations')).toBeInTheDocument();
    expect(
      screen.getByText(/Dear Passengers, We recommend that you review/i)
    ).toBeInTheDocument();
    expect(screen.getByText('DISCOVER')).toBeInTheDocument();
    expect(screen.getByText('HOLIDAY DESTINATIONS')).toBeInTheDocument();
    expect(screen.getByText('OUR BEST OFFERS')).toBeInTheDocument();
    expect(screen.getByText('ADDITIONAL SERVICES')).toBeInTheDocument();
  });

  it('Cards texts', () => {
    expect(
      screen.getByText(/We fly over 200 destinations/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Looking for summer destinations/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Benefit from our best deals/)).toBeInTheDocument();
    expect(
      screen.getByText(/Explore our additional services/)
    ).toBeInTheDocument();
  });
  it('Image Tests', () => {
    expect(screen.getAllByAltText('card image')).toHaveLength(4);
  });
});
