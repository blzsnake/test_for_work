export default function createOrderObject(values = {}) {
  console.log('values', values)
  return {
    region: process.env.REGION,
    source: 'profile',
    order_data: {
      order: {
        id: values.id,
        bundle: {
          ...(values.webData && values.webData.title ? { title: values.webData.title } : {}),
          price: values.price,
        },
      },
      client: {
        id: values.client_id,
        phone: values.phone,
        name: values.name,
      },
    },
    price: values.price,
    bundle_id: Number(values.bundleId),
    currency_id: Number(values.currencyId),
    vat: values.vat || 21,
  };
}
