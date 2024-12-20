import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Page, Bar, Button } from '@ui5/webcomponents-react';
import List from './List';
import Form from './component/Form';

function App() {
  return (
    <Router>
      <Page
        backgroundDesign="Solid"
        footer={
          <div>
            <Bar
              design="FloatingFooter"
              endContent={
                <>
                  <Button design="Positive">Accept</Button>
                  <Button design="Negative">Decline</Button>
                  <Button design="Transparent">Cancel</Button>
                </>
              }
            />
          </div>
        }
        style={{ height: '800px', position: 'fixed', bottom: '0px' }}
      >
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Page>
    </Router>
  );
}

export default App;
