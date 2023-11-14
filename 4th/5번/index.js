// 여기에 1번 문제의 답을 작성하세요.
const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
};

// 여기에 2번 문제의 답을 작성하세요.

const addProduct = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "BMW Pencil",
        /* other product data */
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: error입니다.", error.message);
  }
};

addProduct();
