r6 = {
  serie: [1.0, 1.5, 2.2, 3.3, 4.7, 6.8],
  tolerance: .2
}
r12 = {
  serie: [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.8, 5.6, 6.8, 8.2],
  tolerance: .1
}
r24 = {
  serie: [1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1],
  tolerance: .05
}
r48 = {
  serie: [1.0, 1.05, 1.10, 1.15, 1.21, 1.27, 1.33, 1.40, 1.47, 1.54, 1.62, 1.69, 1.78, 1.87, 1.96, 2.05, 2.15, 2.26, 2.37, 2.49, 2.61, 2.74, 2.87, 3.01, 3.16, 3.32, 3.48, 3.65, 3.83, 4.02, 4.22, 4.42, 4.64, 4.87, 5.11, 5.36, 5.62, 5.90, 6.19, 6.49, 6.81, 7.15, 7.50, 7.87, 8.25, 8.66, 9.09, 9.53],
  tolerance: .02
}

function calculateOverlaps(serie) {
  let overlaps = [];

  for (let i = 0; i < serie.serie.length; i++) {
  	let rMax = serie.serie[i]*(1.0 + serie.tolerance);
  	let rMin = serie.serie[i]*(1.0 - serie.tolerance);
    overlaps.push([Math.round(rMin, 3), Math.round(rMax, 3)]);
  }

  return overlaps;
}

console.log(calculateOverlaps(r6))
