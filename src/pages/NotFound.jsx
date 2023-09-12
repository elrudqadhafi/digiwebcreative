import { Link, useRouteError } from "react-router-dom"

import ErrorImage from "../assets/erorimage1.png"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className="eror">
      <h1>{error.statusText || error.message} !</h1>
      <img src={ErrorImage} alt="eror" loading="lazy" />
      <button>
        <Link to="/">Kembali</Link>
      </button>
    </div>
  )
}

export default ErrorPage
