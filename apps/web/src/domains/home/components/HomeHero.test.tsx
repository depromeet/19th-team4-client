import { render, screen } from '@testing-library/react';

import { HomeHero } from '@/domains/home/components/HomeHero';

describe('HomeHero', () => {
  it('제목과 공유 패키지로 포맷한 가격을 보여준다', () => {
    render(<HomeHero />);

    expect(screen.getByRole('heading', { name: '19th Team4' })).toBeInTheDocument();
    expect(screen.getByText('12,000원')).toBeInTheDocument();
  });
});
