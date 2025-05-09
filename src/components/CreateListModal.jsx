import { useState } from "react";
import Modal from "./modal.jsx";

const CreateListModal = ({ isOpen, onClose, onSave }) => {
  const [listName, setlistName] = useState("");
  const [currency, setCurrency] = useState("NGN");
  const [items, setItems] = useState([
    { id: 1, name: "", quantity: "", price: "" },
  ]);
  const [totalCost, setTotalCost] = useState("");

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, name: "", quantity: "", price: "" },
    ]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const handleInputChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleSubmit = () => {
    if (!listName.trim()) return;
    onSave({ name: listName, currency, items, totalCost });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold mb-3">Create new list</h2>
      <div className="flex flex-col gap-3 lg:flex-row">
        <input
          type="text"
          placeholder="Note label"
          className="border p-2 w-full mb-3"
          value={listName}
          onChange={(e) => setlistName(e.target.value)}
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border p-2 w-full mb-3"
        >
          <option>Select Currency</option>
          <option>NGN</option>
          <option>USD</option>
          <option>GBP</option>
          <option>EUR</option>
        </select>
      </div>
      <h3 className="mt-4">
        Enter item name,quantity,and price(auto-calculate total)
      </h3>

      {items.map((item, index) => (
        <div
          key={item.id}
          className="mb-3 p-3 border border-gray-300 rounded-lg relative mt-2 "
          style={{
            borderWidth: "1.5px",
            borderColour: "var(--color-gray-300, #D1D5DB)",
          }}
        >
          <div className="flex justify-between items-center">
            <h3>
              <em className="bg-black text-white mr-2 ">{index + 1}</em>Add item
              details
            </h3>
            <button onClick={() => removeItem(item.id)} className="p-1">
              <img
                src="/delete.png"
                alt="delete"
                className="w-5 h-5 hover:opacity-75"
              />
            </button>
          </div>
          <div className="flex flex-col gap-3 ">
            <div>
              <h3>Item name</h3>
              <input
                type="text"
                placeholder="What do you want to buy?"
                className="border p-2 w-full my-2"
                value={item.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
              />
            </div>

            <div>
              <h3>Quantity</h3>
              <input
                type="number"
                placeholder="How many?"
                className="border p-2 w-1/2"
                value={item.quantity}
                onChange={(e) =>
                  handleInputChange(index, "quantity", e.target.value)
                }
              />
            </div>
            <div>
              <h3>Price Per Item</h3>
              <div className="flex items-center border p-2 rounded">
                <input
                  type="number"
                  placeholder="How much?"
                  className="border p-2 w-1/2"
                  value={item.price}
                  onChange={(e) =>
                    handleInputChange(index, "price", e.target.value)
                  }
                />
                <span className="ml-32 bg-gray-300 p-3 text-gray-500">NGN</span>
              </div>
            </div>
            <div className="flex items-center border p-2 rounded">
              <input
                type="number"
                placeholder="0.00"
                className="border p-2 w-full"
                value={item.price}
                onChange={(e) =>
                  handleInputChange(index, "price", e.target.value)
                }
              />
              <span className="ml-2 bg-gray-300 p-3 text-gray-500">NGN</span>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addItem}
        className="bg-gray-200 w-1/2  py-2 rounded mt-3"
      >
        {" "}
        + Add More item
      </button>

      <div className="flex gap-2 mt-4">
        <div className="flex gap-2">
          <button className=" bg-gray-200  py-2 rounded-lg p-3">
            <img src="/Frame.png" alt="frame" className="w-[30px] " />
          </button>
          <div>
            <h3>{totalCost || "0.00"}</h3>
            <input
              type="text"
              placeholder="Total cost"
              value={totalCost}
              onChange={(e) => setTotalCost(e.target.value)}
              className="w-1/2"
            />
          </div>
        </div>
        <div className="flex gap-2 ml-16  ">
          <button
            className=" bg-gray-300 py-2 rounded-lg p-2 "
            onClick={handleSubmit}
          >
            <img src="/save.png" alt="save" className="w-12" />
            <span className="hidden lg:block text-sm">Save</span>
          </button>

          <button className="lg:flex  bg-orange-500 text-white justify-center items-center rounded-lg p-1  ">
            <h3 className="w-8 block lg:hidden">⬇️</h3>
            <span className="hidden lg:block text-sm">Download</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default CreateListModal;
