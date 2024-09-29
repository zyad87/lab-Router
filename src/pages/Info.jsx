import React from 'react';
import NavBar from '../components/NavBar';
import imgLogo from '../assets/image.png';

function Info() {
  return (
    <>
      <NavBar />
      <div className="hero min-h-screen bg-base-250">
        <div className="hero-content text-center">
          <div className="flex justify-center items-center flex-col">
            <div className="card w-80 bg-base-100 shadow-xl ">
              <figure>
                <img src={imgLogo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                React: The Future of Frontend Development
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                React is one of the most popular libraries for web development, enabling developers to build dynamic and interactive user interfaces. It is based on the concept of components,
                making code reuse and scalable application development much easier. At Tuwaiq Academy, students learn how to use React to create robust and seamless web applications, preparing them for the demands of the job market.
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">UI/UX</div>
                  <div className="badge badge-outline">Html</div>
                  <div className="badge badge-outline">Css</div>
                  <div className="badge badge-outline">Js</div>
                  <div className="badge badge-outline">React</div>
                  <div className="badge badge-outline">And more!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Info;
