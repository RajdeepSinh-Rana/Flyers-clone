import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc, arrayUnion, db } from '../Firebase/firebase';
import { getAuth } from 'firebase/auth';
import './SingleProductPage.css';
import Navbar from '../components/Navbar';

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: "",  // Ensure you have an id for the product
    name: "",
    description: "",
    mainImgUrl: "path/to/placeholder-image.jpg",
    sideImgUrls: [],
    price: "",
    rating: 0,
  });
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'Flyers', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const fetchedProduct = {
            id: docSnap.id,  // Use the document ID as the unique identifier
            ...docSnap.data(),
            mainImgUrl: docSnap.data().mainImgUrl || 'path/to/placeholder-image.jpg',
            sideImgUrls: [docSnap.data().mainImgUrl, ...(docSnap.data().sideImgUrls || [])],
          };
          setProduct(fetchedProduct);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = async () => {
    const auth = getAuth();
    const userId = auth.currentUser?.uid;

    if (!userId) {
      console.error('User not authenticated!');
      return;
    }

    const cartRef = doc(db, 'users', userId);

    try {
      const docSnap = await getDoc(cartRef);
      if (!docSnap.exists()) {
        console.error('User document does not exist!');
        return;
      }

      await updateDoc(cartRef, {
        cart: arrayUnion(product),
      });
      setCartItems(prevItems => [...prevItems, product]);
      console.log(`${product.name} added to cart!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (loading) {
    return <p>Loading product...</p>;
  }

  return (
    <>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <div className="product-page">
        <div className="image-and-details">
          <div className="images-container">
            <div className="main-img-container">
              <img
                src={product.mainImgUrl}
                alt={product.name}
                className="main-img"
                onError={(e) => e.target.src = "path/to/placeholder-image.jpg"}
              />
            </div>
            <div className="side-img-container">
              {product.sideImgUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Side Image ${index + 1}`}
                  className="side-img"
                  onClick={() => setProduct(prev => ({ ...prev, mainImgUrl: url }))}
                  onError={(e) => e.target.src = "path/to/placeholder-image.jpg"}
                />
              ))}
            </div>
          </div>
          <div className="product-details">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Price: </strong>${product.price}</p>
            <p><strong>Rating: </strong>{product.rating} / 5</p>
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={`star ${index < product.rating ? 'filled' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
