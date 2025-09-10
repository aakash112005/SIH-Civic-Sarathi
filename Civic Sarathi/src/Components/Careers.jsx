import { Link } from "react-router-dom";

function Careers() {
  const jobs = [
    {
      title: "Frontend Developer (React)",
      type: "Full-time",
      location: "Remote",
      description:
        "We are looking for a skilled React developer to help us build engaging and user-friendly civic applications.",
      applyLink: "#",
    },
    {
      title: "Backend Developer (Node.js)",
      type: "Full-time",
      location: "Remote",
      description:
        "Join our backend team to design and implement scalable APIs and services powering Civic Sarathi.",
      applyLink: "#",
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Hybrid - New Delhi",
      description:
        "Help us design intuitive and impactful user experiences that make civic engagement easier.",
      applyLink: "#",
    },
    {
      title: "Community Engagement Manager",
      type: "Full-time",
      location: "On-site - New Delhi",
      description:
        "Work directly with citizens and communities to promote adoption of Civic Sarathi and improve services.",
      applyLink: "#",
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Careers at Civic Sarathi</h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Join our mission to make civic engagement smarter, faster, and more accessible.
            Explore open positions and be part of a team that’s shaping the future of
            citizen services.
          </p>
        </div>

        {/* Jobs List */}
        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white shadow rounded-2xl p-6 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-sm text-gray-500 mt-1">
                {job.type} • {job.location}
              </p>
              <p className="text-gray-600 mt-4 flex-1">{job.description}</p>
              <Link
                to={job.applyLink}
                className="mt-6 text-center inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Didn’t find a suitable role? Reach out to us at{" "}
            <span className="font-medium text-gray-800">careers@civicsarathi.com</span>.
          </p>
        </div>
      </div>
    </div>
   
    </>
  );
}

export default Careers;
