export default function Guidelines() {
    return (
      <div className="bg-gray-50 py-12 px-6 lg:px-24 ">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
            SDI2025 Guidelines
          </h1>
          <div className="space-y-6">
            {/* Executive Pitch Video Guidelines */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Executive Pitch Video Guidelines
              </h2>
              <ul className="space-y-3 pl-5 list-disc text-gray-700">
                <li>
                  <strong>Format Requirements:</strong> Maximum time limit is 3
                  minutes. Video should be recorded in landscape format with one
                  or more team members speaking.
                </li>
                <li>
                  <strong>Content Requirements:</strong> The video should:
                  <ol className="list-decimal pl-5 space-y-2 mt-2">
                    <li>
                      Highlight the selected theme for the competition, including
                      the rationale behind the choice.
                    </li>
                    <li>
                      Summarize understanding of technology, including AI
                      utilization and existing policies.
                    </li>
                    <li>
                      Present one or more tech and innovation-driven ideas or use
                      cases.
                    </li>
                    <li>
                      Conclude with a synthesis of targeted outcomes.
                    </li>
                  </ol>
                  <p className="mt-2 text-gray-600">
                    Suggested time split: 30s : 20s : 100s : 30s.
                  </p>
                </li>
                <li>
                  <strong>Submission Requirements:</strong> Upload the YouTube
                  video link (set as "unlisted") via the provided link on the
                  website.
                </li>
              </ul>
            </div>
  
            {/* Concept Note Guidelines */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Concept Note Guidelines
              </h2>
              <ul className="space-y-3 pl-5 list-disc text-gray-700">
                <li>
                  Maximum length: <strong>2 pages</strong>.
                </li>
                <li>
                  Formatting: Use <strong>Arial 10pt</strong>, margins not less
                  than <strong>0.25 inches</strong>, and line spacing of{" "}
                  <strong>1.5</strong>.
                </li>
                <li>
                  Content:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong>Choice of Theme:</strong> State the selected theme
                      and rationale.
                    </li>
                    <li>
                      <strong>Current State of Affairs:</strong> Discuss
                      technology utilization, including AI and existing policies
                      in the chosen theme for Delhi.
                    </li>
                    <li>
                      <strong>Solutions:</strong> Describe tailored use cases
                      leveraging technology, building on existing interventions.
                    </li>
                    <li>
                      <strong>Feasibility:</strong> Explain why the solutions are
                      practical and impactful.
                    </li>
                    <li>
                      <strong>Risks:</strong> Identify up to 5 key risks and how
                      to mitigate them.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
  
            {/* Solution Feasibility Matrix */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Solution Feasibility Matrix (Evaluation Criteria)
              </h2>
              <ul className="space-y-3 pl-5 list-disc text-gray-700">
                <li>
                  <strong>Game-Changing Innovation:</strong> Introduce novel ideas
                  or transform existing initiatives.
                </li>
                <li>
                  <strong>Socio-Political Desirability:</strong> Align with Delhi
                  citizens' needs, values, and sentiments.
                </li>
                <li>
                  <strong>Scalability:</strong> Design solutions for broader
                  geographical impact and diverse beneficiaries.
                </li>
                <li>
                  <strong>Stakeholder Alignment:</strong> Present clear value
                  propositions for collaboration and implementation.
                </li>
                <li>
                  <strong>Financial Viability:</strong> Ensure cost-effectiveness
                  with measurable socioeconomic benefits.
                </li>
                <li>
                  <strong>National Replicability:</strong> Make solutions
                  adaptable across other states and regions.
                </li>
              </ul>
            </div>
          </div>
  
          {/* Submission Deadline */}
          <div className="mt-8 p-4 bg-indigo-100 text-indigo-800 font-semibold rounded-lg">
            <p>
              <strong>Submission Deadline:</strong> 18 January 2025, 11:59 PM
            </p>
            <p>
              Upload your pitch video link and concept note at:{" "}
              <a
                href="https://www.sdi2025.in"
                className="text-indigo-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.sdi2025.in
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  