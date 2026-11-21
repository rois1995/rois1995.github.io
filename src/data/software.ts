export interface SoftwareContribution { area:string; title:string; description:string; prs:{id:string;url:string}[]; }
export const contributions:SoftwareContribution[]=[
  {area:'Parallel computing',title:'Scalable, correct output on large meshes',description:'Improvements to MPI-aware output workflows and large-grid reliability.',prs:[{id:'#2924',url:'https://github.com/su2code/SU2/pull/2924'}]},
  {area:'Numerical fluxes',title:'Moving-grid convective fluxes',description:'Corrections to HLLC flux and Jacobian implementation in moving-grid calculations.',prs:[{id:'#2943',url:'https://github.com/su2code/SU2/pull/2943'}]},
  {area:'Boundary conditions',title:'Rotational periodicity',description:'Improvements spanning implicit linearisation, multigrid, and limiters.',prs:[{id:'#2961',url:'https://github.com/su2code/SU2/pull/2961'}]},
  {area:'Solver robustness',title:'Pressure-based flow algorithms',description:'Corrections related to variable-density handling, boundary conditions, and SIMPLEC convergence.',prs:[{id:'#2958',url:'https://github.com/su2code/SU2/pull/2958'}]},
  {area:'Higher-order accuracy',title:'Scalar convection',description:'Improvements to second-order convection treatment for turbulence and species quantities.',prs:[{id:'#2956',url:'https://github.com/su2code/SU2/pull/2956'}]},
  {area:'Turbulence models',title:'Spalart–Allmaras formulations',description:'Corrections and robustness improvements for SA-family model implementations.',prs:[{id:'#2014',url:'https://github.com/su2code/SU2/pull/2014'},{id:'#2352',url:'https://github.com/su2code/SU2/pull/2352'},{id:'#2957',url:'https://github.com/su2code/SU2/pull/2957'}]},
  {area:'Transition models',title:'Langtry–Menter transition coupling',description:'Implementation work for transition-model coupling and crossflow corrections.',prs:[{id:'#1810',url:'https://github.com/su2code/SU2/pull/1810'}]}
];
