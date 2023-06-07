import React from "react";

const HelpNeed = () => {
  return (
    <div className="mt-40 w-full mb-20">
      <div className="bg-gray-300 h-60"></div>
      <div className="bg-red-300 h-60"></div>
      <div>
        <div className="card md:w-[900px] bg-base-100 shadow-xl md:ml-28 -mt-96">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:flew-row p-6 pb-10">
            <div>
              <h2 className="text-5xl font-bold mt-10">Need Help?</h2>
              <p className="text-base font-semibold text-gray-500 mt-3">
                You can reach out to them over email, visit their classroom or
                office hours, or schedule a meeting with them to ask for the
                support you need
              </p>
            </div>
            <div >
              <div className="grid grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">How can I help you?</span>
                </label>
                <input
                  type="text"
                  placeholder="Message"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-red-400 border-0 btn-primary text-white">Requst clarification</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpNeed;
