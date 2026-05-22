// console.log(await process.env);

const _env_url = (process?.env?.URL || "") != "" ? process.env.URL : "/api";

async function getData(params) {
  const res = await fetch(_env_url + params.url);
  return res.json();
}

function log(params) {
  const fields = {
    ...{
      env: "API",
      content: "",
    },
    ...params,
  };

  console.log("------------");
  console.log("--- LOG", JSON.stringify(fields));
  console.log("------------");
}

function getSkills() {
  const _skills = [
    ". Jira",
    ". RabbitMQ",
    ". 3D Secure 2.0",
    ". Git",
    ". REST API",
    ". Pix",
    ". Docker",
    ". MVC Architecture",
    ". Shopify",
    ". Vue.js",
    ". OAuth",
    ". Vtex",
    ". JavaScript",
    ". CI/CD",
    ". Sales Cloud (Salesforce)",
    ". Node.js",
    ". Postman",
    ". Commerce Cloud (SFCC)",
    ". NPM",
    ". Cloudflare",
    ". Bootstrap",
    ". HubSpot",
    ". PHP",
    ". Figma",
    ". MySQL",
    ". Cypress",
    ". Open Finance",
    ". E-Commerce",
    ". React",
    ". Payment Systems",
    ". Next.js",
    ". Microservices",
    ". Tailwind",
  ].map((v, k) => ({
    key: k,
    name: v,
  }));

  return _skills;
}

function getSkillsFooter() {
  const _skills = [
    // "Jira",
    "RabbitMQ",
    // "3D Secure 2.0",
    "Git",
    // "REST API",
    // "Pix",
    "Docker",
    // "MVC Architecture",
    // "Shopify",
    "Vue.js",
    // "OAuth",
    // "Vtex",
    "JavaScript",
    // "CI/CD",
    // "Sales Cloud (Salesforce)",
    "Node.js",
    "Postman",
    // "Commerce Cloud (Salesforce)",
    "NPM",
    "Cloudflare",
    "Bootstrap",
    // "HubSpot",
    "PHP",
    // "Figma",
    "MySQL",
    "Cypress",
    // "Open Finance",
    // "E-Commerce",
    "React",
    // "Payment Systems",
    "Next.js",
    // "Microservices",
    "Tailwind",
  ].map((v, k) => ({
    key: k,
    name: v,
  }));

  return _skills;
}

export const helper = {
  getData,
  log,
  getSkills,
  getSkillsFooter,
};
