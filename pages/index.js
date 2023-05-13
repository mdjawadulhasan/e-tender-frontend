import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              <span className="block">Welcome to Tender</span>
              <span className="block text-indigo-600">Make Your Projects Shine</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl">
              Tender is an innovative platform that helps you manage your projects and bring your ideas to life. With our user-friendly interface and powerful features, you can easily collaborate with your team and stay on top of your tasks.
            </p>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Get Started
              </a>
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="flex flex-col justify-between h-full">
              <div className="mx-auto w-full rounded-lg shadow-lg overflow-hidden lg:max-w-md">
                <img src="/images/landing-page.jpg" alt="Landing page" className="w-full" />
              </div>
              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900">Choose Your Role</h2>
                <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2">
                  <a href="http://localhost:8001/tender-manager" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Tender Manager
                  </a>
                  <a href="http://localhost:8001/admin" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                    Admin
                  </a>
                  <a href="http://localhost:8001/agency" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700">
                    Agency
                  </a>
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600">
                    Magister
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
