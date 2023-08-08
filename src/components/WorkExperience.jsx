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
            Grading/Structural Designer | GasLiquids Engineering 2022-2023
          </CardSubtitle>
          <Description>
            Carry out 3D modeling and designs of structural frame elements while
            maintaining close coordination with other desingers/engineers of
            other disciplines.
          </Description>
          <Description>
            Detailing and maintaining technical engineering drawings extracted
            from 3D models for every project phases: conceptual, preliminary,
            development, IFC, and As-Builts.
          </Description>
          <Description>
            Delivered 100% completion, within budget, and on-schedule the
            structural design and documentations for the following projects:
            Empress 6 Propane Accumulator Replacement, Cenovus Wapiti Expansion,
            Nordegg Compressor Station Expansion, Aitken Creek Gas Plant, ATCO
            Hydrogen Storage Micro Cavern Feed, Cenovus Sand Creek Compressor
            Station, Karr Gas Plant Spent Scavenger Tank Conversion, Empress
            I-VI Plains, and PFS Train#1 Debottleneck Pre-Feed and Feed For
            Saskatchewan.
          </Description>
        </li>
        <li>
          <CardSubtitle>
            Structural Designer | ISL Engineering and Land Services 2021-2022
          </CardSubtitle>
          <Description>
            Completed structural designs for commercial, municipal, industrial
            and residential buildings with emphasis to steel and concrete
            designs.
          </Description>
          <Description>
            Conducted structural frame and foundation assessment of Nalco
            Warehouse and 311A High River projects.
          </Description>
          <Description>
            Delivered 100% completion, within budget, and on-schedule the
            structural design and documentations for the following projects:
            Ascent Canmore, Festival Square, Canmore Firehall, Cloverdale Pump
            Station, Pelly Pool, and Coaldale High School Building.
          </Description>
        </li>
        <li>
          <CardSubtitle>
            Senior Structural Designer | Qatar Energy 2005-2014
          </CardSubtitle>
          <Description>
            Developed designs for new builds, refurbishments, and remodels of
            civil structures in RasLaffan Industrial City (RLIC).
          </Description>
          <Description>
            Improved the land development of RasLaffan Industrial City through
            land and allocation and master planning using GIS and CAD softwares.
          </Description>
          <Description>
            Coordinated designs with End-Users, contractors, and other
            stakeholders.
          </Description>
          <Description>
            Delivered 100% completion, within budget, and on-schedule the
            structural design and documentations for the following projects:
            Off-plot utilities for RasGas, QatarGas, and Barzan LNG projects,
            RLIC Cooling water Phase I to III, Common Sulphure Project,
            RasLaffan Ave. Expansion, and RLIC Port Expansion project.
          </Description>
        </li>
      </ListUnstyled>
    </Card>
  );
};

export default WorkExperience;
