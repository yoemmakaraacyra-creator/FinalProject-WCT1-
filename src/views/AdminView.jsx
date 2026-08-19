import React, { useState } from "react";

export default function AdminView({ products, onAddProduct, onDeleteProduct }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "football",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.price) return;

    const autoImagePath = `/image/${formData.title.trim()}.png`;

    const newProduct = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      price: parseFloat(formData.price),
      image: autoImagePath,
    };

    onAddProduct(newProduct);
    setFormData({ title: "", category: "football", price: "" });
  };

  return (
    <section className="py-10 px-4 sm:px-8 max-w-6xl mx-auto text-white">
      <h1 className="text-3xl font-extrabold text-cyan-400 mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl h-fit">
          <h2 className="text-xl font-bold mb-4 text-white">Add New Product</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium text-zinc-400 block mb-1">Product Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyan-400"
                placeholder="e.g. adidas X"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-zinc-400 block mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="football">Football</option>
                <option value="running">Running</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-zinc-400 block mb-1">Price ($)</label>
              <input
                type="number"
                step="0.01"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyan-400"
                placeholder="299.99"
                required
              />
            </div>


            {formData.title && (
              <div className="mt-2">
                <span className="text-xs text-zinc-400 block mb-1">
                  Auto Image Path: <code className="text-cyan-400">/image/{formData.title.trim()}.png</code>
                </span>
                <div className="w-full h-32 bg-white rounded-lg p-2 flex items-center justify-center overflow-hidden border border-zinc-700">
                  <img
                    src={`/image/${formData.title.trim()}.png`}
                    alt="Auto Preview"
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/200x150?text=Image+Not+Found";
                    }}
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="mt-2 w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2.5 rounded-lg transition-all cursor-pointer"
            >
              Add Product
            </button>
          </form>
        </div>


        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-4 text-white">Inventory Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 text-sm">
                  <th className="py-3 px-2">Image</th>
                  <th className="py-3 px-2">Title</th>
                  <th className="py-3 px-2">Category</th>
                  <th className="py-3 px-2">Price</th>
                  <th className="py-3 px-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-sm">
                {products.map((item) => (
                  <tr key={item.id} className="hover:bg-zinc-950/50">
                    <td className="py-3 px-2">
                      <div className="w-12 h-12 bg-white rounded-md p-1 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/200x150?text=No+Image";
                          }}
                        />
                      </div>
                    </td>
                    <td className="py-3 px-2 font-semibold text-white">{item.title}</td>
                    <td className="py-3 px-2 text-zinc-400 capitalize">{item.category}</td>
                    <td className="py-3 px-2 text-cyan-400 font-bold">${item.price.toFixed(2)}</td>
                    <td className="py-3 px-2 text-right">
                      <button
                        onClick={() => onDeleteProduct(item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors font-medium cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}