import { Route, Routes, useNavigate } from 'react-router-dom';
import { createContext, useEffect, useState, React } from 'react';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import { getAllTicket } from './utils/functions';
import PaymentPage from './pages/PaymentPage';
import { OrderPage } from './pages/OrderPage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { HistoryPage } from './pages/HistoryPage';
import { InvoiceDetailPage } from './pages/InvoiceDetailPage';
import { AdminPage } from './pages/AdminPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminRegisterPage } from './pages/AdminRegisterPage';
import './app.css';
import ErrorBoundary from './components/ErrorBoundary';
import { ErrorPage } from './pages/ErrorPage';

export const DataContext = createContext();

function App() {
  const [data, setData] = useState('');
  const [ticket, setTicket] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    async function fetchData() {
      setData(await getAllTicket());
    }
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, ticket, setTicket, user, setUser }}>
      <Routes>
        <Route
          path='/'
          element={
            <ErrorBoundary>
              <HomePage />
            </ErrorBoundary>
          }
        ></Route>
        <Route
          path='/admin'
          element={
            <ErrorBoundary>
              <AdminPage />
            </ErrorBoundary>
          }
        ></Route>
        <Route
          path='/admin/login'
          element={
            <ErrorBoundary>
              <AdminLoginPage />
            </ErrorBoundary>
          }
        ></Route>
        <Route
          path='/admin/register'
          element={
            <ErrorBoundary>
              <AdminRegisterPage />
            </ErrorBoundary>
          }
        ></Route>
        <Route
          path='/search-ticket/ticket-:id'
          element={
            <ErrorBoundary>
              <FormPage />
            </ErrorBoundary>
          }
        ></Route>
        <Route
          path='/search-ticket/ticket/payment-:id'
          element={
            <ErrorBoundary>
              <PaymentPage />
            </ErrorBoundary>
          }
        ></Route>
        <Route
          path='/about'
          element={
            <ErrorBoundary>
              <AboutPage />
            </ErrorBoundary>
          }
        ></Route>
        <Route
          path='/login'
          element={
            <ErrorBoundary>
              <LoginPage />
            </ErrorBoundary>
          }
        ></Route>
        <Route
          path='/register'
          element={
            <ErrorBoundary>
              <RegisterPage />
            </ErrorBoundary>
          }
        ></Route>
        <Route
          path='/history'
          element={
            <ErrorBoundary>
              {' '}
              <HistoryPage />
            </ErrorBoundary>
          }
        ></Route>
        <Route
          path='/invoicedetail-:id'
          element={<InvoiceDetailPage />}
        ></Route>
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
