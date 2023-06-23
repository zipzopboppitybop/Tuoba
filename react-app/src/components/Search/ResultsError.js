import { useLocation } from "react-router-dom"
import './ResultsPage.css'
function ResultsErrorMessage() {
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('query')
  return (
    <div className='no-results'>
      <h1>Sorry, there are no results for {query}.</h1>
      <h2>Please search for Questions or user's names.</h2>
      <h3></h3>
    </div>
  )
}

export default ResultsErrorMessage
