import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { CompanyRepository } from "@/data/company.repository";

const company = CompanyRepository.find();

export const alt = `${company.name} - ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/images/logo-inverse.png"),
    "base64",
  );
  const logoSrc = `data:image/png;base64,${logo}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "72px",
          position: "relative",
        }}
      >
        {/* Brilho ambiente, no mesmo tom do site */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -120,
            width: 780,
            height: 620,
            backgroundImage:
              "radial-gradient(circle, rgba(80,80,80,0.35), rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Rótulo superior */}
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 10,
            color: "#5c5c5c",
          }}
        >
          LUMNI.DEV.BR
        </div>

        {/* Marca + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={logoSrc} width={420} height={210} alt="" />
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 54,
              lineHeight: 1.15,
              fontWeight: 600,
              color: "#d9d9d9",
              maxWidth: 960,
            }}
          >
            {company.tagline}
          </div>
        </div>

        {/* Rodapé */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: 4,
            color: "#5c5c5c",
            borderTop: "1px solid #1a1a1a",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex" }}>
            SISTEMAS · AUTOMAÇÃO · CONSULTORIA · SEGURANÇA
          </div>
          <div style={{ display: "flex" }}>© {company.foundedYear}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
