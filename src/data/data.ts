interface Sale {
  date: string;
  productId: number;
  price: number;
  amount: number;
}

interface Product {
  id: number;
  name: string;
  cost: number;
}

interface SalesData {
  productId: number;
  product: string;
  amount: number;
  totalSales: number;
}

const products: Product[] = [
  { id: 1, name: "Bikini", cost: 12.98 },
  { id: 2, name: "Sunglasses", cost: 9.5 },
  { id: 3, name: "Beach Towel", cost: 15.75 },
  { id: 4, name: "Flip Flops", cost: 8.99 },
  { id: 5, name: "Beach Umbrella", cost: 22.4 },
];

const sales: Sale[] = [
  {
    date: "2024-10-09T10:15:00.511Z",
    productId: 1, // Bikini
    price: 12.98,
    amount: 3,
  },
  {
    date: "2024-10-09T13:30:00.511Z",
    productId: 2, // Sunglasses
    price: 9.5,
    amount: 2,
  },
  {
    date: "2024-10-10T11:45:00.511Z",
    productId: 3, // Beach Towel
    price: 15.75,
    amount: 5,
  },
  {
    date: "2024-10-11T14:20:00.511Z",
    productId: 4, // Flip Flops
    price: 8.99,
    amount: 7,
  },
  {
    date: "2024-10-12T16:00:00.511Z",
    productId: 5, // Beach Umbrella
    price: 22.4,
    amount: 2,
  },
  {
    date: "2024-10-13T12:05:00.511Z",
    productId: 1, // Bikini
    price: 12.98,
    amount: 4,
  },
  {
    date: "2024-10-14T15:35:00.511Z",
    productId: 2, // Sunglasses
    price: 9.5,
    amount: 1,
  },
  {
    date: "2024-10-14T17:50:00.511Z",
    productId: 3, // Beach Towel
    price: 15.75,
    amount: 3,
  },
];

export function getProducts() {
  return products;
}

export function getSales() {
  return sales;
}

export function getTotalSalesByProducts() {
  const salesByProduct: { [key: number]: SalesData } = {};

  // Agrupa as vendas por produto
  sales.forEach((sale) => {
    const product = products.find((p) => p.id === sale.productId);
    const totalSales = sale.amount * sale.price;

    if (!product) {
      return;
    }

    // Se o produto já estiver no objeto, soma as quantidades e o valor total
    if (salesByProduct[product.id]) {
      salesByProduct[product.id].amount += sale.amount;
      salesByProduct[product.id].totalSales += totalSales;
    } else {
      // Se o produto não estiver no objeto, cria um novo item
      salesByProduct[product.id] = {
        productId: product.id,
        product: product.name,
        amount: sale.amount,
        totalSales: totalSales,
      };
    }
  });

  // Converte o objeto para um array e calcula o total geral
  const salesData = Object.values(salesByProduct).map((item) => ({
    ...item,
    saleTotal: item.totalSales.toFixed(2), // Formata o total de vendas para 2 casas decimais
  }));

  const total = salesData
    .reduce((acc, item) => acc + parseFloat(item.saleTotal), 0)
    .toFixed(2);

  return { salesData, total };
}
