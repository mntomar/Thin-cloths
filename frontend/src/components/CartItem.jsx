function CartItem({ item, onRemove }) {
    return (
      <div className="flex justify-between border p-4 bg-white shadow-sm rounded">
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-600">Price: ₹{item.price}</p>
          <p className="text-sm text-gray-500">Quantity: 1</p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <p className="font-bold">₹{item.price}</p>
          <button
            onClick={() => onRemove(item._id)}
            className="text-red-500 text-xs hover:underline mt-2"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
  
  export default CartItem;
  