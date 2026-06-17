import TaskCard, { DetailList, PrimaryButton } from "../shared/TaskCard";

const ProductDetails = ({ product, handleAddProduct }) => {
  return (
    <TaskCard
      taskNumber="8"
      title="Product Details"
      description="Create product state with an undefined initial value and fill it on button click."
      actions={<PrimaryButton onClick={handleAddProduct}>Add Product</PrimaryButton>}
    >
      {product ? (
        <DetailList
          items={[
            { label: "Product", value: product.name },
            { label: "Brand", value: product.brand },
            { label: "Price", value: product.price },
          ]}
        />
      ) : (
        <p className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-4 text-slate-300">
          Product details will appear here.
        </p>
      )}
    </TaskCard>
  );
};

export default ProductDetails;
