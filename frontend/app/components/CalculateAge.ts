export default function CalculateAge() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const birthYear = 2002;
  const age = currentYear - birthYear;
  return age;
}
