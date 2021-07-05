import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Loader from "./components/UI/Loader";

//import NewQuote from "./pages/NewQuote";
//import Page404 from "./pages/Page404";
//import QuoteDetail from "./pages/QuoteDetail";
//import Quotes from "./pages/Quotes";

// Lazy components
const Quotes = React.lazy(() => import("./pages/Quotes"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const Page404 = React.lazy(() => import("./pages/Page404"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>

          <Route path='/quotes' component={Quotes} exact />
          <Route path='/quotes/:quoteId' component={QuoteDetail} />

          <Route path='/new-quote' component={NewQuote} />

          <Route path='*' component={Page404} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
