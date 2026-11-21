export interface Project {
  slug: string;
  title: string;
  short: string;
  category: string;
  tags: string[];
  period: string;
  introduction: string;
  scope: string[];
  contribution: string[];
  takeaway: string;
  imageTopic: string;
  imageCode: string;
  sources: {label:string; href:string}[];
  relatedPublications: string[];
}

export const projects: Project[] = [
  {
    slug: 'tailplane-aerodynamics',
    title: 'Multifidelity tailplane aerodynamics',
    short: 'Experimental and numerical investigation of swept tailplanes, nonlinear aerodynamics, and control-surface effects.',
    category: 'Aerodynamics', tags: ['Wind tunnel', 'RANS', 'Multifidelity'], period: 'Published · 2026',
    introduction: 'The MONNALISA research programme investigated the aerodynamics of unconventional tailplane configurations through complementary wind-tunnel measurements and numerical modelling. The public work addresses geometry effects, control-surface deflection, and aerodynamic nonlinearities.',
    scope: ['Swept and dihedral tailplane configurations with full-span control surfaces.', 'Comparison of force and moment data with numerical aerodynamic predictions.', 'Study of nonlinear behaviour across incidence and control-surface deflection.'],
    contribution: ['Computational aerodynamics and multi-fidelity analysis.', 'Interpretation of numerical and experimental evidence for unconventional tailplane configurations.', 'Co-authorship of the 2026 AIAA Journal paper.'],
    takeaway: 'The project connects experimental evidence with numerical predictions, emphasizing the operating regimes in which aerodynamic responses become nonlinear.',
    imageTopic: 'Swept tailplane / experimental setup', imageCode: 'RESEARCH IMAGE 01',
    sources: [{label:'AIAA Journal paper · DOI',href:'https://doi.org/10.2514/1.J066373'},{label:'Public research repository',href:'https://github.com/rois1995/multi-fidelity-swept-tailplane'}],
    relatedPublications:['Multifidelity Numerical–Experimental Database for Tailplane Aerodynamics', 'Multi-fidelity assessment of the aerodynamic performances of unconventional aircraft tail configurations']
  },
  {
    slug: 'high-lift-prediction',
    title: 'High-lift CFD prediction and validation',
    short: 'SU2 contributions to the Fifth AIAA High-Lift Prediction Workshop, focusing on grid sensitivity and model choices.',
    category: 'CFD validation', tags: ['SU2', 'RANS', 'High-lift'], period: 'Presented · 2025',
    introduction: 'The Fifth AIAA High-Lift Prediction Workshop provides common geometries and comparison cases for assessing the predictive capability of Reynolds-averaged Navier–Stokes methods. This work documents SU2-based calculations and comparisons across relevant high-lift configurations.',
    scope: ['High-lift aircraft and component geometries used in the workshop.', 'Grid-refinement trends and sensitivity to numerical choices.', 'Turbulence and transition modelling in demanding separated-flow configurations.'],
    contribution: ['Preparation and analysis of SU2 workshop results.', 'Assessment of sensitivity to discretisation and physical-model settings.', 'Co-authorship and presentation of the AIAA SciTech 2025 paper.'],
    takeaway: 'The emphasis is reproducible numerical evidence and a critical interpretation of differences between configurations, meshes, and modelling approaches.',
    imageTopic:'High-lift geometry / CFD comparison', imageCode:'RESEARCH IMAGE 02',
    sources:[{label:'SU2 project',href:'https://su2code.github.io/'},{label:'AIAA High-Lift Prediction Workshop',href:'https://hiliftpw.larc.nasa.gov/'}],
    relatedPublications:['SU2 Results for the Fifth High Lift Prediction Workshop']
  },
  {
    slug:'aircraft-icing',
    title:'Aircraft icing and ice shedding',
    short:'Numerical techniques for multistep ice accretion, front tracking, and simulation of ice detachment.',
    category:'Multiphysics', tags:['Icing', 'Front tracking', 'Mesh generation'], period:'Published · 2021–2025',
    introduction:'Ice accretion and ice shedding require coupling geometry evolution, flow conditions, and the physical response of ice-covered surfaces. Published work includes multi-step geometric methods and numerical techniques for predicting ice shedding from rotating and fixed-wing configurations.',
    scope:['Three-dimensional front tracking for multistep ice accretion.', 'Mesh update methods for complex changing ice geometries.', 'Computational treatment of ice shedding from aerodynamic surfaces and rotating blades.'],
    contribution:['Development and application of computational methods for ice shedding.', 'Contribution to geometric and numerical workflows used in multi-step icing simulations.', 'Authorship and co-authorship of journal and conference publications.'],
    takeaway:'Reliable geometric treatment and numerical coupling are central to simulations in which the shape of the aerodynamic surface evolves.',
    imageTopic:'Ice geometry / front-tracking result', imageCode:'RESEARCH IMAGE 03',
    sources:[{label:'2025 Journal of Aircraft paper · DOI',href:'https://doi.org/10.2514/1.C037933'}],
    relatedPublications:['Three-Dimensional Front-Tracking Technique for Multistep Simulations of Aircraft Icing','A Novel Method for Robust and Efficient Prediction of Ice Shedding from Rotorcraft Blades']
  },
  {
    slug:'turbulence-transition',
    title:'Turbulence and transition modelling',
    short:'Implementation, verification, and assessment of transition and turbulence models in SU2.',
    category:'Numerical methods', tags:['SU2', 'RANS', 'Transition'], period:'Published · 2023',
    introduction:'Turbulence and laminar–turbulent transition closures influence CFD predictions in aerodynamic applications. The published work includes implementation and validation of the gamma–Re-theta transition model within SU2, alongside documented contributions to related solver formulations.',
    scope:['Implementation of transition-model terms and coupling within a finite-volume solver.', 'Verification and validation against aerodynamic configurations.', 'Analysis of how turbulence and transition choices influence numerical predictions.'],
    contribution:['Implementation of transition modelling in SU2.', 'Assessment and documentation of numerical/model behaviour.', 'Co-authorship of the AIAA SciTech 2023 paper.'],
    takeaway:'Useful physical models need transparent discretisation, correct coupling, and reproducible validation—not only a nominal model label.',
    imageTopic:'Transition visualization / validation case', imageCode:'RESEARCH IMAGE 04',
    sources:[{label:'SU2 transition contribution · PR #1810',href:'https://github.com/su2code/SU2/pull/1810'}],
    relatedPublications:['Implementation of Gamma–ReTheta Transition Model within SU2: Model Validation and Verification']
  },
  {
    slug:'compressibility-effects',
    title:'Compressibility effects in aerodynamic RANS',
    short:'Published assessment of compressibility corrections for RANS computations around the DLR LK6E2 airframe.',
    category:'Aerodynamics', tags:['RANS', 'Compressibility', 'AVT-390'], period:'Presented · 2024–2026',
    introduction:'The public NATO AVT-390-related research considers aerodynamic simulation of the DLR LK6E2 configuration and the role of modelling choices in the prediction of the flow.',
    scope:['RANS calculations of a representative aerodynamic configuration.', 'Assessment of compressibility corrections and their influence on numerical prediction.', 'Comparison with publicly documented research and workshop evidence.'],
    contribution:['Numerical investigation of the DLR LK6E2 airframe.', 'Authorship of the AIAA AVIATION 2026 paper on compressibility corrections.', 'Presentation of work related to NATO AVT-390 at AIAA AVIATION 2024.'],
    takeaway:'The documented studies focus on model sensitivity and the interpretation of RANS predictions rather than treating any single closure as universally valid.',
    imageTopic:'DLR LK6E2 / public CFD result', imageCode:'RESEARCH IMAGE 05',
    sources:[{label:'Publication list',href:'/publications/'}],
    relatedPublications:['The Influence of Compressibility Corrections on RANS Computations on the DLR LK6E2 Airframe','AVT-390: Outlook on Innovative Simulation Technologies Arising From Analyses of the DLR LK6E2 Airframe']
  }
];
