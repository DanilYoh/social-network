import { render, screen } from '@testing-library/react';

import { TravelCard } from '@common/TravelCard';

const mockCard = {
  title: 'DISCOVER',
  header: 'Explore the world',
  text: 'We fly over 200 destinations around the world. Explore all our destinations and new routes.',
  image: 'https://i.ibb.co/4gXNq04/discover.png',
};

describe('Travel Card tests', () => {
  it('Cards labels', () => {
    render(<TravelCard {...mockCard} />);
    expect(screen.getByText('DISCOVER')).toBeInTheDocument();
    expect(screen.getByText('Explore the world')).toBeInTheDocument();
    expect(
      screen.getByText(/We fly over 200 destinations/i)
    ).toBeInTheDocument();
  });

  it('Image Tests', () => {
    render(<TravelCard {...mockCard} />);
    expect(screen.getByAltText('card image')).toBeInTheDocument();
  });
});
