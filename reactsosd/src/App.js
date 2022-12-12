import { Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState, React } from 'react';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import { getAllTicket } from './utils/functions';
import PaymentPage from './pages/PaymentPage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { HistoryPage } from './pages/HistoryPage';
import { InvoiceDetailPage } from './pages/InvoiceDetailPage';
import { AdminPage } from './pages/AdminPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminRegisterPage } from './pages/AdminRegisterPage';
import { AdminInvoiceCreate } from './components/AdminInvoiceCreate';
import './app.css';
import ErrorBoundary from './components/ErrorBoundary';

export const DataContext = createContext();

function App() {
	const [ data, setData ] = useState('');
	const [ ticket, setTicket ] = useState('');
	const [ user, setUser ] = useState('');

	useEffect(() => {
		async function fetchData() {
			setData(await getAllTicket());
		}
		fetchData();
	}, []);

<<<<<<< Updated upstream
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
=======
	return (
		<DataContext.Provider value={{ data, ticket, setTicket, user, setUser }}>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="/admin/invoicecreate" element={<AdminInvoiceCreate />} />
				<Route path="/admin/login" element={<AdminLoginPage />} />
				<Route path="/admin/register" element={<AdminRegisterPage />} />
				<Route path="/search-ticket/ticket-:id" element={<FormPage />} />
				<Route path="/search-ticket/ticket/payment-:id" element={<PaymentPage />} />
				{/* <Route path='/order' element={<OrderPage />}></Route> */}
				<Route path="/about" element={<AboutPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/history" element={<HistoryPage />} />
				<Route path="/invoicedetail-:id" element={<InvoiceDetailPage />} />
			</Routes>
		</DataContext.Provider>
	);
>>>>>>> Stashed changes
}

export default App;
