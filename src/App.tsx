/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DesignSystem } from './components/DesignSystem';
import { LandingPage } from './components/LandingPage';
import { BioPage } from './components/BioPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bio" element={<BioPage />} />
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/designsystem" element={<DesignSystem />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}
