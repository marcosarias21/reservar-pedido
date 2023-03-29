const SelectOptions = ({
  register, options, type, selectDesc,
}) => {
  return (
    <select className="form-select form-select-md mt-4" aria-label="Default select example" {...register(`${type}`)}>
      <option disabled hidden>{selectDesc}</option>
      {options.map(option => (
      <option value={option.option} key={option.option}>{option.option}</option>))}
    </select>
  );
};

export default SelectOptions;
