import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFtlM5l4pgeb61Ozn8gfzKmBmJN6xPeUWKQ&s"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">React Router with React</h1>
            <p className="py-6">
Master seamless navigation in React applications with React Router! Learn how to build multi-page web experiences in a single-page application without refreshing the browser. Go beyond static pages and explore advanced routing techniques to create dynamic, job-ready React projects.

            </p>
            <Link to={'../info'}>
              <button className="btn btn-secondary">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
