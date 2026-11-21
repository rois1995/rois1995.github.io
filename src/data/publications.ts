export interface Publication {
  title:string;
  authors:string;
  venue:string;
  year:number;
  type:'Journal'|'Conference'|'Technical report';
  doi?:string;
}
export const publications:Publication[]=[
  {title:'Multifidelity Numerical–Experimental Database for Tailplane Aerodynamics',authors:'A. Rausa, G. Gori, A. Zanotti, G. Gibertini, A. Guardone, F. Auteri',venue:'AIAA Journal',year:2026,type:'Journal',doi:'10.2514/1.J066373'},
  {title:'The Influence of Compressibility Corrections on RANS Computations on the DLR LK6E2 Airframe',authors:'A. Rausa',venue:'AIAA AVIATION 2026 Forum · Paper 4727',year:2026,type:'Conference'},
  {title:'SU2 Results for the Fifth High Lift Prediction Workshop',authors:'A. Rausa, A. Guardone, N. Beishuizen',venue:'AIAA SciTech 2025 Forum · Paper 0276',year:2025,type:'Conference'},
  {title:'Three-Dimensional Front-Tracking Technique for Multistep Simulations of Aircraft Icing',authors:'A. Donizetti, T. Bellosta, A. Rausa, B. Re, A. Guardone',venue:'Journal of Aircraft · 62(2), 328–340',year:2025,type:'Journal',doi:'10.2514/1.C037933'},
  {title:'AVT-390: Outlook on Innovative Simulation Technologies Arising From Analyses of the DLR LK6E2 Airframe',authors:'A. Rausa, A. Guardone',venue:'AIAA AVIATION 2024 Forum · Paper 4241',year:2024,type:'Conference'},
  {title:'Level-set mass-conservative front-tracking technique for multistep simulations of in-flight ice accretion',authors:'A. Donizetti, T. Bellosta, A. Rausa, B. Re, A. Guardone',venue:'Journal of Aircraft',year:2023,type:'Journal'},
  {title:'Implementation of Gamma–ReTheta Transition Model within SU2: Model Validation and Verification',authors:'A. Rausa, A. Guardone, F. Auteri',venue:'AIAA SciTech 2023 Forum · Paper 1570',year:2023,type:'Conference'},
  {title:'Multi-step ice accretion on complex three-dimensional geometries',authors:'A. Donizetti, T. Bellosta, M. Gallia, A. Rausa, A. Guardone',venue:'Materials Research Proceedings · 37, 184–188',year:2023,type:'Conference'},
  {title:'Multi-Physics Simulations of Ice Shedding from Wind Turbines',authors:'A. Rausa, F. Caccia, A. Guardone',venue:'SAE Technical Paper',year:2023,type:'Technical report'},
  {title:'A Comprehensive Numerical Model for Numerical Simulation of Ice Accretion and Electro-Thermal Ice Protection System',authors:'M. Gallia, A. Rausa, A. Martuffo, A. Guardone',venue:'SAE Technical Paper',year:2023,type:'Technical report'},
  {title:'Bayesian calibration of a low order aerodynamic model for the design of unconventional tail empennages',authors:'G. Gori, T. Davoli, A. Rausa, A. Zanotti, F. Auteri, A. Guardone',venue:'AIAA AVIATION 2023 Forum · Paper 4422',year:2023,type:'Conference'},
  {title:'Infrared Thermography Measurements over a Tail-Plane Model of a Large Passenger Aircraft',authors:'A. Zanotti, A. Rausa, D. Grassi, L. Riccobene, G. Gibertini, A. Guardone, F. Auteri',venue:'Journal of Physics: Conference Series · 2293, 012014',year:2022,type:'Conference'},
  {title:'MONNALISA: Modelling nonlinear aerodynamics of lifting surfaces',authors:'F. Auteri et al.',venue:'AIAA AVIATION 2022 Forum · Paper 4149',year:2022,type:'Conference'},
  {title:'Multi-fidelity assessment of the aerodynamic performances of unconventional aircraft tail configurations',authors:'A. Rausa, G. Gori, A. Guardone, A. Zanotti, F. Auteri',venue:'AIAA AVIATION 2022 Forum · Paper 3902',year:2022,type:'Conference'},
  {title:'A Novel Method for Robust and Efficient Prediction of Ice Shedding from Rotorcraft Blades',authors:'A. Rausa, M. Morelli, A. Guardone',venue:'Journal of Computational and Applied Mathematics · 391, 113452',year:2021,type:'Journal'},
  {title:'Multi-physics simulation of in-flight ice shedding',authors:'A. Rausa, A. Guardone',venue:'Journal of Physics: Conference Series · 1730, 012024',year:2021,type:'Conference'}
];
