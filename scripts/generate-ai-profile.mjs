import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  brand,
  caseFiles,
  processingModes,
  rooms,
  sectionContent,
  usageSteps,
} from "../src/content.js";

const rootDir = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const publicDir = join(rootDir, "public");
const siteUrl = "https://mercury5096.github.io/mercury-lab/";
const linkedinUrl = "https://www.linkedin.com/in/mercury-ooi-9a653067/";
const email = "merrcuy5096@gmail.com";

const read = (value, locale) => (typeof value === "string" ? value : value[locale] ?? value.en);

const bulletList = (items, locale) => items.map((item) => `- ${read(item, locale)}`).join("\n");

const roomBlock = (room, locale) => {
  const proof = room.proof;
  const lines = [
    `### ${read(room.title, locale)} (${room.period})`,
    `- Area: ${read(room.diagram.zone, locale)}`,
    `- Scope: ${read(room.discipline, locale)}`,
    `- Summary: ${read(room.summary, locale)}`,
    `- Evidence: ${read(room.evidence, locale)}`,
  ];

  if (proof) {
    lines.push(`- Evidence summary: ${read(proof.outcome, locale)}`);
    lines.push(`- Roles: ${proof.roles.map((role) => read(role, locale)).join(", ")}`);
    if (proof.videos?.length) {
      lines.push("- Public project links:");
      proof.videos.forEach((video) => {
        lines.push(`  - ${read(video.title, locale)}: ${video.url}`);
      });
    }
  }

  return lines.join("\n");
};

const caseBlock = (item, locale) => [
  `### ${read(item.title, locale)}`,
  `- Status: ${read(item.status, locale)}`,
  `- Note: ${read(item.note, locale)}`,
].join("\n");

const markdown = `# Mercury Lab AI-Readable Career and Capability Profile

This file is intended for AI assistants, HR screening tools, recruiters, hiring managers, and collaborators who need a text-first version of the Mercury Lab website. It mirrors the visible site content in a machine-readable format and should be read together with the public website.

Website: ${siteUrl}
LinkedIn: ${linkedinUrl}
Email: ${email}

## English Summary

Name: Mercury Ooi

Site: ${brand.name}

Positioning: ${read(brand.positioning, "en")}

Collaboration: ${read(sectionContent.protocol.statement, "en")}

Open to: freelance work, part-time roles, full-time opportunities, project-based collaboration, and consulting-style support.

Core capabilities:
${bulletList(sectionContent.protocol.rules, "en")}

How to read the work:
${usageSteps.map((step) => `- ${read(step.title, "en")}: ${read(step.body, "en")}`).join("\n")}

Reading routes:
${processingModes.map((mode) => `- ${read(mode.label, "en")}: ${read(mode.description, "en")} Route: ${read(mode.route, "en")}`).join("\n")}

## Career Rooms / Evidence Chain

${rooms.map((room) => roomBlock(room, "en")).join("\n\n")}

## Selected Case Descriptions

${caseFiles.map((item) => caseBlock(item, "en")).join("\n\n")}

## 中文摘要

姓名：Mercury Ooi

網站：${brand.name}

定位：${read(brand.positioning, "zh")}

合作方向：${read(sectionContent.protocol.statement, "zh")}

開放合作形式：外包接案、兼職、全職職缺、專案合作與顧問式支援。

核心能力：
${bulletList(sectionContent.protocol.rules, "zh")}

閱讀方式：
${usageSteps.map((step) => `- ${read(step.title, "zh")}：${read(step.body, "zh")}`).join("\n")}

閱讀路線：
${processingModes.map((mode) => `- ${read(mode.label, "zh")}：${read(mode.description, "zh")} 路線：${read(mode.route, "zh")}`).join("\n")}

## 職涯房間 / 證據鏈

${rooms.map((room) => roomBlock(room, "zh")).join("\n\n")}

## 精選案例說明

${caseFiles.map((item) => caseBlock(item, "zh")).join("\n\n")}
`;

const profileJson = {
  name: "Mercury Ooi",
  siteName: brand.name,
  siteUrl,
  linkedinUrl,
  email,
  positioning: {
    en: read(brand.positioning, "en"),
    zh: read(brand.positioning, "zh"),
  },
  openTo: [
    "freelance work",
    "part-time roles",
    "full-time opportunities",
    "project-based collaboration",
    "consulting-style support",
  ],
  collaborationStatement: {
    en: read(sectionContent.protocol.statement, "en"),
    zh: read(sectionContent.protocol.statement, "zh"),
  },
  capabilities: sectionContent.protocol.rules.map((rule) => ({
    en: read(rule, "en"),
    zh: read(rule, "zh"),
  })),
  rooms: rooms.map((room) => ({
    id: room.id,
    code: room.code,
    title: { en: read(room.title, "en"), zh: read(room.title, "zh") },
    period: room.period,
    zone: { en: read(room.diagram.zone, "en"), zh: read(room.diagram.zone, "zh") },
    scope: { en: read(room.discipline, "en"), zh: read(room.discipline, "zh") },
    summary: { en: read(room.summary, "en"), zh: read(room.summary, "zh") },
    evidence: { en: read(room.evidence, "en"), zh: read(room.evidence, "zh") },
    outcome: room.proof
      ? { en: read(room.proof.outcome, "en"), zh: read(room.proof.outcome, "zh") }
      : null,
    roles: room.proof?.roles.map((role) => ({ en: read(role, "en"), zh: read(role, "zh") })) ?? [],
    publicLinks:
      room.proof?.videos?.map((video) => ({
        title: { en: read(video.title, "en"), zh: read(video.title, "zh") },
        type: { en: read(video.type, "en"), zh: read(video.type, "zh") },
        role: { en: read(video.role, "en"), zh: read(video.role, "zh") },
        url: video.url,
      })) ?? [],
  })),
  cases: caseFiles.map((item) => ({
    title: { en: read(item.title, "en"), zh: read(item.title, "zh") },
    status: { en: read(item.status, "en"), zh: read(item.status, "zh") },
    note: { en: read(item.note, "en"), zh: read(item.note, "zh") },
  })),
};

const llms = `# Mercury Lab

Mercury Lab is a bilingual career and capability showcase by Mercury Ooi, covering content production from print publishing to AI-assisted interactive storytelling.

Primary website: ${siteUrl}
AI-readable Markdown profile: ${siteUrl}ai-profile.md
Structured JSON profile: ${siteUrl}ai-profile.json
LinkedIn: ${linkedinUrl}
Contact email: ${email}

Recommended use: read ai-profile.md first for recruiter, HR, hiring manager, and collaborator screening context.
`;

await mkdir(publicDir, { recursive: true });
await writeFile(join(publicDir, "ai-profile.md"), markdown, "utf8");
await writeFile(join(publicDir, "ai-profile.json"), `${JSON.stringify(profileJson, null, 2)}\n`, "utf8");
await writeFile(join(publicDir, "llms.txt"), llms, "utf8");
