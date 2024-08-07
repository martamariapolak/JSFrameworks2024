const Person = () => {
  const person = {
    name: "Peter Piper",
    birthYear: 1940,
    occupation: "Musician",
  };

  /**
   * Create a function that get's Peter Piper's age from his birth year.
   * You can get today's year with:
   * @example new Date(Date.now()).getFullYear()
   */
const calculateAge=()=>{
  const currentYear=new Date(Date.now()).getFullYear();
return currentYear-person.birthYear;
};
  return (
    <div>
      <h1>Featured Person</h1>
      {/* Using JSX, plugin name below from the person object */}
      <div>Name:{person.name}____</div>
      {/* Using JSX, plugin occupation below from the person object */}
      <div>Occupation: _{person.occupation}____</div>
      {/* Using JSX, plugin the birth year using a function that converts age to birth year */}
      <div>Age: {calculateAge()}_____</div>
    </div>
  );
};

export default Person;
