const FormatDate = (dateString: string) => {
  const date = new Date(dateString); // Create a Date object from the string
  const options = { year: "numeric", month: "short" };

  // Use toLocaleString to format the date in the desired format
  return date.toLocaleString("en-US", options);
};

export default FormatDate;
