import ProductsContainer from "./ProductsContainer";

async function ProductsPage({
  searchParams, //server side
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout = searchParams.layout || "grid"; //if not specified go with grid
  const search = searchParams.search || ""; //if no search term provided use '' which returns all products
  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}
export default ProductsPage;

//searchParams special prop we have access to in the server (node)component

//layout gonna be list or grid(optional)
