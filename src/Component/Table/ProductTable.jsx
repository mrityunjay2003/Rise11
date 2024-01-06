import React from "react";
import "./ProductTable.css";
const ProductTable = () => {
  const products = [
    {
      id: 1,
      name: {
        image: "python.jpg",
        text: "Complete Python Bootcamp",
      },
      category: "Design",
      sale: 50,
      rate: "⭐4.5",
      earning: 100,
      visitor: 530,
    },
    {
      id: 1,
      name: {
        image: "cs2.jpg",
        text: "Advanced Excel Formulas",
      },
      category: "Development",
      sale: 60,
      rate: "⭐5.0",
      earning: 9100,
      visitor: 550,
    },
    {
      id: 1,
      name: {
        image: "cs3.jpg",
        text: "Video Editor in Filmora9",
      },
      category: "Photography",
      sale: 89,
      rate:"⭐4.5",
      earning: 1800,
      visitor: 540,
    },
    {
      id: 1,
      name: {
        image: "marketing.jpg",
        text: "Online Meeting Facilitation",
      },
      category: "Marketing",
      sale: 53,
      rate:"⭐4.5",
      earning: 1360,
      visitor: 350,
    },
    {
      id: 1,
      name: {
        image: "music.jpg",
        text: "Intermediate Blues Rhythm Guitar",
      },
      category: "Music",
      sale: 53,
      rate:"⭐5.0",
      earning: 1360,
      visitor: 350,
    },
    {
      id: 1,
      name: {
        image: "sales.jpg",
        text: "B2B Sales Masterclass",
      },
      category: "Business",
      sale: 53,
      rate:"⭐4.5",
      earning: 1360,
      visitor: 350,
    },
  ];

  return (
    <div className="bottom-table">
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Name</th>
            <th style={{ textAlign: "left" }}>Category</th>
            <th style={{ textAlign: "left" }}>Sale</th>
            <th style={{ textAlign: "left" }}>Rating</th>
            <th style={{ textAlign: "left" }}>Earning</th>
            <th style={{ textAlign: "left" }}>Visitor</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ width: "20%" }}>
                <div className="product">
                  <div className="product-image">
                    <img
                      src={product.name.image}
                      alt={product.name.text}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                        marginBottom: "3px",
                      }}
                    />
                  </div>

                  <div>{product.name.text}</div>
                </div>
              </td>
              <td style={{ width: "20%" }}>{product.category}</td>
              <td style={{ width: "15%" }}>{product.sale}</td>
              <td style={{ width: "15%" }}>{product.rate}</td>
              <td style={{ width: "15%" }}>{product.earning}</td>
              <td style={{ width: "15%" }}>{product.visitor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
