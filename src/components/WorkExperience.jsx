import React from "react";
import Card from "./Card";
import CardTitle from "./CardTitle";
import ListUnstyled from "./ListUnstyled";
import CardSubtitle from "./CardSubtitle";
import Description from "./Description";

const WorkExperience = () => {
  return (
    <Card>
      <CardTitle>Work Experience</CardTitle>
      <ListUnstyled>
        <li>
          <CardSubtitle>
            Machine Learning Full Stack Application Developer (Intern) |
            Braintoy Inc., Calgary, AB, Canada 2023
          </CardSubtitle>
          <ul style={{ listStyleType: "disc" }}>
            <li>
              <Description>
                Front-End Development: Developing user-friendly and responsive
                web interfaces using React, Javascript, HTML, and CSS.
              </Description>
            </li>
            <li>
              <Description>
                Back-End Development: Developing the server-side logic and APIs
                using Python, Ruby, Node.js, and FastAPI.
              </Description>
            </li>
            <li>
              <Description>
                Database Management: Designing and implementing database
                structures, and working with SQL or NoSQL databases to store and
                retrieve data.
              </Description>
            </li>
            <li>
              <Description>
                Bug Fixing and Testing: Identifying and resolving software
                defects, and participating in testing and quality assurance
                processes that ensures a robust and reliable application.
              </Description>
            </li>
            <li>
              <Description>
                Documentation: Creating technical documentation for internal
                reference and future development.
              </Description>
            </li>
          </ul>
        </li>
        <li>
          <CardSubtitle>
            Grading/Structural Designer | GasLiquids Engineering Ltd., Calgary,
            AB, Canada 2022-2023
          </CardSubtitle>
          <ul style={{ listStyleType: "disc" }}>
            <li>
              <Description>
                Carry out 3D modeling and designs of structural frame elements
                while maintaining close coordination with other
                desingers/engineers of other disciplines.
              </Description>
            </li>
            <li>
              <Description>
                Detailing and maintaining technical engineering drawings
                extracted from 3D models for every project phases: conceptual,
                preliminary, development, IFC, and As-Builts.
              </Description>
            </li>
            <li>
              <Description>
                Delivered 100% completion, within budget, and on-schedule the
                structural design and documentations for the following projects:
                Empress 6 Propane Accumulator Replacement, Cenovus Wapiti
                Expansion, Nordegg Compressor Station Expansion, Aitken Creek
                Gas Plant, ATCO Hydrogen Storage Micro Cavern Feed, Cenovus Sand
                Creek Compressor Station, Karr Gas Plant Spent Scavenger Tank
                Conversion, Empress I-VI Plains, and PFS Train#1 Debottleneck
                Pre-Feed and Feed For Saskatchewan.
              </Description>
            </li>
          </ul>
        </li>
        <li>
          <CardSubtitle>
            Structural Designer | ISL Engineering and Land Services, Calgary,
            AB, Canada 2021-2022
          </CardSubtitle>
          <ul style={{ listStyleType: "disc" }}>
            <li>
              <Description>
                Completed structural designs for commercial, municipal,
                industrial and residential buildings with emphasis to steel and
                concrete designs.
              </Description>
            </li>
            <li>
              <Description>
                Conducted structural frame and foundation assessment of Nalco
                Warehouse and 311A High River projects.
              </Description>
            </li>
            <li>
              <Description>
                Delivered 100% completion, within budget, and on-schedule the
                structural design and documentations for the following projects:
                Ascent Canmore, Festival Square, Canmore Firehall, Cloverdale
                Pump Station, Pelly Pool, and Coaldale High School Building.
              </Description>
            </li>
          </ul>
        </li>
        <li>
          <CardSubtitle>
            Resident Building Manager | Marquee on 16th Calgary Inc., Calgary
            AB, Canada 2017-2021
          </CardSubtitle>
          <ul style={{ listStyleType: "disc" }}>
            <li>
              <Description>
                Directed holistic operations overseeing maintenance,
                serviceability, and quality assurance for the upscale
                residential complex, Marquee on 16th, situated on 16th Ave. in
                Calgary.
              </Description>
            </li>
            <li>
              <Description>
                Implemented and supervised cutting-edge security, fire
                prevention, and safey systems, seamlessly coodinated with
                routine building maintenance and janitorial services.
              </Description>
            </li>
            <li>
              <Description>
                Spearheaded the seamless provision of reliable utility services,
                contributing to an enhanced overall living experience for all
                residents.
              </Description>
            </li>
            <li>
              <Description>
                Conducted routine, meticulous building inspections, promptly
                identifying and addressing signs of damage or maintenance
                requirements, upholding the highest standards of property upkeep
                at Marquee on 16th.
              </Description>
            </li>
          </ul>
        </li>
        <li>
          <CardSubtitle>
            Senior Assistant Resident Building Manager | Oxford Properties Group, Brampton
            ON, Canada 2014-2017
          </CardSubtitle>
          <ul style={{ listStyleType: "disc" }}>
            <li>
              <Description>
               Orchestrated safety and maintenance operations for the expansive
               residential property, 85 and 95 Charolais Boulevard Brampton Towers,
               owned by Oxford Properties.
              </Description>
            </li>
            <li>
              <Description>
                Demonstrated exceptional leadership, ensuring rigorous compliance
                with all applicable regulations and establishing a robust
                framework for safety and maintenance protocols.
              </Description>
            </li>
            <li>
              <Description>
                Exhibited strong leadership skills in planning and executing both
                preventive and corrective maintenance actions for civil, structures,
                and architectural assets.
              </Description>
            </li>
            <li>
              <Description>
                Achieved minimal downtime and maximized asset utilization through
                strategic planning and deployment of maintenance initiatives.
              </Description>
            </li>
          </ul>
        </li>
        <li>
          <CardSubtitle>
            Senior Structural Designer | Qatar Energy, RLIC/Doha, Qatar
            2005-2014
          </CardSubtitle>
          <ul style={{ listStyleType: "disc" }}>
            <li>
              <Description>
                Developed designs for new builds, refurbishments, and remodels
                of civil structures in RasLaffan Industrial City (RLIC).
              </Description>
            </li>
            <li>
              <Description>
                Improved the land development of RasLaffan Industrial City
                through land and allocation and master planning using GIS and
                CAD softwares.
              </Description>
            </li>
            <li>
              <Description>
                Coordinated designs with End-Users, contractors, and other
                stakeholders.
              </Description>
            </li>
            <li>
              <Description>
                Delivered 100% completion, within budget, and on-schedule the
                structural design and documentations for the following projects:
                Off-plot utilities for RasGas, QatarGas, and Barzan LNG
                projects, RLIC Cooling water Phase I to III, Common Sulphure
                Project, RasLaffan Ave. Expansion, and RLIC Port Expansion
                project.
              </Description>
            </li>
          </ul>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default WorkExperience;
