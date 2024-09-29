import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section class="bg-gray-900 h-[90vh]">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white ">
            404
          </h1>
          <Link to={`/`}>
            <button className="btn btn-outline btn-success ">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
