import React, { useState, useEffect, useRef } from 'react';
import { collection, doc, addDoc, updateDoc, getDoc } from 'firebase/firestore';
import gsap from 'gsap';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../Firebase/firebase';
import './Addproducts.css';

const Addproducts = () => {
  const { id } = useParams();
  const userCollection = collection(db, "Flyers");
  const navigate = useNavigate();

  const [Data, setData] = useState({
    name: "",
    description: "",
    mainImgUrl: "", 
    sideImgUrls: ["", "", "", "", "", ""],  
    price: "",
    rating: 0,  // Store rating as a number
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mainImgUrl") {
      setData({ ...Data, mainImgUrl: value });
    } else if (name.startsWith("sideImgUrl")) {
      const index = parseInt(name.split('sideImgUrl')[1], 10);
      const updatedSideImgUrls = [...Data.sideImgUrls];
      updatedSideImgUrls[index] = value;
      setData({ ...Data, sideImgUrls: updatedSideImgUrls });
    } else {
      setData({ ...Data, [name]: value });
    }
  };

  const handleStarClick = (rating) => {
    setData({ ...Data, rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (id) {
        const docRef = doc(db, "Flyers", id);
        await updateDoc(docRef, Data);
        gsap.fromTo(formRef.current, { scale: 1 }, { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1 });
        alert(`Data updated successfully with id ${id}`);
      } else {
        const d = await addDoc(userCollection, Data);
        gsap.fromTo(formRef.current, { scale: 1 }, { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1 });
        alert(`Data added successfully with id ${d.id}`);
      }
      navigate('/Products');
    } catch (error) {
      gsap.fromTo(formRef.current, { scale: 1 }, { scale: 0.9, duration: 0.2, yoyo: true, repeat: 1 });
      alert("Failed to submit data. Please try again.");
    } finally {
      setLoading(false);
      setData({
        name: "",
        description: "",
        mainImgUrl: "",
        sideImgUrls: ["", "", "", "", "", ""],
        price: "",
        rating: 0,
      });
    }
  };

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const docRef = doc(db, "Flyers", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        }
      };
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    gsap.fromTo(formRef.current.children, { opacity: 0, y: -20 }, { opacity: 1, y: 0, stagger: 0.2, duration: 1 });
  }, []);

  return (
    <div className="app">
      <main className="main-content">
        <form ref={formRef} onSubmit={handleSubmit} className="product-form">
          <input
            type="text"
            name="name"
            value={Data.name}
            onChange={handleChange}
            placeholder="Product Title"
            required
          />
          <textarea
            name="description"
            value={Data.description}
            onChange={handleChange}
            placeholder="Product Description"
            required
          />

          {/* Main Image URL */}
          <input
            type="text"
            name="mainImgUrl"
            value={Data.mainImgUrl}
            onChange={handleChange}
            placeholder="Main Image URL"
          />

          {/* Side Image URLs */}
          {Data.sideImgUrls.map((imgUrl, index) => (
            <input
              key={index}
              type="text"
              name={`sideImgUrl${index}`}
              value={imgUrl}
              onChange={handleChange}
              placeholder={`Side Image URL ${index + 1}`}
            />
          ))}

          <input
            type="number"
            name="price"
            value={Data.price}
            onChange={handleChange}
            placeholder="Price"
            step="0.01"
            min="0"
          />

          {/* Display Star Rating */}
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleStarClick(star)}
                className={star <= Data.rating ? "filled-star" : "empty-star"}
              >
                ★
              </span>
            ))}
          </div>

          <button onMouseDown={handleSubmit} disabled={loading}>
            {id ? 'Update Product' : 'Add Product'}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Addproducts;
