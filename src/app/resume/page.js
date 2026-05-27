"use client";

import { useEffect, useReducer, useState } from "react";
import { helper } from "@/app/assets/js/helper";

import { ListItemSkeleton } from "@/app/components/skeleton";

export default function Page() {
  const [_resume, setResume] = useState([]);

  const [_showList, setShowList] = useReducer((_showList) => !_showList, false);

  useEffect(() => {
    helper.getData({ url: "/resume" }).then((data) => {
      setResume(data);
      setTimeout(() => {
        setShowList(true);
      }, 2000);
    });
  }, []);

  return (
    <div className="resume col-span-12">
      <div className={_showList ? "hidden" : "block"}>
        {Array.from({ length: 7 }).map((_, i) => (
          <ListItemSkeleton key={i} />
        ))}
      </div>
      <div className={_showList ? "block" : "hidden"}>
        <div className="grid grid-cols-1">
          <h1 className="">
            <a
              className="underline"
              href="https://www.linkedin.com/in/diegolopes1990"
              target="_blank"
            >
              https://www.linkedin.com/in/diegolopes1990
            </a>
          </h1>
        </div>

        <div className="grid grid-cols-1">
          <div>
            <h2 className="">Summary</h2>
            <p>
              Experience in software engineering combined with a proven track
              record of leading cross-functional teams, structuring QA and
              product management processes, and delivering multidisciplinary
              projects with measurable impact. As a Technology and Product
              professional, I connect business objectives with technology
              solutions, with a strong focus on digital payments and e-commerce.
              I am an expert in aligning business objectives with scalable
              technological solutions, driving innovation and operational
              efficiency. My technical stack includes frontend and backend
              development, API design, microservices architecture, platform
              integrations, automated testing, and agile methodologies.
            </p>
          </div>
          <div>
            <h2 className="">Key Skills</h2>
            <span className="block pt-4">
              . Solution Architecture (Technical & Strategic Vision)
            </span>
            <span className="block">. Software Engineering</span>
            <span className="block">. Systems and API Integrations</span>
            <span className="block">. REST APIs & Microservices</span>
            <span className="block">
              . Agile Methodologies (Scrum / Kanban)
            </span>
            <span className="block">. Technology Strategy</span>
            <span className="block">. Technical Leadership</span>
            <span className="block">. Project Management</span>
            <span className="block">. Roadmap Planning & Prioritization</span>
            <span className="block">. Stakeholder Management</span>
          </div>
        </div>
        <div className="experience grid grid-cols-1">
          <h2 className="">Professional Experience</h2>
          {_resume.length > 0
            ? _resume.map((v, k) => {
                return (
                  <div className="roles" key={v.company + k}>
                    <h3 key={k}>{v.company}</h3>

                    {v.roles.map((vv, kk) => {
                      return (
                        <div key={vv.role + kk}>
                          <h4 key={kk}>{vv.role}</h4>
                          {vv.description.map((vvv, kkk) => {
                            return (
                              <span className="block mt-3" key={kkk}>
                                {vvv}
                              </span>
                            );
                          })}
                        </div>
                      );
                    })}

                    <hr className="" />
                  </div>
                );
              })
            : ""}
        </div>

        <div className="grid grid-cols-1">
          <h2 className="">Skills</h2>
          <span className="pt-4"></span>
          <div className="grid sm:grid-cols-3 grid-cols-2">
            {helper.getSkills().map((v) => {
              return (
                <span key={v.key} className="">
                  {v.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
