import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NewQuote from "./pages/NewQuote";
import Page404 from "./pages/Page404";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>

        <Route path='/quotes' component={Quotes} exact />
        <Route path='/quotes/:quoteId' component={QuoteDetail} />
        <Route path='/new-quote' component={NewQuote} />

        <Route path='*' component={Page404} />
      </Switch>
    </Layout>
  );
}

export default App;
