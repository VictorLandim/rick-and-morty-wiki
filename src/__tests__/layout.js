import React from 'react';
import { render, cleanup, findByText, findByTestId, queryByTestId } from '@testing-library/react';
import Layout from '../utils/layout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Filter from '../components/layout/Filter';
import Pagination from '../components/layout/Pagination';

describe('Layout components', () => {
  afterEach(cleanup);

  it('renders navbar', async () => {
    const { container } = render(
      <Layout>
        <Navbar />
      </Layout>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders footer', async () => {
    const { container } = render(
      <Layout>
        <Footer />
      </Layout>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders filter', async () => {
    const { container } = render(
      <Layout>
        <Filter />
      </Layout>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders pagination', async () => {
    const paginationProps = {
      next: 2,
      prev: null,
      onNext: jest.fn(),
      onPrev: jest.fn(),
      pages: 25
    };

    const { container } = render(
      <Layout>
        <Pagination {...paginationProps} />
      </Layout>
    );

    const prev = queryByTestId(container, 'pagination-prev');

    const next = await findByTestId(container, 'pagination-next');

    const page = await findByTestId(container, 'pagination-page');

    expect(container).toBeInTheDocument();

    expect(prev).toBeNull();
    expect(page).toBeTruthy();
    expect(next).toBeTruthy();
  });
});
