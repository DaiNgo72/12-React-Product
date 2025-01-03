export function NewProduct() {
  return (
    <div className="px-10 py-5">
      <h1>New Product</h1>

      <form>
        <label>
          <p>Name</p>
          <input placeholder="Enter name product" type="text" />
        </label>

        <label>
          <p>Description</p>
          <input placeholder="Enter description" type="text" />
        </label>

        <label>
          <p>Price</p>
          <input placeholder="Enter price" type="number" />
        </label>

        <label>
          <p>Image</p>
          <input placeholder="Enter url image" type="text" />
        </label>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
