import React from "react";
import CardSubtitle from "./CardSubtitle";
import Description from "./Description";

const GasLiquids = () => {
  return (
    <>
      <CardSubtitle>
        Grading/Structural Designer | GasLiquids Engineering Ltd., Calgary, AB,
        Canada 2022-2023
      </CardSubtitle>
      <ul style={{ listStyleType: "disc" }}>
        <li>
          <Description>
            Carry out 3D modeling and designs of structural frame elements while
            maintaining close coordination with other desingers/engineers of
            other disciplines.
          </Description>
        </li>
        <li>
          <Description>
            Detailing and maintaining technical engineering drawings extracted
            from 3D models for every project phases: conceptual, preliminary,
            development, IFC, and As-Builts.
          </Description>
        </li>
        <li>
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
      </ul>
    </>
  );
};

export default GasLiquids;
