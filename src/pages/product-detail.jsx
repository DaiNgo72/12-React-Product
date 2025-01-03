import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function ProductDetail() {
  // useParams trả về 1 object và trong object đó có id
  // desctructuring object
  const { id } = useParams(); // ???
  const [product, setProduct] = useState();
  // product = undefined

  // useEffect(() => {
  //   fetch(`https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${id}`)
  //     .then((r) => {
  //       if (r.ok) {
  //         return r.json();
  //       }

  //       throw new Error(r.text());
  //     })
  //     .then((r) => {
  //       console.log(r);
  //       setProduct(r);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   // Gán async cho hàm callApi
  //   const callApi = async () => {
  //     // Đợi 1 promise trả về giá trị thì dùng async await
  //     const response = await fetch(
  //       `https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${id}`,
  //     );

  //     // Chuyển từ json -> data type js
  //     if (response.ok) {
  //       // response.json() trả về 1 promise nên mình cũng dùng await ở đây để đợi nó convert sang data type js
  //       const data = await response.json();

  //       setProduct(data);
  //     } else {
  //       console.log("Error", response.statusText);
  //     }
  //   };

  //   callApi();
  // }, []);

  useEffect(() => {
    (async () => {
      // Đợi 1 promise trả về giá trị thì dùng async await
      const response = await fetch(
        `https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${id}`,
      );

      // Chuyển từ json -> data type js
      if (response.ok) {
        // response.json() trả về 1 promise nên mình cũng dùng await ở đây để đợi nó convert sang data type js
        const data = await response.json();

        setProduct(data);
      } else {
        console.log("Error", response.statusText);
      }
    })();
  }, []);

  return (
    <>
      <h1>Product Detail</h1>
      {/* <p>{product && product.name}</p> 
      {product && <p>{product.price}</p>} 
      {product && (
        <img src={product.img} width={400} height={400} alt={product.name} />
      )} */}

      {product && (
        <>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <img src={product.img} width={400} height={400} alt={product.name} />
        </>
      )}
    </>
  );
}
