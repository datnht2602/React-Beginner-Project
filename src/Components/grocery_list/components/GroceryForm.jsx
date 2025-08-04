function GroceryForm({item, handleOnSubmit, handleOnChange}) {
  return (
    <div>
      <form onSubmit={handleOnSubmit} className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a grocery item"
          value={item}
          onChange={handleOnChange}
        />
        <button className="btn btn-primary mt-2" type="submit">Add</button>
      </form>
    </div>
  );
}
export default GroceryForm;
