export const KgToLbsStr = (kg) => {
  return `${kg} KG | ${Math.round(kg * 2.205)} LBS`;
};
export const CmToFtStr = (cm) => {
  const inches = Math.floor(cm / 2.54);
  return `${cm} CM | ${Math.floor(inches / 12)}'${inches % 12} Ft`;
};
