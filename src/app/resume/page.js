"use client";

import { useEffect, useReducer, useState } from "react";
import { helper } from "@/app/assets/js/helper";

import Skeleton from "@/app/components/skeleton";

function ListItemSkeleton() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 0",
        borderBottom: "1px solid #8a8070",
      }}
    >
      <Skeleton circle height={36} />
      <div
        style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}
      >
        <Skeleton height={11} width="55%" />
        <Skeleton height={9} width="40%" />
      </div>
    </div>
  );
}

export default function Page() {
  const [_resume, setResume] = useState([]);

  const [_showList, setShowList] = useReducer((_showList) => !_showList, false);

  useEffect(() => {
    helper.getData({ url: "/resume" }).then((data) => {
      setResume(data);
      setTimeout(() => {
        setShowList(true);
      }, 1000);
    });
  }, []);

  return (
    <div className="resume col-span-12">
      <div className={_showList ? "hidden" : "block"}>
        {Array.from({ length: 6 }).map((_, i) => (
          <ListItemSkeleton key={i} />
        ))}
      </div>
      <div className={_showList ? "block" : "hidden"}>
        <div className="grid grid-cols-1">
          <a
            className="underline"
            href="https://www.linkedin.com/in/diegolopes1990"
            target="_blank"
          >
            https://www.linkedin.com/in/diegolopes1990
          </a>
        </div>
        <hr className="grid grid-cols-1" />

        <div className="grid grid-cols-1">
          <h1>Summary</h1>
          <p>
            Experience in software engineering combined with a proven track
            record of leading cross-functional teams, structuring QA and product
            management processes, and delivering multidisciplinary projects with
            measurable impact. As a Technology and Product professional, I
            connect business objectives with technology solutions, with a strong
            focus on digital payments and e-commerce. I am an expert in aligning
            business objectives with scalable technological solutions, driving
            innovation and operational efficiency. My technical stack includes
            frontend and backend development, API design, microservices
            architecture, platform integrations, automated testing, and agile
            methodologies.
          </p>

          <h1>Key Skills</h1>
          <h2>. Solution Architecture (Technical & Strategic Vision)</h2>
          <h2> . Software Engineering</h2>
          <h2> . Systems and API Integrations</h2>
          <h2> . REST APIs & Microservices</h2>
          <h2> . Agile Methodologies (Scrum / Kanban)</h2>
          <h2> . Technology Strategy</h2>
          <h2> . Technical Leadership</h2>
          <h2> . Project Management</h2>
          <h2> . Roadmap Planning & Prioritization</h2>
          <h2> . Stakeholder Management</h2>
        </div>
        <hr className="grid grid-cols-1" />
        <div className="grid grid-cols-1">
          {_resume.map((v, k) => {
            return (
              <div key={v.company + k}>
                <h1 key={k}>. {v.company}</h1>

                {v.roles.map((vv, kk) => {
                  return (
                    <div key={vv.role + kk}>
                      <h2 key={kk}>.. {vv.role}</h2>
                      {vv.description.map((vvv, kkk) => {
                        return <h3 key={kkk}>..{vvv}</h3>;
                      })}
                    </div>
                  );
                })}

                <hr />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1">
          <h1>Skills</h1>
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
