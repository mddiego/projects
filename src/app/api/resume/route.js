"use server";

// app/api/hello/route.js
import { NextResponse } from "next/server";

// export async function GET(req) {
//   return NextResponse.json({ message: 'Hello World' })
// }

const _xpList = [
  {
    company: "PagBrasil",
    roles: [
      {
        role: "Technology & Product Consultant (08/2025 – 03/2026)",
        description: [
          ". Managing product planning and delivery aligned with business objectives, with a strong focus on digital payments, market trends, and strategic initiatives;",
          ". Acted as a strategic consultant across key business agendas, providing insights, guidance, and support for decision-making;",
          ". Partnered with technical and business leaders to strengthen cross-functional collaboration and facilitate alignment between teams and ecosystems.",
        ],
      },
      {
        role: "Director of Product (01/2023 – 07/2025)",
        description: [
          ". Built and guided the Product team structure, driving team development, operational efficiency, and product maturity;",
          ". Facilitated key team rituals, including 1:1s, feedback sessions, weekly planning, and squad checkpoints, fostering alignment and continuous improvement;",
          ". Designed and applied scalable product processes across the ecosystem, including discovery and delivery workflows, sprint planning, and release management;",
          ". Strengthened collaboration between Product (Designers and Product Owners), Engineering, and QA teams,ensuring alignment and efficient cross-functional execution;",
          ". Contributed to strategic products and innovation initiatives through a strong analytical approach focused on customer needs, business objectives, and market opportunities.",
        ],
      },
      {
        role: "Head of Quality Assurance (07/2020 – 12/2022)",
        description: [
          ". Built and managed the QA team structure, driving quality culture and process maturity across the organization;",
          ". Led team rituals, including 1:1s, feedback sessions, reviews, retrospectives, and QA chapter meetings, promoting collaboration and continuous improvement;",
          ". Structured software quality processes and testing tools, including Cypress, BrowserStack, BDD, Jira, and Xray, enhancing test efficiency, traceability, and product reliability.",
          ". Contributed to strategic projects and products with a strong focus on software quality, operational efficiency, and scalable delivery practices.",
        ],
      },
      {
        role: "Full Cycle Developer and Support (06/2014 – 06/2020)",
        description: [
          ". Developed and maintained internal systems across frontend technologies (HTML, CSS, and JavaScript) and backend applications using PHP;",
          ". Designed, developed, and enhanced payment APIs and plugins for e-commerce platforms, supporting scalable and seamless integrations;",
          ". Provided Level 3 technical support to merchants, advising on custom integrations through REST APIs, JavaScript libraries, and plug-and-play plugin solutions;",
          ". Worked on complex problem-solving and integration support, ensuring reliability, performance, and efficient issue resolution.",
        ],
      },
    ],
  },
  {
    company: "Agência Set",
    roles: [
      {
        role: "Full Cycle Developer (03/2014 – 11/2014)",
        description: [
          ". Implemented responsive frontend layouts based on Photoshop and Illustrator designs using HTML, CSS, JavaScript, and jQuery;",
          ". Developed and sustained backend applications in PHP integrated with MySQL databases, ensuring performance and reliability;",
          ". Worked on frontend and backend integrations, including server-side rendering (SSR) and microservices-based architectures, contributing to scalable and maintainable solutions.",
        ],
      },
    ],
  },
  {
    company: "Monge Web Design",
    roles: [
      {
        role: "Full Cycle Developer (08/2011 – 02/2014)",
        description: [
          ". Implemented responsive frontend layouts based on Photoshop and Illustrator designs using HTML, CSS, JavaScript, and jQuery;",
          ". Developed and sustained backend applications in PHP integrated with MySQL databases, ensuring performance and reliability;",
          ". Worked on frontend and backend integrations, including server-side rendering (SSR) and microservices-based architectures, contributing to scalable and maintainable solutions.",
        ],
      },
    ],
  },
];

export async function GET(req) {
  console.log("log", req, "2", req.nextUrl, "3", req.nextUrl.searchParams.id);

  // const search = req.nextUrl.searchParams.get("id");
  // const authHeader = req.headers.get("host");

  return NextResponse.json(_xpList);
}

// app/api/users/[action]/route.js
// export async function GET(req) {
//   console.log("log", req);
//   //const { action } = await params;

//   return NextResponse.json({ userId: "action" });
// }

export async function POST(req, { params }) {
  console.log("log", await req, await params);

  const body = await req.json();
  return NextResponse.json({ received: body }, { status: 201 });
}
