import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="info-container">
        <h1>
          <p>João</p>
          <p>César</p>
        </h1>
        <h2 className="current-title-header">Senior Software Engineer</h2>
        <div className="contacts-container">
          <p>joao.as.cesar@gmail.com</p>
          <span>github, facebook, instagram, linkedin</span>
        </div>
        <h2 className="education-header">Education</h2>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <th scope="col" className="px-6 py-3">Course Name</th>
            <th scope="col" className="px-6 py-3 w-2/5">From - To</th>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">Engenharia de Computadores e Telemática</td>
              <td className="px-6 py-4">2009 - 2015</td>
            </tr>
          </tbody>
        </table>
        <h2 className="skills-header">Skills</h2>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <th scope="col" className="px-6 py-3">Skill</th>
            <th scope="col" className="px-6 py-3 w-2/5">Rating</th>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">React</td>
              <td className="px-6 py-4">9/10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="info-container">
        <h2>Work</h2>
        <ol>
          <li className="job-container">
            <p className="job-title">Senior Software Engineer at Lively</p>
            <p className="job-date">September 2023 - ...</p>
            <p className="job-description">
              Lorem ipsum, ask chatgpt to help describe
            </p>
          </li>
          <li className="job-container">
            <p className="job-title">Engineering Manager at Feedzai</p>
            <p className="job-date">July 2022 - September 2023</p>
            <p className="job-description">
              Lorem ipsum, ask chatgpt to help describe
            </p>
          </li>
          <li className="job-container">
            <p className="job-title">Senior Software Engineer at Feedzai</p>
            <p className="job-date">September 2020 - July 2022</p>
            <p className="job-description">
              Lorem ipsum, ask chatgpt to help describe
            </p>
          </li>
          <li className="job-container">
            <p className="job-title">Software Engineer at Feedzai</p>
            <p className="job-date">July 2018 - September 2020</p>
            <p className="job-description">
              Lorem ipsum, ask chatgpt to help describe
            </p>
          </li>
          <li className="job-container">
            <p className="job-title">Software Engineer at Altice Portugal</p>
            <p className="job-date">September 2015 - July 2018</p>
            <p className="job-description">
              Lorem ipsum, ask chatgpt to help describe
            </p>
          </li>
        </ol>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
