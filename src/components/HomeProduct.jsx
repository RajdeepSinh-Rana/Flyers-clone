import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebase'; // Assuming your Firebase config is exported here
import '../Css/HomeProduct.css';

const HomeProduct = () => {
  const [data, setData] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null); // For hover effect

  // Fetch data from Firebase Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userCollection = collection(db, "Flyers");
        const dataSnapshot = await getDocs(userCollection);
        const flyersData = dataSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setData(flyersData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='produt'>
      <div className='textdiv'>
        <h1 className='text1'>ZERO-PROOF THC COCKTAILS</h1>
      </div>
      <div className='products'>
        {data.slice(0, 8).map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`} // Link to product detail page
            className='productCard'
            onMouseEnter={() => setHoveredProduct(item.id)}   // Set the hovered product id
            onMouseLeave={() => setHoveredProduct(null)}      // Reset the hovered product id
          >
            {/* Swap image on hover */}
            <img
              src={hoveredProduct === item.id ? item.sideImgUrls[0] : item.mainImgUrl}  // Conditional image render
              alt={item.name}
              className='productImage'
            />
            <h2>{item.name}</h2>
            <p> ${item.price}.00+</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
