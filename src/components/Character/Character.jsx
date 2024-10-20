import Rick from "../Rick/Rick"

import ErrorFallback from "../Error/Error"

import { ErrorBoundary } from 'react-error-boundary';

const Home = () => {

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
      <Rick />
    </ErrorBoundary>

  )

}

export default Home
