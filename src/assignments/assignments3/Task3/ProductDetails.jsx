

const ProductDetails = ({ productDetails }) => {
    const { productName, productPrice, productCategory, productBrand } = productDetails;

    const detailItems = [
        { label: "Product Name", value: productName },
        { label: "Price", value: `Rs. ${productPrice}` },
        { label: "Category", value: productCategory },
        { label: "Brand", value: productBrand },
    ];

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
            <section className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
                <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
                        Product Details
                    </p>
                    <h1 className="mt-2 text-3xl font-bold text-slate-900">
                        {productName}
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Overview of the product&apos;s pricing, category, and brand.
                    </p>
                </div>

                <div className="space-y-4">
                    {detailItems.map(({ label, value }) => (
                        <div
                            key={label}
                            className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                        >
                            <span className="text-sm font-medium text-slate-500">
                                {label}
                            </span>
                            <span className="text-base font-semibold text-slate-900">
                                {value}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default ProductDetails
