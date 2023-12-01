import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { HomeCards } from '@pages/home-cards';
import { Layout } from '@components/Layout';
import { IChildrenProps } from '@/interfaces/app.interfaces';
import { HomePage } from '@/pages/home';
import { SignIn } from '@pages/sign-in';
import { SignUp } from '@pages/sign-up';
import { ResultsPage } from '@/pages/results';
import { AdditionalServices } from '@pages/additional-services/';
import { AdminUsers } from '@/pages/admin/users';
import { AdminTimeZones } from '@/pages/admin/time-zones';
import { ExtraBaggage } from '@pages/extra-baggage';
import { AircraftListPage } from '@pages/admin/aircraft-list';
import { AdminDestinations } from '@/pages/admin/destination';
import { AdminLayout } from '@components/AdminLayout';
import { Payment } from '@pages/payment';
import { AdminSignIn } from '@/pages/admin/sign-in';
import { ThanksPage } from '@pages/thanks-page';
import { SeatsListPage } from '@pages/admin/seats-list';
import { FlightsPage } from '@/pages/admin/flights';
import { TicketsV2Page } from '@pages/admin/tickets-v2';
import { ClientLayout } from '@components/ClientLayout';
import { NewSignUpPage } from '@pages/new-sign-up';
import { NewSignInPage } from '@pages/new-sign-in';
import { BookingPage } from '@pages/admin/booking';

const App: FC<IChildrenProps> = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ClientLayout />}>
        <Route path="/new-sign-in" element={<NewSignInPage />} />
        <Route path="/new-sign-up" element={<NewSignUpPage />} />
      </Route>
      <Route path="/old-route" element={<Layout />}>
        <Route path="/old-route/sign-up" element={<SignUp />} />
        <Route path="/old-route/sign-in" element={<SignIn />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search/results" element={<ResultsPage />} />
        <Route path="/cards" element={<HomeCards />} />
        <Route path="/additional-services" element={<AdditionalServices />} />
        <Route path="/baggage" element={<ExtraBaggage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/thanks" element={<ThanksPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin" element={<AdminSignIn />} />
        <Route path="/admin/destinations" element={<AdminDestinations />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/aircraft-list" element={<AircraftListPage />} />
        <Route path="/admin/aircraft-list/:seat" element={<SeatsListPage />} />
        <Route path="/admin/flights" element={<FlightsPage />} />
        <Route path="/admin/tickets" element={<TicketsV2Page />} />
        <Route path="/admin/time-zones" element={<AdminTimeZones />} />
        <Route path="/admin/booking" element={<BookingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
