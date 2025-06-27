import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import PageHeader from '@/components/Dashboard/PageHeader';
import StatsCardGrid from '@/components/Dashboard/StatsCardGrid';

/**
 * The main dashboard overview page.
 * This component serves as the entry point for the dashboard view.
 * It utilizes MainAppLayout for the overall page structure, including the
 * fixed header, and populates the main content area with the
 * PageHeader and StatsCardGrid components.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* The main content is composed of modular sections. */}
      {/* PageHeader provides the title for the dashboard. Its internal vertical padding creates space. */}
      <PageHeader />
      {/* StatsCardGrid displays the key performance indicators. */}
      <StatsCardGrid />
    </MainAppLayout>
  );
};

export default IndexPage;
