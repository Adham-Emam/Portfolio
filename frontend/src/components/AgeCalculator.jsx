const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();

  // Adjust age if the current date hasn't passed the birth date this year
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  return age;
};

const AgeCalculator = () => {
  const birthDate = "2002-7-3"; // Constant birthdate
  const age = calculateAge(birthDate);

  return <>{age}</>;
};

export default AgeCalculator;
